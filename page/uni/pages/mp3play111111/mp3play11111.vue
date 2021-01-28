<template>
	<view class="content">
		
		<view>
			<navigator url="../index/index" open-type="switchTab">
				<button type="default">切换到首页</button>
			</navigator>
		</view>
		
		<!-- <text> {{xszong()}}\n</text> -->
		<text>正在播放的是第 {{zzbfnum}}课\n</text>
		<text> {{duration()}}\n</text>
		
		
		<text>{{getcurrentTime()}}</text>
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
		<button type="warn" :disabled=disabled @click="play(0)">开始播放，此按键只点击一次，就不要再按了！</button>
		<text>\n每节课播放完之后，会自动播放下一课</text>
		
		<button type="primary" @click="stop();play(1)">20200926【1蒙以养正】</button>
		<button type="primary" @click="stop();play(2)">20201002【2必有余庆】</button>
		<button type="primary" @click="stop();play(3)">20201005【3爱美之心】</button>
		<button type="primary" @click="stop();play(4)">20201007【4原生家庭】</button>
		<button type="primary" @click="stop();play(5)">20201011【5平行宇宙】</button>
		<button type="primary" @click="stop();play(6)">20201013【6能所双亡】</button>
		<button type="primary" @click="stop();play(7)">20201017【7天伦之乐】</button>
		<button type="primary" @click="stop();play(8)">20201019【8千金不换】</button>
		<button type="primary" @click="stop();play(9)">20201024【9当下之美】</button>
		<button type="primary" @click="stop();play(10)">20201026【10因果不空】</button>
		<button type="primary" @click="stop();play(11)">20201030【11龙的传人】</button>
		<button type="primary" @click="stop();play(12)">20201101【12一起回家】</button>
		<button type="primary" @click="stop();play(13)">20201105【13文化自信】</button>
		<button type="primary" @click="stop();play(14)">20201107【14三年而已】</button>
		<button type="primary" @click="stop();play(15)">20201111【15线下会议】</button>
		<button type="primary" @click="stop();play(16)">20201113【16 素质教育】</button>
		<button type="primary" @click="stop();play(17)">20201117【17精英教育】</button>
		<button type="primary" @click="stop();play(18)">20201119【18圣贤教育】</button>
		<button type="primary" @click="stop();play(19)">20201123【19彻底解脱】</button>
		<button type="primary" @click="stop();play(20)">20201125【20信念系统】</button>
		<button type="primary" @click="stop();play(21)">20201129【21真实不虚】</button>
		<button type="primary" @click="stop();play(22)">20201201【22回头是岸】</button>
		<!-- <button type="primary" @click="stop();play(1)">第1课</button> -->
		<!-- <button type="primary" @click="duration()">获取音频时长</button> -->
			
		
		
		
		
	 
		
	</view>
</template>

<script>
	
	
	var Bmob = require('utils/Bmob-2.2.5.min.js');
	Bmob.initialize("d120dedc62382103", "201068");
	
	
	export default {
		
		data() {
			return {
				
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
			
			}
			
			
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
			  // $('#jiazaiTS').html('加载完成！')
			  // 获取某列的数据
			  console.log(res.quanxian_mima[0])
			  this.pw = '音频加载完成，可以播放啦';
			  this.mp3url = res.quanxian_mima;
			  
			  
			  
			  
						  
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
			
			
			
			play(num) {
				this.zzbfnum=num;
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = this.mp3url[num];
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
				
				this.innerAudioContext.onEnded(() => {
				this.play(num+1);
				
				
				  num++
				  
				});
				n++	
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
			
			xszong(){
				var time = this.innerAudioContext.duration;
				this.m = Math.floor(time / 60);
				this.s = Math.floor(time % 60);
				// console.log('当前播放的课程时长为：' + this.m + '分' + this.s + '秒')
				// return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
				return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
			},
			
			
			
			// *************** 获取音频总时长 end *****************
				
			获取当前播放音频的总时长
			duration() {
				// 设定一个定时器，让时间可以每秒钟更新一次
				//var time = 0;
				let timer = setInterval( () => {
					var time = this.innerAudioContext.duration;
					this.m = Math.floor(time / 60);
					this.s = Math.floor(time % 60);
					// console.log('当前播放的课程时长为：' + this.m + '分' + this.s + '秒')
					// return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
				}, 1000);
				
				return '当前播放的课程时长为：' + this.m + '分' + this.s + '秒';
			},
				
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
	
	
</style>
