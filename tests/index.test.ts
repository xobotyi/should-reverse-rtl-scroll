import { shouldReverseRtlScroll } from '../src/index';

const isFirefox = /firefox|iceweasel|fxios/i.test(navigator.userAgent.toLowerCase());

describe('shouldReverseRtlScroll', () => {
  beforeEach(() => {
    shouldReverseRtlScroll.__cache = undefined;
  });

  it('should be defined', () => {
    expect(shouldReverseRtlScroll).toBeDefined();
  });

  it(`should return proper boolean value [${isFirefox ? 'true for firefox' : 'false for chrome'}]`, () => {
    const res = shouldReverseRtlScroll();

    expect(typeof res).toBe('boolean');
    expect(res).toBe(!!isFirefox);
  });

  it('should return cached value if presented', () => {
    shouldReverseRtlScroll.__cache = true;
    expect(shouldReverseRtlScroll()).toBe(true);
    shouldReverseRtlScroll.__cache = false;
    expect(shouldReverseRtlScroll()).toBe(false);
    shouldReverseRtlScroll.__cache = true;
    expect(shouldReverseRtlScroll()).toBe(true);
    shouldReverseRtlScroll.__cache = false;
    expect(shouldReverseRtlScroll()).toBe(false);
  });

  it('should recalculate and cache value if true passed as first element', () => {
    shouldReverseRtlScroll.__cache = !isFirefox;
    expect(shouldReverseRtlScroll(true)).toBe(!!isFirefox);
  });
});
