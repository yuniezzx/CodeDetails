### 栈(Stack)与堆(Heap)



栈是一种线性的数据结构，类似于一个桶，后进先出（LIFO）。增加数据叫做**进栈**，移出数据则叫做**出栈**。栈中的所有数据都必须占用已知且固定大小的内存空间。假设数据大小是未知的，那么在取出数据时，你将无法取到你想要的数据。



堆是一种数据结构，存储的数据是动态分配的。堆中的数据没有固定的大小，可以在程序运行时动态地分配和释放。通常使用堆来存储动态创建的数据结构，比如说数组和结构体等。

当向堆上放入数据时，需要请求一定大小的内存空间。操作系统在堆的某处找到一块足够大的空位，把它标记为已使用，并返回一个表示该位置地址的**指针**, 该过程被称为**在堆上分配内存**，有时简称为 “分配”(allocating)。

接着，该指针会被推入**栈**中，因为指针的大小是已知且固定的，在后续使用过程中，你将通过栈中的**指针**，来获取数据在堆上的实际内存位置，进而访问该数据。


##### 性能区别

写入方面：入栈比在堆上分配内存要快，因为入栈时操作系统无需分配新的空间，只需要将新数据放入栈顶即可。相比之下，在堆上分配内存则需要更多的工作，这是因为操作系统必须首先找到一块足够存放数据的内存空间，接着做一些记录为下一次分配做准备。

读取方面：得益于 CPU 高速缓存，使得处理器可以减少对内存的访问，高速缓存和内存的访问速度差异在 10 倍以上！栈数据往往可以直接存储在 CPU 高速缓存中，而堆数据只能存储在内存中。访问堆上的数据比访问栈上的数据慢，因为必须先访问栈再通过栈上的指针来访问内存。

因此，处理器处理分配在栈上数据会比在堆上的数据更加高效。



>所有权原则：
>
>1. Rust 中每一个值都被一个变量所拥有，该变量被称为值的所有者
>2. 一个值同时只能被一个变量所拥有，或者说一个值只能拥有一个所有者
>3. 当所有者(变量)离开作用域范围时，这个值将被丢弃(drop)



#### 变量作用域

在 Rust 中，变量有一个作用域(scope)的概念，即变量的生命周期(lifetime)。变量的生命周期从声明它的位置开始，直到最后一次使用它的位置结束。

一个变量的作用域通常定义在花括号({})内部。在这个作用域之外，这个变量是不可见的。例如，下面这个例子中，变量 `x` 的作用域是花括号内部：



```rust
{
    let x = 1;
    println!("{}", x); // x 在这个作用域内可见，输出 1
}
println!("{}", x); // 编译错误：x 在这个作用域外不可见

```


如果在一个作用域中定义了一个变量，那么在该作用域之内的所有代码都可以访问该变量。如果一个作用域内定义了一个变量，那么在内部作用域中也可以访问该变量，但在外部作用域中是不可访问的。例如：

```rust
let x = 1; // 定义 x，作用域为整个函数

{ // 内部作用域
    let y = 2; // 定义 y，作用域为内部作用域
    println!("x={}, y={}", x, y); // 输出 x=1, y=2
}

// println!("x={}, y={}", x, y); // 编译错误：y 在这个作用域外不可见

```



Rust 中的变量作用域非常严格，变量的生命周期也是由 Rust 的 borrow checker 静态分析确定的。这也是 Rust 能够保证内存安全的重要机制之一。



#### 变量于数据的交互

#####  1. 移动

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;
}

```



看看图 4-1 以了解 `String` 的底层会发生什么。`String` 由三部分组成，如图左侧所示：一个指向存放字符串内容内存的指针，一个长度，和一个容量。这一组数据存储在栈上。右侧则是堆上存放内容的内存部分。



![](https://kaisery.github.io/trpl-zh-cn/img/trpl04-01.svg)



当我们将 `s1` 赋值给 `s2`，`String` 的数据被复制了，这意味着我们从栈上拷贝了它的指针、长度和容量。我们并没有复制指针指向的堆上数据。换句话说，内存中数据的表现如图 4-2 所示。



![](https://kaisery.github.io/trpl-zh-cn/img/trpl04-02.svg)



之前我们提到过当变量离开作用域后，Rust 自动调用 `drop` 函数并清理变量的堆内存。不过图 4-2 展示了两个数据指针指向了同一位置。这就有了一个问题：当 `s2` 和 `s1` 离开作用域，他们都会尝试释放相同的内存。这是一个叫做 **二次释放**（*double free*）的错误，也是之前提到过的内存安全性 bug 之一。两次释放（相同）内存会导致内存污染，它可能会导致潜在的安全漏洞。

为了确保内存安全，在 `let s2 = s1;` 之后，Rust 认为 `s1` 不再有效，因此 Rust 不需要在 `s1` 离开作用域后清理任何东西。



如果你在其他语言中听说过术语 **浅拷贝**（*shallow copy*）和 **深拷贝**（*deep copy*），那么拷贝指针、长度和容量而不拷贝数据可能听起来像浅拷贝。不过因为 Rust 同时使第一个变量无效了，这个操作被称为 **移动**（*move*），而不是叫做浅拷贝。上面的例子可以解读为 `s1` 被 **移动** 到了 `s2` 中。那么具体发生了什么，如图 4-4 所示。



![](https://kaisery.github.io/trpl-zh-cn/img/trpl04-04.svg)



这样就解决了我们的问题！因为只有 `s2` 是有效的，当其离开作用域，它就释放自己的内存，完毕。

另外，这里还隐含了一个设计选择：Rust 永远也不会自动创建数据的 “深拷贝”。因此，任何 **自动** 的复制可以被认为对运行时性能影响较小。



##### 2. 克隆



如果我们 **确实** 需要深度复制 `String` 中堆上的数据，而不仅仅是栈上的数据，可以使用一个叫做 `clone` 的通用函数。

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();

    println!("s1 = {}, s2 = {}", s1, s2);
}

// 这段代码能正常运行, 切能读取 s1, s2 的值
```



当出现 `clone` 调用时，你知道一些特定的代码被执行而且这些代码可能相当消耗资源。你很容易察觉到一些不寻常的事情正在发生。



##### 3. 只在栈上的数据：拷贝



这里还有一个没有提到的小窍门。这些代码使用了整型并且是有效的：

```rust
	fn main() {
    let x = 5;
    let y = x;

    println!("x = {}, y = {}", x, y);
}

```



但这段代码似乎与我们刚刚学到的内容相矛盾：没有调用 `clone`，不过 `x` 依然有效且没有被移动到 `y` 中。

原因是像整型这样的在编译时已知大小的类型被整个存储在栈上，所以拷贝其实际的值是快速的。这意味着没有理由在创建变量 `y` 后使 `x` 无效。换句话说，这里没有深浅拷贝的区别，所以这里调用 `clone` 并不会与通常的浅拷贝有什么不同，我们可以不用管它。

Rust 有一个叫做 `Copy` trait 的特殊注解，可以用在类似整型这样的存储在栈上的类型上。如果一个类型实现了 `Copy` trait，那么一个旧的变量在将其赋值给其他变量后仍然可用。

Rust 不允许自身或其任何部分实现了 `Drop` trait 的类型使用 `Copy` trait。如果我们对其值离开作用域时需要特殊处理的类型使用 `Copy` 注解，将会出现一个编译时错误。



那么哪些类型实现了 `Copy` trait 呢？你可以查看给定类型的文档来确认，不过作为一个通用的规则，任何一组简单标量值的组合都可以实现 `Copy`，任何不需要分配内存或某种形式资源的类型都可以实现 `Copy` 。如下是一些 `Copy` 的类型：

- 所有整数类型，比如 `u32`。
- 布尔类型，`bool`，它的值是 `true` 和 `false`。
- 所有浮点数类型，比如 `f64`。
- 字符类型，`char`。
- 元组，当且仅当其包含的类型也都实现 `Copy` 的时候。比如，`(i32, i32)` 实现了 `Copy`，但 `(i32, String)` 就没有。



#### 所有权与函数

将值传递给函数与给变量赋值的原理相似。向函数传递值可能会移动或者复制，就像赋值语句一样。示例  使用注释展示变量何时进入和离开作用域：

```rust
fn main() {
    let s = String::from("hello");  // s 进入作用域

    takes_ownership(s);             // s 的值移动到函数里 ...
                                    // ... 所以到这里不再有效

    let x = 5;                      // x 进入作用域

    makes_copy(x);                  // x 应该移动函数里，
                                    // 但 i32 是 Copy 的，
                                    // 所以在后面可继续使用 x

} // 这里，x 先移出了作用域，然后是 s。但因为 s 的值已被移走，
  // 没有特殊之处

fn takes_ownership(some_string: String) { // some_string 进入作用域
    println!("{}", some_string);
} // 这里，some_string 移出作用域并调用 `drop` 方法。
  // 占用的内存被释放

fn makes_copy(some_integer: i32) { // some_integer 进入作用域
    println!("{}", some_integer);
} // 这里，some_integer 移出作用域。没有特殊之处

```



返回值也可以转移所有权。示例展示了一个返回了某些值的示例

```rust 
fn main() {
    let s1 = gives_ownership();         // gives_ownership 将返回值
                                        // 转移给 s1

    let s2 = String::from("hello");     // s2 进入作用域

    let s3 = takes_and_gives_back(s2);  // s2 被移动到
                                        // takes_and_gives_back 中，
                                        // 它也将返回值移给 s3
} // 这里，s3 移出作用域并被丢弃。s2 也移出作用域，但已被移走，
  // 所以什么也不会发生。s1 离开作用域并被丢弃

fn gives_ownership() -> String {             // gives_ownership 会将
                                             // 返回值移动给
                                             // 调用它的函数

    let some_string = String::from("yours"); // some_string 进入作用域。

    some_string                              // 返回 some_string 
                                             // 并移出给调用的函数
                                             // 
}

// takes_and_gives_back 将传入字符串并返回该值
fn takes_and_gives_back(a_string: String) -> String { // a_string 进入作用域
                                                      // 

    a_string  // 返回 a_string 并移出给调用的函数
}

```

在 Rust 中，使用引用作为函数参数是一种常见的做法，特别是当你希望函数能够操作原始值而不是创建副本时。使用引用作为参数有以下几个常见的场景：

避免所有权转移：当你将一个值的所有权传递给函数时，该值将在函数中被移动或消耗，而无法在函数外部继续使用。通过使用引用作为参数，你可以借用（borrow）原始值的引用，而不是转移所有权，使得原始值在函数调用后仍然可用。

可变性和修改：通过使用可变引用作为参数，函数可以修改原始值。这在需要对值进行更改或更新的情况下很有用。

避免数据复制：将大型数据结构传递给函数时，如果直接传递值而不是引用，将会进行一次完整的数据复制，这可能会产生性能开销。通过使用引用，可以避免数据复制，提高性能和效率。



#### 引用与借用

##### 引用

- 简单来讲，引用是创建一个变量，指向另个指针的地址，而不是直接指向 **该指针指向的堆内存地址**
- 通过 & 取地址符获取对一个指针变量的引用



```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

```



![](https://kaisery.github.io/trpl-zh-cn/img/trpl04-05.svg)

变量s1是栈内存中的一个指针地址，通过 ptr 记录了存储于堆内存中的 String("hello") 的地址

变量s也存在栈内存中，通过 ptr 记录了 s1 的指针地址，来实现对 String("hello") 的引用


##### 借用

```rust
fn calculate_length(s: &String) -> usize { // s 是 String 的引用
    s.len()
} // 这里，s 离开了作用域。但因为它并不拥有引用值的所有权，
  // 所以什么也不会发生

```



变量 `s` 有效的作用域与函数参数的作用域一样，不过当 `s` 停止使用时并不丢弃引用指向的数据，因为 `s` 并没有所有权。当函数使用引用而不是实际值作为参数，无需返回值来交还所有权，因为就不曾拥有所有权。

我们将创建一个引用的行为称为 **借用**（*borrowing*）。正如现实生活中，如果一个人拥有某样东西，你可以从他那里借来。当你使用完毕，必须还回去。我们并不拥有它。


##### 可变引用和不可变引用
当我们从创建一个引用时，是不拥有所有权的，所有一般情况下，是无法改变借用过来的值的，但是可以添加 &mut 表示该引用是可变的。

```rust
fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}

```

可变引用有一个很大的限制：如果你有一个对该变量的可变引用，你就不能再创建对该变量的引用。这些尝试创建两个 s 的可变引用的代码会失败：

```rust

let mut s = String::from("hello");

let r1 = &mut s;
let r2 = &mut s;

println!("{}, {}", r1, r2);

```

以上代码会报错：

```
$ cargo run
   Compiling ownership v0.1.0 (file:///projects/ownership)
error[E0499]: cannot borrow `s` as mutable more than once at a time
 --> src/main.rs:5:14
  |
4 |     let r1 = &mut s;
  |              ------ first mutable borrow occurs here
5 |     let r2 = &mut s;
  |              ^^^^^^ second mutable borrow occurs here
6 |
7 |     println!("{}, {}", r1, r2);
  |                        -- first borrow later used here

For more information about this error, try `rustc --explain E0499`.
error: could not compile `ownership` due to previous error

```
这个报错说这段代码是无效的，因为我们不能在同一时间多次将 s 作为可变变量借用。第一个可变的借入在 r1 中，并且必须持续到在 println！ 中使用它，但是在那个可变引用的创建和它的使用之间，我们又尝试在 r2 中创建另一个可变引用，该引用借用与 r1 相同的数据。

这一限制以一种非常小心谨慎的方式允许可变性，防止同一时间对同一数据存在多个可变引用。新 Rustacean 们经常难以适应这一点，因为大部分语言中变量任何时候都是可变的。这个限制的好处是 Rust 可以在编译时就避免数据竞争。数据竞争（data race）类似于竞态条件，它可由这三个行为造成：

两个或更多指针同时访问同一数据。
至少有一个指针被用来写入数据。
没有同步数据访问的机制。
数据竞争会导致未定义行为，难以在运行时追踪，并且难以诊断和修复；Rust 避免了这种情况的发生，因为它甚至不会编译存在数据竞争的代码！

一如既往，可以使用大括号来创建一个新的作用域，以允许拥有多个可变引用，只是不能 同时 拥有：

> 多个可变引用

Rust 在同时使用可变与不可变引用时也采用的类似的规则。这些代码会导致一个错误：
```rust
fn main() {
    let mut s = String::from("hello");

    let r1 = &s; // 没问题
    let r2 = &s; // 没问题
    let r3 = &mut s; // 大问题

    println!("{}, {}, and {}", r1, r2, r3);
}
```

错误如下：

```rust
$ cargo run
   Compiling ownership v0.1.0 (file:///projects/ownership)
error[E0502]: cannot borrow `s` as mutable because it is also borrowed as immutable
 --> src/main.rs:6:14
  |
4 |     let r1 = &s; // no problem
  |              -- immutable borrow occurs here
5 |     let r2 = &s; // no problem
6 |     let r3 = &mut s; // BIG PROBLEM
  |              ^^^^^^ mutable borrow occurs here
7 |
8 |     println!("{}, {}, and {}", r1, r2, r3);
  |                                -- immutable borrow later used here

For more information about this error, try `rustc --explain E0502`.
error: could not compile `ownership` due to previous error

```

哇哦！我们 也 不能在拥有不可变引用的同时拥有可变引用。

不可变引用的用户可不希望在他们的眼皮底下值就被意外的改变了！然而，多个不可变引用是可以的，因为没有哪个只能读取数据的人有能力影响其他人读取到的数据。

注意一个引用的作用域从声明的地方开始一直持续到最后一次使用为止。例如，因为最后一次使用不可变引用（println!)，发生在声明可变引用之前，所以如下代码是可以编译的：

```rust
fn main() {
    let mut s = String::from("hello");

    let r1 = &s; // 没问题
    let r2 = &s; // 没问题
    println!("{} and {}", r1, r2);
    // 此位置之后 r1 和 r2 不再使用

    let r3 = &mut s; // 没问题
    println!("{}", r3);
}
```

##### 悬垂引用
悬垂引用也叫做悬垂指针，意思为指针指向某个值后，这个值被释放掉了，而指针仍然存在，其指向的内存可能不存在任何值或已被其它变量重新使用。在 Rust 中编译器可以确保引用永远也不会变成悬垂状态：当你获取数据的引用后，编译器可以确保数据不会在引用结束前被释放，要想释放数据，必须先停止其引用的使用。

让我们尝试创建一个悬垂引用，Rust 会抛出一个编译时错误：


```rust
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String {
    let s = String::from("hello");

    &s
}

```

仔细看看 dangle 代码的每一步到底发生了什么：


```rust

fn dangle() -> &String { // dangle 返回一个字符串的引用

    let s = String::from("hello"); // s 是一个新字符串

    &s // 返回字符串 s 的引用
} // 这里 s 离开作用域并被丢弃。其内存被释放。
  // 危险！
```
因为 s 是在 dangle 函数内创建的，当 dangle 的代码执行完毕后，s 将被释放，但是此时我们又尝试去返回它的引用。这意味着这个引用会指向一个无效的 String，这可不对！

其中一个很好的解决方法是直接返回 String：

```rust

fn no_dangle() -> String {
    let s = String::from("hello");

    s
}
```

 
