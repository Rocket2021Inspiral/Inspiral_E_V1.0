# webclient

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 用到的插件
1.leader-line-vue (https://anseki.github.io/leader-line/) 画线
2.vue-video-player (https://github.com/surmon-china/vue-video-player) 播放视频
3.animated (https://animate.style/) 图标出现动画
4.particles-bg-vue (https://github.com/lindelof/particles-bg-vue) 动态背景
### Solution框架（流程图）、文档、视频、Icon搜集地址
1.框架 (https://docs.microsoft.com/en-us/azure/architecture/browse/)
2.文档 (https://docs.microsoft.com/zh-cn/azure/?product=featured)
3.视频 产品官网中的视频OR视频中心(https://azure.microsoft.com/zh-cn/resources/videos/index/?services=sql-database&page=1&sort=newest)
(下载网页视频chrome插件:CoCoCut)
4.Icon (https://docs.microsoft.com/en-us/azure/architecture/icons/)
### 自适应问题
1.由于字体font-size用的rem，而一些width、margin等用的%，所以会造成高度变化，位置会发生部分偏移。目前demoResult中基本上调成自适应了，因为流程图会画线，所以图标偏移会比较明显。
2.建议再找找其它的画线插件，LeaderLine画的是svg，所以要动态自适应会很麻烦，目前还没解决。
### 效率问题
1.动态背景：开销太大，建议还是换成静态图片，做成必应Bing首页的风格会正式一些。
### 各部分的解释在代码注释中
