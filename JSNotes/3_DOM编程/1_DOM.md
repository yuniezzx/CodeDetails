[TOC]

# 1. javaScript 简史
## 1.2 DOM

什么是DOM? 简单地说， DOM 是一套对文档的内容进行抽象和概念化的方法。

JavaScript 的早期版本向程序员提供了查询和操控Web 文档某些实际内容(主要是图像和表单)的手段。现在的人们通常把这种试验性质的初级DOM 称为"第0 级DOM" (DOM Level 0) 。在还未形成统一标准的初期阶段，"第0 级DOM" 的常见用途是翻转图片和验证表单数据。

<br>

---

<br>

## 1.3 浏览器战争

Netscape Navigator 4 发布于1997 年6 月， IE 4 发布于同年10 月。这两种浏览器都对它们的早期版本进行了许多改进，大幅扩展了DOM ， 使能够通过JavaScript 完成的功能大大增加。而网页设计人员也开始接触到一个新名词: DHTML。


<br>
<br>


### 1.3.1 DHTML

**DHTML 是"Dynarnic HTML" (动态HTML) 的简称。DHTML 并不是一项新技术， 而是描述HTML、CSS 和JavaScript 技术组合的术语**。DHTML背后的含义是:
- ==利用HTML 把网页标记为各种元素:==
- ==利用CSS 设置元素样式和它们的显示位置，==
- ==利用JavaScript 实时地操控页面和改变样式。==
  
不幸的是， NN 4 和IE4 浏览器使用的是两种不兼容的DOM。换句话说， 是然浏览器制造商的目标一样，但他们在解决DOM 问题时采用的办法却完全不同。


<br>
<br>


### 1.3.2 浏览器之间的冲突

这两种DOM 的差异， 导致了一种很可笑的局面:程序员在编写DOM 脚本代码时必须知道它们将运行在哪种浏览器环境里，所以在实际工作中，许多脚本都不得不编写两次， 一次为Netscape Navigator ，另一次为IE.

<br>

---

<br>

## 1.4 制定标准

就在浏览器制造商以DOM 为武器展开营销大战的同时， W3C 不事声张地结合大家的优点推出了一个标准化的DOM。

令人欣慰的是， Netscape、微软和其他一些浏览器制造商们还能抛开彼此的敌意而与W3C 携手制定新的标准，并于1998 年10 月完成了"**第1 级DOM**" **(DOM Level)**.

我们已经用`<div>`，标签定义了一个 ID 为myelement 的页面元素:
`<div id="myelement">This is my element</div>`
现在需要找出它的left 位置并把这个值保存到变量xpos 中。
```javascript
let xpos = document.getElementById("myelement").style.left
```


<br>
<br>


### 1.4.1 浏览器以外的考虑

==DOM 是一种API (应用编程接口==).简单地说， API 就是一组已经得到有关各方共同认可的基本约定。在现实世界中，相当于API 的例子包括(但不限于)摩尔斯码、国际时区、化学元素周期表。以上这些都是不同学科领域中的标准，它们使得人们能够更方便地交流与合作。

**W3C 对DOM 的定义是:"一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地访问和修改文档的内容、结构和样式。"**


<br>

---

<br>

# 2. JavaScript 语法
## 2.1 准备工作

编写JavaScript 脚本不需要任何特殊的软件， 一个普通的文本编辑器和一个Web 浏览器就足够了。

==用JavaScript 编写的代码必须通过HTML反HT1征文裆才能执行==。有两种方式可以做到这点。
将JS 代码放在 文档中或用 src指向 独立的 **扩展名为 .js** 的文件。

但最好的做法是把`<script>`.标签放到HTML 文档的最后， `</body>`标签之前:(**可以使文档更快的加载**)。

> **程序设计语言分为解释型和编译型两大类：**
>> - **解释型**
>>   - Java 或C十+等语言需要一个编译器(compiler) 。  
>>   - 编译器是一种程序，能够把用Java或 C++ 等高级语言编写出来的源代码翻译为直接在计算机上执行的文件。 
>> - **编译型**
>>   - 解释型程序设计语言不需要编译器一一它们仅需要解释器
>>   - 对于JavaScript 语言，在互联网环境下， Web 浏览器负责完成有关的解释和执行工作。
 

<br>
<br>


## 2.2 语法
### 2.2.1 语旬

**建议在每条语句的末尾都加上一个分号，这是一种良好的编程习惯:**

`first stαtement;`
`second statement;`

这样做让代码更容易阅读。让每条语句独占一行的做法能更容易跟踪JavaScript 脚本的执行顺序。


<br>
<br>


## 2.2.2 注释

单行注释 `//`
多行注释 `<!--  -->`  


<br>

---

<br>

# 3. DOM

```javascript

```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```


<br>
<br>


<br>
<br>


<br>
<br>
