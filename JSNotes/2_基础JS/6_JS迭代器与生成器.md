# 迭代器(iterator)
> 在软件开发领域，"迭代"的意思是按照顺序反复多次执行一段程序，通常有明确的终止条件。ES6 规范新增了两个高级特性：迭代器和生成器。

## 1.理解迭代

<font color=#192a56>
在JavaScript中，计数循环就是一种最简单的迭代：

```javascript
   for(let i = 1; i <= 10; ++1){
      console.log(i);
   }
```
**循环是迭代机制的基础，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。每次询函都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。**

迭代会在一个有序集合上进行。("有序" 可以理解为集合中所有项都可以按照既定的顺序遍历到，特别是开始和结束有明确的定义。)数组是JavaScript中有序集合最典型的例子。

```javascript
   let collection = ['foo', 'bar', 'baz'];

   for (let index = 0; index < collection.length; index++) {
      console.log(collection[index]);
   }
```
因为数组有已知长度，且每一项都可以通过索引获取，所以整个数组可以通过递增索引来遍历

由于如下原因，通过这种循环来执行例程并不理想：
- **迭代直线需要实现直到如何使用数据结构**
  - 数组中的每一项都只能先通过引用取得数组对象，然后再通过[]操作符取得的定索引位置上的项。这种情况并不适用于所有数据结构

- **遍历顺序并不是数据结构固有的**
  - 通过递增索引来访问数据是特定于数组类型的方式，并不使用与其他具有隐式的数据结构 


<br>

在ECMAScript较早的版本中，执行迭代必须通过循环或其他辅助结构，随着代码量增加，代码会变的越发混乱。解决这一问题，开发者无需事先知道如何迭代就能实现迭代操作。这个解决方案就是**迭代器模式**。


<br>

## 2.迭代器模式
**迭代器模式**描述了一个方案，即可以把有些结构称为"可迭代对象(iterable)",因为它们实现了正式的Iterable接口，而且可以通过迭代器Iterable消费。

<br>

可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的集合类型的对象。它们包含的元素都是有限的，而且都具有无歧义的遍历顺序:

```javascript
   // 数组的元素时有限的
   // 递增索引可以按顺序访问每个元素
   let arr = [3,1,4];

   // 集合的元素时有限的
   // 可以按照插入顺序访问每个元素
   let set = new Set().add(3).add(1).add(4);
```

> 任何实现 **Iterable** （可迭代对象）接口的数据结构都可以被实现 **Iterator** （迭代器）接口的结构“消费”。

> **迭代器**(Iterator) 是按需创建的一次性对象。每个迭代器都会关联一个**可迭代对象**，而迭代器会暴露迭代其关联可迭代对象的API.
> 迭代器无需了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。


<br>

### 2.1可迭代协议

实现Iterator接口(可迭代协议)要求同时具备两种能力：支持迭代的自我识别能力和创建实现Iterator接口的对象的能力。
这意味着必须暴露一个属性作为“默认迭代器”，而且这个属性必须使用特殊的键 **Symbol.iterator** .

很多类型都实现了Iterable接口：
- 字符串
- 数组
- Map
- 集合
- argument对象
- NodeList等DOM集合类型


```javascript
   let num = 1;
   let obj = {};

   // 这两种类型没有实现迭代器工厂函数
   console.log(num[Symbol.iterator]); // undefined
   console.log(obj[Symbol.iterator]); // undefined

   let str = 'abc';
   let arr = ['a', 'b', 'c'];
   let map = new Map().set('a', 1).set('b', 2).set('c', 3);
   let set = new Set().add('a').add('b').add('c');
   let els = document.querySelectorAll('div');

   console.log(str[Symbol.iterator]); // undefined
   // [Symbol.iterator]() { [native code] }

   console.log(arr[Symbol.iterator]); // undefined
   // values() { [native code] }

   console.log(map[Symbol.iterator]); // undefined
   // entries() { [native code] }

   console.log(set[Symbol.iterator]); // undefined
   // values() { [native code] }

   console.log(els[Symbol.iterator]); // undefined
   // values() { [native code] }

```
实际过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型都会自动兼容接受可迭代对象的任何语言特性。

接收可迭代对象的原生语言特性包括：
- for-of循环
- 数组解构
- 扩展操作符
- Array.from()
- 创建集合
- 创建Map
- Promise.all()接收由期约组成的可迭代对象
- Promise.race()接收由期约组成的可迭代对象
- yield*操作符，在生成器中使用


<br>

### 2.2迭代器协议
**迭代器是一种一次性使用的对象**，用于迭代与关联的可迭代对象。迭代器API使用next()方法在可迭代对象中遍历数据。每次成功调用next(),都会返回一个IteratorResult对象，其中包含迭代器返回的下一个值。若不调用next()，则无法知道迭代器的当前位置。

next()方法返回的迭代器对象IteratorResult包含两个属性： done 和 value。 
- done是布尔值，表示是否还可以再次调用next（）取得下一个值
- value包含可迭代对象的下一个值

```javascript
   // 可迭代对象
   let arr = ['foo', 'bar'];

   // 迭代器工厂函数
   console.log(arr[Symbol.iterator]); // undefined
   // values() { [native code] }

   // 迭代器
   let iter = arr[Symbol.iterator]();
   console.log(iter);
   // Array Iterator {}

   console.log(iter.next());
   // {value: "foo", done: false}

   console.log(iter.next());
   // {value: "bar", done: false}

   console.log(iter.next());
   // {value: undefined, done: true}

   console.log(iter.next());
   // {value: undefined, done: true}

```
done 为 true时不再调用next(),后续调用next()只会产生相同的值

<br>
如果可迭代对象在迭代期间被修改了，那么迭代器也会跟着反映变化

```javascript
   let arr = ['foo', 'bar'];

   // 迭代器
   let iter = arr[Symbol.iterator]();
   console.log(iter.next());
   // {value: "foo", done: false}

   arr.splice(1, 0, 'max');

   console.log(iter.next());
   // {value: "max", done: false}

   console.log(iter.next());
   // {value: "bar", done: false}

   console.log(iter.next());
   // {value: undefined, done: true}
```

<br>

---

# 生成器
> 生成器是ECMAScript新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的能力。这种新能力具有深远的影响，比如，使用生成器可以自定义迭代器和实现协程。

<br>

## 1.生成器基础
> 生成器的形式是一个函数，函数名称前面加一个星号(*)表示它是一个生成器。只要是可以定义函数的地方，就可以定义生成器。

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