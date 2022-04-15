# Node.js 的结构设计

![](D:\代码笔记\CodeNotes\Nodejs\images\Node结构（1）.jpg) 

## 中下层（在操作系统之上）：

- V8 JavaScript Engine: 由内存堆、调用栈和垃圾收集器组成，把 JS 代码转换成给定操作系统的机器码 

- ibuv: 由线程池、事件循环与事件队列组成，是处理非阻塞异步 I/O 操作的多平台 C 语言库，提供了机制处理诸如文件系统、DNS、网络、子进程、管道、信号量控制、轮询、数据流

- c-ares: 处理 DNS 请求的 C 语言库

- llhttp: 解析 HTTP 请求/响应（以前使用 http-parse）

- OpenSSL: 全功能支持 TLS/SSL 协议的工具包，也是个通用加密库

- zlib: 用于同步、异步和数据流的压缩解压



## 中间层

- Node.js Bindings：将底层 C/C++ 写的库的接口暴露给 JS 环境

- Node.js Standard Library: 提供了 Node.js 本身的核心模块，见文档

- C/C++ AddOns：用户自己写的 C/C++ 模块，通过桥接的方式提供给 Node.js

## 中间层之上

- Node.js API: 暴露给 Node.js 应用的 JS API
- 我们使用 Node.js 开发应用，主要是使用 Node.js API，所以 Node.js 应用最终运行于 Node.js API 之上



### 备注

- v8 --  一个用 C++ 写的 JavaScript 引擎，由 Google 维护 ,用于 Chrome 浏览器和 Node.js
- lubuv-- 为Node.js 量身打造，用 C 写的跨平台异步 I/O 库， 提供了非阻塞的文件系统、DNS、网络、子进程。管道。信号、轮巡和流式处理机制![libuv结构](C:\Users\maxzz\OneDrive\桌面\libuv结构.png)



```js
var fs = require('fs')
fs.open('./test.txt',"w",function(err,fd){
    // execute content
})
```



我们在 JavaScript中调用代码时`fs.open` 时，Node.js 通过 process.binding 调用 C/++ 层面的 Open 函数，然后通过它调用 Libuv 中的具体方法 uv_fireOpen，最终执行的结果通过回调的方式返回，完成流程。

> 所以真正与操作系统互动的是 Libuv.























