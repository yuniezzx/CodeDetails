# HTTP 概览

## 介绍

> 使用HTTP server and client 必须使用  `require('http')`

HTTP message headers 是一个对象如：(keys 是小写，values 是无法更改的)


```js
{ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'example.com',
  'accept': '*/*' }
```

为了能够完整的支持 HTTP, Node.js 中 HTTP API 被设计在**底层**，它只是对 stream（流）的处理和 message的编译。
（stream 应该是指一串完整，连续的数据，可以使字节流，视频流，音频流。。。）。

Node.js 中收到的原始HTTP会被保留在 `rawHeaders ` 属性中，以数组的形式`[key, value, key2, value2, ...]`.保存。

例如上组 message header object 有一个 `rawHeader` 数组如下：

```js
[ 'ConTent-Length', '123456',
  'content-LENGTH', '123',
  'content-type', 'text/plain',
  'CONNECTION', 'keep-alive',
  'Host', 'example.com',
  'accepT', '*/*' ]
```

## Class: 上的属性

### [1.] http.createServer

`http.createServer([options][, requestListener])`

- `requestListener`  <Function>
- return <http.Server>
