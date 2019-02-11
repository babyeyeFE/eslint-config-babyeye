/**
 * 这些规则和最佳实践相关，能帮助我们少出错
 */
module.exports = {
  rules: {
    // 强制 getter/setter 成对出现在对象中
    'accessor-pairs': 'off',

    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',

    // 把 var 语句看作是在块级作用域范围之内
    'block-scoped-var': 'error',

    // 强制类方法使用 this
    'class-methods-use-this': 'error',

    // 限制圈复杂度
    'complexity': [2, 9],

    // 要求使用一致的 return 语句
    'consistent-return': 'off',

    // 要求遵循大括号约定
    'curly': ['error', 'multi-line'],

    // 要求 Switch 语句中有 Default 分支
    'default-case': 'error',

    // 强制在点号之前或之后换行
    'dot-location': ['error', 'property'],

    // 要求使用点号
    'dot-notation': ['error', { allowKeywords: true }],

    // 要求使用 === 或 !==
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // 需要约束 for-in
    'guard-for-in': 'off',

    // 禁用 Alert
    'no-alert': 'off',

    // 禁用 caller 或 callee
    'no-caller': 'error',

    // 禁止在 case 或 default 子句中出现词法声明
    'no-case-declarations': 'error',

    // 禁止使用看起来像除法的正则表达式
    'no-div-regex': 'off',

    // 禁止在 else 前有 return
    'no-else-return': 'error',

    // 禁止出现空函数
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // 禁止使用空解构模式
    'no-empty-pattern': 'error',

    // 禁止与 null 进行比较
    'no-eq-null': 'off',

    // 禁止使用 eval()
    'no-eval': 'error',

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的函数绑定
    'no-extra-bind': 'error',

    // 禁用不必要的标签
    'no-extra-label': 'error',

    // 禁止 case 语句落空
    'no-fallthrough': 'error',

    // 禁止浮点小数
    'no-floating-decimal': 'error',

    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',

    // 禁止使用较短的符号实现类型转换
    'no-implicit-coercion': 'off',

    // 禁止在全局范围使用变量和函数声明
    'no-implicit-globals': 'off',

    // 禁用隐式的 eval()
    'no-implied-eval': 'error',

    // 禁止 this 关键字在类或类对象之外出现
    'no-invalid-this': 'off',

    // 禁用迭代器 __iterator__ property
    'no-iterator': 'error',

    // 禁用标签语句
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',

    // 禁止循环中存在函数
    'no-loop-func': 'error',

    // 禁止使用 magic numbers
    'no-magic-numbers': 'off',

    // 禁止出现多个空格
    'no-multi-spaces': 'error',

    // 禁止多行字符串
    'no-multi-str': 'error',

    // 禁止使用 new 以避免产生副作用
    'no-new': 'error',

    // 禁用 Function 构造函数
    'no-new-func': 'error',

    // 禁止原始包装实例
    'no-new-wrappers': 'error',

    // 禁用八进制字面量
    'no-octal': 'error',

    // 禁止在字符串字面量中使用八进制转义序列
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // 禁止对函数参数再赋值
    'no-param-reassign': 'off',

    // 禁用 __proto__
    'no-proto': 'error',

    // 禁止重新声明变量
    'no-redeclare': 'error',

    // 禁止使用对象的某些属性
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],

    // 禁止在返回语句中赋值
    'no-return-assign': 'error',

    // 禁用不必要的 return await
    'no-return-await': 'error',

    // 禁用 Script URL
    // 例如: location.href = 'javascript:void(0)'
    'no-script-url': 'error',

    // 禁止自身赋值
    'no-self-assign': 'error',

    // 禁止自身比较
    'no-self-compare': 'error',

    // 不允许使用逗号操作符
    'no-sequences': 'error',

    // 限制可以被抛出的异常
    'no-throw-literal': 'error',

    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'off',

    // 禁止未使用过的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],

    // 禁用未使用过的标签
    'no-unused-labels': 'error',

    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'error',

    // 禁止没有必要的字符拼接
    'no-useless-concat': 'error',

    // 禁用不必要的转义
    'no-useless-escape': 'error',

    // 禁止多余的 return 语句
    'no-useless-return': 'error',

    // 禁止使用void操作符
    'no-void': 'error',

    // 禁用警告注释
    'no-warning-comments': 'off',

    // 禁用 with 语句
    'no-with': 'error',

    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],

    // 要求必须有基数
    'radix': 'off',

    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'off',

    // 要求将变量声明放在它们作用域的顶部
    'vars-on-top': 'off',

    // 需要把立即执行的函数包裹起来
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],

    // 要求或者禁止Yoda条件
    'yoda': ['error', 'never']
  }
}