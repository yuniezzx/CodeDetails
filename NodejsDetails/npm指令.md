# npm 指令

## [1.] npm init

使用 `npm init` 初始化一个空项目是一个好的习惯，即使你对 package.json 及其他属性非常熟悉，`npm init` 也是你开始写新的 Node.js 应用或模块的一个快捷的办法。

`npm init` 有智能的默认选项，比如从根目录名称推断模块名称，通过 `~/.npmrc` 读取你的信息，用你的 Git 设置来确定 repository 等等。

## [2.] npm install

`npm install` 是我们最常用的 npm 命令之一，因此我们需要好好了解下这个命令。终端输入 `npm install -h` 查看使用方式

> 小提示: `npm i` 是 `npm install` 的简写，建议使用 `npm i`。

1. `npm i express --save`/`npm i express -S` (安装 express，同时将 `"express": "^4.14.0"` 写入 dependencies )
2. `npm i express --save-dev`/`npm i express -D` (安装 express，同时将 `"express": "^4.14.0"` 写入 devDependencies )
3. `npm i express --save --save-exact` (安装 express，同时将 `"express": "4.14.0"` 写入 dependencies )