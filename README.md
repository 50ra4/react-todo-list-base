# react-todo-list-base

[![CI](https://github.com/50ra4/react-todo-list-base/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/50ra4/react-todo-list-base/actions/workflows/ci.yml)
[![Deploy to Github Pages](https://github.com/50ra4/react-todo-list-base/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/50ra4/react-todo-list-base/actions/workflows/deploy-gh-pages.yml)
[![pages-build-deployment](https://github.com/50ra4/react-todo-list-base/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/50ra4/react-todo-list-base/actions/workflows/pages/pages-build-deployment)

- [Deployed Page](https://50ra4.github.io/react-todo-list-base/)
- [Storybook](https://50ra4.github.io/react-todo-list-base/storybook/)
- [TypeDoc](https://50ra4.github.io/react-todo-list-base/typedoc/)

このプロジェクトは Vite、TypeScript、React を用いた タスク管理の Web アプリケーション開発向けの Template です。

その他、以下のような Package を利用しています。

| for what     | package                                             |
| ------------ | --------------------------------------------------- |
| Styling      | [TailwindCSS](https://tailwindcss.com/)             |
| Validation   | [Zod](https://zod.dev/)                             |
| Form         | [React Hook Form](https://www.react-hook-form.com/) |
| Date library | [date-fns](https://date-fns.org/)                   |

## Setup

`git clone`後、プロジェクト直下で npm package の依存関係を install します。

```
npm i
```

別途、node.js（18.15.0）が必要です。

## Build

Vite を利用して、ソースコードを build します。
実行するとプロジェクト直下の dist のディレクトリに展開します。

```
npm run build
```

## Testing

Jest や `@testing-library/react` を用いて、テストを実行します。

```
npm run test
```

開発中にテストを実行する場合、Jest の watch オプションを追加することでソースファイルが変更される度にテストを実行します。

```
npm run test -- --watch
```

## Dev Server

Vite の plugin を利用して、HMR で開発できます。

```
npm run dev
```

## Linting

ESLint を利用し、Lint を実行しています。

```
npm run lint:eslint
```

VSCode の拡張機能と併用することで、ファイル保存時に実行します。
また、husky と併せて利用しており、commit 時にチェックを実行しているため、エラー状態での commit を抑止します。

## Formatting

prettier を利用し、コードの整形を行なっています。

```
npm run lint:prettier
```

VSCode の拡張機能と併用することで、ファイル保存時に実行します。
また、husky と併せて利用しており、commit 時にチェックを実行し、自動で整形します。

## Storybook

作成したコンポーネントの storybook を作成することで、作成したコンポーネントを確認できます

```
npm run storybook
```

静的ビルドすることも可能です。

```
npm run build-storybook
```

## TypeDoc

作成した関数などの仕様を TypeDoc を使ってドキュメント化することができます。

```
npm run build-typedoc
```

## CI

github actions を用いて CI を実行しています。
CI では、型定義、ビルド、testing を実行し、失敗しないことを確認できます。
ブランチを remote に push したタイミングで実行されます

## CD

github actions を用いて、作成した Web アプリケーションと storybook と TypeDoc を Github Pages に公開します。
（github pages に公開するには、別途 github 上での設定が必要です）

```
npm run generate-gh-pages
```
