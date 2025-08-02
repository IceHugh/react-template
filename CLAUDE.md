# CLAUDE.md — 全栈实践指南（Next.js + Prisma + tRPC 等）

## 🎯 技术栈一览
- **框架**：Next.js（App Router + Server/Client 组件）
- **语言**：TypeScript + Biome.js（替代 ESLint/Prettier 的高性能格式化工具）
- **UI**：Tailwind CSS + shadcn/ui
- **数据库**：Prisma ORM + Neon (PostgreSQL Serverless) 或 Supabase
- **运行时**：Node.js 或 Bun
- **API**：tRPC v10（类型安全 RPC）
- **部署**：Vercel / Edge / Serverless

---

## 1. 项目初始化
- **Next.js + TypeScript**：`npx create-next-app@latest --ts`
- **Biome.js**：项目中集成 `.biomerc`，替代 ESLint/Prettier 提供统一格式；
- **Bun 支持**：`bunx create-next-app` + `bun add` 安装依赖。

---

## 2. UI 层设计
- **Tailwind 工程化**：启用 `tailwind.config.js` content 路径，CSS 原子化。
- **shadcn/ui**：利用组件库快速构建高质量 UI，符合设计系统标准  [oai_citation:0‡Medium](https://medium.com/%40aji658911/setup-next-js-14-shadcn-ui-fa8f419f7f6e?utm_source=chatgpt.com) [oai_citation:1‡DEV Community](https://dev.to/showcase/neon/nextjs-tutorial-2025?utm_source=chatgpt.com) [oai_citation:2‡GitHub](https://github.com/blefnk/awesome-github-repos?utm_source=chatgpt.com) [oai_citation:3‡CodevoWeb](https://codevoweb.com/how-to-setup-prisma-orm-in-nextjs-13-app-directory/?utm_source=chatgpt.com) [oai_citation:4‡DEV Community](https://dev.to/franciscomendes10866/build-a-full-stack-app-with-nextjs-tailwind-trpc-and-prisma-orm-4ail/comments?utm_source=chatgpt.com)。

---

## 3. 数据层 & ORM（Prisma + Neon/Supabase）
- **Prisma 配置**：在 `schema.prisma` 定义模型，使用 Neon 或 Supabase 提供的数据库连接 ()。
- **迁移与生成**：使用 `prisma migrate dev`，自动更新数据库及 Prisma client。
- **在 Next.js App Router 中使用**：在 server components/API handler 中直接调用 Prisma  [oai_citation:5‡JavaScript in Plain English](https://javascript.plainenglish.io/setting-up-nextjs-with-trpc-and-prisma-c4118882b531?utm_source=chatgpt.com)。

---

## 4. 类型安全 API（tRPC v10）
- **依赖安装**：`bun add @trpc/server @trpc/client @trpc/react-query @trpc/next zod superjson`  [oai_citation:6‡JavaScript in Plain English](https://javascript.plainenglish.io/setting-up-nextjs-with-trpc-and-prisma-c4118882b531?utm_source=chatgpt.com)。
- **服务端**：构建 `src/server/trpc.ts` 和 router，在 `app/api/trpc/route.ts` 设置 handler  [oai_citation:7‡JavaScript in Plain English](https://javascript.plainenglish.io/setting-up-nextjs-with-trpc-and-prisma-c4118882b531?utm_source=chatgpt.com)。
- **客户端**：使用 `createTRPCNext` 生成强类型 hooks，配合 React Query 状态管理  [oai_citation:8‡trpc.io](https://trpc.io/docs/v10/client/nextjs/setup?utm_source=chatgpt.com)。

---

## 5. Neon / Supabase 选择建议
- **Neon**：适用于可自动扩缩、支持分支数据库等 PostgreSQL Serverless 场景  [oai_citation:9‡DEV Community](https://dev.to/showcase/neon/nextjs-tutorial-2025?utm_source=chatgpt.com)。
- **Supabase**：除 DB 外还提供 Auth、实时功能，用于快速搭建 MVP  [oai_citation:10‡Medium](https://medium.com/%40edanisko/nextjs-tailwindcss-supabase-prisma-c80ab2451f64?utm_source=chatgpt.com)。

---

## 6. 运行环境 & 构建优化
- **Bun 运行时**：通过 `bun` 安装依赖、运行开发/构建脚本，提升速度。
- **生产构建**：Next.js 构建输出目标至 Edge/Serverless。
- **Biome.js 检查**：集成 CI，对 PR 执行代码规范及格式检查。

---

## 7. 安全、验证与边界保护
- **输入校验**：tRPC 路由使用 Zod 强验证输入输出结构。
- **认证方案**：前端可配合 NextAuth.js、Clerk 或 Supabase Auth 集成。
- **授权控制**：在 tRPC middleware 中插入用户角色、RBAC 检查机制。

---

## 8. 性能与优化
- **SSR/SG/ISR**：结合 App Router 控制 Server/Client 组件渲染范围。
- **懒加载 & 分包**：按页面或组件代码分割（`dynamic()`），减少 bundle 大小。
- **缓存策略**：设置 Cache-Control / stale-while-revalidate 标头。

---

## 9. 测试与 CI/CD
- **Biome CI 整合**：Pre-commit/CI 阶段格式校验；
- **测试**：Jest 单元 + React Testing Library + Playwright E2E；
- **部署流水线**：GitHub Actions → Vercel，或推送触发 Edge 部署。

---

## 一句总结
> 构建类型安全、可扩展、性能优秀的全栈 app：**Next.js + TypeScript + tRPC + Prisma + Tailwind + shadcn + 安全/CI/CD**。
