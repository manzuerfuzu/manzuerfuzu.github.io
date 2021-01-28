<script>
	
	var Bmob = require("utils/Bmob-2.2.5.min.js");
	Bmob.initialize("d120dedc62382103", "201068");
	
	export default {
		onLaunch: function() {
		// 	Bmob.User.auth().then(res => {
		// 	  console.log(res)
		// 	  console.log('一键登陆成功')
		
		// 	}).catch(err => {
		// 	  console.log(err)
		// 	})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		getUserInfo: function (cb) {
		    var that = this
		    if (this.globalData.userInfo) {
		      typeof cb == 'function' && cb(this.globalData.userInfo)
		    } else {
		      //调用登录接口 
		      wx.login({
		        success: function () {
		          wx.getUserInfo({
		            success: function (res) {
		              that.globalData.userInfo = res.userInfo
		              typeof cb == 'function' && cb(that.globalData.userInfo)
		            }
		          })
		        }
		      })
		    }
		  },
		
		  globalData: {
		    userInfo: null
		  }
		
		
		
	}
	
	// // 微信一键登陆
	// Bmob.User.auth().then(res => {
	//       console.log(res)
	//       console.log('一键登陆成功')
	
	//     }).catch(err => {
	//       console.log(err)
	//     })
		
		
		
	
		
</script>

<style>
	/*每个页面公共css */
</style>
