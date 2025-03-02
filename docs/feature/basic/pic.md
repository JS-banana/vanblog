---
title: 图床
---

## 自带图床

你可以选择 `vanBlog` 内置的图床实现，无需任何配置，开箱即用。但是请记得在部署时映射好目录以防更新后丢失数据。

## 外置图床

`vanBlog` 可以对接第三方图床，是基于 [picgo-core](https://picgo.github.io/PicGo-Core-Doc/) 实现的。

具体支持：

- [x] 七牛图床
- [x] 腾讯云 COS
- [x] 又拍云
- [x] GitHub
- [x] SM.MS
- [x] 阿里云 OSS
- [x] Imgur

### 配置方法

::: info 温馨提示

感谢张鱼哥同学，他写了一份很详细的 `腾讯云 COS` 配置指南：

- [vanblog 使用 picgo 图床的完整部署教程](https://www.handyzyg.cn/post/47)

其他云存储的指南欢迎大家补充～
:::

首先阅读 [picgo 配置文档](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90)，推荐跟着文档自动生成配置。

生成后，进入后台`站点管理/系统设置/图床设置`，选择 `OSS` 图床，并把生成的配置文件复制过去，比如我用的七牛云图床，就像下面这样：

![](https://pic.mereith.com/img/73d7d98839fb36fa26e450423aa7d147.clipboard-2022-09-20.png)

点击保存后，新上传的图片就是对应的图床了！内置图床已经上传的图片不受影响。

## 扫描已有图片

`vanBlog` 支持把文章中存在的，但是不在图床记录中的图片扫描出来。

点击 `站点管理/系统设置/图床设置` 中的`扫描现有文章图片到图床` ，耐心等待即可。如果有扫描失败的，会弹窗显示信息。

这个功能在某些情况下，可以用来检测所有文章的失效图片。

![](https://pic.mereith.com/img/cb00c069e9fba6308151c859bd78d15d.clipboard-2022-08-15.png)

## 图片管理

进入 `vanBlog` 后台的 `图片管理` 模块可以对图片进行管理：

![](https://pic.mereith.com/img/5be657eaaff09be9dd4a77d968e54c21.clipboard-2022-08-15.png)

其中对着图片点右键可以显示高级菜单，包括不限于`显示图片详细信息`和`查找被引用文章`等。

上传图片后会自动复制图片`markdown 链接`到剪切板，需要复制 `url 链接` 的，可以对着图片点右键选择 `复制链接`

## 编辑器快捷上传

`vanBlog` 支持在编辑器中快捷上传图片，见下图：

![](https://www.mereith.com/static/img/8ad428da63e4380d4b1c2f2a8362b492.clipboard-2022-09-08.png)

## 图片复用

每一次上传都会检测图片的 `md5` 签名，如果已经有的该图片，则不会创建新条目。而是复用之前的图片，并把之前的图片链接复制到剪切板里。

## 导出全部图片

`VanBlog` 支持导出全部`本地图床图片`为一个压缩包，你可以在后台中的图片设置中点击按钮来导出全部本地图床图片！（oss 图床暂不支持全部导出，因为已经在 oss 中了，完全可以通过 oss 控制台批量导出，而且备份意义不大）

![](https://www.mereith.com/static/img/dd5f0f0a1ff61a1a5d22c09fcaa8178c.clipboard-2022-09-01.png)

## 安装自定插件

您可以在后台配置安装自定义的 `picgo` 插件，请填入插件名，多个请用英文逗号分隔。

如下图中，想用 `s3` 插件，直接写 s3 就行了，提交后您可以在容器日志中看到插件安装情况。

![](https://pic.mereith.com/img/73d7d98839fb36fa26e450423aa7d147.clipboard-2022-09-20.png)

![](https://pic.mereith.com/img/283fbd4ca8addeaf06b2f3d6ae1c4643.clipboard-2022-09-20.png)
