(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,r){"use strict";var o=r(0),n=r(153),f=r(154),d=r(155),l=r.n(d),c=r(156),m=r.n(c),h=r(157);o.a.use(h.default),o.a.use(m.a),o.a.use(f.a),o.a.use(n.a),o.a.component("v-select",l.a),o.a.config.ignoredElements=["erasure-content"]},111:function(e,t,r){"use strict";var o=r(158);t.a=function(e){var t=e.store;new o.a({key:"stef-s-victoria-s-place-on-the-internet",storage:window.localStorage}).plugin(t)}},113:function(e,t,r){"use strict";r(24);var o=["stef.kors@gmail.com","doukavictoria@gmail.com"];t.a=function(e){var t=e.$auth;if(t.loggedIn)return o.includes(t.user.email)?void 0:(console.log("❌ user not authorized"),void t.logout())}},139:function(e,t,r){var content=r(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("3fa222de",content,!0,{sourceMap:!1})},140:function(e,t,r){var content=r(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("5c346d62",content,!0,{sourceMap:!1})},160:function(e,t,r){"use strict";var o={name:"13D"},n=(r(198),r(38)),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"13D"},[t("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},162:function(e,t,r){"use strict";r(205);var o=r(38),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("nuxt")}),[],!1,null,null,null);t.a=component.exports},164:function(e,t,r){r(165),e.exports=r(166)},198:function(e,t,r){"use strict";r(139)},199:function(e,t,r){var o=r(50),n=r(200),f=r(201),d=r(202),l=r(203),c=r(204),m=o(!1),h=n(f),w=n(d),v=n(l),y=n(c);m.push([e.i,'.lang{position:absolute;top:1rem;left:1rem;display:grid;grid-template-columns:1.5rem;grid-template-rows:1.5rem 1.5rem 1.5rem;grid-gap:.4rem;gap:.4rem;z-index:999}.lang a{font-size:.8rem;color:#fff;text-decoration:none;border-radius:100%;display:block;text-align:center;padding:.2rem}.lang a.nuxt-link-active{background-color:#a33a42}*{box-sizing:border-box}@font-face{font-family:"Gopher";src:url('+h+') format("woff2"),url('+w+') format("woff"),url('+v+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"Gecko";src:url('+y+') format("truetype");font-weight:500;font-style:normal}body,html{margin:0;padding:0}body{background-color:#2e2824;color:#d0a770;font-family:"Gopher";min-height:100vh}body #lang-el{font-family:"Gecko";font-weight:400;letter-spacing:.097em;font-size:23px}body #lang-el .lang a{align-self:center}video{width:100%;height:99vh}p{margin:0}.box,p{text-align:center}.box{border:1px solid;margin-bottom:.5rem;background-color:#d0a770;color:#2e2824}#header{grid-area:header;text-align:center;align-self:start}#from{grid-area:from;justify-self:center;align-self:end;-webkit-animation:shake 10s infinite;animation:shake 10s infinite}#video{grid-area:header/from/footer/to;-o-object-fit:scale-down;object-fit:scale-down;z-index:-1}#to{grid-area:to;text-align:left;justify-self:center;-webkit-animation:shake 10s infinite;animation:shake 10s infinite}#footer,#to{align-self:end}#footer{grid-area:footer;text-align:center}#card{margin:0;display:grid;width:100%;height:99vh;grid-template-areas:"header header header header header header" "from from from to to to" "footer footer footer footer footer footer"}@-webkit-keyframes shake{0%,to{transform:rotate(2deg)}50%{transform:rotate(-2deg)}}@keyframes shake{0%,to{transform:rotate(2deg)}50%{transform:rotate(-2deg)}}@media only screen and (max-width:600px){.lang{grid-area:lang;grid-template-rows:1.5rem;grid-template-columns:1.5rem 1.5rem 1.5rem;position:relative;justify-self:center;padding:0;margin:0}video{width:100%;height:100%}#card{margin:0;display:grid;width:100%;height:99vh;grid-template-areas:"lang" "header" "video" "to" "footer";grid-template-rows:.5fr 1fr 1fr 1fr 1fr}#header{align-self:end}#from{display:none}#video{grid-area:video;-o-object-fit:scale-down;object-fit:scale-down;z-index:-1}#to{grid-area:to;align-self:center}#footer{align-self:start}#image-left,#image-right{display:none}}@media only screen and (min-width:600px){video{width:100%;height:100%}#card{margin:0;display:grid;width:100%;height:99vh;grid-template-areas:"header" "from" "video" "to" "footer";grid-template-rows:1fr 1fr 1fr 1fr 1fr}#header{align-self:end}#from{grid-area:from;align-self:center}#video{grid-area:video;-o-object-fit:scale-down;object-fit:scale-down;z-index:-1}#to{grid-area:to;text-align:left;align-self:center}#footer{align-self:start}#image-left,#image-right{display:none}}@media only screen and (min-width:768px){.lang{left:3rem}#image-right{grid-area:br}#image-left,#image-right{display:grid;margin:0;background-image:url(/images/scallop.png);background-repeat:repeat-y;background-size:3vw;filter:hue-rotate(70deg)}#image-left{grid-area:bl;transform:scaleX(-1)}video{width:100%;height:60vh}#card{margin:0;display:grid;width:100%;height:99vh;grid-template-areas:"br header bl" "br from bl" "br video bl" "br to bl" "br footer bl";grid-template-rows:1fr 1fr 1fr 1fr 1fr;grid-template-columns:.5fr 1fr .5fr}#header{align-self:start}#from{grid-area:from;justify-self:center}#video{grid-area:video;-o-object-fit:scale-down;object-fit:scale-down;z-index:-1}#to{grid-area:to;text-align:left}#footer{align-self:end}}@media only screen and (min-width:992px){.lang{left:1rem}video{width:100%;height:99vh}#header{grid-area:header;text-align:center;align-self:start}#from{grid-area:from;justify-self:left;align-self:end;-webkit-animation:shake 10s infinite;animation:shake 10s infinite}#video{grid-area:header/from/footer/to;-o-object-fit:scale-down;object-fit:scale-down;z-index:-1}#to{grid-area:to;text-align:left;justify-self:right;-webkit-animation:shake 10s infinite;animation:shake 10s infinite}#footer,#to{align-self:end}#footer{grid-area:footer}#card{margin:0;display:grid;width:100%;height:99vh;grid-template-areas:"header header header header header header" ". from from to to ." "footer footer footer footer footer footer";grid-template-columns:.5fr 1fr 1fr 1fr 1fr .5fr;grid-template-rows:1fr 1fr 1fr}#image-left,#image-right{display:none}}@media only screen and (min-width:1200px){video{width:100%;height:99vh}#header{grid-area:header;text-align:center;align-self:start}#from{grid-area:from;justify-self:left;align-self:end;-webkit-animation:shake 10s infinite;animation:shake 10s infinite}#video{grid-area:header/from/footer/to;-o-object-fit:scale-down;object-fit:scale-down;z-index:-1}#to{grid-area:to;text-align:left;justify-self:right;-webkit-animation:shake 10s infinite;animation:shake 10s infinite}#footer,#to{align-self:end}#footer{grid-area:footer;text-align:center}#card{margin:0;display:grid;width:100%;height:99vh;grid-template-areas:"header header header header header header" ". from from to to ." "footer footer footer footer footer footer";grid-template-columns:.5fr 1fr 1fr 1fr 1fr .5fr}#image-left,#image-right{display:none}}',""]),e.exports=m},201:function(e,t,r){e.exports=r.p+"fonts/Gopher-MediumItalic.1bd457c.woff2"},202:function(e,t,r){e.exports=r.p+"fonts/Gopher-MediumItalic.b31a888.woff"},203:function(e,t,r){e.exports=r.p+"fonts/Gopher-MediumItalic.013ec11.ttf"},204:function(e,t,r){e.exports=r.p+"fonts/Gecko.33c4562.ttf"},205:function(e,t,r){"use strict";r(140)},206:function(e,t,r){var o=r(50)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap);"]),o.push([e.i,":root{--primary:#0033a1;--secondary:#d9d9d9;--bg-color:#fff;--font-color:#1a1a1a}*{box-sizing:border-box}body{margin:0}",""]),e.exports=o},207:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return n}));var o=function(){return{shop:{products:[]}}},n={addShopItem:function(e,t){e.shop.products.push(t)},removeShopItem:function(e,t){e.shop.products.splice(t,1)}}}},[[164,6,1,7]]]);