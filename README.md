## 环境
| 组件   | 版本 | 备注  |
|------|--|-----|
| NODE | v20.12.1| --- |

## 框架
本应用程序使用以下框架构建：

- [Safe Core SDK](https://github.com/safe-global/safe-core-sdk)
- [Safe Gateway SDK](https://github.com/safe-global/safe-gateway-typescript-sdk)
- Next.js
- React
- Redux
- MUI
- ethers.js
- web3-onboard

## 使用本地环境进行启动

### 环境变量

创建一个包含环境变量的 `.env` 文件。您可以使用`.env.example`文件作为参考。  

下面是所有环境变量的列表：   

| Env variable                                      | Description                                                                                                                                                             |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_INFURA_TOKEN`                        | [Infura](https://docs.infura.io/infura/networks/ethereum/how-to/secure-a-project/project-id) RPC API token                                                              |
| `NEXT_PUBLIC_SAFE_APPS_INFURA_TOKEN`              | Infura token for Safe Apps, falls back to `NEXT_PUBLIC_INFURA_TOKEN`                                                                                                    |
| `NEXT_PUBLIC_IS_PRODUCTION`                       | Set to `true` to build a minified production app                                                                                                                        |
| `NEXT_PUBLIC_GATEWAY_URL_PRODUCTION`              | The base URL for the [Safe Client Gateway](https://github.com/safe-global/safe-client-gateway)                                                                          |
| `NEXT_PUBLIC_GATEWAY_URL_STAGING`                 | The base CGW URL on staging                                                                                                                                             |
| `NEXT_PUBLIC_SAFE_VERSION`                        | The latest version of the Safe contract, defaults to 1.4.1                                                                                                              |
| `NEXT_PUBLIC_WC_PROJECT_ID`                       | [WalletConnect v2](https://docs.walletconnect.com/2.0/cloud/relay) project ID                                                                                           |
| `NEXT_PUBLIC_TENDERLY_ORG_NAME`                   | [Tenderly](https://tenderly.co) org name for Transaction Simulation                                                                                                     |
| `NEXT_PUBLIC_TENDERLY_PROJECT_NAME`               | Tenderly project name                                                                                                                                                   |
| `NEXT_PUBLIC_TENDERLY_SIMULATE_ENDPOINT_URL`      | Tenderly simulation URL                                                                                                                                                 |
| `NEXT_PUBLIC_BEAMER_ID`                           | [Beamer](https://www.getbeamer.com) is a news feed for in-app announcements                                                                                             |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID`               | [GTM](https://tagmanager.google.com) project id                                                                                                                         |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH` | Dev GTM key                                                                                                                                                             |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_LATEST_AUTH`      | Preview GTM key                                                                                                                                                         |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_LIVE_AUTH`        | Production GTM key                                                                                                                                                      |
| `NEXT_PUBLIC_SENTRY_DSN`                          | [Sentry](https://sentry.io) id for tracking runtime errors                                                                                                              |
| `NEXT_PUBLIC_IS_OFFICIAL_HOST`                    | Whether it's the official distribution of the app, or a fork; has legal implications. Set to true only if you also update the legal pages like Imprint and Terms of use |
| `NEXT_PUBLIC_REDEFINE_API`                        | Redefine API base URL                                                                                                                                                   |
| `NEXT_PUBLIC_FIREBASE_OPTIONS_PRODUCTION`         | Firebase Cloud Messaging (FCM) `initializeApp` options on production                                                                                                    |
| `NEXT_PUBLIC_FIREBASE_VAPID_KEY_PRODUCTION`       | FCM vapid key on production                                                                                                                                             |
| `NEXT_PUBLIC_FIREBASE_OPTIONS_STAGING`            | FCM `initializeApp` options on staging                                                                                                                                  |
| `NEXT_PUBLIC_FIREBASE_VAPID_KEY_STAGING`          | FCM vapid key on staging                                                                                                                                                |
| `NEXT_PUBLIC_SPINDL_SDK_KEY`                      | [Spindl](http://spindl.xyz) SDK key                                                                                                                                     |

如果不提供某些变量，用户界面中相应的功能将被禁用。

### 运行本地的应用

安装依赖

```bash
yarn
```

Generate types:

```bash
yarn postinstall
```

运行开发环境:

```bash
yarn start
```

使用浏览器打开[http://localhost:3000](http://localhost:3000)查看应用

## Lint

ESLint:

```
yarn lint --fix
```

Prettier:

```
yarn prettier
```

## Tests

Unit tests:

```
yarn test --watch
```

### Cypress tests

Build a static site:

```
yarn build
```

Serve the static files:

```
yarn serve
```

Launch the Cypress UI:

```
yarn cypress:open
```

You can then choose which e2e tests to run.
Some tests will require signer private keys, please include them in your .env file

## Component template

To create a new component from a template:

```
yarn cmp MyNewComponent
```

## Pre-push hooks

This repo has a pre-push hook that runs the linter (always) and the tests (if the `RUN_TESTS_ON_PUSH` env variable is set to true)
before pushing. If you want to skip the hooks, you can use the `--no-verify` flag.
