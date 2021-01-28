# 编写云函数
  'use strict';
  const db = uniCloud.database()
  exports.main = async (event, context) => {
      //event为客户端上传的参数
      const collection = db.collection('unicloud-test') // 获取表'unicloud-test'的集合对象
      const res = await collection.limit(10).get() // 获取表中的10条数据，结果为json格式
      return res // 返回json给客户端
  };

## 编写云函数后，在项目管理器里右键点击该云函数的目录，在弹出菜单中可选择“本地运行云函数”、“上传部署云函数”、“上传并运行云函数”。

### 上传并运行云函数
在项目管理器里右键点击云函数的目录，在弹出菜单中可选择“上传并运行云函数”。此外也可以打开此目录下的文件然后使用快捷键Ctrl+r，在弹出菜单中选择“上传并运行云函数”。上传并运行时会自动带上配置的运行测试参数。

## 运行云函数时配置运行测试参数
在云函数的上传运行菜单或右键菜单中，有配置运行测试参数的功能。
可以打开一个json，配置运行参数。配置该json后，运行云函数时会将该json作为云函数调用的上行参数处理，可以在云函数中接收到参数。

![](https://ss2.meipian.me/users/9908934/origin5db74ede8f752dba8b101a8fdb33e348.jpg-mobile)``

## 小程序中使用uniCloud的白名单配置
各家小程序平台，均要求在小程序管理后台配置小程序应用的联网服务器域名，否则无法联网。
使用uniCloud后，开发者将不再需要自己购买、备案域名，直接将uniCloud的域名填写在小程序管理后台即可。
根据下表，在小程序管理后台设置request合法域名、uploadFile合法域名（如没有上传文件业务，可不设置）。下表的域名均为阿里云或腾讯云自有域名，并非DCloud所属域名。
服务提供商
request合法域名
uploadFile合法域名
download合法域名｜
阿里云
api.bspapp.com
bsppub.oss-cn-shanghai.aliyuncs.com
需要从云存储下载文件的时候才需要配置，不同服务空间域名不同，可以在web控制台查看文件详情里面看到
腾讯云
tcb-api.tencentcloudapi.com
cos.ap-shanghai.myqcloud.com
需要从云存储下载文件的时候才需要配置，不同服务空间域名不同，可以在web控制台查看文件详情里面看到
如果需要用uni.request请求云存储内的文件，需要将云存储域名（即上表中的download合法域名）配置到request合法域名内

# 云数据库

## 在uniCloud web控制台新建表时，在下面的模板中也可以选择各种opendb表模板，直接创建。
字段的值，支持以下类型：
String：字符串
Number：数字
Object：对象
Array：数组
Bool：布尔值
GeoPoint：地理位置点
GeoLineStringL: 地理路径
GeoPolygon: 地理多边形
GeoMultiPoint: 多个地理位置点
GeoMultiLineString: 多个地理路径
GeoMultiPolygon: 多个地理多边形
Date：时间
Null：相当于一个占位符，表示一个字段存在但是值为空。

## 获取数据库对象
想要通过代码操作数据库，第一步要获取服务空间里的数据库对象。
不管云函数还是前端，获取数据库连接都是如下写法。前端写法需2.9.5起支持。
const db = uniCloud.database(); //代码块为cdb

## 创建好集合后，可以通过API获取集合对象。
const db = uniCloud.database();
// 获取名为 `table1` 集合的引用
const collection = db.collection('table1');

## 
类型
接口
说明
写
add
新增记录（触发请求）
计数
count
获取符合条件的记录条数
读
get
获取集合中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求)
引用
doc
获取对该集合中指定 id 的记录的引用
查询条件
where
通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用

skip
跳过指定数量的文档，常用于分页，传入 offset。clientDB组件有封装好的更易用的分页，另见

orderBy
排序方式

limit
返回的结果集(文档数量)的限制，有默认值和上限值

field
指定需要返回的字段