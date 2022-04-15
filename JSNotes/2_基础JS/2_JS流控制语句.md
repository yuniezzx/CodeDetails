# 语句
> 语句也称为流控制语句，而ECMAScript中大部分语法都体现在语句中。语句通常使用一个或多个关键词完成既定的任务
---
## if 语句
> if语句是最频繁的语句之一，语法如下:
> **if(condition) statement1 else statement2**
> 这里的==condition==可以是任何表达式，**并且求值的结果不一定是布尔值**。ECMAScript会自动调用Boolean()函数将这个表达式的值转化为布尔值
> 如果条件为true，执行statement1；如果条件为false，执行statement2.
```javascript 
   if(i > 25)
      console.log("Greater than 25."); // 只有一行代码的语句
   else{
      console.log("Less than or equal to 25."); // 一个语句块
   }   
```
**最佳实践是使用语句块，可以避免对什么条件下执行什么产生困惑**
> **这样可以连续使用多个if语句**
> **if(condition1) statement1 else if (condition2) statement2 else statement3**
```javascript 
   if(i > 25){
      console.log("Greater than 25.");
   }else if(i < 0){
      console.log("Less than 0.")
   }else{
      console.log("Between 0 and 25, inclusive.");
   }   
```

<br>

## do-while 语句
> do-while语句是一种后测试循环语句，即**循环体中的代码执行后**才会对退出条件进行求值。换句话说，循环体内的代码至少执行一次。
> 语法如下：
> do{
>     statement
> } while (expression);
```javascript
   let i = 0;
   do {
      i += 2;
   } while (i < 10);
```

<br>

## while 语句   
> while语句是一种先测试循环语句，**即先检测退出条件，再执行循环体内的代码**
> 因此，while循环体内的代码有可能不会执行，其语法如下：
> **while (expression) statement**
```javascript
   let i = 0;
   while(i < 10){
      i += 2;
   }
```

<br>

## for语句
> for语句也是先测试语句，只不过增加了**进入循环之前的初始代码**，以及**循环执行后要执行的表达式**
> **for(initialization; expression; post-loop-expression) statement**
>```javascript
>   let count = 0;
>   for(let i = 0; i < count; i ++){
>      console.log(i)
>   }
>```
> 代码在循环开始之前定义了变量i的初始值为0. 然后求值条件表达式(==expression==),如果值的结果为true(i < count), 执行循环体。因此循环体也可能不被执行。如果循环体执行了，则循环体后表达式(==post-loop-expression==)也会执行
>```javascript
>   let count = 10;
>   let i = 0;
>   while (i < count){
>   console.log(i);
>   i ++;
> }
>```
> 此while循环和for循环效果是一样的

**==无法通过while循环实现的逻辑，同样也无法使用for循环来实现==**

- for 循环的初始化代码中，其实可以不用变量声明的关键字的。不过 其声明的变量以后几乎不可能用到了。因此，**最清晰的写法是用let声明迭代器变量**，这样就可以将变量的作用域限定在循环中
- 初始化，条件表达式和循环后的表达式都不是必须的所以可以创建一个无穷循环
```javascript
   for(;;){
      // 无穷循环
      doSomething();
   }

   // 如果只包含条件表达式，那么for循环实际上就变成了while循环
   let count = 10;
   let i = 0;
   for(; i < count; ){
      console.log(i);
      i ++;
   }
``` 

<br>

## for-in 语句
> for-in 语句是一种**严格的迭代语句**，用于枚举==对象==中的非符号键属性。语法如下：
> **for (property in expresiion) statement**
>```javascript
>     for(coust propName in window){
>        document.write(propName); 
> }
>```
> 每次执行循环，都会给变量propName赋予一个window对象的属性作为值，直到window的所有属性都被枚举一遍。
> 这里的const也不是必须的。但为了确保这个局部变量不被修改，推荐使用const。

**ECMAScript中对象的属性是无序的，因此for-in语句不能保证返回对象属性的顺序。**

<br>

## for-of 语句
> for-of 语句是一种严格的迭代语句，用于==遍历可迭代对象的元素==，语法如下：
> **for(property of expression) statement**
>```javascript
>     for(const e1 of [2,4,6,8]){
>        document.write(e1);
> }
>``` 
> for-of循环会按照迭代对象的next()方法产生值的顺序迭代元素。

<br>

## 标签语句
> 标签语句用于给语句添加标签，语法如下：
> **label: statement**
>```javascript
>     start: for(let i = 0; i < count; i ++){
>        console.log(i);
> }
>```
> 此处start是一个标签，可以在后面通过break或continue语句引用

<br>

## break和continue 语句
> break 和 continue 语句为执行循环代码提供了更严格的控制手段。其中，
> - ==break语句用于立即退出循环，强制执行循环后的下一条语句==
> - ==continue语句也用于立即退出循环，**但会再次从循环顶部开始执行**==
```javascript
   let num = 0;
   for(let i = 1; i < 10; i ++){
      if( i % 5 == 0){
         break;
      }
      num++;
   }

   console.log(num); // 4
```
> for 循环会将变量由1 递增到10.而在循环体中，有if语句检查变量是否能被5整除。如果是，执行break语句，退出循环。当break语句执行后，下一行执行的代码时console。log9(num),显示的是4.因为当i等于5时，break语句会导致循环退出，该次循环不会执行递增num的代码
> 将break换成continue是不同的效果 
```javascript
   let num = 0;
   for(let i = 1; i < 10; i ++){
      if( i % 5 == 0){
         continue;
      }
      num++;
   }

   console.log(num); // 8
``` 
> 循环执行了八次。当i等于5时，会在递增num之前退出，但会执行下一次迭代。此时i为6，直到自然结束。即i等于10。==最终num值是8而不是9，因为continue语句导致它少递增一次。==
> **break 和 continue 都可以与标签语句一起使用**
 ```javascript
   let num = 0;

   outermost: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
         if (i == 5 && j == 5) {
            break outermost;
         }
         num++;
      }
   }

   console.log(num);

``` 
> 正常情况下，for循环中 **i** 和 **j** 都要循环10次。意味着num++将执行100次。
> 但是，break语句带来了变数
> - 如果只加了break，当i== 5 和 j == 5 时，会跳出当前j 循环，从i == 6 和 j == 0 开始
> - 如果加了break outermost(即退出到的标签)。添加标签不仅让break退出j 循环，也退出了 i循环。当i和j都等于5时，循环停止，此时num为55。
 ```javascript
   let num = 0;

   outermost: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
         if (i == 5 && j == 5) {
            continue outermost;
         }
         num++;
      }
   }

   console.log(num);

```
> contine 会强制循环继续执行，但不是继续执行内部循环，而是继续执行外部循环。当i和j都等于5时，跳到外部循环继续执行，结果num为95

<br>

## with 语句
> with语句的用途是将代码作用域设置为特定的对象，其语法如下：
> **with (expresison) statement;**
> ==使用with语句的主要场景是针对一个对象反复操作，这时候将代码作用域设置为该对象能提供便利==
```javascript
   let qs = location.search.substring(1);
   let hostName = loaction.hostname;
   let url = location.herf;

```
==上面的每一行代码都用到location对象。可以使用with语句减少一些代码==

```javascript
   with(location){
   let qs = search.substring(1);
   let hostName = hostname;
   let url = herf;
   }

```
==with语句用于连接location对象。这意味着在这个语句内部，每一个变量首先会被认为是一个局部变量。如果没有找到该局部变量，则会搜索location对象，看它是否有一个同名对象。如果有，则该变量会被求值为location对象的属性==

==**严格模式下不允许使用with语句。否则会抛出错误**==

<br>

## switch 语句
> switch 语句是与if 语句紧密相关的一种流控制语句
```javascript
   switch (expression){
      case value1:
         statement
         break;
      case value2:
         statement
         break;
      case value3:
         statement
         break;
      case value4:
         statement
         break;  
      default:
         statement          
   }

``` 
> 这里的每一个case(条件 / 分支)相当于："如果表达式等于后面的值，则执行下面的语句"
> break关键字会导致代码执行跳出switch语句。
> **如果没有break，则代码会继续匹配下一条件。**
> default 关键字用于在任何条件都没有满足时指定默认执行的语句(相当于else语句)

即if语句
```javascript
   if (i == 25) {
      console.log('25');
   } else if (i == 35) {
      console.log('35');
   } else if (i == 45) {
      console.log('45');
   } else {
      console.log('Other');
   }

``` 

可写成switch语句

```javascript
   switch (i) {
      case 25:
         console.log('25');
         break;
      case 35:
         console.log('35');
         break;
      case 45:
         console.log('45');
         break;
      default:
         console.log('Other');
   }

``` 
**为了避免不必要的条件，最好给每一个天剑后加break语句。如果确实需要==连续匹配几个条件==，推荐写个注释表明忽略了break**

```javascript
   switch (i) {
      case 25:
         /* 跳过 */
      case 35:
         console.log('25 or 35');
         break;
      case 45:
         console.log('45');
         break;
      default:
         console.log('Other');
   }

```

虽然switch语句是从其他语言借鉴过来的，但ECMAScript为它赋予了一些独有的特性。

- switch 语句可以用于所有数据类型，因此可以使用字符串甚至对象
- 条件的值不需要是常量，也可以是变量或表达式。
```javascript
   switch ("hello world") {
      case "hello" + " world":
         console.log("Greeting was found.");
         break;
      case "goofbye":
         console.log("Closing was found.");
         break;
      default:
         console.log("Unexpected message was found.");
   }

``` 
> switch语句中 使用了字符串。第一个条件实际上使用的是表达式，求值为两个字符串拼接后的结果。
> 拼接后的值等于switch参数，所以输出"Greeting was found."

**==可以添加更多逻辑:==**

```javascript
   let num = 25;
   switch (true) {
      case num < 0:
         console.log("Less than 0.");
         break;
      case num >= 0 && num <= 10:
         console.log("Between 0 and 10.");
         break;
      case num >= 10 && num <= 20:
         console.log("Between 10 and 20.");
      default:
         console.log("More than 20.");
   }

``` 
> **外部定义变量num， 而且传给switch语句的参数之所以是true，就是因为每个条件的表达式都会返回布尔值。条件的表达式分别被求值，直到有表达式返回true； 否则就会一直跳到default语句**

**==注意：switch语句在比较每一个条件的值时会使用全等操作符，因此不会强制转换数据类型("string" 不等于 10)==**

<br>

## 函数
> 基本语法:
> function functionName(arg0, arg1,..., argN){
>   statements
>}
```javascript
   function sayHi(name, message){
      console.log("Hello " + name + ", " + message);
   }
```
> 可以通过函数名来调用函数，要传给函数的参数放在括号里
> sayHi("Nicholas", "how are you today?");
> 输出结果"Nicholas, how are you today?"

- **ECMAScript中函数不需要指定是否返回值。任何函数在任何时间都可以使用 return 语句 来返回函数的值**
```javascript
   function sum(num1, num2){
      return num1 + num2;
}
```

<font size=7 color= #871F78> 注意: 只要碰到return语句，函数就会立即停止执行并退出。</font>

**比如：**
```javascript
   function sum(num1, num2){
      return num1 + num2;
      console.log("Hello World"); // 不会执行
}
```
- 一个函数可以有多个return：
   
   ```javascript
      function diff(num1, num2){
        if(num1 < num2){
           return num2 - num1;
        } else{
           return num1 - num2;
        }
   }
   ```
- return 语句可以不带返回值。**这时候函数会立即停止指向并返回undefined。这种用法最常用于提前终止函数执行，并不是为了返回值**
   ```javascript
   function sayHi(name, message){
      return;
      console.log("Hello " + name + ", " + message); // 不会执行
   }
   ```
> 严格模式对函数也有些限制:
> - 函数不能以eval 或 arguments 作为名称
> - 函数的参数不能叫eval 或 arguments
> - 两个命名参数不能叫同一个名称
> 
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
