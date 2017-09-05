# H5弹幕视频播放器
## 介绍
* 随着google chrome宣布不再默认打开flash支持，flash正逐渐的被淘汰，随着flash的淘汰，浏览器的视频播放渐渐由flash播放器转变为H5播放器，bilibili，pandatv等正在使用H5播放器，所以我也写了一个H5弹幕视频播放器
* 本项目使用gulp构建，webpack打包，为了模拟前后端交互，播放列表采取了从后台获取的方式，由于视频弹幕接口问题，视频、弹幕储存在本地
* 截图：
[image:1B58FAD8-A6E2-48A4-B165-77E6ABBEED7C-1759-000001770A663DDC/0438E887-BFA8-40A8-B953-AE76499911DE.png]
[image:673A70B2-F9EF-4A1C-B7F5-0C2B7DE65CC2-1759-000001A4583A84A8/112B27D0-0436-40F7-A033-B0CD0CC6EB10.png]
[image:D4B673AA-D56B-4AF9-B9AB-B6C124F8897D-1759-000001ABF7F0F815/79412F62-2C28-4D8C-999F-1A379418EEA6.png]
[image:0871A9AF-EE63-4806-967D-9CC6A4203542-1759-000001B0A65AC62C/C911EBA6-F8ED-4E85-A449-A16B3BB57B57.png]
![](H5%E5%BC%B9%E5%B9%95%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/0438E887-BFA8-40A8-B953-AE76499911DE.png)
![](H5%E5%BC%B9%E5%B9%95%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/112B27D0-0436-40F7-A033-B0CD0CC6EB10.png)
![](H5%E5%BC%B9%E5%B9%95%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/79412F62-2C28-4D8C-999F-1A379418EEA6.png)
![](H5%E5%BC%B9%E5%B9%95%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/C911EBA6-F8ED-4E85-A449-A16B3BB57B57.png)

## 运行方式
1. 确认你已经安装了gulp，npm
2. 在命令行输入
```
npm install
//如果你有cpm的话那就更好了
```
3. 等待下载完成后输入
```
gulp
```
4. 服务端口为8090，在浏览器中输入
```
localhost:8090/dist
```

然后就可以体验了
## 备注
* 由于视频、弹幕文件存在本地，所以下载时间会略长（我放了3个视频）
* 弹幕从b站下载，最多为1500条
* 后台的数据格式如下
```
  "list": [{
    "title": "爱杀宝贝ed洗脑循环",
    "source": "/static/source/319048-1.mp4",
    "danmu": "/static/danmu/爱杀.xml"
  }, {
    "title": "fade windowsxp",
    "source": "/static/source/16853104.mp4",
    "danmu": "/static/danmu/fade.xml"
  }, {
    "title": "斗鱼时刻 123期",
    "source": "/static/source/斗鱼时刻123.mp4",
    "danmu": "/static/danmu/斗鱼时刻123.xml"
  }]
}
```

有需要可以自己更改，数据获取部分在src_js_index.js中

