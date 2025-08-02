# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎯 项目概述
这是一个基于 Next.js 的全栈应用模板，采用现代化技术栈和架构设计。项目包含前端客户端、后端 API 服务以及桌面端 Tauri 应用。

## 🛠️ 开发环境与命令

### 客户端开发 (client)
```bash
# 开发服务器
bun dev                    # 启动开发服务器，端口 3333，使用 Turbopack
bun build                 # 构建生产版本
bun start                 # 启动生产服务器
bun lint                  # 使用 Biome 进行代码检查和格式化
```

### 后端开发 (server)
```bash
cd server && bun dev       # 启动 Cloudflare Workers 开发服务器
cd server && bun deploy   # 部署到 Cloudflare Workers
cd server && bun test     # 运行测试
```

### 代码质量工具
- **Biome.js**: 替代 ESLint + Prettier，提供代码检查和格式化
- **Husky + lint-staged**: Git hooks 自动化代码检查
- **Commitizen**: 规范化提交信息

## 🏗️ 架构设计

### 前端架构 (Next.js App Router)
- **目录结构**: `src/app/[locale]/` - 支持国际化的路由结构
- **组件设计**: 基于 Radix UI + Tailwind CSS 的组件系统
- **状态管理**: Zustand + React Query (TanStack Query)
- **国际化**: next-intl 替代 i18next
- **样式**: Tailwind CSS v4 + shadcn/ui 组件库

### 后端架构 (tRPC + Cloudflare Workers)
- **API 层**: tRPC v11 提供类型安全的 RPC 调用
- **数据库**: Prisma ORM + PostgreSQL (Neon/Supabase)
- **运行时**: Cloudflare Workers 无服务器架构
- **缓存**: tRPC Next Cache 链接，5秒重新验证

### 桌面端 (Tauri)
- **原生应用**: 基于 Rust 的 Tauri 桌面应用
- **配置**: `src-tauri/` 目录包含 Tauri 配置

## 📁 关键目录结构

```
src/
├── app/[locale]/          # 国际化路由
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 基础组件
│   ├── common/           # 通用组件
│   ├── cards/            # 卡片组件
│   └── providers/        # 上下文提供者
├── lib/trpc/             # tRPC 客户端配置
├── i18n/                 # 国际化配置
├── layouts/              # 布局组件
└── stores/               # Zustand 状态管理

server/
├── src/                  # 后端源码
│   ├── router.ts         # tRPC 路由定义
│   ├── db.ts            # 数据库连接
│   └── context.ts       # 请求上下文
├── prisma/              # 数据库模式
└── test/                # 测试文件
```

## 🔧 核心技术特性

### 类型安全
- **端到端类型安全**: tRPC + TypeScript + Zod 验证
- **路径映射**: `@/*` 指向 `src/*`，`@server/*` 指向 `server/*`

### 国际化支持
- **多语言路由**: 基于路径前缀的语言切换 (`/zh/`, `/en/`)
- **消息管理**: `messages/` 目录下的 JSON 文件
- **中间件**: 自动语言检测和重定向

### 开发体验
- **热重载**: Next.js + Turbopack 快速开发
- **代码格式化**: Biome.js 统一代码风格
- **类型检查**: TypeScript 严格模式

## 🚀 部署配置

### 前端部署
- **静态导出**: Next.js 支持静态导出 (当前注释状态)
- **图片优化**: 静态导出时禁用图片优化
- **构建优化**: ESLint 在构建时忽略

### 后端部署
- **Cloudflare Workers**: 无服务器部署
- **数据库**: Prisma + Neon/Supabase
- **环境变量**: 通过 Wrangler 配置

## 🔒 安全与验证

### 输入验证
- **Zod Schema**: 所有 tRPC 路由使用 Zod 进行输入验证
- **类型安全**: 编译时类型检查

### 代码质量
- **Git Hooks**: 提交前自动运行代码检查
- **格式化**: Biome.js 确保代码风格一致
- **提交规范**: Conventional Commits 格式

## 📝 开发注意事项

### 代码规范
- 使用 Tab 缩进，宽度 2 个空格
- 单引号字符串，分号结尾
- 80 字符行宽限制
- 避免在 UI 组件中使用数组索引作为 key

### 组件开发
- 优先使用 Server Components
- 客户端组件使用 `'use client'` 指令
- 遵循 Radix UI + Tailwind CSS 的设计模式

### API 开发
- 所有 API 通过 tRPC 路由定义
- 使用 Prisma 进行数据库操作
- 利用 Zod 进行输入输出验证
