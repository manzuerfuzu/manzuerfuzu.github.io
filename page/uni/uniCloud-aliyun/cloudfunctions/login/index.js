'use strict';

/*
获取数据库对象
想要通过代码操作数据库，第一步要获取服务空间里的数据库对象。
const db = uniCloud.database(); //代码块为cdb
*/
const db = uniCloud.database();

/*
创建好集合后，可以通过API获取集合对象。
const db = uniCloud.database();
// 获取名为 `table1` 集合的引用
const collection = db.collection('table1');
const collection = db.collection('user');
*/



/*

exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	
	console.log('event : ', event)
	
	//返回数据给客户端
	return event
};

*/

// 查询数据  用ID查询
/*

exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const collection = db.collection('user');
	const res = await collection.doc('600e073be2ec8e00014e1f3f').get()
	
	console.log(JSON.stringify(res));
	console.log(JSON.stringify(res.data.name));
	
	//返回数据给客户端
	return {}
};

*/

/*

// 查询数据  用where查询
exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const collection = db.collection('user');
	const res = await collection.where({
		name:'gege'
	}).get()
	
	console.log(JSON.stringify(res));
	
	
	//返回数据给客户端
	return {
		
	}
};

*/


// 查询数据  在return中把查询条件返回给客户端

/*

exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const collection = db.collection('user');
	const res = await collection.where({
		name:'gege'
	}).get()
	
	console.log(JSON.stringify(res));
	
	
	//返回数据给客户端
	return {
		code:200,
		msg:'查询成功',
		data:res.data
	}
};

*/


// 查询数据  在return中把查询条件返回给客户端
// 查询名字为客户端传进来的event.name

/*

exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const collection = db.collection('user');
	const res = await collection.where({
		name:event.name
	})
	.field({
		// field过滤查询信息
		// true只返回这个字段，false表不返回该字段
		password:true
	})
	.get()
	
	console.log(JSON.stringify(res));
	
	
	//返回数据给客户端
	return {
		code:200,
		msg:'查询成功',
		data:res.data
	}
};

*/


// 分页查询

// 结构客户端在data中传入的event数据
/*
let {page,limit} = event
let skip = (page-1) * limit
let res = await collection.skip(skip).limit(limit).get()
*/


exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const collection = db.collection('user');
	const res = await collection.doc('600e073be2ec8e00014e1f3f').get()
	
	console.log(JSON.stringify(res));
	
	
	//返回数据给客户端
	return {
		code:200,
		msg:'查询成功',
		data:res.data
	}
};