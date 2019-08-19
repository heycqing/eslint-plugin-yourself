module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // 禁止不必要的括号
        "no-extra-parens": "error" ,
        // 禁止不必要的分号
        "no-extra-semi": "error",
        // 要求在全局范围内使用严格模式
        "strict": [ "error" , "global"],
        // 禁止变量声明与外层作用域的变量同名
        "no-shadow": "error",
        // 除去无声明变量
        "no-unused-vars": "error",
        // 代码文末需要换行
        "eol-last": ["error", "always"],
        // tab缩进
        "indent": ["error", "tab"]
    }
};