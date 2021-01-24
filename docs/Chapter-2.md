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

**Listing 2-1: The Click Me Program**

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
> **✓ `javafx.scene.control`：** 这个包中定义了各个用户界面控件对应的类，如按钮、文本框和标签。Click Me 程序只使用了这个包中的一个类：Button，它表示一个用户可以点击的按钮。

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

> 在Application类中，start方法被定义为一个抽象方法，所以当你在JavaFX程序中包含一个start方法时，你实际上覆盖了抽象的start方法。
>
> ✓start方法在Application类中定义为抽象方法，因此，当您在JavaFX程序中包含start方法时，实际上是在覆盖抽象start方法。
>
> ✓ The start method is defined as an abstract method in the Application class, so when you include a start method in a JavaFX program, you’re actually overriding the abstract start method.
>
> 尽管这不是必需的，但是包含@override注释以显式声明您正在覆盖start方法总是一个好主意。如果您忽略了这个注释，然后在拼写命名的方法时犯了错误(例如，Start而不是Start)，或者如果您列出的参数不正确，Java会认为您在定义一个新方法，而不是覆盖Start方法。
>
> 尽管不是必需的，但最好还是包含@override注释以明确声明您覆盖了start方法。如果您省略了此批注，然后在拼写命名方法（例如，使用Start而不是start）时出错，或者您错误地列出了参数，则Java会认为您是在定义新方法，而不是覆盖start方法。
>
> <img src="assets/tip.png" width="80"/>Although it isn’t required, it’s always a good idea to include the @override annotation to explicitly state that you’re overriding the start method. If you omit this annotation and then make a mistake in spelling the method named (for example, Start instead of start) or if you list the parameters incorrectly, Java thinks you’re defining a new method instead of overriding the start method.
>
> 与main方法不同，start方法不是一个静态方法。当您从静态main方法调用launch方法时，launch方法将创建应用程序类的一个实例，然后调用start方法。
>
> ✓与main方法不同，start方法不是静态方法。当您从静态main方法调用启动方法时，启动方法会创建Application类的实例，然后调用start方法。
>
> ✓ Unlike the main method, the start method is not a static method.
>
> When you call the launch method from the static main method, the launch method creates an instance of your Application class and then calls the start method.
>
> start方法接受一个参数:应用程序的用户界面将在其上显示的Stage对象。当应用程序调用您的start方法时，应用程序通过primaryStage参数传递主阶段(称为主阶段)。因此，您可以在稍后的start方法中使用primaryStage参数来引用应用程序的阶段。
>
> ✓start方法接受一个参数：将在其上显示应用程序用户界面的Stage对象。当应用程序调用您的start方法时，该应用程序通过primaryStage参数传递主阶段（称为主阶段）。因此，您可以稍后在start方法中使用primaryStage参数来引用应用程序的阶段。
>
> ✓ The start method accepts one parameter: the Stage object on which
>
> the application’s user interface will display. When the application calls your start method, the application passes the main stage — known as the primary stage — via the primaryStage parameter. Thus, you can use the primaryStage parameter later in the start method to refer to the application’s stage.

## 创建按钮

Click Me程序显示的按钮是使用名为button的类创建的。该类是可用于创建用户界面控件的众多类之一。Button类和大多数其他控件类都可以在javafx.scene.control包中找到。要创建一个按钮，只需定义一个button类型的变量，然后像这样调用button构造函数:

Click Me程序显示的按钮是使用名为Button的类创建的。此类是可用于创建用户界面控件的众多类之一。在包javafx.scene.control中可以找到Button类和大多数其他控件类。要创建按钮，只需定义类型为Button的变量，然后按如下所示调用Button构造函数即可：

The button displayed by the Click Me program is created using a class named Button. This class is one of many classes that you can use to create user interface controls. The Button class and most of the other control classes are found in the package javafx.scene.control.

To create a button, simply define a variable of type Button and then call the Button constructor like this:

```java
Button btn; 
btn = new Button();
```

在清单2-1中的代码中，btn变量被声明为start方法之外的类变量，而Button对象实际上是在start方法内创建的。控件通常声明为类变量，以便您可以从类中定义的任何方法访问它们。正如您在下一节(“处理操作事件”)中所发现的，当用户单击按钮时，将调用一个名为buttonClicked的单独方法。通过将btn变量定义为类变量，start方法和buttonClicked方法都可以访问按钮。要设置按钮显示的文本值，调用setText方法，传递要显示为字符串的文本:

在清单2-1中的代码中，btn变量在start方法之外声明为类变量，而Button对象实际上是在start方法中创建的。控件通常被声明为类变量，以便您可以从类中定义的任何方法访问它们。正如您在下一节（“处理动作事件”）中发现的那样，当用户单击按钮时，将调用名为buttonClicked的单独方法。通过将btn变量定义为类变量，start方法和buttonClicked方法都可以访问按钮。要设置按钮显示的文本值，请调用setText方法，并将要显示的文本作为字符串传递：

In the code in Listing 2-1, the btn variable is declared as a class variable outside of the start method but the Button object is actually created within the start method. Controls are often declared as class variables so that you can access them from any method defined within the class. As you discover in the following section (“Handling an Action Event”), a separate method named buttonClicked is called when the user clicks the button. By defining the btn variable as a class variable, both the start method and the buttonClicked method have access to the button.

To set the text value displayed by the button, call the setText method, passing the text to be displayed as a string:

```java
btn.setText("Click me please!");
```

这里有一些关于按钮的额外花絮:

以下是有关按钮的一些其他提示：

Here are a few additional tidbits about buttons:

> ✓按钮构造函数允许你把要在按钮上显示的文本作为参数传递，就像下面这个例子:
>
> ✓Button构造函数允许您传递要在按钮上显示的文本作为参数，如以下示例所示：
>
> ✓ The Button constructor allows you to pass the text to be displayed on the button as a parameter, as in this example:
>
> ```java
> Btn = new Button("Click me please!");
> ```
>
> 如果以这种方式设置按钮的文本，则不需要调用setTitle方法。
>
> 如果以此方式设置按钮的文本，则无需调用setTitle方法。
>
> If you set the button’s text in this way, you don’t need to call the setTitle method.
>
> Button类是父类javafx.scene.control.Control派生出来的众多类之一。许多其他类都是从这个类派生出来的，包括Label、TextField、ComboBox、CheckBox和RadioButton。
>
> ✓Button类是从称为javafx.scene.control.Control的父类派生的众多类之一。该类派生了许多其他类，包括Label，TextField，ComboBox，CheckBox和RadioButton。
>
> <img src="assets/technical-stuff.png" width="50"/>✓ The Button class is one of many classes that are derived from a parent class known as javafx.scene.control.Control. Many other classes derive from this class, including Label, TextField, ComboBox, CheckBox, and RadioButton.
>
> 控件类是一个派生自高级父类javafx.scene.Node的不同类。Node是可以在场景中显示的所有用户界面元素的基类。控件是一种特定类型的节点，但也有其他类型的节点。换句话说，所有的控件都是节点，但不是所有的节点都是控件。您可以在本书后面阅读更多关于其他几种类型的节点。
>
> ✓Control类是从更高级别的父类javafx.scene.Node派生的几种不同类之一。节点是可以在场景中显示的所有用户界面元素的基类。控件是特定类型的节点，但是还有其他类型的节点。换句话说，所有控件都是节点，但并非所有节点都是控件。您可以在本书后面的内容中详细了解其他几种类型的节点。
>
> <img src="assets/technical-stuff.png" width="50"/>✓ The Control class is one of several different classes that are derived
>
> from higher-level parent class called javafx.scene.Node. Node is the base class of all user-interface elements that can be displayed in a scene. A control is a specific type of node, but there are other types of nodes. In other words, all controls are nodes, but not all nodes are controls. You can read more about several other types of nodes later in this book.

## 处理操作事件

当用户单击按钮时，将触发一个动作事件。您的程序可以通过提供一个事件处理程序来响应事件，该处理程序只是一些在事件发生时执行的代码。Click Me程序通过为按钮设置事件处理程序来工作;事件处理程序的代码将更改按钮上显示的文本。正如你在第3章中读到的，在JavaFX中有几种处理事件的方法。现在，我简要介绍一个最简单的方法，它只要求您指定在事件发生时调用一个方法，然后提供实现该方法的代码。要指定用户单击按钮时要调用的方法，可以调用按钮类的setOnAction方法。在清单2-1中是这样做的:

用户单击按钮时，将触发动作事件。您的程序可以通过提供事件处理程序来响应事件，该事件处理程序只是事件发生时将执行的少量代码。 Click Me程序通过为按钮设置事件处理程序来工作。事件处理程序的代码更改了按钮上显示的文本。正如您在第3章中所读到的那样，在JavaFX中有几种处理事件的方法。现在，我简要介绍一下最简单的方法之一，它只需要您指定在事件发生时就调用一个方法，然后提供实现该方法的代码。要指定当用户单击某个方法时要调用的方法按钮，则调用按钮类的setOnAction方法。清单2-1的操作如下：

When the user clicks a button, an action event is triggered. Your program can respond to the event by providing an event handler, which is simply a bit of code that will be executed whenever the event occurs. The Click Me program works by setting up an event handler for the button; the code for the event handler changes the text displayed on the button.

As you read in Chapter 3, there are several ways to handle events in JavaFX. For now, I look briefly at one of the simplest methods, which requires simply that you specify that a method be called whenever the event occurs and then provide the code to implement that method.

To specify the method to be called when the user clicks a button, you call the setOnAction method of the button class. Here’s how it’s done in Listing 2-1:

```java
btn.setOnAction(e -> buttonClick());
```

如果这里使用的语法看起来有点陌生，那是因为它使用了Java 8的一个新特性，称为Lambda表达式。正如本例中所使用的，这个新语法有三个元素:

如果此处使用的语法看起来有些陌生，那是因为它使用了Java 8的一项新功能，即Lambda表达式。在此示例中，此新语法包含三个元素：

<img src="assets/tip.png" width="80"/>If the syntax used here seems a little foreign, that’s because it uses a new feature of Java 8 called Lambda expressions. As used in this example, there are three elements to this new syntax:

> ✓参数e表示ActionEvent类型的对象，程序可以使用该对象获取有关事件的详细信息.Click Me程序会忽略此参数，因此至少现在也可以忽略它。✓箭头运算符（- >）是Java 8中引入的用于Lambda表达式的新运算符。✓方法调用buttonClick（）只需调用名为buttonClick的方法。
>
> 参数e表示一个ActionEvent类型的对象，程序可以使用它来获取事件的详细信息。Click Me程序会忽略这个参数，因此您也可以忽略它，至少目前是这样。箭头操作符(->)是Java 8中引入的一个新操作符，用于Lambda表达式。方法调用buttonClick()简单地调用名为buttonClick的方法。
>
> ✓ The argument e represents an object of type ActionEvent, which the program can use to get detailed information about the event.
>
> The Click Me program ignores this argument, so you can ignore it too, at least for now.
>
> ✓ The arrow operator (->) is a new operator introduced in Java 8 for use with Lambda expressions.
>
> ✓ The method call buttonClick() simply calls the method named buttonClick.

我将在第3章讨论Lambda表达式。在buttonClick作为用户单击按钮时调用的方法建立之后，下一步是编写buttonClick方法的代码。您可以在清单2-1的底部找到它:

我将在第3章中讨论Lambda表达式。在将buttonClick建立为用户单击按钮时要调用的方法之后，下一步是对buttonClick方法进行编码。在清单2-1的底部附近可以找到它：

I discuss Lambda expressions in Chapter 3.

After buttonClick has been established as the method to call when the user clicks the button, the next step is to code the buttonClick method. You find it near the bottom of Listing 2-1:

```java
public void buttonClick() {
  if (btn.getText() == "Click me please!") {
    btn.setText("You clicked me!"); 
  } else {
    btn.setText("Click me please!"); 
  }
}
```

该方法使用if语句交替地将按钮显示的文本更改为“您单击了我!”或者请点击我!换句话说，如果按钮的文字是“请点击我!”当用户点击按钮时，buttonClicked方法将文本更改为“您点击了我!”否则，if语句将按钮的文本更改为单击me please!。buttonClicked方法使用Button类的两个方法来执行它的工作:

此方法使用if语句将按钮显示的文本交替更改为您单击我！或请点击我！换句话说，如果按钮的文字是“请点击我！”当用户单击按钮时，buttonClicked方法会将文本更改为“您单击了我！”。否则，if语句会将按钮的文本更改回Click me please！。buttonClicked方法使用Button类的两种方法来执行其工作：

This method uses an if statement to alternately change the text displayed by the button to either You clicked me! or Click me please!. In other words, if the button’s text is Click me please! when the user clicks the button, the buttonClicked method changes the text to You clicked me!. Otherwise, the if statement changes the button’s text back to Click me please!.

The buttonClicked method uses two methods of the Button class to perform its work:

> ▼getText:返回按钮显示的字符串文本▼setText:设置按钮显示的文本
>
> ✓getText：以字符串形式返回按钮显示的文本✓setText：设置按钮显示的文本
>
> ✓ getText: Returns the text displayed by the button as a string 
>
> ✓ setText: Sets the text displayed by the button

有关处理事件的更多信息，请参见第3章。

有关处理事件的更多信息，请参见第3章。

<img src="assets/cross-reference.png" width="80"/>For more information about handling events, see Chapter 3.

## 创建布局面板

按钮本身并不是很有用。你必须在屏幕上显示它，用户才能点击它。而且任何现实的JavaFX程序都有不止一个控件。当您将第二个控件添加到用户界面时，您需要一种方法来指定控件之间的相对位置。例如，如果您的应用程序有两个按钮，您是希望它们垂直堆叠，一个在另一个之上，还是并排堆叠?

就其本身而言，按钮不是很有用。您实际上必须在屏幕上显示它，用户才能单击它。而且任何现实的JavaFX程序都将具有多个控件。在用户界面中添加第二个控件后，就需要一种方法来指定控件之间的相对位置。例如，如果您的应用程序有两个按钮，您是否希望它们垂直堆叠，一个在另一个之上或并排堆叠？

By itself, a button is not very useful. You must actually display it on the screen for the user to be able to click it. And any realistic JavaFX program will have more than one control. The moment you add a second control to your user interface, you need a way to specify how the controls are positioned relative to one another. For example, if your application has two buttons, do you want them to be stacked vertically, one above the other, or side by side?

这就是布局窗格的作用所在。布局窗格是一个容器类，您可以向其添加一个或多个用户界面元素。然后，布局窗格确定如何精确地显示这些元素之间的相对关系。

这就是布局窗格的来源。布局窗格是一个容器类，您可以在其中添加一个或多个用户界面元素。然后，布局窗格将准确确定如何相对于彼此显示这些元素。

That’s where layout panes come in. A layout pane is a container class to which you can add one or more user-interface elements. The layout pane then determines exactly how to display those elements relative to each other.

要使用布局窗格，首先要创建该窗格的实例。然后，将一个或多个控件添加到窗格中。这样做时，您可以指定在显示窗格时如何安排控件的详细信息。在您将所有控件添加到窗格中并按此顺序排列它们之后，您将窗格添加到场景中。

要使用布局窗格，请首先创建窗格的实例。然后，您将一个或多个控件添加到窗格中。这样做时，您可以指定在显示窗格时如何排列控件的详细信息。将所有控件添加到窗格中并进行排列后，将窗格添加到场景中。

To use a layout pane, you first create an instance of the pane. Then, you add one or more controls to the pane. When you do so, you can specify the details of how the controls will be arranged when the pane is displayed. After you add all the controls to the pane and arrange them just so, you add the pane to the scene.

JavaFX总共提供了八种不同类型的布局窗格，都是由JavaFX .scene.layout包中的类定义的。Click Me程序使用一种称为边框窗格的布局类型，它将窗格内容排列为五个一般区域:顶部、左侧、右侧、底部和中间。BorderPane类非常适合这样的布局:在顶部有菜单和工具栏，在底部有状态栏，可选任务窗格或工具栏在左边或右边，主工作区域在屏幕中央。

JavaFX总共提供了八种不同类型的布局窗格，所有这些窗格均由包javafx.scene.layout中的类定义。 Click Me程序使用一种称为边框窗格的布局类型，该布局将窗格的内容分为五个常规区域：顶部，左侧，右侧，底部和中间。 BorderPane类非常适合于布局，其中您具有元素，例如顶部的菜单和工具栏，底部的状态栏，左侧或右侧的可选任务窗格或工具栏以及位于中间的主工作区屏幕。

JavaFX provides a total of eight distinct types of layout panes, all defined by classes in the package javafx.scene.layout. The Click Me program uses a type of layout called a border pane, which arranges the contents of the pane into five general regions: top, left, right, bottom, and center. The BorderPane class is ideal for layouts in which you have elements such as a menu and toolbar at the top, a status bar at the bottom, optional task panes or toolbars on the left or right, and a main working area in the center of the screen.

在Click Me程序中创建边框窗格的行是

在“单击我”程序中创建边框窗格的行是

The lines that create the border pane in the Click Me program are

```java
BorderPane pane = new BorderPane(); 
pane.setCenter(btn);
```

在这里，使用name窗格声明了一个BorderPane类型的变量，并调用BorderPane构造函数来创建一个新的BorderPane对象。然后，使用setCenter方法将按钮(btn)显示在窗格的中心区域。这里有一些其他有趣的细节布局窗格:

在这里，使用名称窗格声明了BorderPane类型的变量，并调用BorderPane构造函数来创建新的BorderPane对象。然后，使用setCenter方法在窗格的中心区域显示按钮（btn）。以下是有关布局窗格的其他一些有趣的细节：

Here, a variable of type BorderPane is declared with the name pane, and the BorderPane constructor is called to create a new BorderPane object. Then, the setCenter method is used to display the button (btn) in the center region of the pane.

Here are a few other interesting details about layout panes:

> ✓ Layout panes automatically adjust the exact position of the elements
>
> they contain based on the size of the elements contained in the layout as well as on the size of the space in which the layout pane is displayed.
>
> <img src="assets/technical-stuff.png" width="50"/>✓ I said earlier that controls are a type of node, and that you would read about other types of nodes later in this book. Well, you just read about one: A layout pane is also a type of node.
>
> ✓ Each region of a border pane can contain a node. Because a layout
>
> pane itself is a type of node, each region of a border pane can contain another layout pane. For example, suppose you want to display three controls in the center region of a border pane. To do that, you’d create a second layout pane and add the three controls to it. Then, you’d set the second layout pane as the node to be displayed in the center region of the first layout pane.
>
> <img src="assets/cross-reference.png" width="50"/>✓ You read more about the BorderPane class and a few other commonly used layout panes in Chapter 5. You also can read about the layout panes that aren’t as commonly used in Chapter 13.

## 场景搭建

After you create a layout pane that contains the controls you want to display, the next step is to create a scene that will display the layout pane. You can do that in a single line of code that declares a variable of type Scene and calls the Scene class constructor. Here’s how I did it in the Click Me program:

```java
Scene scene = new Scene(pane, 300, 250);
```

The Scene constructor accepts three arguments:

> ✓ A node object that represents the root node to be displayed by the
>
> scene.
>
> A scene can have only one root node, so the root node is usually a layout pane, which in turn contains other controls to be displayed. In the Click Me program, the root note is the border layout pane that contains the button.
>
> ✓ The width of the scene in pixels. ✓ The height of the scene in pixels.

Note: If you omit the width and height, the scene will be sized automatically based on the size of the elements contained within the root node.

<img src="assets/cross-reference.png" width="80"/>You can find out about some additional capabilities of the Scene class in Chapter 4.

## 舞台设置

If the scene represents the nodes (controls and layout panes) that are displayed by the application, the stage represents the window in which the scene is displayed. When the JavaFX framework calls your application’s start method, it passes you an instance of the Stage class that represents the application’s primary stage — that is, the stage that represents the application’s main window. This reference is passed via the primaryStage argument.

Having created your scene, you’re now ready to finalize the primary stage so that the scene can be displayed. To do that, you must do at least two things:

> ✓ Call the setScene method of the primary stage to set the scene to be displayed.
>
> ✓ Call the show method of the primary stage to display the scene.
>
> After you call the show method, your application’s window becomes visible to the user and the user can then begin to interact with its controls.

It’s also customary to set the title displayed in the application’s title bar. You do that by calling the setTitle method of the primary stage. The last three lines of the start method for the Click Me application perform these functions:

```java
primaryStage.setScene(scene); 
primaryStage.setTitle("The Click Me App"); 
primaryStage.show();
```

When the last line calls the show method, the Stage displays — in other words, the window that was shown in Figure 2-1 displays onscreen.

<img src="assets/cross-reference.png" width="80"/>You can read about additional capabilities of the Stage class in Chapter 4.

## 检查 Click Counter 程序

Now that I’ve explained the details of every line of the Click Me program, I look at a slightly enhanced version of the Click Me program called the Click Counter program. In the Click Me program that was shown in Listing 1-1 (in Chapter 1), the text displayed on the button changes when the user clicks the button. In the Click Counter program, an additional type of control called a label displays the number of times the user has clicked the button.

Figure 2-2 shows the Click Counter program in operation. The window at the top of this figure shows how the Click Counter program appears when you first start it. As you can see, the text label at the top of the window displays the text You have not clicked the button. The second window shows what the program looks like after you click the button the first time. Here, the label reads You have clicked once. When the button is clicked a second time, the label changes again, as shown in the third window. Here, the label reads You have clicked 2 times. After that, the number displayed by the label updates each time you click the button to indicate how many times the button has been clicked.

> Figure 2-2: The Click Counter program in action.

![Figure 2-2](./assets/Figure-2-2.png)

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

The following paragraphs explain the key points of the Click Me program:

➝ 1：The import statements reference the javafx packages that will be used by the Click Me program.

➝ 7：The ClickMe class extends javafx.application.Application, thus specifying that the ClickMe class is a JavaFX application.

➝ 9：As with any Java program, the main method is the main entry point for all JavaFX programs.

➝ 11：The main method calls the launch method, which is defined by the Application class. The launch method, in turn, creates an instance of the ClickMe class and then calls the start method.

➝ 14：A variable named btn of type javafx.scene.control.Button is declared as a class variable. Variables representing JavaFX controls are commonly defined as class variables so that they can be accessed by any method in the class.

➝ 15：A class variable named lbl of type javafx.scene.control. Label represents the Label control so that it can be accessed from any method in the class.

➝ 16：A class variable named iClickCount will be used to keep track of the number of times the user clicks the button.

➝ 18：The declaration of the start method uses the @override annotation, indicating that this method overrides the default start method provided by the Application class. The start method accepts a parameter named primaryStage, which represents the window in which the Click Me application will display its user interface.

➝ 21：The start method begins by creating a Button object and assigning it to a variable named btn.

➝ 22：The button’s setText method is called to set the text displayed by the button to Click me please!.

➝ 23：The setOnAction is called to create an event handler for the button. Here, a Lambda expression is used to simply call the buttonClick method whenever the user clicks the button.

➝ 26：The constructor of the Label class is called to create a new label.

➝ 27：The label’s setText method is called to set the initial text value of the label to You have not clicked the button.

➝ 30：A border pane object is created by calling the constructor of the BorderPane class, referencing the border pane via a variable named pane. The border pane will be used to control the layout of the controls displayed on the screen.

➝ 31：The border pane’s setTop method is called to add the label to the top region of the border pane.

➝ 32：The border pane’s setCenter method is called to add the button to the center region of the border pane.

➝ 35：A scene object is created by calling the constructor of the Scene class, passing the border pane created in line 30 to the constructor to establish the border pane as the root node of the scene. In addition, the dimensions of the scene are set to 300 pixels in width and 250 pixels in height.

➝ 39：The setScene method of the primaryStage is used to add the scene to the primary stage.

➝ 40：The setTitle method is used to set the text displayed in the primary stage’s title bar.

➝ 41：The show method is called to display the primary stage. When this line is executed, the window that was shown in Figure 2-1 displays on the screen and the user can begin to interact with the program.

➝ 44：The buttonClick method is called whenever the user clicks the button.

➝ 46：The iClickCount variable is incremented to indicate that the user has clicked the button.

➝ 47：An if statement is used to determine whether the button has been clicked one or more times.

➝ 49：If the button has been clicked once, the label text is set to You have clicked once.

➝ 53：Otherwise, the label text is set to a string that indicates how many times the button has been clicked.

That’s all there is to it. If you understand the details of how the Click Counter program works, you’re ready to move on to Chapter 3. If you’re still struggling with a few points, I suggest you spend some time reviewing this chapter and experimenting with the Click Counter program in TextPad, Eclipse, or NetBeans.

The following paragraphs help clarify some of the key sticking points that might be tripping you up about the Click Counter program and JavaFX in general:

> ✓ When does the program switch from static to non-static? Like every Java program, the main entry point of a JavaFX program is the static main method.
>
> In most JavaFX programs, the static main method does just one thing:
>
> It calls the launch method to start the JavaFX portion of the program. The launch method creates an instance of the ClickCounter class and then calls the start method. At that point, the program is no longer running in a static context because an instance of the ClickCounter class has been created.
>
> ✓ Where does the primaryStage variable come from? The primaryStage variable is passed to the start method when the launch method calls the start method. Thus, the start method receives the primaryStage variable as a parameter.
>
> <img src="assets/technical-stuff.png" width="50"/>That’s why you won’t find a separate variable declaration for the primaryStage variable.
>
> ✓ How does the -> operator work? The -> operator is used to create
>
> what is known as a Lambda expression. Lambda expressions are a new feature of Java 8 that are used in situations that would’ve previously required an anonymous class. Don’t worry if you don’t understand how the Lambda expression works. I explain them in detail in Chapter 3.