<template>
	<view class="content">
		
		<view>
			<navigator url="../index/index" open-type="switchTab">
				<button type="default">切换到首页</button>
			</navigator>
		</view>
		
		<view class="ts">{{pw}}</view>
		<view class="booklist" v-for="(item, index) in booklist">
			<button type="default" @click="dk(item.key)">{{ index+1 }} - {{ item.name }}</button>
		</view>
		<view class="ts">{{ts1}}</view>
		
		
	
		
		<!--  ***************************-->
		
		<view class="ts">{{ts2}}</view>
		<view class="book" v-for="(item, index) in book">
			<button type="default" @click="openbook(item.key)">{{ item.name }}</button>
		</view>
		
		<view v-html="bookhtml"></view>
		
		
		
	 
		
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
				ts2:'',
				booklist:[],
				book:[],
				bookhtml:"",
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
			
			const query = Bmob.Query('_User');
			
			query.get(current.objectId).then(res => {
			  // console.log(res)
			  console.log('成功')
			  // console.log(res.unibookQx)
			
			 
			  this.pw = '点击下列按钮，即可打开相应课程的文字版列表';
			  this.booklist = eval('(' + res.unibookQx + ')');
			  
			  console.log(this.booklist)
			 
			    
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
				this.book = [];
				 
				 const query = Bmob.Query('book');
				 query.get(key).then(res => {
				   // console.log(res)
				   console.log('成功')
				   this.ts1 ='点击下面课程标题，即可打开相应课程的文字版'
				   // alert('提示：\n先点击红色按钮【开始播放】，在选择相应课程收听')
				   // yincangCX()
				   
				   this.book = eval('(' + res.book + ')');
				   console.log(this.book)
				
							  
				}).catch(err => {
				  console.log(err)
				})
			},
			
		
			
			
			
			openbook(num) {
				this.ts2 ='加载中，稍等一下下！'
				
				 
				 const query = Bmob.Query('wenzi');
				 query.get(num).then(res => {
				   // console.log(res)
				   console.log('成功')
				   this.ts2 ='加载完成'
				   // alert('提示：\n先点击红色按钮【开始播放】，在选择相应课程收听')
				   // yincangCX()
				   
				     console.log(res.wenzi)
					 this.bookhtml = res.wenzi
				  
				  			  
				  }).catch(err => {
				    console.log(err)
				  })
			},
				
			
		},
		
	}
	
	
</script>

<style>
	
	.booklist button{
		background-color: #FFA500;
		color:#FFFFFF;
	}
	
	.book button{
		background-color: #8A2BE2;
		color:#FFFFFF;
	}
	
	page {
		background-color: #FFE4E1;
		margin: 25px 25px;
		
		font-size: 25px;
		line-height: 50px;
		color: #4B0082;
	}
	
	
	
	.tu {
		width: 100%;
	}
	
</style>
