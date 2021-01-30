# 第 2 章  深入 JavaFX 程序设计

> **在本章节**
>
> + 导入创建 JavaFX 程序所需的类
> + 创建一个继承 JavaFX `Application` 类的类
> + 使用 `Button`、`BorderPane` 和 `Scene` 等类创建用户界面
> + 创建用户单击按钮时调用的事件处理程序
> + 验证 Click Me 程序的增强版本

在第 1 章中，我介绍了名为 Click Me 的简单的 JavaFX 程序，并简单描述了它是如何工作的。本章中，我会把这个程序放在显微镜下，进行详细研究。阅读完本章，你将了解 Click Me 程序的每一行是如何工作的，以及为什么需要这样做。然后， 你就可以开始研究 JavaFX 编程更细微的技术了。

## 再看 Click Me 程序

图 2-1 展示了运行中的 Click Me 程序。若你所见，上面显示了一个包含 `Click me please!` 几个字的简单按钮。图中没有展示出来的是，当用户单击按钮时，它上面的文字将变成 `I’ve Been Clicked!`。

> 图 2-1：运行中的 Click Me 程序。

![Figure 2-1](./assets/Figure-2-1.png)

尽管这个程序很简单，但它展示了大多数你需要掌握的用于编写 JavaFX 程序所需的基本技术：

> ✓ 显示一个用户界面，上面包含一个标准控件 —— 这个例子中是按钮。
>
> ✓ 对用户的输入进行响应，出现在用户点击按钮时。
>
> ✓ 更新显示以确认用户的操作。

许多 JavaFX 程序都由这个简单主题变化而来：创建用户界面，响应用户的输入，然后更新显示以反映用户的输入。更为实际的 JavaFX 程序显示的用户界面必定不仅仅只有一个按钮。为响应用户输入而执行的处理还可能包括其他步骤，比如在数据库中查找信息或是执行计算。毫无疑问，显示的内容也将以更复杂的方式进行更新，而不仅仅是更改按钮上显示的文本。不过，在大多数真实的 JavaFX 程序中都可以找到这些基本要素的变体。

清单 2-1 显示了 Click Me 程序的完整代码。本章的剩余部分将对这个程序的每一行进行详细解释。

**清单 2-1：Click Me 程序**

```java
import javafx.application.*; 
import javafx.stage.*; 
import javafx.scene.*; 
import javafx.scene.layout.*; 
import javafx.scene.control.*;

public class ClickMe extends Application {

  public static void main(String[] args) { 
    launch(args); 
  }

  Button btn;

  @Override 
  public void start(Stage primaryStage) {
    // Create the button 
    btn = new Button(); 
    btn.setText("Click me please!"); 
    btn.setOnAction(e -> buttonClick());

    // Add the button to a layout pane 
    BorderPane pane = new BorderPane(); 
    pane.setCenter(btn);

    // Add the layout pane to a scene 
    Scene scene = new Scene(pane, 300, 250);

    // Finalize and show the stage 
    primaryStage.setScene(scene); 
    primaryStage.setTitle("The Click Me App"); 
    primaryStage.show();
  }

  public void buttonClick() {
    if (btn.getText() == "Click me please!") {
      btn.setText("You clicked me!"); 
    } else {
      btn.setText("Click me please!"); 
    }
  }
}
```

## 导入 JavaFX 包

JavaFX 程序与其他 Java 程序一样，以一系列 `import` 语句开头，这些语句引入了程序将会使用的各种 JavaFX 包。Click Me 程序包含了以下五个 `import` 语句：

```java
import javafx.application.*; 
import javafx.stage.*; 
import javafx.scene.*; 
import javafx.scene.layout.*; 
import javafx.scene.control.*;
```

如你所见，所有的 JavaFX 包都以 `javafx` 开头。Click Me 程序使用的类来自五个不同的 JavaFX 包：

> **✓ `javafx.application`：** 这个包中定义了所有 JavaFX 应用程序都依赖的核心类：`Application`。稍后你会在本章“继承 Application 类”一节中了解到更多关于 `Application` 类的信息。
>
> **✓ `javafx.stage`：** 这个包中最重要的类是 `Stage`，它定义了所有用户界面对象的顶级容器。`Stage` 是 JavaFX 应用程序的最高级别的窗口，应用程序所有的用户界面元素都显示在其中。
>
> **✓ `javafx.scene`：** 这个包中最重要的类是 `Scene`，它是一个容纳着程序显示的所有用户界面元素的容器。
>
> **✓ `javafx.scene.layout`：** 这个包中定义了一种特殊类型的用户界面元素，布局管理器。它们的工作是确定每个控件在用户界面中的显示位置。
>
> **✓ `javafx.scene.control`：** 这个包中定义了各个用户界面控件对应的类，如按钮、文本框和标签。Click Me 程序只使用了这个包中的一个类：`Button`，它表示一个用户可以点击的按钮。

## 继承 Application 类

JavaFX 应用程序是一个继承了 `javafx.application. Application` 的 Java 类。因此，Click Me 应用程序的主类声明是这样的：

```java
public class ClickMe extends Application
```

在这里，Click Me 应用程序由继承了 `Application` 的 `ClickMe` 的类定义。

<img src="assets/technical-stuff.png" width="80"/>因为在 Click Me 程序的第 1 行中导入了整个 `javafx.application` 包，所以 `Application` 类不需要使用全限定名。如果省略了 `javafx.application` 包的 `import` 语句，`ClickMe` 类的声明需要变成这样：

```java
public class ClickMe extends javafx.application.Application
```

`Application` 类负责管理 JavaFX 应用程序的生命周期。生命周期包括以下步骤：

1. 创建 `Application` 类的一个实例。

2. 调用 `init` 方法。

   `init` 方法的默认实现不做任何事情，可以通过覆盖 `init` 方法，在应用程序的用户界面显示之前执行你想要的任何处理。

3. 调用 `start` 方法。

   `start` 方法是一个抽象方法，这意味着 `Application` 类没有提供默认实现。因此，你必须提供自己的 `start` 方法版本。`start` 方法负责构建和显示用户界面。（更多信息，稍后请阅读“重写 start 方法”一节）

4. 等待应用程序结束，这通常发生在用户通过关闭主应用程序窗口或选择程序的退出命令来指示程序结束时。

   在此期间，应用程序并不是真正空闲的。相反，它忙于响应用户事件，例如单击按钮或从下拉列表中选择。

5. 调用 `stop` 方法。

   与`init` 方法一样，`stop` 方法的默认实现没有任何操作。你可以通过覆盖它，以实现在程序结束时执行一些必要的处理，例如关闭数据库或是保存文件。

## 启动应用程序

你应该知道，`main` 方法是 Java 程序的标准入口。以下就是 Click Me 程序的 `main` 方法：

```java
public static void main(String[] args) { 
  launch(args); 
}
```

如你所见，`main` 方法只包含一条语句，即对 `Application` 类的 `launch` 方法的调用。

`launch` 方法实际上是启动 `JavaFX` 应用程序的方法。 `launch` 方法是静态方法，所以可以在 `main` 方法的静态上下文中被调用。它创建了一个 `Application` 类实例，然后启动 JavaFX 生命周期，调用 `init` 和 `start` 方法，等待应用程序完成，再调用 `stop` 方法。

`starty` 方法直到 JavaFX 应用程序结束时才会返回。假设你为 Click Me 程序编写的 `main` 方法是这样的：

```java
public static void main(String[] args) {
  System.out.println("Launching JavaFX");
  launch(args);
  System.out.println("Finished"); 
}
```

当 JavaFX 应用程序窗口打开时，你会看到控制台窗口显示 `Launching JavaFX`。当你关闭 JavaFX 应用程序窗口，你会看到控制台显示 `Finished`。

## 重写 start 方法

每个 JavaFX 应用程序都必须包含一个 `start` 方法。在 `start` 方法中，你可以编写代码创建与用户进行交互的界面元素。例如，清单 2-1 中的 `start` 方法包含的代码展示了一个带有 `Click me please!` 字样的按钮。

当 JavaFX 应用程序启动时，JavaFX 框架会在 `Application` 类初始化之后调用 `start` 方法。

Click Me 程序的 `start` 方法如下所示：

```java
@Override public void start(Stage primaryStage) {
  // Create the button 
  btn = new Button(); 
  btn.setText("Click me please!"); 
  btn.setOnAction(e -> buttonClick());

  // Add the button to a layout pane 
  BorderPane pane = new BorderPane(); 
  pane.setCenter(btn);

  // Add the layout pane to a scene 
  Scene scene = new Scene(pane, 300, 250);

  // Finalize and show the stage 
  primaryStage.setScene(scene); 
  primaryStage.setTitle("The Click Me App"); 
  primaryStage.show();
}
```

为了创建 Click Me 程序的用户界面，`start` 方法执行了以下四个基本步骤：

1. 创建一个名为 `btn` 的按钮控件，将其文本设置为 `Click me please!`，并指定用户单击按钮时调用名为 `buttonClick` 的方法。

   有关此代码的详细说明，请参阅本章后面的“创建按钮”和“处理操作事件”部分。

2. 创建一个名为 `pane` 的布局面板，并将按钮添加到其中。

   更多细节，请参阅本章后面的“创建布局面板”部分。

3. 创建一个名为 `scene` 的场景，并将布局面板添加到其中。

   更多细节，请参阅本章后面的“场景搭建”部分。

4. 通过设置场景、设置舞台标题、展示舞台，最终完成舞台（stage）搭建。

   请参阅本章后面的“舞台设置”部分了解更多细节。

你将在本章后续部分找到这些代码块的相关细节。但是在继续之前，我想额外指出一些有关 start 方法的重要细节：

> ✓ 在 `Application` 类中，`start` 方法被定义为一个抽象方法，所以当你在 JavaFX 程序中包含 `start` 方法时，实际上覆盖了抽象的 start 方法。
>
> <img src="assets/tip.png" width="50"/>尽管不是必需的，但最好还是用 `@override` 注解明确声明你重写了 `start` 方法。如果省略了这个注解，当你拼错了方法名（例如，写成了 `Start` 而不是 `start`），或者列出的参数不正确，Java 会认为你是在定义一个新方法，而不是覆盖 start 方法。
>
> ✓ 与 `main` 方法不同，`start` 方法不是静态方法。当你从静态 `main` 方法调用 `launch` 方法时，`launch` 方法将创建 `Application` 类的一个实例，然后调用 `start` 方法。
>
> ✓ `start` 方法接受一个参数：`Stage` 对象，应用程序的用户界面将在其上进行显示。当应用程序调用你的 `start` 方法时，会通过 `primaryStage` 参数传递主舞台（primary stage）。因此，你可以在稍后的 `start` 方法中使用 `primaryStage` 参数来引用应用程序的舞台。
>

## 创建按钮

Click Me 程序显示的按钮是使用名为 `Button` 的类创建的。该类是可用于创建用户界面控件的众多类之一。 `Button` 和其他大多数控件类可以在 `javafx.scene.control`  包中找到。

要创建一个按钮，只需定义一个 `Button` 类型的变量，然后调用它的构造函数：

```java
Button btn; 
btn = new Button();
```

在清单 2-1 中的代码中，`btn` 在 `start` 方法之外声明为类变量，而 `Button` 对象实际上是在 `start` 方法内创建的。控件通常声明为类变量，以便你可以在类中定义的任何方法中访问它们。正如你会在下一节（“处理操作事件”）了解到的，当用户单击按钮时，将调用一个名为 `buttonClicked` 的单独方法。通过将 `btn` 定义为类变量，`start` 方法和 `buttonClicked` 方法都可以对它进行访问。

要设置按钮显示的文本，可以调用 `setText` 方法，并将要显示的文本作为字符串进行传递：

```java
btn.setText("Click me please!");
```

以下是有关按钮的一些趣闻：

> ✓ `Button` 构造函数允许你把要在按钮上显示的文本作为参数传递，如下：
>
> ```java
>Btn = new Button("Click me please!");
> ```
>
> 如果以这种方式设置按钮的文本，就不需要再调用 `setTitle` 方法。
> 
> <img src="assets/technical-stuff.png" width="50"/> ✓ `Button` 类是父类 `javafx.scene.control.Control` 派生的众多类之一。该类还派生了许多其他类，包括 `Label`，`TextField`，`ComboBox`，`CheckBox` 和 `RadioButton`。
>
> <img src="assets/technical-stuff.png" width="50"/>✓ `Control` 类是从更高级别的父类 `javafx.scene.Node` 派生的几种类之一。`Node` 是所有可以在场景中显示的用户界面元素的基类。控件是一种特定类型的节点，除此之外，还有其他类型的节点。换句话说，所有控件都是节点，但并非所有节点都是控件。你可以在本书后面的内容中详细了解其他几种类型的节点。

## 处理活动事件

用户单击按钮时，会触发一个活动事件。你的程序可以通过提供一个事件处理程序（指的是一些在事件发生时执行的代码）来响应事件。Click Me 程序便是通过给按钮设置代码为更改按钮上显示文本的处理程序来工作。

正如你从第 3 章读到的，JavaFX 中有几种处理事件的方法。现在，我简要介绍最简单的方法，它只需要你指定事件发生时调用的方法，并提供实现该方法的代码。

要指定用户单击按钮时调用的方法，可以调用 `Button` 类的 `setOnAction` 方法。如清单 2-1 所示：

```java
btn.setOnAction(e -> buttonClick());
```

<img src="assets/tip.png" width="80"/>这里使用的语法可能看起来有点陌生，因为它使用了 Java 8 的一个新特性 —— Lambda 表达式。在示例中，这个新语法包含三个元素：

> ✓ 参数 `e` 表示一个 `ActionEvent` 类型的对象，程序可以使用它来获取事件的详细信息。
>
> Click Me 程序忽略了这个参数，你也可以忽略它，至少现在是这样。
>
> ✓ 箭头操作符（->）是 Java 8 中引入的用于 Lambda 表达式的新运算符。
>
> ✓ `buttonClick()` 简单地调用名为 `buttonClick` 的方法。

我将在第 3 章讨论 Lambda 表达式。

在将 `buttonClick` 作为用户单击按钮时调用的方法之后，下一步是编写 `buttonClick` 方法的代码。你可以在清单 2-1 的底部找到它：

```java
public void buttonClick() {
  if (btn.getText() == "Click me please!") {
    btn.setText("You clicked me!"); 
  } else {
    btn.setText("Click me please!"); 
  }
}
```

该方法使用 `if` 语句交替地将按钮显示的文本更改为 `You clicked me!` 或 `Click me please!`。换句话说，如果按钮上的文本是 `Click me please!`，当用户单击按钮时，`buttonClicked` 方法会把它改为 `You clicked me!`。反之，`if` 语句会将按钮的文本更改回 `Click me please!`。

`buttonClicked` 使用 `Button` 类的两个方法来完成它的工作：

> **✓ getText：** 以字符串形式返回按钮上显示的文本
>
> **✓ setText：** 设置按钮显示的文本

<img src="assets/cross-reference.png" width="80"/>有关处理事件的更多信息，请参阅第 3 章。

## 创建布局面板

光有按钮没什么作用，你必须将它显示在屏幕上，用户才能对它进行点击。实际的 JavaFX 程序都有不止一个控件。当你将第二个控件添加到用户界面时，你需要一种方法来指定控件之间的相对位置。比如，如果你的应用程序有两个按钮，你是希望它们一个在另一个之上垂直堆放，还是并排摆放?

此时布局面板就能派的上用场。布局面板是容器类的一种，你可以往其中添加一个或多个用户界面元素。然后，布局面板会根据这些元素的相对关系决定如何准备地显示它们。

要使用布局面板，首先要创建它的实例。然后，将一个或多个控件添加到面板中。在这一步，你可以指定面板显示时控件是如何摆放的细节。将所有的控件添加到面板中并进行排列后，再将面板添加到场景中。

JavaFX 总共提供了 8 种不同类型的布局面板，都是由 `javafx.scene.layout` 包中类定义的。Click Me 程序使用了一种称为边界面板的布局类型，它将面板中的内容摆放在五个常规区域：顶部、左侧、右侧、底部和中心。`BorderPane` 类非常适合这样的布局：在顶部有菜单和工具栏，在底部有状态栏，可选任务面板或工具栏在左边或右边，主工作区域在屏幕中央。

Click Me 程序中创建边界面板的代码是：

```java
BorderPane pane = new BorderPane(); 
pane.setCenter(btn);
```

在这里，声明了一个名为 `pane` 的 `BorderPane` 类型的变量，并调用 `BorderPane` 构造函数创建了一个新的 `BorderPane` 对象。然后，使用 `setCenter` 方法将按钮（btn）显示在面板的中心区域。

以下是有关布局面板一些其他有趣的细节：

> 布局窗格会根据布局中包含的元素的大小以及布局窗格显示的空间大小自动调整它们所包含的元素的确切位置。
>
> 布局窗格会根据布局中包含的元素的大小以及显示布局窗格的空间的大小，自动调整其所包含元素的确切位置。
>
> ✓ Layout panes automatically adjust the exact position of the elements they contain based on the size of the elements contained in the layout as well as on the size of the space in which the layout pane is displayed.
>
> 我前面说过，控件是一种节点类型，您将在本书后面阅读其他类型的节点。嗯，您刚刚读到的是一个:布局窗格也是一种节点类型。
>
> 前面我说过，控件是节点的一种，您将在本书后面的内容中了解其他类型的节点。好吧，您只读了一个：布局窗格也是节点的一种。
>
> <img src="assets/technical-stuff.png" width="50"/>✓ I said earlier that controls are a type of node, and that you would read about other types of nodes later in this book. Well, you just read about one: A layout pane is also a type of node.
>
> 边框窗格的每个区域都可以包含一个节点。因为layoutpane本身是一种节点类型，边框窗格的每个区域都可以包含另一个布局窗格。例如，假设您想在边框窗格的中心区域显示三个控件。为此，您需要创建第二个布局窗格并将三个控件添加到其中。然后，将第二个布局窗格设置为在第一个布局窗格的中心区域显示的节点。
>
> 边框窗格的每个区域都可以包含一个节点。因为布局窗格本身是节点的一种，所以边框窗格的每个区域都可以包含另一个布局窗格。例如，假设您要在边框窗格的中心区域中显示三个控件。为此，您将创建第二个布局窗格，并向其中添加三个控件。然后，将第二个布局窗格设置为要在第一个布局窗格的中央区域中显示的节点。
>
> ✓ Each region of a border pane can contain a node. Because a layout pane itself is a type of node, each region of a border pane can contain another layout pane. For example, suppose you want to display three controls in the center region of a border pane. To do that, you’d create a second layout pane and add the three controls to it. Then, you’d set the second layout pane as the node to be displayed in the center region of the first layout pane.
>
> 您可以在第5章中阅读更多关于BorderPane类和其他一些常用的布局窗格的内容。您还可以阅读第13章中不常用的布局窗格。
>
> 在第5章中，您将了解有关BorderPane类和其他一些常用布局面板的更多信息。在第13章中，您还将了解到一些不常用的布局面板。
>
> <img src="assets/cross-reference.png" width="50"/>✓ You read more about the BorderPane class and a few other commonly used layout panes in Chapter 5. You also can read about the layout panes that aren’t as commonly used in Chapter 13.

## 场景搭建

在您创建一个包含您想要显示的控件的布局窗格之后，下一步是创建一个将显示布局窗格的场景。你可以用一行代码来声明一个Scene类型的变量并调用Scene类构造函数。以下是我如何在点击我程序中做到这一点:

创建包含要显示的控件的布局窗格之后，下一步是创建一个将显示布局窗格的场景。您可以在一行声明了Scene类型的变量并调用Scene类构造函数的代码中完成此操作。这是我在“点击我”程序中的操作方法：

After you create a layout pane that contains the controls you want to display, the next step is to create a scene that will display the layout pane. You can do that in a single line of code that declares a variable of type Scene and calls the Scene class constructor. Here’s how I did it in the Click Me program:

```java
Scene scene = new Scene(pane, 300, 250);
```

Scene构造函数接受三个参数:

Scene构造函数接受三个参数：

The Scene constructor accepts three arguments:

> 一个节点对象，表示要由场景显示的根节点。
>
> 一个节点对象，代表场景要显示的根节点。
>
> ✓ A node object that represents the root node to be displayed by the scene.
>
> 一个场景只能有一个根节点，因此根节点通常是一个布局窗格，该窗格依次包含要显示的其他控件。在Click Me程序中，根注释是包含按钮的边框布局窗格。
>
> 一个场景只能有一个根节点，因此该根节点通常是一个布局窗格，而该窗格又包含要显示的其他控件。在Click Me程序中，根注释是包含按钮的边框布局窗格。
>
> A scene can have only one root node, so the root node is usually a layout pane, which in turn contains other controls to be displayed. In the Click Me program, the root note is the border layout pane that contains the button.
>
> 以像素为单位的场景宽度。
>
> 场景的宽度（以像素为单位）。
>
> ✓ The width of the scene in pixels. 
>
> 以像素为单位的场景高度。
>
> 场景的高度（以像素为单位）。
>
> ✓ The height of the scene in pixels.

注意:如果你省略了宽度和高度，场景将根据根节点中包含的元素的大小自动调整大小。

注意：如果省略宽度和高度，将根据根节点中包含的元素的大小自动调整场景的大小。

Note: If you omit the width and height, the scene will be sized automatically based on the size of the elements contained within the root node.

你可以在第4章中找到Scene类的一些额外功能。

您可以在第4章中找到Scene类的一些其他功能。

<img src="assets/cross-reference.png" width="80"/>You can find out about some additional capabilities of the Scene class in Chapter 4.

## 舞台设置

如果场景表示应用程序显示的节点(控件和布局窗格)，那么stage表示显示场景的窗口。当JavaFX框架调用应用程序的start方法时，它传递给您一个Stage类的实例，该类表示应用程序的主阶段——即表示应用程序主窗口的阶段。该引用通过primaryStage参数传递。

如果场景表示应用程序显示的节点（控件和布局窗格），则阶段表示在其中显示场景的窗口。当JavaFX框架调用您的应用程序的start方法时，它将为您传递一个Stage类的实例，该实例代表该应用程序的主要阶段-即代表该应用程序的主窗口的阶段。此引用通过primaryStage参数传递。

If the scene represents the nodes (controls and layout panes) that are displayed by the application, the stage represents the window in which the scene is displayed. When the JavaFX framework calls your application’s start method, it passes you an instance of the Stage class that represents the application’s primary stage — that is, the stage that represents the application’s main window. This reference is passed via the primaryStage argument.

创建了场景之后，现在就可以完成主要阶段，以便可以显示场景。要做到这一点，你至少要做两件事:

创建场景后，您现在就可以完成主要阶段的准备工作，以便可以显示场景了。为此，您必须至少做两件事：

Having created your scene, you’re now ready to finalize the primary stage so that the scene can be displayed. To do that, you must do at least two things:

> 调用主舞台的setScene方法设置要显示的场景。
>
> ✓调用主要阶段的setScene方法来设置要显示的场景。
>
> ✓ Call the setScene method of the primary stage to set the scene to be displayed.
>
> 调用主舞台的show方法来显示场景。
>
> ✓调用主要阶段的show方法显示场景。
>
> ✓ Call the show method of the primary stage to display the scene.
>
> 调用show方法后，应用程序的窗口对用户是可见的，然后用户可以开始与控件交互。
>
> 调用show方法后，用户可以看到应用程序的窗口，然后用户可以开始与其控件进行交互。
>
> After you call the show method, your application’s window becomes visible to the user and the user can then begin to interact with its controls.

在应用程序的标题栏中设置显示的标题也是一种习惯。这可以通过调用主阶段的setTitle方法实现。Click Me应用程序的start方法的最后三行执行以下功能:

习惯上设置显示在应用程序标题栏中的标题。您可以通过调用主阶段的setTitle方法来实现。 Click Me应用程序的start方法的最后三行执行以下功能：

It’s also customary to set the title displayed in the application’s title bar. You do that by calling the setTitle method of the primary stage. The last three lines of the start method for the Click Me application perform these functions:

```java
primaryStage.setScene(scene); 
primaryStage.setTitle("The Click Me App"); 
primaryStage.show();
```

当最后一行调用show方法时，舞台显示——换句话说，如图2-1所示的窗口显示在屏幕上。

当最后一行调用show方法时，舞台显示-换句话说，图2-1中显示的窗口显示在屏幕上。

When the last line calls the show method, the Stage displays — in other words, the window that was shown in Figure 2-1 displays onscreen.

你可以在第4章阅读Stage类的额外功能。

您可以在第4章中了解Stage类的其他功能。

<img src="assets/cross-reference.png" width="80"/>You can read about additional capabilities of the Stage class in Chapter 4.

## 检查 Click Counter 程序

现在我已经解释了Click Me程序的每一行细节，现在来看一下Click Me程序的一个略微增强的版本，称为Click Counter程序。在清单1-1(第1章)所示的Click Me程序中，当用户单击按钮时，按钮上显示的文本会发生变化。在单击计数器程序中，另一种称为标签的控件类型显示用户单击按钮的次数。

现在我已经解释了Click Me程序的每一行细节，现在来看一下Click Me程序的一个略微增强的版本，称为Click Counter程序。在清单1-1(第1章)所示的Click Me程序中，当用户单击按钮时，按钮上显示的文本会发生变化。在单击计数器程序中，另一种称为标签的控件类型显示用户单击按钮的次数。

Now that I’ve explained the details of every line of the Click Me program, I look at a slightly enhanced version of the Click Me program called the Click Counter program. In the Click Me program that was shown in Listing 1-1 (in Chapter 1), the text displayed on the button changes when the user clicks the button. In the Click Counter program, an additional type of control called a label displays the number of times the user has clicked the button.

如图2-2所示。该图顶部的窗口显示了首次启动时单击计数器程序的显示方式。如您所见，窗口顶部的text标签将显示您没有单击按钮的文本。第二个窗口显示第一次单击按钮后程序的样子。在这里，标签显示您点击了一次。第二次单击按钮时，标签再次更改，如第三个窗口所示。在这里，标签显示你点击了2次。在此之后，每次单击按钮时，标签显示的数字就会更新，以指示按钮被单击了多少次。

图2-2显示了运行中的Click Counter程序。此图顶部的窗口显示了首次启动Click Counter程序时的显示方式。如您所见，窗口顶部的文本标签显示您尚未单击按钮的文本。第二个窗口显示第一次单击该按钮后程序的外观。在这里，标签显示为“您单击过一次”。再次单击该按钮时，标签将再次更改，如第三个窗口所示。在这里，标签显示为“您单击了两次”。此后，每次您单击按钮时，标签显示的数字都会更新，以指示单击按钮的次数。

Figure 2-2 shows the Click Counter program in operation. The window at the top of this figure shows how the Click Counter program appears when you first start it. As you can see, the text label at the top of the window displays the text You have not clicked the button. The second window shows what the program looks like after you click the button the first time. Here, the label reads You have clicked once. When the button is clicked a second time, the label changes again, as shown in the third window. Here, the label reads You have clicked 2 times. After that, the number displayed by the label updates each time you click the button to indicate how many times the button has been clicked.

> Figure 2-2: The Click Counter program in action.

![Figure 2-2](./assets/Figure-2-2.png)

清单2-2显示了点击计数器程序的源代码，下面的段落描述了它如何工作的关键点:

清单2-2显示了Click Counter程序的源代码，以下各段描述了其工作原理的要点：

Listing 2-2 shows the source code for the Click Counter program, and the following paragraphs describe the key points of how it works:

**Listing 2-2: The Click Counter Program**

```java
import javafx.application.*;                                                      // →1
import javafx.stage.*; 
import javafx.scene.*;
import javafx.scene.layout.*; 
import javafx.scene.control.*;

public class ClickCounter extends Application                                     // →7
{ 
  public static void main(String[] args)                                          // →9
  { 
    launch(args);                                                                 // →11
  }

  Button btn;                                                                     // →14
  Label lbl;                                                                      // →15
  int iClickCount = 0;                                                            // →16

  @Override public void start(Stage primaryStage)                                 // →18
  { 
    // Create the button 
    btn = new Button();                                                           // →21
    btn.setText("Click me please!");                                              // →22
    btn.setOnAction(e -> buttonClick());                                          // →23

    // Create the Label 
    lbl = new Label();                                                            // →26
    lbl.setText("You have not clicked the button.");                              // →27

    // Add the label and the button to a layout pane 
    BorderPane pane = new BorderPane();                                           // →30
    pane.setTop(lbl);                                                             // →31
    pane.setCenter(btn);                                                          // →32

    // Add the layout pane to a scene 
    Scene scene = new Scene(pane, 250, 150);                                      // →35

    // Add the scene to the stage, set the title 
    // and show the stage 
    primaryStage.setScene(scene);                                                 // →39
    primaryStage.setTitle("Click Counter");                                       // →40
    primaryStage.show();                                                          // →41
  }

  public void buttonClick()                                                       // →44
  { 
    iClickCount++;                                                                // →46
    if (iClickCount == 1)                                                         // →47
    {
      lbl.setText("You have clicked once.");                                      // →49
    }  
    else 
    {
      lbl.setText("You have clicked " + iClickCount + " times." );                // →53
    }
  }
}
```

以下段落解释了Click Me程序的要点:➝1:import语句引用了Click Me程序将使用的javafx包。➝7:ClickMe类扩展了javafx.application。应用程序，从而指定ClickMe类是JavaFX应用程序。➝9:与任何Java程序一样，main方法是所有JavaFX程序的主要入口点。

以下各段解释了Click Me程序的要点：➝1：import语句引用了Click Me程序将使用的javafx包。➝7：ClickMe类扩展了javafx.application.Application，因此指定了ClickMe类是JavaFX应用程序。➝9：与任何Java程序一样，main方法是所有JavaFX程序的主要入口点。

The following paragraphs explain the key points of the Click Me program:

➝ 1：The import statements reference the javafx packages that will be used by the Click Me program.

➝ 7：The ClickMe class extends javafx.application.Application, thus specifying that the ClickMe class is a JavaFX application.

➝ 9：As with any Java program, the main method is the main entry point for all JavaFX programs.

➝11:main方法调用由Application类定义的launch方法。然后，launch方法创建ClickMe类的实例，然后调用start方法。➝14:一个名为btn的变量，类型为javafx.scene.control。Button被声明为一个类变量。表示JavaFX控件的变量通常定义为类变量，以便类中的任何方法都可以访问它们。➝15:一个名为lbl的类变量，类型为javafx.scene.control。Label表示Label控件，以便可以从类中的任何方法访问它。

➝11：主要方法调用启动方法，该方法由Application类定义。然后，启动方法将创建ClickMe类的实例，然后调用启动方法。➝14：将名为btn的javafx.scene.control.Button类型的变量声明为类变量。代表JavaFX控件的变量通常被定义为类变量，以便可以通过该类中的任何方法进行访问。➝15：名为javafx.scene.control类型的lbl的类变量。 Label表示Label控件，以便可以从类中的任何方法对其进行访问。

➝ 11：The main method calls the launch method, which is defined by the Application class. The launch method, in turn, creates an instance of the ClickMe class and then calls the start method.

➝ 14：A variable named btn of type javafx.scene.control.Button is declared as a class variable. Variables representing JavaFX controls are commonly defined as class variables so that they can be accessed by any method in the class.

➝ 15：A class variable named lbl of type javafx.scene.control. Label represents the Label control so that it can be accessed from any method in the class.

➝16:一个名为iClickCount的类变量将用于跟踪用户单击按钮的次数。➝18:start方法的声明使用@override注释，表示该方法覆盖应用程序类提供的默认启动方法。start方法接受一个名为primaryStage的参数，该参数表示单击Me应用程序将在其中显示其用户界面的窗口。➝21:start方法首先创建一个按钮对象，并将其赋值给一个名为btn的变量。

➝16：一个名为iClickCount的类变量将用于跟踪用户单击按钮的次数。➝18：start方法的声明使用@override批注，指示此方法将覆盖提供的默认start方法通过Application类。 start方法接受一个名为primaryStage的参数，该参数表示Click Me应用程序将在其中显示其用户界面的窗口。➝21：start方法通过创建一个Button对象并将其分配给一个名为btn的变量开始。

➝ 16：A class variable named iClickCount will be used to keep track of the number of times the user clicks the button.

➝ 18：The declaration of the start method uses the @override annotation, indicating that this method overrides the default start method provided by the Application class. The start method accepts a parameter named primaryStage, which represents the window in which the Click Me application will display its user interface.

➝ 21：The start method begins by creating a Button object and assigning it to a variable named btn.

➝22:该按钮的setText方法被调用来设置按钮显示的文本点击我请!➝23:setOnAction被调用来为按钮创建一个事件处理程序。这里，使用Lambda表达式在用户单击按钮时调用buttonClick方法。➝26:调用Label类的构造函数来创建一个新标签。

➝22：调用按钮的setText方法将按钮显示的文本设置为“请单击我！”。➝23：调用setOnAction为按钮创建事件处理程序。这里，只要用户单击按钮，就使用Lambda表达式简单地调用buttonClick方法。➝26：Label类的构造函数被调用以创建新标签。

➝ 22：The button’s setText method is called to set the text displayed by the button to Click me please!.

➝ 23：The setOnAction is called to create an event handler for the button. Here, a Lambda expression is used to simply call the buttonClick method whenever the user clicks the button.

➝ 26：The constructor of the Label class is called to create a new label.

➝27:标签的setText方法被调用来将标签的初始文本值设置为您没有单击按钮。➝30:通过调用BorderPane类的构造函数创建边框窗格对象，并通过名为pane的变量引用边框窗格。边框窗格将用于控制屏幕上显示的控件的布局。➝31:边框窗格的setTop方法被调用，以将标签添加到边框窗格的顶部区域。

➝27：调用标签的setText方法将标签的初始文本值设置为您尚未单击按钮。➝30：通过调用BorderPane类的构造函数创建边框窗格对象，并通过a引用边框窗格名为窗格的变量。边框将用于控制屏幕上显示的控件的布局。➝31：调用边框的setTop方法将标签添加到边框的顶部区域。

➝ 27：The label’s setText method is called to set the initial text value of the label to You have not clicked the button.

➝ 30：A border pane object is created by calling the constructor of the BorderPane class, referencing the border pane via a variable named pane. The border pane will be used to control the layout of the controls displayed on the screen.

➝ 31：The border pane’s setTop method is called to add the label to the top region of the border pane.

➝32:将调用边框窗格的setCenter方法来将按钮添加到边框窗格的中心区域。➝35:通过调用scene类的构造函数来创建场景对象，将第30行创建的边框窗格传递给构造函数，以将边框窗格建立为场景的根节点。此外，场景的尺寸设置为300像素的宽度和250像素的高度。➝39:使用primaryStage的setScene方法将场景添加到primary stage。

➝32：调用边框窗格的setCenter方法以将按钮添加到边框窗格的中心区域。➝35：通过调用Scene类的构造函数，并将在第30行中创建的边框窗格传递给构造函数，以将边框窗格建立为场景的根节点。另外，场景的尺寸设置为宽度300像素，高度250像素。➝39：primaryStage的setScene方法用于将场景添加到主要舞台。

➝ 32：The border pane’s setCenter method is called to add the button to the center region of the border pane.

➝ 35：A scene object is created by calling the constructor of the Scene class, passing the border pane created in line 30 to the constructor to establish the border pane as the root node of the scene. In addition, the dimensions of the scene are set to 300 pixels in width and 250 pixels in height.

➝ 39：The setScene method of the primaryStage is used to add the scene to the primary stage.

➝40:setTitle方法用于设置主阶段的标题栏显示的文本。➝41:调用show方法来显示主阶段。当这一行执行后，屏幕上显示如图2-1所示的窗口，用户可以开始与程序进行交互。➝44:每当用户单击按钮时，buttonClick方法被调用。

➝40：setTitle方法用于设置在主舞台标题栏中显示的文本。➝41：调用show方法以显示主舞台。执行此行后，屏幕上将显示如图2-1所示的窗口，并且用户可以开始与程序进行交互。➝44：每当用户单击按钮时，都会调用buttonClick方法。

➝ 40：The setTitle method is used to set the text displayed in the primary stage’s title bar.

➝ 41：The show method is called to display the primary stage. When this line is executed, the window that was shown in Figure 2-1 displays on the screen and the user can begin to interact with the program.

➝ 44：The buttonClick method is called whenever the user clicks the button.

➝46:iClickCount变量会递增，表示用户已经单击了按钮。➝47:一个if语句用于确定按钮是否被点击了一次或多次。➝49:如果按钮被点击一次，标签文本被设置为你已经点击一次。➝53:否则，标签文本将被设置为一个字符串，该字符串表示按钮被点击了多少次。

➝46：iClickCount变量递增以表示用户已单击按钮。➝47：if语句用于确定是否已单击按钮一次或多次。➝49：如果单击过按钮一次，标签文本设置为您单击一次。➝53：否则，标签文本设置为一个字符串，该字符串指示单击按钮的次数。

➝ 46：The iClickCount variable is incremented to indicate that the user has clicked the button.

➝ 47：An if statement is used to determine whether the button has been clicked one or more times.

➝ 49：If the button has been clicked once, the label text is set to You have clicked once.

➝ 53：Otherwise, the label text is set to a string that indicates how many times the button has been clicked.

就是这样。如果您理解了Click Counter程序如何工作的细节，就可以进入第3章了。如果你还在为一些观点而挣扎，我建议你花些时间回顾这一章，并在TextPad、Eclipse或NetBeans中尝试点击计数器程序。

这里的所有都是它的。如果您了解Click Counter程序的工作原理的详细信息，就可以继续学习第3章。如果您仍在努力解决一些问题，建议您花些时间阅读本章并尝试使用Click Counter。 TextPad，Eclipse或NetBeans中的程序。

That’s all there is to it. If you understand the details of how the Click Counter program works, you’re ready to move on to Chapter 3. If you’re still struggling with a few points, I suggest you spend some time reviewing this chapter and experimenting with the Click Counter program in TextPad, Eclipse, or NetBeans.

以下段落有助于澄清一些关键的症结，可能会绊倒你的点击计数器程序和JavaFX一般:

以下段落有助于阐明一些可能使您不熟悉Click Counter程序和JavaFX的关键症结所在：

The following paragraphs help clarify some of the key sticking points that might be tripping you up about the Click Counter program and JavaFX in general:

> 什么时候程序从静态切换到非静态?与每个Java程序一样，JavaFX程序的主要入口点是静态main方法。
>
> 程序什么时候从静态切换到非静态？像每个Java程序一样，JavaFX程序的主要入口点是静态main方法。
>
> ✓ When does the program switch from static to non-static? Like every Java program, the main entry point of a JavaFX program is the static main method.
>
> 在大多数JavaFX程序中，静态main方法只做一件事:
>
> 在大多数JavaFX程序中，static main方法仅做一件事：
>
> In most JavaFX programs, the static main method does just one thing:
>
> 它调用launch方法来启动程序的JavaFX部分。launch方法创建ClickCounter类的实例，然后调用start方法。此时，程序不再在静态上下文中运行，因为已经创建了ClickCounter类的实例。
>
> 它调用启动方法来启动程序的JavaFX部分。启动方法创建ClickCounter类的实例，然后调用start方法。此时，该程序不再在静态上下文中运行，因为已经创建了ClickCounter类的实例。
>
> It calls the launch method to start the JavaFX portion of the program. The launch method creates an instance of the ClickCounter class and then calls the start method. At that point, the program is no longer running in a static context because an instance of the ClickCounter class has been created.
>
> primaryStage变量从哪里来?当启动方法调用启动方法时，primaryStage变量被传递给启动方法。因此，start方法接收primaryStage变量作为参数。
>
> ✓primaryStage变量来自哪里？当启动方法调用启动方法时，primaryStage变量将传递到启动方法。因此，start方法接收primaryStage变量作为参数。
>
> ✓ Where does the primaryStage variable come from? The primaryStage variable is passed to the start method when the launch method calls the start method. Thus, the start method receives the primaryStage variable as a parameter.
>
> 这就是为什么您不会为primaryStage变量找到单独的变量声明。
>
> 因此，您不会为primaryStage变量找到单独的变量声明。
>
> <img src="assets/technical-stuff.png" width="50"/>That’s why you won’t find a separate variable declaration for the primaryStage variable.
>
> ->操作符是如何工作的?->操作符用于创建Lambda表达式。Lambda表达式是Java 8的一个新特性，用于以前需要匿名类的情况。如果您不理解Lambda表达式的工作原理，也不必担心。我会在第三章详细解释。
>
> ->运算符如何工作？ ->运算符用于创建所谓的Lambda表达式。 Lambda表达式是Java 8的一项新功能，用于以前需要匿名类的情况。如果您不了解Lambda表达式的工作原理，请不要担心。我将在第3章中详细解释它们。
>
> ✓ How does the -> operator work? The -> operator is used to create
>
> what is known as a Lambda expression. Lambda expressions are a new feature of Java 8 that are used in situations that would’ve previously required an anonymous class. Don’t worry if you don’t understand how the Lambda expression works. I explain them in detail in Chapter 3.