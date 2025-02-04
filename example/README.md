# eslint-plugin-no-margins-example

## how to run

```shell
# npm
npm install
npm run lint

# yarn
yarn install
yarn lint

# pnpm
pnpm install
pnpm run lint
```

## result

```shell
yarn lint
yarn run v1.22.22
$ eslint .

path/eslint-plugin-no-margins/example/src/App.jsx
  11:21  warning  Avoid using 'marginTop' in your components     no-margins/no-margins-inline
  11:42  warning  Avoid using 'marginBottom' in your components  no-margins/no-margins-inline

✖ 2 problems (0 errors, 2 warnings)
```
