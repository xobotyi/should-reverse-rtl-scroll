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
  if (!document) {
    return false;
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
  parentStyle.width = parentStyle.height = '100px';
  parentStyle.left = parentStyle.top = '-999px';
  parentStyle.overflow = 'scroll';
  parentStyle.direction = 'rtl';

  childrenStyle.display = 'block';
  childrenStyle.position = 'relative';
  childrenStyle.width = childrenStyle.height = '200px';

  parent.insertBefore(children, null);
  document.body.insertBefore(parent, null);

  // if parent element still has no width it means DOM is not ready yet
  /* istanbul ignore next */
  if (parent.clientWidth === 0) {
    // remove the element and skip the caching
    document.body.removeChild(parent);
    return;
  }

  // some browsers (chrome) will behave as there is no RTL at all, others (IE, FF)
  // makes scrollLeft a negative value while RTL, for them 0 equals rightmost position,
  // so we can check if scrollLeft is 0 and ensure that it accepts negative values
  shouldReverseRtlScroll.__cache = parent.scrollLeft === 0 && (parent.scrollLeft = -50) === parent.scrollLeft;

  document.body.removeChild(parent);

  return shouldReverseRtlScroll.__cache;
};
