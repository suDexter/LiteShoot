(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discover/discover"],{"33ea":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isCard:!0,dataList:{},modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null,current:0,swiperCurrent:0,tabsHeight:0,dx:0,loadStatus:["loadmore","loadmore","loadmore","loadmore"]}},onLoad:function(){this.DBoutall()},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),500)},methods:{IsCard:function(t){this.isCard=t.detail.value},getOrderList:function(t){var e=0;for(e=0;e<this.dataList.length;e++){var n=this.$u.random(e,e),i=JSON.parse(JSON.stringify(this.dataList[n]));i.id=this.$u.guid(),this.orderList[t].push(i)}this.loadStatus.splice(this.current,1,"loadmore")},DBoutall:function(){var t=this;this.$u.get("https://koiii.xyz/php/discover_show.php",{}).then((function(e){t.dataList=e})),console.log("DBoutall ok")},getheadUrl:function(t){return"https://koiii.xyz/user/"+t+"/head.jpg"},get01imgUrl:function(t){return"https://koiii.xyz/user/"+t+"/pic01.jpg"}}};e.default=n}).call(this,n("543d")["default"])},4101:function(t,e,n){"use strict";(function(t){n("0e92");i(n("66fd"));var e=i(n("7678"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},7678:function(t,e,n){"use strict";n.r(e);var i=n("7c3f"),r=n("ede6");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var o,a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},"7c3f":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uAvatar:function(){return n.e("uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"0eac"))},uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"0639"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.dataList,(function(e,n){var i=t.__get_orig(e),r=t.getheadUrl(e.uid),u=t.get01imgUrl(e.uid);return{$orig:i,m0:r,m1:u}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},u=[]},ede6:function(t,e,n){"use strict";n.r(e);var i=n("33ea"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a}},[["4101","common/runtime","common/vendor"]]]);