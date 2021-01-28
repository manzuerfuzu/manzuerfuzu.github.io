<template>
	<view class="content">
		
		<view>
			<navigator url="../index/index" open-type="switchTab">
				<button type="default">切换到首页</button>
			</navigator>
		</view>
		
		<view class="ts-pw">{{pw}}</view>
		<view class="mp3" v-for="(item, index) in items">
			<button type="default" @click="dk(item.key)">{{ index+1 }} - {{ item.name }}</button>
		</view>
		<view class="ts-pw">{{ts1}}</view>
		
		<view class="">{{zongtime}}</view>
		<view class="">当前播放时间为:{{m1}}分{{s1}}秒</view>
		<view class="">	{{dangqiantime}} </view>
		<text>正在播放的是第 {{zzbfnum}}课\n</text>
		
	
		<view>
		
			<button type="primary" @click="pause()">暂停</button> 
			<button type="primary" @click="jixuplay()">继续播放</button>
			
			<view class="uni-form-item uni-column">
				<view class="title">在下方输入框中输入要跳转到第几分第几秒继续播放</view>
				<input class="uni-input" v-model="tiaozhuanm" focus placeholder="在此输入要跳转到第几分钟" />
				<input class="uni-input" v-model="tiaozhuans" focus placeholder="在此输入要跳转到第几秒钟" />
			</view>
			<button type="primary" plain="true" @tap="seek()">跳转</button>
			
			
			<button type="primary" @click="stop()">停止</button> 
		</view>
		
		<text>\n</text>
		<button type="warn" :disabled=disabled @click="play(0);getcurrentTime()">开始播放，此按键只点击一次，就不要再按了！</button>
		<text>\n每节课播放完之后，会自动播放下一课</text>
		<!--  ***************************-->
		
		<view class="mp3play" v-for="(item, index) in songlist">
			<button type="default" @click="stop();play(index);getcurrentTime()">{{ item.singer }} - {{ item.title }}</button>
		</view>
		
		
		
		
	 
		
	</view>
</template>

<script>
	
	
	var Bmob = require('utils/Bmob-2.2.5.min.js');
	Bmob.initialize("d120dedc62382103", "201068");
	
	
	export default {
		
		data() {
			return {
				pw:'',
				ts1:'',
				mp3url:[],
				value: 0,
				username:"",
				tiaozhuanm:"",
				tiaozhuans:"",
				n:0,
				m:0,
				s:0,
				m1:0,
				s1:0,
				zzbfnum:0,
				disabled:false,
				time:0,
				zongtime:'', //音频时长为
				dangqiantime:'', //音频当前播放时间
				splitlist:[],
				items: [],
				songlist: [],
			
			}
			
			
		},
		
		watch: {
			/* 使用watch来响应数据的变化 */
			zongtime: function() {
				console.log('zongtime变化了')
			},
			
		},
		
		onLaunch: function() {
			
			uni.setKeepScreenOn({
			    keepScreenOn: true
			});
		},
		
		onLoad() {
			let current = Bmob.User.current()
			console.log(current.objectId)
			const query = Bmob.Query('_User');
			
			query.get(current.objectId).then(res => {
			  // console.log(res)
			  console.log('成功')
			
			 
			  this.pw = '点击下列按钮，即可打开相应课程的播放列表';
			  this.mp3url = res.quanxian_mima;
			  this.items = eval('(' + res.unimp3Qx + ')');
			  console.log(this.items)
			 
			    
			}).catch(err => {
			  console.log(err)
			})

		},
		
		
		methods:{
			
			onLaunch(){
				// 保持屏幕常亮
				uni.setKeepScreenOn({
				    keepScreenOn: true
				});
			},
			
			dk(key){
				this.ts1 ='加载中，稍等一下下！'
				this.songlist = [];
				 
				 const query = Bmob.Query('mp3');
				 query.get(key).then(res => {
				   // console.log(res)
				   console.log('成功')
				   this.ts1 ='加载完成'
				   alert('提示：\n先点击红色按钮【开始播放】，在选择相应课程收听')
				   // yincangCX()
				   
				   this.songlist = eval('(' + res.wenzi + ')');
				   console.log(this.songlist)
				
							  
				}).catch(err => {
				  console.log(err)
				})
			},
			
			// 秒数 变 分：秒---------------------------
			
			times(num){
				var m = parseInt(num/60);
				var s = parseInt(num%60);
				m = m>9 ? m :'0'+m;
				s = s>9 ? s :'0'+s;
				return m + ':' + s ;
			},
			
			
			
			play(num) {
				this.zzbfnum=this.songlist[num].title;
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = this.songlist[num].songUrl;
				innerAudioContext.autoplay = false;
				innerAudioContext.onCanplay(() => {
					console.log('音频加载成功，可以播放啦');
					let time = 0;
					time = this.innerAudioContext.duration;
					this.m = Math.floor(time / 60);
					this.s = Math.floor(time % 60);
					// console.log('当前播放的课程时长为：' + this.m + '分' + this.s + '秒')
					// return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
					this.zongtime = `当前播放的课程时长为：${this.m}分${this.s}秒`
					
				});
				innerAudioContext.onPlay(() => {
				  console.log('开始播放第'+num+'课');
				  this.disabled=true;
				});
				// innerAudioContext.ontimeupdate(() => {
				// 	let time1 = this.innerAudioContext.currentTime;
				// 	this.m1 = Math.floor(time1 / 60);
				// 	this.s1 = Math.floor(time1 % 60);
				// 	console.log(`当前播放时间为:${this.m1}分${this.s1}秒`);
						
				// 	// return `当前播放时间为:${this.m1}分${this.s1}秒`;
				// });
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
				
				
				
				
				
				this.innerAudioContext = innerAudioContext;
				
				this.innerAudioContext.play();	
				
				this.innerAudioContext.onEnded(() => {
				this.play(num+1);
				
				
				  num++
				  
				});
				// n++	
				// this.zzbfnum=num+1;
				// console.log(this.zzbfnum);
				// return zzbfnum
			},
			
			
			
			
			
			jixuplay() {
				this.innerAudioContext.play();
				
			},
			
			
			pause() {
				this.innerAudioContext.pause();
			},
		
			
			seek(){
				
				let tiaozhuanm = this.tiaozhuanm;
				let tiaozhuans = this.tiaozhuans;
				let tiaozhuantime = Number(this.tiaozhuanm*60) + Number(this.tiaozhuans)
				
					
				//写完上面定义后就打印一下
				console.log(tiaozhuantime);
				this.innerAudioContext.seek(Number(tiaozhuantime))
				
			},
			
			stop() {
				this.innerAudioContext.stop()
			},
			
			
			
			// ----------- 获取音频总时长  ------------------------
			
			xszong1(){
				let time = 0;
				time = this.innerAudioContext.duration;
				this.m = Math.floor(time / 60);
				this.s = Math.floor(time % 60);
				// console.log('当前播放的课程时长为：' + this.m + '分' + this.s + '秒')
				// return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
				this.zongtime = `当前播放的课程时长为：${this.m}分${this.s}秒`
				// '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
			},
			
			xszong(){
				let time = 0;
				time = this.innerAudioContext.duration;
				this.m = Math.floor(time / 60);
				this.s = Math.floor(time % 60);
				console.log(`当前播放的课程时长为：${this.m}分${this.s}秒`);
				this.zongtime = `当前播放的课程时长为：${this.m}分${this.s}秒`;
				// return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
				// this.zongtime = `当前播放的课程时长为：${this.m}分${this.s}秒`
				
				  // return '当前播放的课程时长为:'+this.m+'分'+this.s+'秒';
				
			},
			
			// *************** 获取音频总时长 end *****************
				
			// 获取当前播放音频的总时长
			// duration() {
			// 	// 设定一个定时器，让时间可以每秒钟更新一次
			// 	//var time = 0;
			// 	let timer = setInterval( () => {
			// 		var time = this.innerAudioContext.duration;
			// 		this.m = Math.floor(time / 60);
			// 		this.s = Math.floor(time % 60);
			// 		// console.log('当前播放的课程时长为：' + this.m + '分' + this.s + '秒')
			// 		// return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
			// 	}, 1000);
				
			// 	return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
			// },
			
			// 获取当前播放时间
			// getcurrentTime() {
				
			// 	let time1 = this.innerAudioContext.currentTime;
			// 	this.m1 = Math.floor(time1 / 60);
			// 	this.s1 = Math.floor(time1 % 60);
			// 	// console.log('当前播放时间为:' + this.m1 + '分' + this.s1 + '秒');
					
			// 	return `当前播放时间为:${this.m1}分${this.s1}秒`;
				
			// 	// return '当前播放时间为:' + this.m1 + '分' + this.s1 + '秒';
			// },
				
				// 获取当前播放时间
			getcurrentTime() {
				//设定一个定时器，让时间可以每秒钟更新一次
				var time1 = 0;
				let timer1 = setInterval( () => {
					time1 = this.innerAudioContext.currentTime;
					this.m1 = Math.floor(time1 / 60);
					this.s1 = Math.floor(time1 % 60);
					// console.log('当前播放时间为:' + this.m1 + '分' + this.s1 + '秒');
					
				}, 1000); //1000毫秒=1秒
				return '当前播放时间为:' + this.m1 + '分' + this.s1 + '秒';
			},
			
			zzbf(zzbfn) {
				this.zzbfnum=zzbfn;
				console.log(this.zzbfnum);
				return this.zzbfnum
			}
			
			
		}
		
	}
	
	
</script>

<style>
	
	.mp3 button{
		background-color: #FFA500;
		color:#FFFFFF;
	}
	
	.mp3play button{
		background-color: #8A2BE2;
		color:#FFFFFF;
	}
	
	
</style>
