(this.webpackJsonplocations=this.webpackJsonplocations||[]).push([[0],{17:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t),t.default=e.p+"static/media/brazil.1b30660a.jpeg"},22:function(n,t,e){"use strict";e.r(t),t.default=e.p+"static/media/africa.59730996.jpeg"},23:function(n,t,e){"use strict";e.r(t),t.default=e.p+"static/media/england.a2369731.jpeg"},24:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var i,a,r,o,s,c,l,u,p,f=e(0),d=e.n(f),h=e(9),m=e.n(h),b=e(4),x=(e(17),e(2)),v=e(3),j="\npointer-events: none;\n-webkit-touch-callout: none; /* iOS Safari */\n-webkit-user-select: none; /* Safari */\n-khtml-user-select: none; /* Konqueror HTML */\n-moz-user-select: none; /* Old versions of Firefox */\n-ms-user-select: none; /* Internet Explorer/Edge */\nuser-select: none;\n",g=v.a.img(i||(i=Object(x.a)(["\n  margin-top: var(--marginTop);\n  transform: ",";\n  transition: 0.5s all linear;\n  user-select: none;\n  width: 100vw;\n  ","\n"])),(function(n){return n.styleTransform}),j),w=v.a.div(a||(a=Object(x.a)(["\n  background: #f97f0f;\n  border-radius: var(--pointerSize);\n  height: var(--pointerSize);\n  left: calc(50vw - (var(--pointerSize) / 2));\n  position: absolute;\n  top: calc(var(--marginTop) + (65.957333333333333vw / 2) - (var(--pointerSize) / 2));\n  transform: ",";\n  transition: ",";\n  width: var(--pointerSize);\n  ","\n"])),(function(n){return n.active?"scale(1)":"scale(0)"}),(function(n){return n.active?"0.25s all linear":"none"}),j),O=v.a.div(r||(r=Object(x.a)(["\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-name: ",";\n  background: #f9800f17;\n  border-radius: var(--pointerSize);\n  display: ",";\n  height: var(--pointerSize);\n  position: absolute;\n  transform: scale(1);\n  width: var(--pointerSize);\n"])),(function(n){return n.last?"lastPointer":"firstPointer"}),(function(n){return n.active?"initial":"none"})),S=e.p+"static/media/world.3a2105a4.svg",T=e(1),z=function(n){var t=n.styleTransform,e=n.active;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(g,{src:S,styleTransform:t,alt:"world map"}),Object(T.jsxs)(w,{active:e,children:[Object(T.jsx)(O,{active:e}),Object(T.jsx)(O,{active:e,last:!0})]})]})},y="\n  transition: 0.5s all;\n  position: absolute;\n  margin: 0px;\n  transform: translateX(0px);\n  font-family: sans-serif;\n",X=v.a.section(o||(o=Object(x.a)(["\n  bottom: 4px;\n  height: 472px;\n  max-height: 65vh;\n  padding-left: 23px;\n  position: absolute;\n  transition: 1s all;\n  width: ",";\n  transform: ",";\n"])),(function(n){return n.width?"calc(".concat(n.width," * (329px + 12px) + 100vw)"):"auto"}),(function(n){return n.position?"translateX(-".concat(341*n.position,"px)"):"translateX(0px)"})),k=v.a.div(s||(s=Object(x.a)(["\n  background-color: transparent;\n  border-radius: 12px;\n  color: white;\n  float: left;\n  height: 433px;\n  margin-right: 12px;\n  max-height: 60vh;\n  max-width: calc(100vw - 46px);\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  width: 329px;\n  &:after {\n    background: #00000026;\n    content: '';\n    height: 100%;\n    position: absolute;\n    width: 100%;\n  }\n"]))),P=v.a.img(c||(c=Object(x.a)(["\n  ","\n  left: 0px;\n  max-height: 60vh;\n  max-width: calc(100vw - 46px);\n  min-height: 433px;\n  min-width: 329px;\n  top: 0px;\n  transform: ",";\n"])),y,(function(n){return n.selected?"scale(1)":"scale(1.2)"})),E=v.a.h1(l||(l=Object(x.a)(["\n  ","\n  bottom: 45px;\n  font-size: 39px;\n  left: 25px;\n  text-transform: uppercase;\n  ",";\n  ",";\n  z-index: 2;\n"])),y,(function(n){return"left"===n.side?"transform: translateX(-100px)":""}),(function(n){return"right"===n.side?"transform: translateX(100px)":""})),F=v.a.p(u||(u=Object(x.a)(["\n  ","\n  bottom: 23px;\n  font-size: 18px;\n  left: 28px;\n  ",";\n  ",";\n  z-index: 2;\n"])),y,(function(n){return"left"===n.side?"transform: translateX(-50px)":""}),(function(n){return"right"===n.side?"transform: translateX(50px)":""})),C=function(n){var t=n.data,e=n.position,i=n.swipeCarrousel,a=0,r=0,o=Object(f.useState)(""),s=Object(b.a)(o,2),c=s[0],l=s[1],u=function(){var n=!1;r>a&&e>0&&(i(e-1),n=!0,l("left")),r<a&&e<t.length-1&&(i(e+1),n=!0,l("right")),n&&setTimeout((function(){l("")}),250)};return Object(T.jsx)(X,{width:t.length,position:e,onTouchStart:function(n){a=n.changedTouches[0].screenX},onTouchEnd:function(n){r=n.changedTouches[0].screenX,u()},onMouseDown:function(n){a=n.screenX},onMouseUp:function(n){r=n.screenX,u()},children:function(){var n=[];return t.forEach((function(t,i){var a=t.country,r=t.imageUrl,o=void 0===r?{default:""}:r,s=t.trips;n.push(Object(T.jsxs)(k,{selected:e===i,children:[Object(T.jsx)(P,{src:o.default,selected:e===i,alt:"".concat(a," country wallpaper")}),Object(T.jsx)(E,{side:c,children:a}),Object(T.jsxs)(F,{side:c,children:[s," ","trips"]})]},a))})),n}()})},U=v.a.main(p||(p=Object(x.a)(["\n  background-color: #e8eaee;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n"]))),M=function(){var n=[{country:"Brazil",imageUrl:e(21),mapPosition:"translate(16vw, -16.7vw)",trips:5},{country:"South Africa",imageUrl:e(22),mapPosition:"translate(-3.6vw, -21.7vw)",trips:10},{country:"England",imageUrl:e(23),mapPosition:"translate(3.4vw, 4.2vw)",trips:18}],t=Object(f.useState)(0),i=Object(b.a)(t,2),a=i[0],r=i[1],o=Object(f.useState)(6),s=Object(b.a)(o,2),c=s[0],l=s[1],u=Object(f.useState)(!0),p=Object(b.a)(u,2),d=p[0],h=p[1];return Object(T.jsxs)(U,{children:[Object(T.jsx)(z,{active:d,styleTransform:"scale(".concat(c,") ").concat(n[a].mapPosition)}),Object(T.jsx)(C,{data:n,position:a,swipeCarrousel:function(n){r(n),l(3),h(!1),setTimeout((function(){l(6),setTimeout((function(){h(!0)}),750)}),250)}})]})},B=(e(24),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,26)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),i(n),a(n),r(n),o(n)}))});m.a.render(Object(T.jsx)(d.a.StrictMode,{children:Object(T.jsx)(M,{})}),document.getElementById("root")),B()}},[[25,1,2]]]);
//# sourceMappingURL=main.a5f4e9e0.chunk.js.map