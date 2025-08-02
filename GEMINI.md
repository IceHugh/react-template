好的，去掉目录结构后的版本如下：

# GEMINI.md — AI 协作指引

此文件为 Gemini CLI 或 AI 伙伴使用指南，帮助 AI 理解项目结构、编码规范、开发流程，提高协作质量。

---

## 📋 项目简介
- **目标**：构建类型安全、性能优秀的全栈 Web 应用。
- **技术栈**：
  - Next.js（App Router, SSR/ISR）
  - TypeScript
  - TailwindCSS + shadcn/ui
  - tRPC（类型安全 API）
  - Prisma ORM + Neon 或 Supabase
  - Biome.js（格式化+检查）
  - Bun（可选运行时）
  - 部署：Vercel / Edge / Serverless

---

## 🚀 开发规范
- 语言：**TypeScript**
- 格式化 & 检查：**Biome.js**
- CSS：仅用 Tailwind 原子类
- 组件：使用 shadcn/ui 组件标准
- API：tRPC + Zod 校验，强类型
- 运行：`bun dev` 或 `npm run dev`
- 构建：`next build`

---

## 🤖 AI 行为规范
- 生成/修改前，请先确认意图，例如：
  > “你希望我创建一个 User 模块的 router 吗？”
- 修改后请运行 Biome 检查并格式化代码。
- 每次新增功能建议生成相应的单元测试。
- 使用 tRPC 时必须校验输入/输出类型。
- 不应输出包含密钥或敏感信息的代码，相关配置请放入 `.env` 文件。
- 确保所有生成的代码可在本地跑通（`bun dev` 或 `npm run dev`）。

---

## 🔐 安全 & 性能
- 用户输入需严格验证，避免 XSS/SQL 注入。
- 推荐开启 CSP 头。
- 尽量采用 SSR/ISR 及动态导入优化性能。
- 合理使用缓存和数据库索引提升效率。

---

## ✨ 总结
> 以高质量、可维护、类型安全为目标，遵循本文件约定协作。发现新的约定或规范时，请更新此文件。
