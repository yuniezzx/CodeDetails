#### 样式标签

-  `<strong></strong>` 加粗字体
-  `<u></u>` 添加下划线
-  `<em></em>` 倾斜
-  `<s></s>` 删除线
-  `<hr/>` (自闭合标签) 创建一条宽度撑满父元素的水平线

---

-  **text-align**
   -  控制文本的对齐方式
   -  text-align: justify; 可以让除最后一行之外的文字两端对齐，即每行的左右两端都紧贴行的边缘
   -  text-align: center right left; 文本居中 右 左 对齐；
      <br>
-  **文本背景色**

   -  除了整个页面背景色，文字颜色外，可单独设置文字的背景色，即在文字的父元素上添加 background-color 属性

   > > -  **background-color 的默认值为 transparent(透明)** > > <br>

-  **box-shadow**

   -  给元素添加阴影，属性值是由逗号分隔的一个或多个阴影列表
   -  offset-x; offset-y; 阴影的水平， 垂直偏移量
   -  blur-radius 模糊半径
   -  spread-radius 阴影扩展半径
   -  color
   -  可以通过逗号分隔每个 box-shadow 元素属性来添加多个 box-sahdow

   ```CSS
      #thumbnail{
         box-shadow{
            0 10px 20px rgba(0,0,0,0.19),
            0 6px 6px rgba(0,0,0,0.23);
         }
      }
   ```

   <br>

-  **font**

   -  font-size 设置文字大小(标题和文字皆可)
   -  font-weight 设置文字粗细
   -  line-height 设置行间的距离，行高，设置每行字所占据的垂直空间 **_可以使文字撑起高度_**
      <br>

-  **linear-gradient**

   -  线性渐变， 第一个参数指定了颜色过渡的方向

   ```CSS
      h1{
         background: linear-gradient(gradient_direction, color1, color2, color3, ...)
      }
   ```

   -  而 repeating-linear-gradient 会重复指定的渐变

   ```CSS
      h1{
         background: repeat-linear-gradient(gradient_direction,
         yellow 0px,
         yellow 40px,
         black 40px,
         black 80px
         )
      }
   ```

-  **transform**
   -  CSS 属性 transform 中 scale()可以来改变元素的显示比例。
   -  给 **div** 元素添加 transform 也会影响其子元素
   -  transform 属性 skewX(), skewY()指选择的元素沿着 X 轴(横向), Y 轴(纵向)翻转指定的角度

---

#### 伪类

-  伪类是可以添加到选择器上的关键字，用来选择特定状态的元素
-  **:hover**伪类选择器来选取超链接的悬停状态
-  **::before ::after** 可以在所选元素之前或之后添加一些内容; 且必须配合 content 来使用。这个属性通常来给元素添加内容如文字或图片； 也可以是空字符串。

#### 定位

-  ##### 1.相对定位

   > 在 CSS 中一切 HTML 元素皆为盒子，也就是所说的盒模型。块级元素自动从新一行开始，行内元素排列在上一个元素后面，元素默认按照这种方式布局称为 **文档的普通流** => 同时 CSS 提供了 position 属性来覆盖它。

   > 当元素的定位设置为 relative 时，可以通过 CSS 指定 该元素在当前文档流页面下的相对偏移量。

   > CSS 控制各个方向偏移量的属性为 left，right，top，bottom，代表从原来位置向远离该方向偏移

   > **元素的 position: relative;时，并不会改变元素在布局中所占的位置， 也不会对其他元素的位置产生影响**

-  ##### 2.绝对定位

   > **绝对定位会将元素从当前的文档流里移除，周围的元素会忽略它。**

   > 且元素的定位参照于最近的父级 position 元素，如果父级元素没有添加定位规则(元素默认为 position:relative;即非 relative 的 position)，会继续向上直到默认的 body 标签

-  ##### 3.固定定位

   > 固定定位是一种特殊的绝对定位，将元素相对于浏览器窗口定位，和 CSS 偏移属性一起使用。

   > 并且也会将元素从当前的文档流中移除。其他元素也会忽略它的存在，这样也需要调整其他位置的布局

   > 所以 fixed 最明显的是，其定位元素不会随着屏幕滚动而滚动，一直在某位置

-  ##### 4.流动 float

   > float 元素不在文档流中，向 right，left 浮动，直到外边缘碰到包含框或另一个浮动框的边框位置

-  ##### 5.z-index
   > 指定元素的堆叠次序，取整，数值大的元素会叠放在数值小的元素上面

---

#### Margin

-  在设计中经常需要把一个块级元素居中显示。一种常见的方法是把块级元素的 **margin**值设为 **auto**。

---

#### animation

-  animation 属性控制动画的外观，@keyframes 规则控制动画中的各个阶段变化。

-  animation-name 用来设置动画名称; animation-duration 用来设置动画时间。

```CSS
   #anim{
      animation-name: colorful;
      animation-duration: 3s
   }
   @keyframes colorful{
      0%{
         background-color: blue;
      }
      100%{
         background-color: yellow;
      }
   }
```

-  animation-fill-mode 属性当动画不播放时(当动画完成时，或当动画有一个延迟未开播时), 要应用到元素的样式。在默认情况下 CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。animation-fill-mode 可以重写该行为。
   值:

   1. none, 默认值

   2. forwards， 在动画结束后(由 animation-iteration-count 决定)，动将应用该属性值。

      3.backwards， 动画将应用 animation-delay 定义期间启动动画的第一次迭代的关键帧

-  animation-iteration-count 属性为控制动画循环的次数

-  设置不同的变化效果: 1. 设置@keyframes 中不同的频率 20%， 50% 。。; 2.设置不同的 anmiation-duration

-  animation-timing-function 用来定义动画的速度曲线;
   值:

1. ease 动画速度 先低后快，在结束前变慢
2. ease-out 动画高速开始， 低速结束
3. ease-in 动画低速开始， 高速结束
4. linear 均速
5. **cubic-bezier(贝塞尔曲线)** : cubic-bezier 函数为 1x1 的网格中的 4 个点(p0, p1, p2, p3)。 其中 p0 和 p3 是固定值，代表曲线的起始点和结束点，坐标为(0,0)和(1,1).==> 所以需要设置 p1(x1, y1) 和 p2(x2, y2); 在 CSS 中为 (x1, y1, x2, y2)来确定 p1 和 p2。
   **X 的范围为[0-1],Y 的范围可以大于 1 **

```CSS
   h1{
      animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
   }
```
