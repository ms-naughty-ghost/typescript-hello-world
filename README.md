# Create Project
1. 最新のyarnをインストールします。
```
npm install -g yarn
```
2. プロジェクトリポジトリに移動します。
3. create package.json
```
yarn init
```
1. パッケージの追加。
```
yarn add --dev typescript ts-node @types/node
```
1. create tsconfig.json
```
yarn tsc --init
```

# Linter導入
- ESLint install
```
yarn add --dev eslint
```
- `yarn eslint --init`コマンドで対話式で構成ファイル作成
1. How would you like to use ESLint?  
`To check syntax and find problems`
1. What type of modules does your project use?  
`JavaScript modules (import/export)`
1. Which framework does your project use?  
`None of these`
1. Does your project use TypeScript?  
`Yes`
1. Where does your code run?
```
  Browser
√ Node
```
6. How would you like to define a style for your project?  
`To check syntax, find problems, and enforce code style`
1. Which style guide do you want to follow?  
`Airbnb: https://github.com/airbnb/javascript`
1. What format do you want your config file to be in?  
`JSON`
1. Would you like to install them now with npm?  
`Yes`
- eslintの設定ファイルが生成されます
# Prettier 導入&実行
- Prettier install
```
yarn add --dev prettier eslint-config-prettier
```
- .eslint.jsにPrettierの項目を追加する
```
module.exports = {
  /* 中略 */
  extends: [
    /* 中略 */
    "prettier", // 追加。他の設定の上書きを行うために、必ず最後に配置する。
  ],
};
```
- Prettier 設定ファイル作成
[フォーマット設定](https://prettier.io/docs/en/options.html)はここに記述
```
echo "{}"> .prettierrc.json
```
- prettierの対象外になるファイルを設定する`.prettierignore`を作成
```
touch .prettierignore
```
ファイル記述例
```
# Ignore artifacts:
node_modules
package.json
yarn.lock
tsconfig.json
.eslintrc.json
```

# package.json
scriptに実行コマンドをまとめる
```
"format": "prettier --write src/**/*.{js,ts,json}",
"lint": "eslint src/**/*.ts",
"lint:fix": "yarn run format && yarn run lint"
```

# hot reload
`tsc --watch`と`nodemon`を組み合わせる
- `nodemon.json`ファイルを作成し、下記の設定を追記する
```
{
  "watch": ["build"],
  "ext": "js",
  "ignore": [""],
  "delay": "1000",
  "exec": "node build/app.js"
}
```
- package,jsonにコマンドを追加する
```
"build": "tsc --watch",
"watch": "nodemon",
```
- buildとwatchを両方実行する