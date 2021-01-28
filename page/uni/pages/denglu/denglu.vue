<template>
	<view class="content">
		
		<text></text>
		
		<view class="uni-form-item uni-column">
			<view class="">用户名</view>
			<input class="username-iuput" focus placeholder="用户名" v-model="username" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="">密码</view>
			<input class="password-iuput" placeholder="密码" v-model="password" />
		</view>
		
		<button type="primary" @click="denglu">登录</button>
		
		<text>{{ts}}</text>
		
	 
		
	</view>
</template>

<script>
	
	
	var Bmob = require('utils/Bmob-2.2.5.min.js');
	Bmob.initialize("d120dedc62382103", "201068");
	
	
	export default {
		data() {
			
			return {
				username : '',
			    password : '',
				ts: '',
			}
		},
		onLoad() {
			

		},
		methods: {
			
			denglu(){
				console.log(this.username);
				console.log(this.password);
				
				
				let username = this.username;
				let password = this.password;
				   
				
				 Bmob.User.login(username,password).then(res => {
				   console.log(res)
				   
				   let current = Bmob.User.current()
				   console.log(current.objectId)
				   const query = Bmob.Query('_User');
				   
				   query.get(current.objectId).then(res => {
				     // console.log(res)
				     console.log('成功')
				   
				     console.log("登录成功")
					 this.ts = '登录成功'
				    
				       
				   }).catch(err => {
				     console.log(err)
				   })
				 }).catch(err => {
				  console.log(err)
				});
				
				
				
				
			}
			
			
			

		}
	}
	
	
</script>

<style>
	
	
</style>
