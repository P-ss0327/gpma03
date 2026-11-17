# 广东省项目管理协会官网｜前端交付包

打包日期：2026-10-10（北京时间）
来源：当前 http://127.0.0.1:5181/ 使用的本地项目 gpma-homepage-variant-a。
本包包含可编辑的 React 源代码，不是从线上抓取的静态文件。原项目与网站均未修改，未重新发布。

## 环境与运行

建议使用 Node.js 22 LTS 和随附 npm。在解压后的项目根目录执行：

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5181 --strictPort
```

浏览器访问 http://127.0.0.1:5181/ 。服务必须保持运行；若端口被占用，可更换端口。
依赖安装需要联网。已保留原始 package.json、package-lock.json、pnpm-lock.yaml、pnpm-workspace.yaml 和 .npmrc；优先使用 npm ci 按 npm 锁文件安装，不要混用包管理器。

## 构建、预览和已有测试

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 5182
npm run test:sites
```

构建输出：dist/client（网页静态文件）、dist/server/index.js 和 dist/.openai/hosting.json（已有 Sites 适配文件）。build 只在本地生成产物，不会发布。
本次交付未重新构建；ZIP 文件完整性与各原始文件 SHA-256 已校验。已有 dist 未打入包内，以免旧产物与当前源代码混淆。

## 目录

- src/：页面、样式、编辑器和新闻/公告内容配置。
- public/：全部已有本地图片、字体等静态资源、新闻正文 JSON、公告附件。
- scripts/：已有构建准备与内容同步脚本。
- worker/、tests/、.openai/：已有托管适配、测试与托管配置，原样保留。
- AGENTS.md、design-qa.md：项目约定与已有设计检查记录。
- 文件校验清单.json：原始文件相对路径、字节数和 SHA-256。

node_modules、开发缓存、旧构建产物和 QA 截图未打包。通过 npm ci 重建依赖。

## 接手注意

项目保留部分外部资源/服务引用，例如地图 iframe、二维码服务、部分专家照片和外部链接；这些内容仍需联网，并非所有外部资源均已本地化。public/ 下所有现有本地资源已完整包含。
本包不包含浏览器 localStorage 中的编辑草稿；如页面曾在 ?edit=1 下保存个人草稿，需另行从编辑器导出 JSON。
当前包为前端项目，未发现独立业务后台或数据库交付目录；worker 为现有静态托管适配。
.openai/hosting.json 保留原项目标识，接手开发无需发布；未来迁移托管时请自行配置目标项目。
内容同步脚本会访问原官网并改写本地内容文件，普通启动无需执行。
