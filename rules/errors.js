/**
 * 这些规则可能和 JS 一些语法和逻辑错误相关
 */

module.exports = {
  rules: {
    // 禁止在循环中 出现 await
   'no-await-in-loop': 'error',

   // 禁止与 -0 进行比较
   'no-compare-neg-zero': 'off',

   // 禁止条件表达式中出现赋值操作符
   'no-cond-assign': ['error', 'always'],

   // 禁止使用 console
   'no-console': 'off',

   // 禁止在条件中使用常量表达式
   'no-constant-condition': ['error', { 'checkLoops': false }],

   // 禁止在正则表达式中使用控制字符
   'no-control-regex': 'error',

   // 禁用 debugger
   'no-debugger': 'error',

   // 禁止 function 定义中出现重名参数
   'no-dupe-args': 'error',

   // 禁止对象字面量中出现重复的 key
   'no-dupe-keys': 'error',

   // switch case 中禁止重复 case 标签
   'no-duplicate-case': 'error',

   // 禁止空语句块
   'no-empty': 'error',

   // 禁止在正则表达式中使用空字符集 (/^abc[]/)
   'no-empty-character-class': 'error',

   // 禁止对 catch 子句中的异常重新赋值
   'no-ex-assign': 'error',

   // 禁止不必要的布尔类型转换
   'no-extra-boolean-cast': 'error',

   // 禁止冗余括号
   'no-extra-parens': ['error', 'functions'],

   // 禁用不必要的分号
   'no-extra-semi': 'error',

   // 禁止对 function 声明重新赋值
   'no-func-assign': 'error',

   // 禁止在嵌套的块中出现 function 或 var 声明
   'no-inner-declarations': ['error', 'functions'],

   // 禁止 RegExp 构造函数中无效的正则表达式字符串
   'no-invalid-regexp': 'error',

   // 禁止在字符串和注释之外不规则的空白
   'no-irregular-whitespace': 'error',

   // 禁止把全局对象 (Math 和 JSON) 作为函数调用  错误：const math = Math()
   'no-obj-calls': 'error',

   // 禁止直接使用 Object.prototypes 的内置属性
   'no-prototype-builtins': 'off',

   // 禁止正则表达式字面量中出现多个空格
   'no-regex-spaces': 'error',

   // 禁用稀疏数组
   'no-sparse-arrays': 'error',

   // 禁止在常规字符串中出现模板字面量占位符语法 错误：'Hello ${name}!'
   'no-template-curly-in-string': 'error',

   // 禁止出现令人困惑的多行表达式
   'no-unexpected-multiline': 'error',

   // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
   /**
    * 错误：
    * function foo() {
    *   return true
    *   console.log('done')
    * }
    */
   'no-unreachable': 'error',

   // 禁止在 finally 语句块中出现控制流语句
   'no-unsafe-finally': 'error',

   // 禁止对关系运算符的左操作数使用否定操作符 错误：if (!key in object) { ... }
   'no-unsafe-negation': 'error',

   // 要求调用 isNaN()检查 NaN
   'use-isnan': 'error',

   // 强制使用有效的 JSDoc 注释
   'valid-jsdoc': 'off',

   // 强制 typeof 表达式与有效的字符串进行比较
   'valid-typeof': ['error', { requireStringLiterals: true }],
  }
}