<template>
	<view class="content">
		
		
		<!-- bindgetuserinfo="getUserInfo" -->
		<!-- 
		<button open-type="getUserInfo"  @click="getUserInfo"> 登录 </button>
		<image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" background-size="cover"></image>
		     <text class="userinfo-nickname">{{userInfo.nickName}}</text>
		 -->
		<text>hello</text>
		<!-- <text>{{current.objectId}}</text> -->
		<button type="default" @click="open">云查询</button>
		<button type="default" @click="cx">b查询</button>
		<button type="default" @click="cx1">b1查询</button>
		
		<text>{{pw}}</text>
		
		<view>
			<navigator url="../mp3play/mp3play" >
				<button type="default">课程音频</button>
			</navigator>
			<navigator url="../book/book" >
				<button type="default">课程文字</button>
			</navigator>
		</view>
		
		<view>
			<navigator :url="wordurl1">下载</navigator>
		</view>
		
		
		<!-- <audio :src="url" controls></audio> -->
		<button type="primary" @click="play(1)">播放</button>
		<button type="primary" @click="stop()">停止</button>
		
		<view>
			<navigator :url="wordurl">打开</navigator>
		</view>
		
	 
		
	</view>
</template>

<script>
	import index from './index.js';
	
	var Bmob = require('utils/Bmob-2.2.5.min.js');
	Bmob.initialize("d120dedc62382103", "201068");
	
	
	export default {
		data() {
			
			return {
				pw: '无',
				name:'王阳明',
				url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-hjinhmzy11qaa4ebe2/a2cb75d0-134b-11eb-b997-9918a5dda011.mp3',
				mp3url:[
					// 配乐
					'https://res.wx.qq.com/voice/getvoice?mediaid=MjM5ODAzODMyOF8xMDAwMDI0MDg=',
					//精品班1-1
					'https://res.wx.qq.com/voice/getvoice?mediaid=MjM5ODAzODMyOF8xMDAwMDIzNjI=',
					//精品班1-2
					'https://res.wx.qq.com/voice/getvoice?mediaid=MjM5ODAzODMyOF8xMDAwMDIzNDE=',
					//精品班1-3
					'https://res.wx.qq.com/voice/getvoice?mediaid=MjM5ODAzODMyOF8xMDAwMDIzNDU=',
				
				],
				url1:'/pages/web-view/web-view?url=',
				url2:'https://www.baidu.com/',
				url3:"https://share.weiyun.com/uR2sGFEx"
				
				// "/pages/web-view/web-view?url=https://www.baidu.com/"
			}
		},
		
		computed: {
			wordurl(){
			  return this.url1+this.url2
			},
			wordurl1(){
			  return this.url1+this.url3
			}
		},
		
		onLoad() {
			
			
			let current = Bmob.User.current()
			console.log(current.objectId)
			const query = Bmob.Query('_User');
			
			query.get(current.objectId).then(res => {
			  // console.log(res)
			  console.log('成功')
			  // $('#jiazaiTS').html('加载完成！')
			  // 获取某列的数据
			  console.log(res.quanxian_mima[0])
			  this.pw = '音频加载完成，可以播放啦';
			  this.mp3url = res.quanxian_mima;
			  this.url = res.quanxian_mima[0];
			  console.log(res.wj)
			  this.url2 = res.wj.url
			  
			  console.log(this.wordurl)
			  
						  
			}).catch(err => {
			  console.log(err)
			})

		},
		methods: {
			
			// getUserInfo(e) {
			//     app.globalData.userInfo = e.detail.userInfo
			//     Bmob.User.upInfo(e.detail.userInfo)
			//     this.setData({
			//       userInfo: e.detail.userInfo,
			//       hasUserInfo: true
			//     })
			//   },
			  
			  // Bmob.User.upInfo(e.detail.userInfo).then(result => {
			  //       console.log(result)
			  //     }).catch(err => {
			  //       console.log(err)
			  //     })
			
			//获取用户当前信息
			
			
			
			open(){
				
				
				
				let pw = this.pw
				uniCloud.callFunction({
					name:'login',
					data:{
						name:'gege'
					},
				}).then((res) =>{
						// console.log(res);
						// console.log(res.result.data);
						// console.log(res.result.data[0]);
						console.log(res.result.data[0].mp3url);
						this.pw = res.result.data[0].password;
						this.url = res.result.data[0].mp3url;
						this.mp3url = res.result.data[0].mp3list;
						
					})	
					
			},
			
			cx(){
				Bmob.User.login('gege','gege2010').then((res) =>{
				// 登录成功后跳转页面
				console.log('成功')
				// $('#user-jiazaiTS').html('查询完成,点击下列课程题目即可打开')
				// console.log(res)
				console.log(res.quanxian)
				console.log(res.quanxian_mima)
				console.log(res.QXheMM)
				this.pw = '音频加载完成，可以播放啦';
				this.mp3url = res.quanxian_mima;
				this.url = res.quanxian_mima[0];
				console.log('----'+this.url)
				}).catch(err => {
				  console.log(err.error)
				});
				
			},
			
			cx1(){
				const query = Bmob.Query('_User');
				
				query.get("6579bf4b03").then(res => {
				  // console.log(res)
				  console.log('成功')
				  // $('#jiazaiTS').html('加载完成！')
				  // 获取某列的数据
				  console.log(res.quanxian_mima[0])
				  this.pw = '音频加载完成，可以播放啦';
				  this.mp3url = res.quanxian_mima;
				  this.url = res.quanxian_mima[0];
				  
							  
				}).catch(err => {
				  console.log(err)
				})
				
			},
			
			play(num) {
				this.zzbfnum=num;
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = this.mp3url[0];
				innerAudioContext.autoplay = false;
				innerAudioContext.onPlay(() => {
				  console.log('开始播放第'+num+'课');
				  this.disabled=true;
				});
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
				
				
				
				
				
				this.innerAudioContext = innerAudioContext;
				
				this.innerAudioContext.play();	
				
				// this.innerAudioContext.onEnded(() => {
				// this.play(num+1);
				
				
				//   num++
				  
				// });
				// n++	
				// this.zzbfnum=num+1;
				// console.log(this.zzbfnum);
				// return zzbfnum
			},
			
			stop() {
				this.innerAudioContext.stop()
			},
			
			
			

		}
	}
	
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
