<p align="center">
	<img src="/img/logo.svg" style="width: 200px"></img>
</p>
<p align="center">
	<strong>VanBlog 是一款简洁实用优雅的高性能个人博客系统。支持 HTTPS 证书全自动按需申请、黑暗模式、移动端自适应和评论，内置流量统计与图床，内嵌评论系统，配有完备的、支持黑暗模式、支持移动端、支持一键上传剪切板图片到图床、带有强大的编辑器的后台管理面板。</strong>
</p>
<p align="center">
  <img src="https://img.shields.io/github/v/release/mereithhh/van-blog?display_name=tag" />
  <img src="https://img.shields.io/docker/pulls/mereith/van-blog" />
  <img src="https://img.shields.io/github/stars/mereithhh/van-blog" />
  <img src="https://img.shields.io/bitbucket/issues/mereithhh/van-blog" />
  <img src="https://github.com/mereithhh/van-blog/workflows/release/badge.svg" />
  <img src="https://img.shields.io/badge/license-GPL%20v3-yellow.svg" />
</p>
<p align="center">
	<strong>项目主页: </strong>  <a target="_blank" href='https://vanblog.mereith.com'>vanblog.mereith.com</a>
</p>
<p align="center">
	<strong>Demo(后台账号密码均为 demo): </strong>  <a target="_blank" href='https://blog-demo.mereith.com'>blog-demo.mereith.com</a>
</p>

## 预览图

![前台-白色](/img/合并.png)

## 特性

- [x] 快到极致的响应速度，Lighthouse 接近满分。
- [x] 独一份的按需全自动 HTTPS，甚至不用填域名。
- [x] 包括完整的前后台和服务端。
- [x] 前台和后台都为响应式设计，完美适配移动端和多尺寸设备。
- [x] 前台和后台都支持黑暗模式，并可自动切换。
- [x] 前台为静态网页（SSG），并支持秒级的增量渲染，每次改动无需重新构建全部页面。
- [x] SEO 和无障碍友好。
- [x] 静态网页，CDN 友好。
- [x] 版本号展示和更新提醒。
- [x] 基于 React，项目工程化，二次开发友好。
- [x] 内置强大的分析功能，可统计访客等数据。并配有精美看板。
- [x] 内嵌评论系统。
- [x] 强大的 markdown 编辑器，支持图表和数学公式，一键插入 more 标记，一键剪切板及本地图片上传，支持自定义高亮块语法，支持 Emoji 表情选取。
- [x] TOC、草稿、代码复制、访客数、评论数、分类、标签、搜索、加密、友链、打赏、自定义导航栏。
- [x] 多个布局设置，可自定义页面细节。
- [x] 高度客制化，可添加自定义 CSS、HTML 和 JS 代码。
- [x] 支持自定义页面。
- [x] 可添加具有指定权限的协作者。
- [x] 内置图床，并支持各种 OSS 图床、github 图床（外部图床基于 picgo）等。
- [x] 极致轻量化，没有花里胡哨。页面秒切换、图片懒加载。
- [x] 脚本一键部署，多种部署方式，支持 ARM 平台。
- [x] 支持 GA、百度分析
- [x] 简单易用的后台，支持数据的导出与导入。
- [x] 支持 RSS 订阅
- [x] 完善的 API，完全利用本项目后台和服务端，自己写前端或适配其他页面生成器
- [x] 有较完善的日志记录，后台可直接查看登录日志和 Caddy 日志。

## 快速上手/部署教程

### 一键脚本部署

```bash
curl -L https://vanblog.mereith.com/vanblog.sh -o vanblog.sh && chmod +x vanblog.sh && ./vanblog.sh
```

将来如果需要再次运行脚本，可以运行：

```bash
./vanblog.sh
```

### 其他部署方式

具体请移步项目文档：[快速上手](https://vanblog.mereith.com/guide/docker.html)

## 反代

请参考： [反代](https://vanblog.mereith.com/guide/nginx.html)

## 常见问题

> [作者 logo 无法加载](https://vanblog.mereith.com/ref/faq.html#%E5%9B%BE%E7%89%87-%E4%BD%9C%E8%80%85-logo-%E5%8A%A0%E8%BD%BD%E4%B8%8D%E5%87%BA%E6%9D%A5)
>
> [http error](https://vanblog.mereith.com/ref/faq.html#%E9%83%A8%E7%BD%B2%E5%90%8E-http-error)
>
> [docker 镜像拉取慢](https://vanblog.mereith.com/ref/faq.html#docker-%E9%95%9C%E5%83%8F%E6%8B%89%E5%8F%96%E6%85%A2)
>
> [如何外部访问数据库](https://vanblog.mereith.com/ref/faq.html#%E5%A6%82%E4%BD%95%E5%9C%A8%E5%A4%96%E9%83%A8%E8%AE%BF%E9%97%AE%E6%95%B0%E6%8D%AE%E5%BA%93)
>
> [如何回滚](https://vanblog.mereith.com/ref/faq.html#%E5%A6%82%E4%BD%95%E5%9B%9E%E6%BB%9A)
>
> [如何升级](https://vanblog.mereith.com/guide/update.html)
>
> [更新后后台报错||一直加载中](https://vanblog.mereith.com/guide/update.html#%E6%9B%B4%E6%96%B0%E5%90%8E%E5%90%8E%E5%8F%B0%E6%8A%A5%E9%94%99-%E4%B8%80%E7%9B%B4%E5%8A%A0%E8%BD%BD%E4%B8%AD)
>
> [更多常见问题](https://vanblog.mereith.com/ref/faq.html)

## 关于更新

此项目会持续更新的，如果没有恶行 bug（有的话看到了会紧急修复），一般每周发一次新版本。

如果遇到了问题，可以先更新试试看。

## 交流群

- [VanBlog  交流群](https://jq.qq.com/?_wv=1027&k=5NRyK2Sw)

## 说明与文档

请移步项目主页： [https://vanblog.mereith.com](https://vanblog.mereith.com)

## CHANGELOG

[CHANGELOG](CHANGELOG.md)

## 开发指南

- [开发指南](https://vanblog.mereith.com/ref/dev.html)

## 谁在使用

现在可能用的人有一些了吧 - -

如果您想把自己加进来，请提一个 [issue](https://github.com/Mereithhh/van-blog/issues/new/choose)，我会尽快添加的。

- [Mereith's Blog](https://www.mereith.com)
- [前端｜面试进阶之道](https://www.whyknown.com/)
- [小柴の BLOG](https://blog.sepbf.com)
- [handy 的小窝](https://www.handyzyg.cn)
- [GT 的官方博客](https://gt-it.net)
- [無糧不聚兵‘s Blog](https://www.wongcw.cn)
- [oldmoon](https://oldmoon.top)
- [手艺橙](https://blog.shouyicheng.com/)
- [叶继伟 の blog](https://yejiwei.com)
- [seek.wiki](https://seek.wiki)

## TODO

- [x] 精简前台 js 体积，优化性能
- [x] 精简打包体积
- [x] 集成 HTTPS 和自动证书申请续期
- [x] 后台增加登录日志
- [x] 内嵌评论系统
- [x] 支持 ARM64
- [x] 支持 mermaid 语法
- [x] 替换编辑器为 bytemd（掘金同款）（老的编辑器有些臃肿，复制偶尔会有格式会错乱的问题）
- [x] 导入 md 创建文章/草稿功能
- [x] 标签管理
- [x] 黑暗模式图标样式优化
- [x] 内嵌评论的邮件通知和 webhook
- [x] 自定义 css
- [x] 添加自定义 script 标签
- [x] 添加自定义 html 代码
- [x] 可添加具有自定义权限的协作者
- [x] 自定义页面
- [x] RSS 订阅
- [x] 自定义高亮块语法支持
- [x] Emoji 表情选择器
- [x] 自定义导航栏
- [x] 后端性能优化一期（减少不必要的查询， ISR 防抖等）
- [x] Token 管理
- [x] picgo 插件安装
- [x] 忘记密码
- [ ] 快捷分享按钮
- [ ] 完善可自定义上传文件的自定义页面功能（现在的自定义页面有潜在的 css 污染问题）
- [ ] 增加在特定事件后触发执行自定义代码或 webhook 的扩展能力
- [ ] 插件系统
- [ ] 自定义主题（前端渲染器）系统
- [ ] 浏览器消息通知
- [ ] 文章/草稿的历史版本管理
- [ ] 精简配置项，尽可能移动到运行时配置
- [ ] 增加 ORM 层，适配更多数据库
- [ ] 增加一些 e2e 测试，集成到 CI
- [ ] 国际化

## 问题反馈

请提 [issue](https://github.com/Mereithhh/van-blog/issues/new/choose) ，如无特殊情况会在一天内解决。

## 打赏

如果觉得项目不错的话可以打赏哦。您的支持就是我最大的动力！

打赏时您可以备注名称，我会将您添加至打赏列表中。

<p align="center">
  <img  alt="打赏-微信" src="/img/wechat.jpg"  style="width: 200px;margin-right: 4px;" />
  <img  alt="打赏-支付宝" src="/img/ali-pay.jpg"  style="width: 200px" />
</p>

## 捐赠信息

PS：如果打赏时请备注捐赠者，如有遗漏请联系我添加（有时候消息多可能会漏掉，十分抱歉）

| 捐赠者    | 捐赠金额 | 捐赠日期   |
| --------- | -------- | ---------- |
| Sirit     | 6.66 元  | 2022-09-01 |
| jingcheng | 100 元   | 2022-09-06 |
| mosuzi    | 100 元   | 2022-09-08 |
| ym679     | 20 元    | 2022-09-08 |
| wangcw    | 100 元   | 2022-09-13 |
| ziva      | 8.80 元  | 2022-09-15 |
| Velen     | 50 元    | 2022-09-18 |
| pcz       | 50 元    | 2022-10-19 |

## Star 趋势图

[![Star History Chart](https://api.star-history.com/svg?repos=mereithhh/van-blog&type=Date)](https://star-history.com/#mereithhh/van-blog&Date)

## LightHouse 截图

<p align="center"> 
  <img src="/img/lighthouse.png" style="width: 400px"></img>
</p>
