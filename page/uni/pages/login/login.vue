<template>
	<view class="content">
		
		<text>{{pw}}</text>
		
		<view class="uni-form-item uni-column">
			<view class="">用户名</view>
			<input class="username-iuput" focus placeholder="用户名" v-model="username" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="">密码</view>
			<input class="password-iuput" placeholder="密码" v-model="password" />
		</view>
		
		<button type="primary" @click="login">注册</button>
		<!-- <button type="primary" @click="stop()">停止</button> -->
	 
		
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
			}
		},
		onLoad() {
			

		},
		methods: {
			
			login(){
				console.log(this.username);
				console.log(this.password);
				
				let params = {
				    username: this.username,
				    password: this.password,
				   
				}
				Bmob.User.register(params).then(res => {
				  console.log(res)
				}).catch(err => {
				 console.log(err)
				});
			}
			
			
			

		}
	}
	
	
</script>

<style>
	
	
</style>
