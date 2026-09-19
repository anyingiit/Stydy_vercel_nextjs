[English](README.md) · **简体中文**

> 英文版是规范版本。本页与 [README.md](README.md) 不一致时，以英文版为准。

<!-- translation-of: README.md sha256:c22beb415274958c -->

<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# Stydy Vercel Nextjs

本仓库是一个未经改动的 create-next-app 脚手架，用于生成 Next.js 12 应用，只包含默认的 Pages Router 欢迎页面和一个示例 API 路由，没有在此之上添加任何自定义业务代码。

[![CI](https://github.com/anyingiit/Stydy_vercel_nextjs/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/Stydy_vercel_nextjs/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/Stydy_vercel_nextjs)](LICENSE)

[报告问题](https://github.com/anyingiit/Stydy_vercel_nextjs/issues/new?template=bug_report.yml) · [提出需求](https://github.com/anyingiit/Stydy_vercel_nextjs/issues/new?template=feature_request.yml)

<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#about-the-project">关于本项目</a></li>
    <li><a href="#getting-started">开始使用</a></li>
    <li><a href="#usage">用法</a></li>
    <li><a href="#contributing">参与贡献</a></li>
    <li><a href="#license">许可证</a></li>
    <li><a href="#contact">联系方式</a></li>
  </ol>
</details>

## 关于本项目

本仓库是一个未经改动的 create-next-app 脚手架，用于生成 Next.js 12 应用，只包含默认的 Pages Router 欢迎页面和一个示例 API 路由，没有在此之上添加任何自定义业务代码。

`pages/index.js` 仍然渲染着脚手架自动生成的欢迎页面，页面上的链接指向 Next.js 官方文档、Next.js Learn 课程和 Vercel 自家的部署流程；`pages/api/hello.js` 则是脚手架自带的示例 API 路由，始终返回 `{ "name": "John Doe" }`。`package.json` 将 `next` 锁定在 12.1.0、配合 React 17，并定义了四个标准脚本（`dev`、`build`、`start`、`lint`）；除了 `create-next-app` 生成的内容之外，没有添加任何东西。

计划中的功能与已知问题，见 [open issues](https://github.com/anyingiit/Stydy_vercel_nextjs/issues)。

## 开始使用

### 环境要求

- 一个能够运行 Next.js 12 的 Node.js 运行时（参见 [`package.json`](package.json) 中的 `next` 依赖）
- Yarn，因为依赖版本锁定在 [`yarn.lock`](yarn.lock) 中，而不是 `package-lock.json`

### 安装

```sh
git clone https://github.com/anyingiit/Stydy_vercel_nextjs.git
cd Stydy_vercel_nextjs
yarn install
```

## 用法

```sh
yarn dev
```

这会在 http://localhost:3000 启动 Next.js 开发服务器，提供自动生成的欢迎页面，以及位于 `/api/hello` 的示例 API 路由所返回的 `{ "name": "John Doe" }`。

## 参与贡献

欢迎参与。[CONTRIBUTING.md](CONTRIBUTING.md) 说明如何提交 issue 或 pull request，[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 说明对所有参与者的行为要求。

请不要在公开的 issue 或 pull request 中报告安全问题。[SECURITY.md](SECURITY.md) 说明了私下报告的方式。

## 许可证

以 MIT 许可证分发。详见 [LICENSE](LICENSE)。

## 联系方式

项目地址：[https://github.com/anyingiit/Stydy_vercel_nextjs](https://github.com/anyingiit/Stydy_vercel_nextjs)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
