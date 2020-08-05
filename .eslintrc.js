module.exports = {
    // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
    "env": {
        "browser": true,
        "es6" : true
    },
    "extends": ["airbnb", "prettier"],
    "globals": {
        _: true,
        $: true
    },
    "parser": "babel-eslint",
     // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
    "parserOptions": {
        "ecmaFeatures" : {
            "jsx": true,
            "ecmaVersion": 6,
            "sourceType": "module"
        }
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules" : {
        "semi": 2,
        "react/state-in-constructor": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-unused-state": 1,
        "import/no-extraneous-dependencies": 0,
        "import/no-extraneous-dependencies": 0,
        "react/destructuring-assignment": 0,
        "import/extensions": 0,
        "no-unused-vars": 1,
        "react/require-default-props": 1,
        "react/prop-types": 0
    }
}