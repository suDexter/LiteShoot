<view class="data-v-3a8d0fff"><view class="wrap data-v-3a8d0fff"><view class="wrapc data-v-3a8d0fff" style="background-color:#FFFFFF;"><u-swiper vue-id="57282994-1" list="{{swlist}}" class="data-v-3a8d0fff" bind:__l="__l"></u-swiper></view><view class="u-tabs-box data-v-3a8d0fff" style="font-family:PF;"><u-tabs-swiper vue-id="57282994-2" activeColor="#000000" list="{{list}}" current="{{current}}" is-scroll="{{false}}" swiperWidth="750" data-ref="tabs" data-event-opts="{{[['^change',[['change']]]]}}" bind:change="__e" class="data-v-3a8d0fff vue-ref" bind:__l="__l"></u-tabs-swiper></view><swiper class="swiper-box data-v-3a8d0fff" current="{{swiperCurrent}}" data-event-opts="{{[['transition',[['transition',['$event']]]],['animationfinish',[['animationfinish',['$event']]]]]}}" bindtransition="__e" bindanimationfinish="__e"><swiper-item class="swiper-item data-v-3a8d0fff"><scroll-view style="height:100%;width:100%;" scroll-y="{{true}}" class="data-v-3a8d0fff"><view class="page-box data-v-3a8d0fff"><block qq:for="{{$root.l0}}" qq:for-item="res" qq:for-index="index" qq:key="id"><view class="order data-v-3a8d0fff"><view data-event-opts="{{[['tap',[['senduid',['$0'],[[['dataList','id',res.$orig.id,'id']]]]]]]}}" class="top data-v-3a8d0fff" bindtap="__e"><view class="left data-v-3a8d0fff"><u-avatar vue-id="{{'57282994-3-'+index}}" src="{{res.m0}}" mode="circle" class="data-v-3a8d0fff" bind:__l="__l"></u-avatar><view class="content data-v-3a8d0fff" style="margin-left:10rpx;"><view class="left data-v-3a8d0fff"><view class="name data-v-3a8d0fff">{{res.$orig.uname}}</view><u-rate bind:input="__e" vue-id="{{'57282994-4-'+index}}" count="{{count}}" disabled="{{true}}" active-color="#ffaa00" gutter="3" value="{{res.urate}}" data-event-opts="{{[['^input',[['__set_model',['$0','urate','$event',[]],[[['dataList','id',res.$orig.id]]]]]]]}}" class="data-v-3a8d0fff" bind:__l="__l"></u-rate><view class="rate data-v-3a8d0fff">{{res.$orig.urate}}</view></view><view class="left data-v-3a8d0fff"><u-icon vue-id="{{'57282994-5-'+index}}" name="level" color="#079999" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon><u-icon vue-id="{{'57282994-6-'+index}}" name="weibo-circle-fill" color="#ffaa00" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon></view><view class="intro data-v-3a8d0fff">{{res.$orig.uintroduction}}</view></view></view><view class="right data-v-3a8d0fff"><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{"成交量"+res.$orig.udeal}}</view></view><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{res.$orig.udistance+"m"}}</view></view></view></view><view class="middle data-v-3a8d0fff"><view class="left data-v-3a8d0fff">Ta的作品墙↓</view><view class="right data-v-3a8d0fff">{{"获赞"+res.$orig.uendorse}}</view></view><view class="bottom data-v-3a8d0fff"><view class="pic data-v-3a8d0fff"><image src="{{res.m1}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m2}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m3}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m4}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view></view></view></block><u-loadmore vue-id="57282994-7" status="{{loadStatus[0]}}" bgColor="#f2f2f2" class="data-v-3a8d0fff" bind:__l="__l"></u-loadmore></view></scroll-view></swiper-item><swiper-item class="swiper-item data-v-3a8d0fff"><scroll-view style="height:100%;width:100%;" scroll-y="{{true}}" class="data-v-3a8d0fff"><view class="page-box data-v-3a8d0fff"><block qq:for="{{$root.l1}}" qq:for-item="res" qq:for-index="index" qq:key="id"><view class="order data-v-3a8d0fff"><view data-event-opts="{{[['tap',[['senduid',['$0'],[[['dataList','id',res.$orig.id,'id']]]]]]]}}" class="top data-v-3a8d0fff" bindtap="__e"><view class="left data-v-3a8d0fff"><u-avatar vue-id="{{'57282994-8-'+index}}" src="{{res.m5}}" mode="circle" class="data-v-3a8d0fff" bind:__l="__l"></u-avatar><view class="content data-v-3a8d0fff" style="margin-left:10rpx;"><view class="left data-v-3a8d0fff"><view class="name data-v-3a8d0fff">{{res.$orig.uname}}</view><u-rate bind:input="__e" vue-id="{{'57282994-9-'+index}}" count="{{count}}" disabled="{{true}}" active-color="#ffaa00" gutter="3" value="{{res.urate}}" data-event-opts="{{[['^input',[['__set_model',['$0','urate','$event',[]],[[['dataList','id',res.$orig.id]]]]]]]}}" class="data-v-3a8d0fff" bind:__l="__l"></u-rate><view class="rate data-v-3a8d0fff">{{res.$orig.urate}}</view></view><view class="left data-v-3a8d0fff"><u-icon vue-id="{{'57282994-10-'+index}}" name="level" color="#079999" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon><u-icon vue-id="{{'57282994-11-'+index}}" name="weibo-circle-fill" color="#ffaa00" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon></view><view class="intro data-v-3a8d0fff">{{res.$orig.uintroduction}}</view></view></view><view class="right data-v-3a8d0fff"><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{"成交量"+res.$orig.udeal}}</view></view><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{res.$orig.udistance+"m"}}</view></view></view></view><view class="middle data-v-3a8d0fff"><view class="left data-v-3a8d0fff">Ta的作品墙↓</view><view class="right data-v-3a8d0fff">{{"获赞"+res.$orig.uendorse}}</view></view><view class="bottom data-v-3a8d0fff"><view class="pic data-v-3a8d0fff"><image src="{{res.m6}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m7}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m8}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m9}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view></view></view></block><u-loadmore vue-id="57282994-12" status="{{loadStatus[0]}}" bgColor="#f2f2f2" class="data-v-3a8d0fff" bind:__l="__l"></u-loadmore></view></scroll-view></swiper-item><swiper-item class="swiper-item data-v-3a8d0fff"><scroll-view style="height:100%;width:100%;" scroll-y="{{true}}" class="data-v-3a8d0fff"><view class="page-box data-v-3a8d0fff"><block qq:for="{{$root.l2}}" qq:for-item="res" qq:for-index="index" qq:key="id"><view class="order data-v-3a8d0fff"><view data-event-opts="{{[['tap',[['senduid',['$0'],[[['dataList','id',res.$orig.id,'id']]]]]]]}}" class="top data-v-3a8d0fff" bindtap="__e"><view class="left data-v-3a8d0fff"><u-avatar vue-id="{{'57282994-13-'+index}}" src="{{res.m10}}" mode="circle" class="data-v-3a8d0fff" bind:__l="__l"></u-avatar><view class="content data-v-3a8d0fff" style="margin-left:10rpx;"><view class="left data-v-3a8d0fff"><view class="name data-v-3a8d0fff">{{res.$orig.uname}}</view><u-rate bind:input="__e" vue-id="{{'57282994-14-'+index}}" count="{{count}}" disabled="{{true}}" active-color="#ffaa00" gutter="3" value="{{res.urate}}" data-event-opts="{{[['^input',[['__set_model',['$0','urate','$event',[]],[[['dataList','id',res.$orig.id]]]]]]]}}" class="data-v-3a8d0fff" bind:__l="__l"></u-rate><view class="rate data-v-3a8d0fff">{{res.$orig.urate}}</view></view><view class="left data-v-3a8d0fff"><u-icon vue-id="{{'57282994-15-'+index}}" name="level" color="#079999" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon><u-icon vue-id="{{'57282994-16-'+index}}" name="weibo-circle-fill" color="#ffaa00" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon></view><view class="intro data-v-3a8d0fff">{{res.$orig.uintroduction}}</view></view></view><view class="right data-v-3a8d0fff"><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{"成交量"+res.$orig.udeal}}</view></view><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{res.$orig.udistance+"m"}}</view></view></view></view><view class="middle data-v-3a8d0fff"><view class="left data-v-3a8d0fff">Ta的作品墙↓</view><view class="right data-v-3a8d0fff">{{"获赞"+res.$orig.uendorse}}</view></view><view class="bottom data-v-3a8d0fff"><view class="pic data-v-3a8d0fff"><image src="{{res.m11}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m12}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m13}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m14}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view></view></view></block><u-loadmore vue-id="57282994-17" status="{{loadStatus[0]}}" bgColor="#f2f2f2" class="data-v-3a8d0fff" bind:__l="__l"></u-loadmore></view></scroll-view></swiper-item><swiper-item class="swiper-item data-v-3a8d0fff"><scroll-view style="height:100%;width:100%;" scroll-y="{{true}}" class="data-v-3a8d0fff"><view class="page-box data-v-3a8d0fff"><block qq:for="{{$root.l3}}" qq:for-item="res" qq:for-index="index" qq:key="id"><view class="order data-v-3a8d0fff"><view data-event-opts="{{[['tap',[['senduid',['$0'],[[['dataList','id',res.$orig.id,'id']]]]]]]}}" class="top data-v-3a8d0fff" bindtap="__e"><view class="left data-v-3a8d0fff"><u-avatar vue-id="{{'57282994-18-'+index}}" src="{{res.m15}}" mode="circle" class="data-v-3a8d0fff" bind:__l="__l"></u-avatar><view class="content data-v-3a8d0fff" style="margin-left:10rpx;"><view class="left data-v-3a8d0fff"><view class="name data-v-3a8d0fff">{{res.$orig.uname}}</view><u-rate bind:input="__e" vue-id="{{'57282994-19-'+index}}" count="{{count}}" disabled="{{true}}" active-color="#ffaa00" gutter="3" value="{{res.urate}}" data-event-opts="{{[['^input',[['__set_model',['$0','urate','$event',[]],[[['dataList','id',res.$orig.id]]]]]]]}}" class="data-v-3a8d0fff" bind:__l="__l"></u-rate><view class="rate data-v-3a8d0fff">{{res.$orig.urate}}</view></view><view class="left data-v-3a8d0fff"><u-icon vue-id="{{'57282994-20-'+index}}" name="level" color="#079999" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon><u-icon vue-id="{{'57282994-21-'+index}}" name="weibo-circle-fill" color="#ffaa00" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon></view><view class="intro data-v-3a8d0fff">{{res.$orig.uintroduction}}</view></view></view><view class="right data-v-3a8d0fff"><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{"成交量"+res.$orig.udeal}}</view></view><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{res.$orig.udistance+"m"}}</view></view></view></view><view class="middle data-v-3a8d0fff"><view class="left data-v-3a8d0fff">Ta的作品墙↓</view><view class="right data-v-3a8d0fff">{{"获赞"+res.$orig.uendorse}}</view></view><view class="bottom data-v-3a8d0fff"><view class="pic data-v-3a8d0fff"><image src="{{res.m16}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m17}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m18}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m19}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view></view></view></block><u-loadmore vue-id="57282994-22" status="{{loadStatus[0]}}" bgColor="#f2f2f2" class="data-v-3a8d0fff" bind:__l="__l"></u-loadmore></view></scroll-view></swiper-item><swiper-item class="swiper-item data-v-3a8d0fff"><scroll-view style="height:100%;width:100%;" scroll-y="{{true}}" class="data-v-3a8d0fff"><view class="page-box data-v-3a8d0fff"><block qq:for="{{$root.l4}}" qq:for-item="res" qq:for-index="index" qq:key="id"><view class="order data-v-3a8d0fff"><view data-event-opts="{{[['tap',[['senduid',['$0'],[[['dataList','id',res.$orig.id,'id']]]]]]]}}" class="top data-v-3a8d0fff" bindtap="__e"><view class="left data-v-3a8d0fff"><u-avatar vue-id="{{'57282994-23-'+index}}" src="{{res.m20}}" mode="circle" class="data-v-3a8d0fff" bind:__l="__l"></u-avatar><view class="content data-v-3a8d0fff" style="margin-left:10rpx;"><view class="left data-v-3a8d0fff"><view class="name data-v-3a8d0fff">{{res.$orig.uname}}</view><u-rate bind:input="__e" vue-id="{{'57282994-24-'+index}}" count="{{count}}" disabled="{{true}}" active-color="#ffaa00" gutter="3" value="{{res.urate}}" data-event-opts="{{[['^input',[['__set_model',['$0','urate','$event',[]],[[['dataList','id',res.$orig.id]]]]]]]}}" class="data-v-3a8d0fff" bind:__l="__l"></u-rate><view class="rate data-v-3a8d0fff">{{res.$orig.urate}}</view></view><view class="left data-v-3a8d0fff"><u-icon vue-id="{{'57282994-25-'+index}}" name="level" color="#079999" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon><u-icon vue-id="{{'57282994-26-'+index}}" name="weibo-circle-fill" color="#ffaa00" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon></view><view class="intro data-v-3a8d0fff">{{res.$orig.uintroduction}}</view></view></view><view class="right data-v-3a8d0fff"><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{"成交量"+res.$orig.udeal}}</view></view><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{res.$orig.udistance+"m"}}</view></view></view></view><view class="middle data-v-3a8d0fff"><view class="left data-v-3a8d0fff">Ta的作品墙↓</view><view class="right data-v-3a8d0fff">{{"获赞"+res.$orig.uendorse}}</view></view><view class="bottom data-v-3a8d0fff"><view class="pic data-v-3a8d0fff"><image src="{{res.m21}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m22}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m23}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m24}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view></view></view></block><u-loadmore vue-id="57282994-27" status="{{loadStatus[0]}}" bgColor="#f2f2f2" class="data-v-3a8d0fff" bind:__l="__l"></u-loadmore></view></scroll-view></swiper-item><swiper-item class="swiper-item data-v-3a8d0fff"><scroll-view style="height:100%;width:100%;" scroll-y="{{true}}" class="data-v-3a8d0fff"><view class="page-box data-v-3a8d0fff"><block qq:for="{{$root.l5}}" qq:for-item="res" qq:for-index="index" qq:key="id"><view class="order data-v-3a8d0fff"><view data-event-opts="{{[['tap',[['senduid',['$0'],[[['dataList','id',res.$orig.id,'id']]]]]]]}}" class="top data-v-3a8d0fff" bindtap="__e"><view class="left data-v-3a8d0fff"><u-avatar vue-id="{{'57282994-28-'+index}}" src="{{res.m25}}" mode="circle" class="data-v-3a8d0fff" bind:__l="__l"></u-avatar><view class="content data-v-3a8d0fff" style="margin-left:10rpx;"><view class="left data-v-3a8d0fff"><view class="name data-v-3a8d0fff">{{res.$orig.uname}}</view><u-rate bind:input="__e" vue-id="{{'57282994-29-'+index}}" count="{{count}}" disabled="{{true}}" active-color="#ffaa00" gutter="3" value="{{res.urate}}" data-event-opts="{{[['^input',[['__set_model',['$0','urate','$event',[]],[[['dataList','id',res.$orig.id]]]]]]]}}" class="data-v-3a8d0fff" bind:__l="__l"></u-rate><view class="rate data-v-3a8d0fff">{{res.$orig.urate}}</view></view><view class="left data-v-3a8d0fff"><u-icon vue-id="{{'57282994-30-'+index}}" name="level" color="#079999" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon><u-icon vue-id="{{'57282994-31-'+index}}" name="weibo-circle-fill" color="#ffaa00" size="28" class="data-v-3a8d0fff" bind:__l="__l"></u-icon></view><view class="intro data-v-3a8d0fff">{{res.$orig.uintroduction}}</view></view></view><view class="right data-v-3a8d0fff"><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{"成交量"+res.$orig.udeal}}</view></view><view class="content data-v-3a8d0fff"><view class="number data-v-3a8d0fff">{{res.$orig.udistance+"m"}}</view></view></view></view><view class="middle data-v-3a8d0fff"><view class="left data-v-3a8d0fff">Ta的作品墙↓</view><view class="right data-v-3a8d0fff">{{"获赞"+res.$orig.uendorse}}</view></view><view class="bottom data-v-3a8d0fff"><view class="pic data-v-3a8d0fff"><image src="{{res.m26}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m27}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m28}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view><view class="pic data-v-3a8d0fff"><image src="{{res.m29}}" mode="aspectFill" class="data-v-3a8d0fff"></image></view></view></view></block><u-loadmore vue-id="57282994-32" status="{{loadStatus[0]}}" bgColor="#f2f2f2" class="data-v-3a8d0fff" bind:__l="__l"></u-loadmore></view></scroll-view></swiper-item></swiper></view></view>