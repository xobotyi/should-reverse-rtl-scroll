<div align="center">
    <H1>@xobotyi/should-reverse-rtl-scroll</H1>
    <p>A tool detecting if RTL scroll value should be negative.</p>
    <p>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/travis/xobotyi/scrollbar-width" alt="Build status"/>
        </a>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/npm/v/@xobotyi/should-reverse-rtl-scroll" alt="NPM version"/>
        </a>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/npm/dw/@xobotyi/should-reverse-rtl-scroll" alt="NPM weekly downloads"/>
        </a>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/npm/license/@xobotyi/should-reverse-rtl-scroll" alt="License"/>
        </a>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/npm/types/@xobotyi/should-reverse-rtl-scroll" alt="Types definition"/>
        </a>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/codacy/grade/2972fbcd6322488e8c7214ece48fd320" alt="Codacy Code Grade"/>
        </a>
        <a href="https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll">
            <img src="https://flat.badgen.net/codacy/coverage/2972fbcd6322488e8c7214ece48fd320" alt="Tests LOC"/>
        </a>
    </p>
    <p>×&nbsp;<strong><a href="https://codesandbox.io/s/xobotyishould-reverse-rtl-scroll-live-example-rhqgl">LIVE EXAMPLE</a></strong>&nbsp;×</p>
</div>

---

<div align="center">❤️Please consider starring this project to show your love and support.🙌</div>

---

Working with RTL horizontal scrolling can be a bit frustrating because RTL scroll handling differs between browsers.  
Chrome `scrollLeft` value acts like there is no RTL al all, while FireFox and IE make `scrollLeft` a negative number.

This tool gives you an answer should you reverse RTL scroll value in certain browser or not.

## Installation
```bash
npm install @xobotyi/should-reverse-rtl-scroll
# or via yarn
yarn add @xobotyi/should-reverse-rtl-scroll
```
_INSTALLATION NOTE:_  
This lib is written in TypeScript and delivered with both, transpiled and untranspiled ES versions:

- `main` field of package.json is pointing to transpiled ES5-compatible version with CJS modules resolution;
- `module` field is pointing to transpiled ES5-compatible version with ES modules resolution;
- `esnext` field is pointing to the ESnext version with ES modules resolution;


**OR**  
you can add it directly to your site via the `<script />` with help of [UNPKG](https://unpkg.com):
```html
<script src="https://unpkg.com/@xobotyi/should-reverse-rtl-scroll/dist/index.min.js"/>
```
After that you will be able to use the function as `xobotyi.shouldReverseRtlScroll()`

## Usage

```javascript
import { shouldReverseRtlScroll } from "@xobotyi/should-reverse-rtl-scroll";

shouldReverseRtlScroll(); // true for FireFox, IE and false for Chrome or SSR
// or undefined if to call it too early [read below]
```

This function caches the value to bring the less possible performance impact. In case you want to get re-calculated value - pass `true` as first call parameter.

>**NOTE:**  
>Function will return `undefined` in case being called before the DOM is ready.


## Related projects

- [react-scrollbars-custom](https://www.npmjs.com/package/react-scrollbars-custom) &mdash; The best React custom scrollbars component. Allows you to customise scrollbars as you like it, crossbrowser!
- [zoom-level](https://www.npmjs.com/package/zoom-level) &mdash; A comprehensive cross-browser package that allow you to determine page's and element's zoom level.
- [@xobotyi/scrollbar-width](https://www.npmjs.com/package/@xobotyi/scrollbar-width) &mdash; A tool to get browser's scrollbars width.
