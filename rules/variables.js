/**
 * 这些规则和变量声明有关
 */
module.exports = {
  rules: {
    // 强制或禁止变量声明语句中初始化
    'init-declarations': 'off',

    // 不允许在 catch 语句中遮盖变量
    'no-catch-shadow': 'off',

    // 禁止删除变量
    'no-delete-var': 'error',

    // 禁用与变量同名的标签
    'no-label-var': 'error',

    // 禁用特定的全局变量
    'no-restricted-globals': 'off',

    // 禁止变量声明覆盖外层作用域的变量
    'no-shadow': 'off',

    // 关键字不能被遮蔽
    'no-shadow-restricted-names': 'error',

    // 禁用未声明的变量
    'no-undef': 'error',

    // 不允许初始化变量值为 undefined
    'no-undef-init': 'error',

    // 不允许使用 undefined 变量
    'no-undefined': 'error',

    // 禁止未使用过的变量
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],

    // 禁止定义前使用
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  }
}