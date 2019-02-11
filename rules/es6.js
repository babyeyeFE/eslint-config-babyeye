/**
 * 这些规则涉及到 ES6 & Beyond
 */
module.exports = {
  rules: {
    // 要求箭头函数体使用大括号
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // 要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'as-needed'],

    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': 'error',

    // 强制在子类构造函数中用 super()调用父类构造函数，TypeScrip 的编译器也会提示
    'constructor-super': 'error',

    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': ['error', { before: true, after: false }],

    // 不允许修改类声明的变量
    'no-class-assign': 'error',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 不允许改变用 const 声明的变量
    'no-const-assign': 'error',

    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',

    // 禁止重复导入
    'no-duplicate-imports': 'error',

    // disallow symbol constructor
    'no-new-symbol': 'error',

    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-restricted-imports': 'off',

    // 在构造函数中禁止在调用 super()之前使用 this 或 super
    'no-this-before-super': 'error',

    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',

    // 禁用不必要的构造函数
    'no-useless-constructor': 'error',

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // 要求对象字面量简写语法
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': 'off',

    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // 优先使用数组和对象解构
    'prefer-destructuring': 'off',

    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': 'error',

    // 建议使用剩余参数代替 arguments
    'prefer-rest-params': 'error',

    // 建议使用扩展运算符而非.apply()
    'prefer-spread': 'warn',

    // 建议使用模板而非字符串连接
    'prefer-template': 'error',

    // 禁用函数内没有yield的 generator 函数
    'require-yield': 'error',

    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error', 'never'],

    // import 排序
    'sort-imports': 'off',

    // 要求 symbol 描述
    'symbol-description': 'error',

    // 强制模板字符串中空格的使用
    'template-curly-spacing': 'error',

    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': ['error', 'before']
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  }
}
