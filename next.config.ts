import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  // output: "export" as const, // 启用静态导出
  trailingSlash: true,
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(config);
