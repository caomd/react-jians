import { createGlobalStyle } from 'styled-components';
const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1540736747031'); /* IE9*/
  src: url('./iconfont.eot?t=1540736747031#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1540736747031') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1540736747031#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-qianbipencil84:before { content: "\e6a5"; }

.icon-arrow-right-copy-copy-copy:before { content: "\e604"; }

.icon-spinner:before { content: "\e705"; }

.icon-Aa:before { content: "\e636"; }

.icon-magnifier:before { content: "\e64d"; }
`;
export { IconStyle };











