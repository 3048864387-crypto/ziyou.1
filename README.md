# 自由视界 AI · Cloudflare Workers 部署版

这是自由视界 AI 公司官网的静态部署项目，已配置为通过 GitHub 自动部署到 Cloudflare Workers。

## Cloudflare 自动部署

仓库根目录已经提供 `wrangler.jsonc`。Cloudflare 运行 `npx wrangler deploy` 时会自动：

1. 执行 `npm run build`。
2. 将 Next.js 静态网站输出到 `out/`。
3. 上传 `out/` 内的 HTML、CSS、JavaScript、Logo 和图片。

Cloudflare 项目设置：

- 根目录：`/`
- 构建命令：可以留空；`wrangler.jsonc` 会自动执行构建
- 部署命令：`npx wrangler deploy`
- 非生产分支部署命令：`npx wrangler versions upload`
- Node.js：22.13.0 或更高版本

## 本地检查

```bash
npm ci
npm run build
npx wrangler deploy --dry-run
```

## 更新样片

样片分类和占位数据位于 `app/company-site.tsx` 的 `sampleCategories`。收到正式视频后，将对应 `src` 替换为视频地址或静态文件路径即可。
