### grid

-  将属性 display 值设为 grid，html 元素可以变成网格容器。
   **注意: 在 CSS 网格中，父元素称为容器(container), 它的子元素称为项(items).**

-  添加一个网格元素并不会有任何明显的效果。还需要明确的网格结构。

   -  grid-template-columns(指网格容器) 属性值的个数表示网格的列数，每个值表示相应的列宽度。

   ```CSS
      .container{
         display:grid;
         grid-template-columns: 50px 50px;
      }
   ```

   上面代码中会在网格容器中添加两列，宽度均为 50px.

   -  grid-template-rows(指网格容器) 同理可以手动调整网格行数

-  可以使用绝对单位(px, em)来定义行或列的大小，其他单位:
   -  fr 设置列或行占剩余空间的比例
   -  auto 设置列宽或行高自动等于他的内容的宽度或高度。
   -  % 将列或行调整为容器宽度或高度的百分比
   ```CSS
      .container{
         grid-template-columns: auto 50px 10% 2fr 1fr;
      }
   ```
-  在网格中，每列都是相互紧挨着。有时候想要列之间有一个间距。

   -  grid-column-gap (指网格容器)

   ```CSS
      .container{
         grid-column-gap: 10px;
      }
   ```

   为网格中的所有列添加宽度为 10px 的间距

   -  grid-row-gap (指网格容器)同理

   -  grid-gap(指网格容器) 为 grid-row-gap 和 grid-column-gap 的简写属性; **如果 grid-gap 只有一个值，那么表示行与行之间，列与列之间的距离均为这个值。 如果有两个值， 第一个值表示行间距，第二个值表示列间距**

---

##### 网格本身属性

-  网格中，假象的水平线和垂直线被称为线(lines). 如图:
   ![grid_line](/img/grid_lines.png)

-  要设置网格项占据几列，可以使用 grid-column 属性加上网格线条的编号来定义网格项开始和结束的位置。

```CSS
   .items{
      grid-column: 1 / 3;
   }
```

**意思为: 让网格项(某个子元素)从左侧第一条线开始到第三条线结束， 占用两列**

-  grid-row 同理

-  **在 CSS 网格中，每个网格项的内容分别位于被称为单元格(cell)的框内。**
   可以使用网格项的 justify-self 属性，来设置起内容的位置在单元格内沿水平轴的对齐方式。

   -  **在默认情况下， 这个属性的值为 stretch**
   -  start 内容在单元格左侧对齐
   -  end 内容在单元格右侧对齐
   -  center 内容在单元格居中对齐

-  align-self 同理

-  justify-items **水平对齐所有项目**(在父容器中) 共享对齐方式; 将网格中所有的网格项按设置的方式对齐

-  align-items **垂直对齐所有项目**

##### 网格划分

-  grid-template-area 可以将一些单元格合成一个区域(area),并为该区域指定一个自定义名称

   ```CSS
      .container{
         grid-template-area:
         "header header header"
         "advert content content"
         "footer footer footer"

      }
   ```

   上面代码将顶部的三个单元格合并成一个名为 header 的区域,将底部三个单元合并成为一个名为 footer 的区域，并在中间创建两个区域：advert and content. **每一个单词代表一个单元格，每对引号代表一行，可以用 (.) 来表示一个空单元格 **

   或：

   ```CSS
      .item1{
         grid-area: header;
      }
   ```

   将 class 为 item1 的标签放到 名为 header 的 网格项中
   或：

   ```CSS
      .item1{
         grid-area: 1/1/2/4;
      }
   ```

   通过网格编号来定义网格项的区域，上面数字代表这些值：
   grid-area: horizontal line to start at/ vertical line to start at / horizonal line to end at / vertical line to end at

##### repeat 函数

-  grid-template-rows: repeat(100, 50px);
   添加 100 行网格，每行高 50px;
-  grid-template-columns: repeat(2, 1fr 50px) 20px; 相当于 == grid-template-colunns: 1fr 50px 1fr 50px 20px;

##### minmax 函数

-  grid-template-columns: 100px minmax(50px, 200px);
   网格添加两列， 第一列宽 100px, 第二列宽 最小 50px,最大 200px;

##### auto-fill 自动填充

-  repeat 方法中右一个 auto-fill 功能。 根据容器的大小，尽可能多的放入指定大小的行或列

```CSS
   repeat(auto-fill, minmax(60px, 1fr))
```

效果: 列的宽度会随容器大小改变。其次，只要容器宽度不足以插入一个宽为 60px 的列，当前行的所有列就都会一直拉伸。

-  auto-fit 同理
