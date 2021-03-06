export interface IShouldReverseRtlScroll {
  (force?: boolean): boolean | undefined;

  __cache?: boolean;
}

/**
 * @description Detects the need of horizontal scroll reverse during the RTL display.
 */
export const shouldReverseRtlScroll: IShouldReverseRtlScroll = (force?: boolean): boolean | undefined => {
  // safety check for SSR
  /* istanbul ignore next */
  if (typeof document === 'undefined') {
    return false;
  }

  // one more safety check. If document has no body element that means script tag been
  // included before the </body> tag, which in general means that DOM is not ready yet.
  // Furthermore check the document's ready state in case it is presented [IE9+]
  // any interactivity [not 'loading'] will be okay for us
  /* istanbul ignore next */
  if (!document.body || (document.readyState && document.readyState === 'loading')) {
    return undefined;
  }

  // return cached value if we have some
  if (force !== true && typeof shouldReverseRtlScroll.__cache === 'boolean') {
    return shouldReverseRtlScroll.__cache;
  }

  const parent = document.createElement('div');
  const children = document.createElement('div');
  const parentStyle = parent.style;
  const childrenStyle = children.style;

  // for the case of weird css rules where div will not be a block element.
  parentStyle.display = 'block';
  parentStyle.position = 'absolute';
  parentStyle.width = '100px';
  parentStyle.height = '100px';
  parentStyle.left = '-999px';
  parentStyle.top = '-999px';
  parentStyle.overflow = 'scroll';
  parentStyle.direction = 'rtl';

  childrenStyle.display = 'block';
  childrenStyle.position = 'relative';
  childrenStyle.width = '200px';
  childrenStyle.height = '200px';

  parent.insertBefore(children, null);
  document.body.insertBefore(parent, null);

  // if parent element still has no width it means DOM is not ready yet
  /* istanbul ignore next */
  if (parent.clientWidth === 0) {
    // remove the element and skip the caching
    document.body.removeChild(parent);
    return undefined;
  }

  // some browsers (chrome) will behave as there is no RTL at all, others (IE, FF)
  // makes scrollLeft a negative value while RTL, for them 0 equals rightmost position,
  // so we can check if scrollLeft is 0 and ensure that it accepts negative values
  shouldReverseRtlScroll.__cache = parent.scrollLeft === 0 && (parent.scrollLeft = -50) === parent.scrollLeft;

  document.body.removeChild(parent);

  return shouldReverseRtlScroll.__cache;
};
