# 标题元素

-  img 元素来为网站添加图片， 其中**src**属性指向图片的地址
   -  img 元素为单语义标签
   -  img 元素中 alt 属性
      1. 让屏幕阅读器可以知晓图片内容
      2. 当图片无法加载时，页面需要显示替代文本
-  **注意：图片为装饰性的，alt 属性设置为空; 对于有标题的图片，依然需要添加 alt 文本，这样有助于搜索引擎记录图片内容**

---

# 语义标签

-  main 标签用于呈现网页的主题内容，且每个网页只有一个
-  article 是一个分段标签，适用于博客，论坛帖子或新闻文章
-  nav 是导航标签，用于呈现页面中的主导航链接

---

# 链接元素

-  a (anchor) 元素可以用于创建内部链接，跳转到网页不同部分

   -  创建内部链接， 将 href 属性值设置为一个哈希符号 **#** 加上跳转到内部链接的元素 **id**

   -  ```html
      <a href="#contacts-header">Contacts</a>
      ...
      <h2 id="contacts-header">Contacts</h2>
      ```

   -  a 元素中 target 属性 **target="\_blank"** 会导致链接文档在新窗口标签中打开

   -  可以把元素嵌套在 a 元素中，使其变成一个链接

---

# 音频

-  audio 标签用于呈现音频内容，支持 control 属性

```html
<audio id="meowClip" controls>
   <source src="#" type="audio/mpeg" />
</audio>
```

---

# Figure 标签

-  代表一段独立的内容，作为一个独立的引用单元。当它属于主内容流(main flow)时，它的位置独立于主体。 这个标签经常时在主文中应用图片，插图， 表格， 代码等等，当这部分转移时也不会影响主体
-  <figcaption> 元素时于其相关联的图片的说明， 用于描述父节点<figure> 元素中其他的数据

---

# 表单

-  label 标签是一种语义化标签，其 **for**属性将标签与表单组件绑定；同时，屏幕阅读器也会读取 **for**属性的属性值

-  fieldset 标签包裹整租单选按钮，它经常使用<legend> 标签来提供分组的描述

   ```HTML
      <form>
         <fieldset>
            <legend>Choose one of these three items: </legend>
               <input id="one" type="radio" name="items" value="one">
               <label for="one">Choice One</label><br>
               <input id="two" type="radio" name="items" value="two">
               <label  label for="two">Choice Two</label><br>
               <input id="three" type="radio" name="items" value="three">
               <label for="three">Choice Three</label>
         </fieldset>
      </form>
   ```

-  通过 HTML 来实现发送数据给服务器的表单， 只需要给 **form** 元素添加 action 属性即可
   -  ```html
      <form action="/url-where-you-want-to-submit-form-data">
         <input />
      </form>
      ```
-  可以给表单添加一个 submit 按钮，提交按钮后，表单中的数据将会被发送到 action 属性指定的 URL 上

-  设计表单时，可以指定某些字段为必填(required),只有用户填写该字段后才可以提交表单

   -  ```html
      <input type="text" required />
      ```

-  radio buttons(单选按钮) 是 input 中的一种类型

   -  每一个单选应该嵌套在自己的 label(标签) 元素中，对应的是给 input 元素和包裹它的 label 元素建立对应关系

   -  所有关联的单选按钮应该拥有相同的 name 属性。创建一组单选按钮，选中一组时，其他按钮即现时为未选中

   ```html
   <label> <input type="radio" name="indoor-outdoor" />Indoor </label>
   ```

   -  在 label 元素上设置 **for** 属性,让其值与相关联的 input 单选按钮的 **id** 属性值相同。

   ```html
   <input id="indoor" type="radio" name="indoor-outdoor" />
   <label for="indoor">Indoor</label>
   ```

   -  或在 label 元素中嵌入 input，形成隐式关联

   ```html
   <label for="indoor">
      <input id="indoor" type="radio" name="indooe-outdoor" />Indoor
   </label>
   ```

-  checkboxes(复选框)也为 input 中的一种类型; 同理复选框要有相同的 **name** 属性

-  提交表单时，所选项会将值发给服务器，**value**属性的值为发送的内容

   ```html
   <label for="indoor">
      <input
         id="indoor"
         value="indoor"
         type="radio"
         name="indoor-outdoor"
      />Indoor
   </label>
   <label for="outdoor">
      <input
         id="outdoor"
         value="outdoor"
         type="radio"
         name="indoor-outdoor"
      />Outdoor
   </label>
   ```

-  当用户提交表单时，

   -  如果 indoor 选项被选中，表单数据会包含: **indoor-outdoor=indoor**。也就是所选项**name**和**value**属性值
   -  如果没有指明**value**属性值，会用默认值做表单数据提交，也就是**on**.然后用户选中“indoor”选项提交表单，表单数据为**indoor-outdoor=on**

-  用**checked**属性可以将复选框和单选框设置为默认选中

   ```html
   <input type="radio" name="test-name" checked />
   ```

-  <input> 中 date ，<time>中 datetime 为日期，标准化时间
