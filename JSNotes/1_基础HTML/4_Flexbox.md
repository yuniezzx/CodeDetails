### flexbox

-  flexbox 是一种更灵活的布局元素
-  只要在 CSS 中添加 **display: flex**; 就可以使用
-  元素添加 display: flex 属性就可以将它变成 flex 容器, 然后可以让元素的项目排列成行或列。只要给父元素添加 flex-direction 属性，并设置为 row 或 column。其值还有 row-reverse 和 column-reverse。
   **注意: flex-direction 的默认值为 row**
-  flex 子元素有时候不能充满整个 flex 容器，所以我们经常需要告诉 CSS flex 的排列方式。但除此之外， 我们可以通过 justify-content 属性的不同值来实现。

   #### justify-content(容器本身)

   -  **flex 容器设为行，子元素从左到右逐个排列; flex 容器设为列， 子元素从右到左逐个排列。 子元素排列的方向为 main axis(主轴) ===> 主轴 水平或垂直贯穿每一个项目**

      -  所以如何沿主轴线排放 flex 项目有几种选择
      -  flex-start 从 flex 容器起始位置开始排列项目。对于行是把项目移至左边;对于列是把项目移至顶部。**如果未设置 justify-content 的值，这就为默认值**

      -  flex-end 从 flex 容器的终止位置开始排列项目。行=>项目移至右边; 列=>项目移至底部。

      -  center flex 子元素在 flex 容器居中排列

      -  space-between 项目保留一定间距的沿主轴居中排列。第一个和最后一个项目被放置在容器边沿。如: 在行中第一个项目会紧贴着容器左边，最后一个项目会紧贴项目右边， 然后其他项目均匀排布

      -  space-around： 与 space-between 相似，但头尾项目不会紧贴容器边缘，所有项目之间的空间均匀排布。

   #### align-items(容器本身)

   -  **align-items 属性与 justify-content 类。justify-content 沿主轴排列;在 flex 容器中，与主轴垂直的叫做 cross axis(交叉轴) ===> 行的交叉轴是垂直的， 列的交叉轴是水平的。 CSS 中的 align-items 属性用来定义 flex 子元素沿交叉轴 的对齐方式。**

      -  flex-start 从 flex 容器的起始位置开始对齐项目。行=> 项目移至容器顶部，列=> 项目移至容器左边

      -  flex-end 从 flex 容器终止位置开始对齐项目。行=> 项目移至容器底部，列=> 项目移至容器右边

      -  center 把项目居中放置。行=> 项目垂直居中(项目距离底部和顶部的距离相同)，列=> 项目水平居中(项目距离左边后右边的距离相同)

      -  stretch 拉伸项目， 填满容器

      -  baseline 沿基线对齐。基线是文本相关的概念，可以认为是字母排列的下端基准线

   #### flex-wrap(容器本身)

   -  默认情况下，flex 容器会调整项目大小，把他们都塞到一起。对于行来说，所有项目都会在一条直线上。不过 flex-wrap 属性可以使项目换行展示。这意味着多出来的子元素会被移到新的行货列。换行的断点由子元素和容器的大小决定
      -  nowrap 默认值，不换行
      -  wrap 以行为基准，就将行从上往下排列
      -  wrap-reverse

   #### flex-shrink (容器子元素)

   -  使用 flex-shrink 后, flex 容器太小，则子元素会自动缩小。当容器的宽度小于所有子元素的宽度之和时，所有子元素都会自动压缩;

   -  子元素的 flex-shrink 接受数值作为属性值。数值越大，则该元素与其他元素相比会被压缩的更厉害

   #### flex-grow(容器子元素)

   -  flex-grow 与 flex-shrink 相对应。flex-grow 会在容器太大时对子元素做出调整

   -  如果一个项目的**flex-grow**的值为 **1**，另一个项目的**flex-grow** 的值为 **3**，那么值为**3**的会比另一个扩大 3 倍

   #### flex-basis(容器子元素)

   -  定义了 CSS 在使用 flex-shrink 和 flex-grow 属性对元素进行调整前，元素初始大小

    <br>

       > flex 属性可以简写。flex的默认设置是 flex: 0 1 auto;
       > flex值为 : flex-grow, flex-shrink, flex-basis

   #### align-self(容器子元素)

   -  此属性允许调整单个子元素自己的对齐方式，且不会影响到全部的子元素 。 **应为 float. clear 和 vertical-align 等对齐方式的属性都不能应用于 flex 子元素，所以这属性十分有用**
      -  align-self 可设置的值和 align-items 的一样，**并且会覆盖 align-items 所设置的值**
