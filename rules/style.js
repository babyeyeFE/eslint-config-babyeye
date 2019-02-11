/**
 * 这些规则和代码风格相关
 */
module.exports = {
  rules: {
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': ['error', 'never'],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',

    // 大括号风格要求
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 要求使用驼峰写法
    'camelcase': 'off',

    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 'off',

    // 要求或禁止使用拖尾逗号, never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'never'
    }],

    // 强制在逗号周围使用空格
    'comma-spacing': ['error', { before: false, after: true }],

    // 逗号风格
    'comma-style': ['error', 'last'],

    // 禁止或强制在计算属性中使用空格
    'computed-property-spacing': ['error', 'never'],

    // 要求一致的 This
    'consistent-this': 'off',

    // 要求或禁止文件末尾保留一行空行
    'eol-last': 'error',

    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],

    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 'off',

    // 要求或禁止命名的 function 表达式
    'func-names': 'off',

    // 强制 function 声明或表达式的一致性
    'func-style': 'off',

    // 禁止使用指定的标识符
    'id-blacklist': 'off',

    // 强制标识符的最大和最小长度
    'id-length': 'off',

    // 要求标识符匹配特定的正则表达式
    'id-match': 'off',

    // 强制使用一致的缩进
    'indent': ['error', 2, { SwitchCase: 1 }],

    // 强制在 JSX 属性中使用一致的单引号或双引号
    'jsx-quotes': 'off',

    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 强制关键字周围空格的一致性
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    // 强制行注释的位置
    'line-comment-position': 'off',

    // 强制使用一致的换行符风格
    'linebreak-style': 'off',

    // 强制注释周围有空行
    'lines-around-comment': ['warn', { 'beforeBlockComment': true }],

    // 要求或禁止指令旁的新的一行
    'lines-around-directive': 'off',

    // 强制块语句的最大可嵌套深度
    'max-depth': 'off',

    // 强制一行的最大长度
    'max-len': 'off',

    // 强制最大行数
    'max-lines': 'off',

    // 强制回调函数最大嵌套深度 5层
    'max-nested-callbacks': [1, 5],

    // 强制 function 定义中最多允许的参数数量
    'max-params': [1, 5],

    // 强制 function 块最多允许的的语句数量
    'max-statements': [1, 200],

    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': 'off',

    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': 'off',

    // r要求构造函数首字母大写
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }],

    // 要求调用无参构造函数时带括号
    'new-parens': 'error',

    // 要求或禁止变量声明语句后有一行空行
    'newline-after-var': 'off',

    // 要求 return 语句之前有一空行
    'newline-before-return': 'off',

    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',

    // 禁止使用按位操作符
    'no-bitwise': 'off',

    // 禁用 continue
    'no-continue': 'off',

    // 禁止使用内联注释
    'no-inline-comments': 'off',

    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',

    // 禁止混合使用不同的操作符
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],

    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值
    'no-multi-assign': 'error',

    // 不允许多个空行
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // 禁用否定表达式
    'no-negated-condition': 'off',

    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 禁止使用 Object 构造函数
    'no-new-object': 'error',

    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': 'off',

    // 禁止使用特定的语法
    'no-restricted-syntax': 'off',

    // 禁用 tab
    'no-tabs': 'error',

    // 禁止使用三元操作符
    'no-ternary': 'off',

    // 禁用行尾空白
    'no-trailing-spaces': 'error',

    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 'off',

    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',

    // 强制单个语句的位置
    'nonblock-statement-body-position': 'off',

    // 强制在花括号内使用一致的换行符
    'object-curly-newline': 'off',

    // 强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // 强制函数中的变量在一起声明或分开声明
    'one-var': ['error', { initialized: 'never' }],

    // 要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': 'off',

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // 要求或禁止尽可能地简化赋值操作
    'operator-linebreak': 'off',

    // 要求或禁止块内填充
    'padded-blocks': ['error', {
      'blocks': 'never',
      'classes': 'never',
      'switches': 'never'
    }],

    // 要求对象字面量属性名称使用引号
    'quote-props': 'off',

    // 强制使用一致的反勾号、双引号或单引号
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    // 要求使用 JSDoc 注释
    'require-jsdoc': 'off',

    // 分号
    'semi': ['error', 'never'],

    // 强制分号前后有空格
    'semi-spacing': ['error', { before: false, after: true }],

    // 要求对象属性按序排列
    'sort-keys': 'off',

    // 变量排序
    'sort-vars': 'off',

    // 要求或禁止语句块之前的空格
    'space-before-blocks': 'error',

    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': ['error', 'never'],

    // 禁止或强制圆括号内的空格
    'space-in-parens': ['error', 'never'],

    // 要求中缀操作符周围有空格
    'space-infix-ops': 'error',

    // 要求或禁止在一元操作符之前或之后存在空格
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],

    // 要求或禁止在注释前有空白 (space 或 tab)
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: false,
      }
    }],

    // 要求或禁止在模板标记和它们的字面量之间有空格 
    'template-tag-spacing': 'off',

    // 要求或禁止使用 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],

    // 要求正则表达式被包裹起来
    'wrap-regex': 'off'
  }
}