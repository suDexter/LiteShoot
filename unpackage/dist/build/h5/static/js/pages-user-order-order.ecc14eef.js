(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-order"],{3900:function(t,i,e){"use strict";e.r(i);var s=e("dc4f"),a=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(i,t,(function(){return s[t]}))}(r);i["default"]=a.a},"408a":function(t,i,e){var s=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},6371:function(t,i,e){"use strict";e.r(i);var s=e("9e26"),a=e("3900");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("8ca1"),e("e5af");var n,o=e("f0c5"),c=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"2c319d43",null,!1,s["a"],n);i["default"]=c.exports},"6d69":function(t,i,e){var s=e("ef5c");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("2f9529cd",s,!0,{sourceMap:!1,shadowMode:!1})},"8ca1":function(t,i,e){"use strict";var s=e("6d69"),a=e.n(s);a.a},"97d6":function(t,i,e){var s=e("e623");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("66a7f5d0",s,!0,{sourceMap:!1,shadowMode:!1})},"9e26":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return s}));var s={uTabsSwiper:e("a21f").default,uIcon:e("0b7f").default,uLoadmore:e("a1c2").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"u-tabs-box"},[e("u-tabs-swiper",{ref:"tabs",attrs:{activeColor:"#f29100",list:t.list,current:t.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}})],1),e("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperCurrent},on:{transition:function(i){arguments[0]=i=t.$handleEvent(i),t.transition.apply(void 0,arguments)},animationfinish:function(i){arguments[0]=i=t.$handleEvent(i),t.animationfinish.apply(void 0,arguments)}}},[e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.reachBottom.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"page-box"},[t._l(t.orderList[0],(function(i,s){return e("v-uni-view",{key:i.id,staticClass:"order"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"left"},[e("u-icon",{attrs:{name:"home",size:30,color:"rgb(94,94,94)"}}),e("v-uni-view",{staticClass:"store"},[t._v(t._s(i.store))]),e("u-icon",{attrs:{name:"arrow-right",color:"rgb(203,203,203)",size:26}})],1),e("v-uni-view",{staticClass:"right"},[t._v(t._s(i.deal))])],1),t._l(i.goodsList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:i.goodsUrl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title u-line-2"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"type"},[t._v(t._s(i.type))]),e("v-uni-view",{staticClass:"delivery-time"},[t._v("发货时间 "+t._s(i.deliveryTime))])],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.priceInt(i.price))),e("v-uni-text",{staticClass:"decimal"},[t._v("."+t._s(t.priceDecimal(i.price)))])],1),e("v-uni-view",{staticClass:"number"},[t._v("x"+t._s(i.number))])],1)],1)})),e("v-uni-view",{staticClass:"total"},[t._v("共"+t._s(t.totalNum(i.goodsList))+"件商品 合计:"),e("v-uni-text",{staticClass:"total-price"},[t._v("￥"+t._s(t.priceInt(t.totalPrice(i.goodsList)))+"."),e("v-uni-text",{staticClass:"decimal"},[t._v(t._s(t.priceDecimal(t.totalPrice(i.goodsList))))])],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"more"},[e("u-icon",{attrs:{name:"more-dot-fill",color:"rgb(203,203,203)"}})],1),e("v-uni-view",{staticClass:"logistics btn"},[t._v("查看物流")]),e("v-uni-view",{staticClass:"exchange btn"},[t._v("卖了换钱")]),e("v-uni-view",{staticClass:"evaluate btn"},[t._v("评价")])],1)],2)})),e("u-loadmore",{attrs:{status:t.loadStatus[0],bgColor:"#f2f2f2"}})],2)],1)],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.reachBottom.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"page-box"},[t._l(t.orderList[1],(function(i,s){return e("v-uni-view",{key:i.id,staticClass:"order"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"left"},[e("u-icon",{attrs:{name:"home",size:30,color:"rgb(94,94,94)"}}),e("v-uni-view",{staticClass:"store"},[t._v(t._s(i.store))]),e("u-icon",{attrs:{name:"arrow-right",color:"rgb(203,203,203)",size:26}})],1),e("v-uni-view",{staticClass:"right"},[t._v(t._s(i.deal))])],1),t._l(i.goodsList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:i.goodsUrl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title u-line-2"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"type"},[t._v(t._s(i.type))]),e("v-uni-view",{staticClass:"delivery-time"},[t._v("发货时间 "+t._s(i.deliveryTime))])],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.priceInt(i.price))),e("v-uni-text",{staticClass:"decimal"},[t._v("."+t._s(t.priceDecimal(i.price)))])],1),e("v-uni-view",{staticClass:"number"},[t._v("x"+t._s(i.number))])],1)],1)})),e("v-uni-view",{staticClass:"total"},[t._v("共"+t._s(t.totalNum(i.goodsList))+"件商品 合计:"),e("v-uni-text",{staticClass:"total-price"},[t._v("￥"+t._s(t.priceInt(t.totalPrice(i.goodsList)))+"."),e("v-uni-text",{staticClass:"decimal"},[t._v(t._s(t.priceDecimal(t.totalPrice(i.goodsList))))])],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"more"},[e("u-icon",{attrs:{name:"more-dot-fill",color:"rgb(203,203,203)"}})],1),e("v-uni-view",{staticClass:"logistics btn"},[t._v("查看物流")]),e("v-uni-view",{staticClass:"exchange btn"},[t._v("卖了换钱")]),e("v-uni-view",{staticClass:"evaluate btn"},[t._v("评价")])],1)],2)})),e("u-loadmore",{attrs:{status:t.loadStatus[1],bgColor:"#f2f2f2"}})],2)],1)],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"page-box"},[e("v-uni-view",[e("v-uni-view",{staticClass:"centre"},[e("v-uni-image",{attrs:{src:"https://cdn.uviewui.com/uview/template/taobao-order.png",mode:""}}),e("v-uni-view",{staticClass:"explain"},[t._v("您还没有相关的订单"),e("v-uni-view",{staticClass:"tips"},[t._v("可以去看看有那些想买的")])],1),e("v-uni-view",{staticClass:"btn"},[t._v("随便逛逛")])],1)],1)],1)],1)],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.reachBottom.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"page-box"},[t._l(t.orderList[3],(function(i,s){return e("v-uni-view",{key:i.id,staticClass:"order"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"left"},[e("u-icon",{attrs:{name:"home",size:30,color:"rgb(94,94,94)"}}),e("v-uni-view",{staticClass:"store"},[t._v(t._s(i.store))]),e("u-icon",{attrs:{name:"arrow-right",color:"rgb(203,203,203)",size:26}})],1),e("v-uni-view",{staticClass:"right"},[t._v(t._s(i.deal))])],1),t._l(i.goodsList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:i.goodsUrl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title u-line-2"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"type"},[t._v(t._s(i.type))]),e("v-uni-view",{staticClass:"delivery-time"},[t._v("发货时间 "+t._s(i.deliveryTime))])],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.priceInt(i.price))),e("v-uni-text",{staticClass:"decimal"},[t._v("."+t._s(t.priceDecimal(i.price)))])],1),e("v-uni-view",{staticClass:"number"},[t._v("x"+t._s(i.number))])],1)],1)})),e("v-uni-view",{staticClass:"total"},[t._v("共"+t._s(t.totalNum(i.goodsList))+"件商品 合计:"),e("v-uni-text",{staticClass:"total-price"},[t._v("￥"+t._s(t.priceInt(t.totalPrice(i.goodsList)))+"."),e("v-uni-text",{staticClass:"decimal"},[t._v(t._s(t.priceDecimal(t.totalPrice(i.goodsList))))])],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"more"},[e("u-icon",{attrs:{name:"more-dot-fill",color:"rgb(203,203,203)"}})],1),e("v-uni-view",{staticClass:"logistics btn"},[t._v("查看物流")]),e("v-uni-view",{staticClass:"exchange btn"},[t._v("卖了换钱")]),e("v-uni-view",{staticClass:"evaluate btn"},[t._v("评价")])],1)],2)})),e("u-loadmore",{attrs:{status:t.loadStatus[3],bgColor:"#f2f2f2"}})],2)],1)],1)],1)],1)],1)},r=[]},b680:function(t,i,e){"use strict";var s=e("23e7"),a=e("a691"),r=e("408a"),n=e("1148"),o=e("d039"),c=1..toFixed,l=Math.floor,d=function(t,i,e){return 0===i?e:i%2===1?d(t,i-1,e*t):d(t*t,i/2,e)},u=function(t){var i=0,e=t;while(e>=4096)i+=12,e/=4096;while(e>=2)i+=1,e/=2;return i},v=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));s({target:"Number",proto:!0,forced:v},{toFixed:function(t){var i,e,s,o,c=r(this),v=a(t),f=[0,0,0,0,0,0],p="",m="0",g=function(t,i){var e=-1,s=i;while(++e<6)s+=t*f[e],f[e]=s%1e7,s=l(s/1e7)},w=function(t){var i=6,e=0;while(--i>=0)e+=f[i],f[i]=l(e/t),e=e%t*1e7},b=function(){var t=6,i="";while(--t>=0)if(""!==i||0===t||0!==f[t]){var e=String(f[t]);i=""===i?e:i+n.call("0",7-e.length)+e}return i};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(i=u(c*d(2,69,1))-69,e=i<0?c*d(2,-i,1):c/d(2,i,1),e*=4503599627370496,i=52-i,i>0){g(0,e),s=v;while(s>=7)g(1e7,0),s-=7;g(d(10,s,1),0),s=i-1;while(s>=23)w(1<<23),s-=23;w(1<<s),g(1,1),w(2),m=b()}else g(0,e),g(1<<-i,0),m=b()+n.call("0",v);return v>0?(o=m.length,m=p+(o<=v?"0."+n.call("0",v-o)+m:m.slice(0,o-v)+"."+m.slice(o-v))):m=p+m,m}})},dc4f:function(t,i,e){"use strict";e("d81d"),e("fb6a"),e("a434"),e("b680"),e("acd8"),e("e25e"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{orderList:[[],[],[],[]],dataList:[{id:1,store:"夏日流星限定贩卖",deal:"交易成功",goodsList:[{goodsUrl:"//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg",title:"【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",type:"灰色;M",deliveryTime:"付款后30天内发货",price:"348.58",number:2},{goodsUrl:"//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",title:"【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款",type:"45cm;S",deliveryTime:"付款后30天内发货",price:"135.00",number:1}]},{id:2,store:"江南皮革厂",deal:"交易失败",goodsList:[{goodsUrl:"//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg",title:"【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",type:"粉色;M",deliveryTime:"付款后7天内发货",price:"128.05",number:1}]},{id:3,store:"三星旗舰店",deal:"交易失败",goodsList:[{goodsUrl:"//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",title:"三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机",type:"4K，广色域",deliveryTime:"保质5年",price:"1998",number:3},{goodsUrl:"//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg",title:"美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)",type:"容量大，速冻",deliveryTime:"保质5年",price:"2354",number:1}]},{id:4,store:"三星旗舰店",deal:"交易失败",goodsList:[{goodsUrl:"//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg",title:"法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装",type:"4K，广色域",deliveryTime:"珍藏10年好酒",price:"1543",number:3},{goodsUrl:"//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg",title:"蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装",type:"一打",deliveryTime:"口感好",price:"120",number:1}]},{id:5,store:"三星旗舰店",deal:"交易成功",goodsList:[{goodsUrl:"//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",title:"企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108",type:"识别效率高",deliveryTime:"使用方便",price:"451",number:9}]}],list:[{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价",count:12}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,loadStatus:["loadmore","loadmore","loadmore","loadmore"]}},onLoad:function(){this.getOrderList(0),this.getOrderList(1),this.getOrderList(3)},computed:{priceDecimal:function(){return function(t){return t!==parseInt(t)?t.slice(-2):"00"}},priceInt:function(){return function(t){return t!==parseInt(t)?t.split(".")[0]:t}}},methods:{reachBottom:function(){var t=this;2!=this.current&&(this.loadStatus.splice(this.current,1,"loading"),setTimeout((function(){t.getOrderList(t.current)}),1200))},getOrderList:function(t){for(var i=0;i<5;i++){var e=this.$u.random(0,this.dataList.length-1),s=JSON.parse(JSON.stringify(this.dataList[e]));s.id=this.$u.guid(),this.orderList[t].push(s)}this.loadStatus.splice(this.current,1,"loadmore")},totalPrice:function(t){var i=0;return t.map((function(t){i+=parseFloat(t.price)})),i.toFixed(2)},totalNum:function(t){var i=0;return t.map((function(t){i+=t.number})),i},change:function(t){this.swiperCurrent=t,this.getOrderList(t)},transition:function(t){var i=t.detail.dx;this.$refs.tabs.setDx(i)},animationfinish:function(t){var i=t.detail.current;this.$refs.tabs.setFinishCurrent(i),this.swiperCurrent=i,this.current=i}}};i.default=s},e5af:function(t,i,e){"use strict";var s=e("97d6"),a=e.n(s);a.a},e623:function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.order[data-v-2c319d43]{width:%?710?%;background-color:#fff;margin:%?20?% auto;border-radius:%?20?%;box-sizing:border-box;padding:%?20?%;font-size:%?28?%}.order .top[data-v-2c319d43]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order .top .left[data-v-2c319d43]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .top .left .store[data-v-2c319d43]{margin:0 %?10?%;font-size:%?32?%;font-weight:700}.order .top .right[data-v-2c319d43]{color:#f29100}.order .item[data-v-2c319d43]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% 0 0}.order .item .left[data-v-2c319d43]{margin-right:%?20?%}.order .item .left uni-image[data-v-2c319d43]{width:%?200?%;height:%?200?%;border-radius:%?10?%}.order .item .content .title[data-v-2c319d43]{font-size:%?28?%;line-height:%?50?%}.order .item .content .type[data-v-2c319d43]{margin:%?10?% 0;font-size:%?24?%;color:#909399}.order .item .content .delivery-time[data-v-2c319d43]{color:#e5d001;font-size:%?24?%}.order .item .right[data-v-2c319d43]{margin-left:%?10?%;padding-top:%?20?%;text-align:right}.order .item .right .decimal[data-v-2c319d43]{font-size:%?24?%;margin-top:%?4?%}.order .item .right .number[data-v-2c319d43]{color:#909399;font-size:%?24?%}.order .total[data-v-2c319d43]{margin-top:%?20?%;text-align:right;font-size:%?24?%}.order .total .total-price[data-v-2c319d43]{font-size:%?32?%}.order .bottom[data-v-2c319d43]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?40?%;padding:0 %?10?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .bottom .btn[data-v-2c319d43]{line-height:%?52?%;width:%?160?%;border-radius:%?26?%;border:%?2?% solid #e4e7ed;font-size:%?26?%;text-align:center;color:#82848a}.order .bottom .evaluate[data-v-2c319d43]{color:#f29100;border-color:#f29100}.centre[data-v-2c319d43]{text-align:center;margin:%?200?% auto;font-size:%?32?%}.centre uni-image[data-v-2c319d43]{width:%?164?%;height:%?164?%;border-radius:50%;margin-bottom:%?20?%}.centre .tips[data-v-2c319d43]{font-size:%?24?%;color:#999;margin-top:%?20?%}.centre .btn[data-v-2c319d43]{margin:%?80?% auto;width:%?200?%;border-radius:%?32?%;line-height:%?64?%;color:#fff;font-size:%?26?%;background:-webkit-linear-gradient(right,#f9745a,#ff9e01);background:linear-gradient(270deg,#f9745a,#ff9e01)}.wrap[data-v-2c319d43]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - var(--window-top));width:100%}.swiper-box[data-v-2c319d43]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.swiper-item[data-v-2c319d43]{height:100%}',""]),t.exports=i},ef5c:function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,"\nbody.?%PAGE?%[data-v-2c319d43]{background-color:#f2f2f2}",""]),t.exports=i}}]);