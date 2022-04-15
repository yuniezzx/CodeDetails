> #### 通过浏览器降级提高兼容性
>
> 使用 CSS 时可能会遇到浏览器兼容性的问题。
> 提供浏览器降级方案来避免潜在的问题。
> 如： CSS 变量来指定背景色，IE 浏览器不支持变量而忽略背景色。此时浏览器会尝试使用其他值

```CSS
   <style>
      :root{
         --red-color: red;
      }
      .red-box{
         background: red;
         background: var(--red-color);
         height: 200px;
         width: 200px;
      }
   </style>
```

#### 样式优先级

-  class 选择器的优先级高于继承样式(在 HTML 元素应用的 class 的先后顺序无关紧要；但在 style 中 第二个声明的优先级要高于第一个声明)

-  id 选择器的优先级总是高于 class 选择器

```html
<h1 class="pink-text blue-text" id="orange-text"></h1>
```

-  行内样式会覆盖 id 和 class 选择器

-  !important 有最高的优先级

```CSS
   .pink-text{
      color: pink !important;
   }
```

---

#### 属性选择器

> CSS 属性选择器通过存在的属性值匹配元素

```CSS
   <!-- 存在title属性的<a> 元素 -->
   a[title]{ color: purple; }
```

---

#### CSS 变量

-  在变量名前添加两个连字符，并为其赋值; 且可以设置一个备用值，当变量无效时使用

```CSS
   ---penguin-skin: gray;
   h1{
      color: var(--penguin-skin);
   }
   h2{
      color: var(--penguin-skin, black)
   }
```

-  同时，变量可以继承;在 **:root**里创建变量时，这些的变量作用域是整个页面;如果在元素创建相同变量，会重写作用域的值

-  CSS 变量可以简化 **media query(媒体查询)**

---

#### 长度单位

-  绝对单位：与物理长度有关
-  相对单位： 实际值依赖其他长度而定

---

-  一个元素上可以同时应用多个**class**, 使用空格来分隔不同**class**即可

   ```html
   <img class="class1 class2" />
   ```

-  **id** 属性不可以重复，只能作用于一个元素上，如果一个元素同时应用了 class 和 id，且两者样式有冲突，会优先应用 id 中所设置的样式

---

-  **border**(边框) 有**style**, **color**, **width** 属性

-  **border**, **margin** 值为顺时针排序： 上->右->下->左，

---

#### 让元素可见

-  display: none 或 visibility: hidden; 会把内容彻底隐藏起来，屏幕阅读器也无法获取这些内容
-  如果把值设为 0px，如 width: 0px, height: 0px;意味着让元素脱离文档流，这样做也同样会让屏幕阅读器忽略此元素
