# eslint-config-babyeye

## 安装 [Installation]

```
$ npm i eslint eslint-config-babyeye -D
# or
$ yarn add eslint eslint-config-babyeye -D
```

## 使用 [Usage]

**eslint-config-babyeye**

在 `.eslintrc` 中

```json
{
  "extends": "babyeye",
  "rules": {
    // 额外的自定义规则
  }
}
```

在 `.eslintrc.js` 中

```js
module.exports = {
  "extends": "babyeye",
  "rules": {
    // 额外的自定义规则
  }
}
```

在 `package.json` 中

```json
{
  "eslintConfig": {
    "extends": "eslint-config-babyeye"
  }
}
```

