## 结构体

结构体 `struct` 恰恰就是这样的复合数据结构，它是由其它数据类型组合而来。 其它语言也有类似的数据结构，不过可能有不同的名称，例如 `object`、 `record` 等。



struct 为自定义的数据类型，为相关联的值命名，打包 组成有意义的组合。

与元组类型类似，它们都包含多个相关的值。和元组一样，结构体的每一部分可以是不同类型。但不同于元组，结构体需要命名各部分数据以便能清楚的表明其值的意义。由于有了这些名字，结构体比元组更灵活：不需要依赖顺序来指定或访问实例中的值。



定义结构体，需要使用 `struct` 关键字并为整个结构体提供一个名字。结构体的名字需要描述它所组合的数据的意义。接着，在大括号中，定义每一部分数据的名字和类型，我们称为 **字段**（*field*）。例如，示例 展示了一个存储用户账号信息的结构体：

文件名：src/main.rs

```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}
```



一旦定义了结构体后，为了使用它，通过为每个字段指定具体值来创建这个结构体的 **实例**。

创建一个实例需要以结构体的名字开头，接着在大括号中使用 `key: value` 键 - 值对的形式提供字段，其中 key 是字段的名字，value 是需要存储在字段中的数据值。



实例中字段的顺序不需要和它们在结构体中声明的顺序一致。换句话说，结构体的定义就像一个类型的通用模板，而实例则会在这个模板中放入特定数据来创建这个类型的值。例如，可以像示例 这样来声明一个特定的用户：

```rust
fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
}
```
## 结构体

结构体 `struct` 恰恰就是这样的复合数据结构，它是由其它数据类型组合而来。 其它语言也有类似的数据结构，不过可能有不同的名称，例如 `object`、 `record` 等。



struct 为自定义的数据类型，为相关联的值命名，打包 组成有意义的组合。

与元组类型类似，它们都包含多个相关的值。和元组一样，结构体的每一部分可以是不同类型。但不同于元组，结构体需要命名各部分数据以便能清楚的表明其值的意义。由于有了这些名字，结构体比元组更灵活：不需要依赖顺序来指定或访问实例中的值。



定义结构体，需要使用 `struct` 关键字并为整个结构体提供一个名字。结构体的名字需要描述它所组合的数据的意义。接着，在大括号中，定义每一部分数据的名字和类型，我们称为 **字段**（*field*）。例如，示例 展示了一个存储用户账号信息的结构体：

文件名：src/main.rs

```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}
```



一旦定义了结构体后，为了使用它，通过为每个字段指定具体值来创建这个结构体的 **实例**。

创建一个实例需要以结构体的名字开头，接着在大括号中使用 `key: value` 键 - 值对的形式提供字段，其中 key 是字段的名字，value 是需要存储在字段中的数据值。



实例中字段的顺序不需要和它们在结构体中声明的顺序一致。换句话说，结构体的定义就像一个类型的通用模板，而实例则会在这个模板中放入特定数据来创建这个类型的值。例如，可以像示例 这样来声明一个特定的用户：

```rust
fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
}
```
## 结构体

结构体 `struct` 恰恰就是这样的复合数据结构，它是由其它数据类型组合而来。 其它语言也有类似的数据结构，不过可能有不同的名称，例如 `object`、 `record` 等。



struct 为自定义的数据类型，为相关联的值命名，打包 组成有意义的组合。

与元组类型类似，它们都包含多个相关的值。和元组一样，结构体的每一部分可以是不同类型。但不同于元组，结构体需要命名各部分数据以便能清楚的表明其值的意义。由于有了这些名字，结构体比元组更灵活：不需要依赖顺序来指定或访问实例中的值。



定义结构体，需要使用 `struct` 关键字并为整个结构体提供一个名字。结构体的名字需要描述它所组合的数据的意义。接着，在大括号中，定义每一部分数据的名字和类型，我们称为 **字段**（*field*）。例如，示例 展示了一个存储用户账号信息的结构体：

文件名：src/main.rs

```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}
```



一旦定义了结构体后，为了使用它，通过为每个字段指定具体值来创建这个结构体的 **实例**。

创建一个实例需要以结构体的名字开头，接着在大括号中使用 `key: value` 键 - 值对的形式提供字段，其中 key 是字段的名字，value 是需要存储在字段中的数据值。



实例中字段的顺序不需要和它们在结构体中声明的顺序一致。换句话说，结构体的定义就像一个类型的通用模板，而实例则会在这个模板中放入特定数据来创建这个类型的值。例如，可以像示例 这样来声明一个特定的用户：

```rust
fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
}
```

如果结构体的实例是可变的，我们可以使用点号并为对应的字段赋值:


文件名：src/main.rs

```rust
fn main() {
    let mut user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");
}
```

注意整个实例必须是可变的；Rust 并不允许只将某个字段标记为可变。另外需要注意同其他任何表达式一样，我们可以在函数体的最后一个表达式中构造一个结构体的新实例，来隐式地返回这个实例。

下面显示了一个 build_user 函数，它返回一个带有给定的 email 和用户名的 User 结构体实例。active 字段的值为 true，并且 sign_in_count 的值为 1。


```rust
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username: username,
        email: email,
        sign_in_count: 1,
    }
}
```

重复每个名称就更加烦人了。幸运的是，有一个方便的简写语法！
我们可以使用 字段初始化简写语法（field init shorthand）来重写 build_user，这样其行为与之前完全相同，不过无需重复 username 和 email 了

···rust
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username,
        email,
        sign_in_count: 1,
    }
}
```



