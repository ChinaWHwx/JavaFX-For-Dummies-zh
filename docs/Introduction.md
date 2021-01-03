# 介绍

最初有 AWT，抽象窗口工具包。 AWT 是 Java 第一个用于显示基于窗口的用户界面的系统。AWT 诞生了 Swing，它很快成为使用 Java 创建用户友好应用程序的首选方式。

但随后出现了JavaFX，GUI 宝座名副其实的继承者。JavaFX 旨在创建可在各种设备上运行的出色的用户界面，这些设备包括传统的台式机和手提电脑，平板电脑，智能手机，电视机顶盒，游戏机以及许多其他类型的设备。

直到最近，JavaFX 还是 Java 世界的红发继子（比喻受到不公平对待）。它与 Java 共存，却不是 Java 的正式组成部分。但是从 Java 8 开始，JavaFX 已完全集成到 Java 中。虽然 JavaFX 和 Swing 现在是共存的，但 Oracle 已经明确表示 Swing 正处于黄昏时期，而 JavaFX 代表着用户界面编程的未来。

所以你手里拿的书是正确的。 JavaFX 是每个 Java 程序员都可以拥有的基本技能，本书将帮助你掌握它。

## 关于本书

这不是那种廉价小说，需要你从头读到尾。如果让我看到你在沙滩上读这本书，我会把沙子踢到你脸上。海滩是用来阅读爱情小说或者谋杀悬疑小说的，而不是编程书籍。

假如你已经找到了一个更合适的阅读本书的地方，如果你愿意，你可以从第 1 章开始，到第 20 章结束。不过，这个顺序不是必需的。如果你是 JavaFX 编程新手，我建议你至少按顺序阅读第 1 部分，以便对 JavaFX 的工作原理有基本的了解。当你掌握了基础知识之后，就可以按照对你有意义的顺序来阅读这些章节。譬如你需要知道如何给图形添加效果，直接跳到第 14 章。想了解有关动画的信息，跳到第 17 章。

您无需记住本书中的任何内容。这是一本“need-to-know”（需知）书籍：当你需要了解某些内容时，可以将其拿起。想知道关于旋转图形的提示？拿起这本书。忘记了 TilePane 类的详细信息？拿起这本书。在你找到需要的东西之后，放下它，继续你的生活。

这本书可作为参考书。从你想了解的主题开始。在目录或索引中查找它。目录很详细，足够找到你要找的大部分主题。如果没有，请转到索引，在那里你可以找到更多的细节。

当然，这本书包含了大量的信息——所以如果你想对你感兴趣的主题进行一个简短的浏览，非常欢迎。如果你想知道场景图的全貌，请阅读第 7 章。但如果你只想要如何设置场景尺寸最大值的提示，只需要阅读 Scene 类这一节。

每当我描述 Java 代码示例时，都会将其如下所示：

```java
@override public void start(Stage primaryStage)
```

Java 类名、关键字或其他的语言元素始终以等宽字体显示。

## 鲁莽的假设

In this book, I make very few assumptions about what you already may or may not know about JavaFX. But I do have to make two basic assumptions:

> ✓ You own or have access to a computer on which Java JDK 8 has been installed or on which you have permission to install.
>
> ​	JavaFX 8 is an integral part of JDK 8, so JDK 8 is a requirement for figuring out JavaFX. If you have not yet installed it, you’ll find instructions on how to do so in Chapter 1.
>
> ✓ You know the basics of Java programming.
>
> ​	If you’re new to Java, may I suggest one of two books: my own Java All-In-One For Dummies, 4 th Edition, or Barry Burd’s Java For Dummies, 6th Edition. Both are published by Wiley.

There are no other prerequisites to this book.

## 本书组织架构

This book is organized into five parts. Here’s a brief description of what you find in each part.

### Part I: 开始使用 JavaFX

This part contains the information you need to get started with JavaFX programming. After a brief introduction to what JavaFX is and why it’s so popular, you discover the basics of creating simple JavaFX programs. You figure out how to create simple JavaFX scenes populated with common controls such as labels, text field, and buttons. Then, you find out how to write programs that respond to user input, such as when the user clicks a button or enters text into a text field. And finally, you read how to use basic layout managers to control the arrangement of controls in your JavaFX scene.

### Part II: JavaFX 控件

The chapters in this part focus on the various types of controls you can use in a JavaFX application. Chapter 7 starts by explaining the details of how the JavaFX scene graph works and presents the details of the class hierarchy used by the various controls. Then, the remaining chapters in this part present information about specific types of controls, ranging from check boxes and radio buttons to tables and menus.

### Part III: 加强你的场景设计

The chapters in this part help you improve the appearance of your applications. First, you read about additional types of layout managers that give you more precise control over the way your user interface is arranged. Then, you discover how to use CSS styles to apply formatting details. Next, you figure out how to incorporate simple shapes into your scenes. And finally, you can read about JavaFX’s special effects, which let you embellish your display with shadows, motion blurs, and so on.

### Part IV: 让你的程序活起来

The chapters in this part focus on various ways to make your programs more responsive and engaging. You discover how to work with properties, which you can use to make one part of your user interface respond to changes in another part of your user interface. Then, you discover how to incorporate media including sound and video. Next, you figure out how to create sophisticated animations that make the objects on the screen dance about. And finally, you read how to create programs that respond to multi-finger gestures on touch-enabled devices.

### Part V: 与“十”相关的部分

This wouldn’t be a For Dummies book without a Part of Tens. Each of the chapters here presents ten items of special interest. Chapter 19 presents ten additional JavaFX controls that didn’t fit in Part II. And Chapter 20 presents ten steps to creating a JavaFX application that displays a three-dimensional scene.

## 本书使用的图标

Like any For Dummies book, this book is chock-full of helpful icons that draw your attention to items of particular importance. You find the following icons throughout this book:

<img src="assets/warning.png" width="80"/>Danger, Will Robinson! This icon highlights information that may help you avert disaster.

<img src="assets/remember.png" width="80"/>Did I tell you about the memory course I took?

<img src="assets/tip.png" width="80"/>Pay special attention to this icon; it lets you know that some particularly useful tidbit is at hand.

<img src="assets/technical-stuff.png" width="80"/>Hold it — overly technical stuff is just around the corner. Obviously, because this is a programming book, almost every paragraph of the next 400 or so pages could get this icon. So I reserve it for those paragraphs that go into greater depth, down into explaining how something works under the covers probably deeper than you really need to know to use a feature, but often enlightening. You also sometimes find this icon when I want to illustrate a point with an example that uses some Java feature that hasn’t been covered so far in the book, but that is covered later. In those cases, the icon is just a reminder that you shouldn’t get bogged down in the details of the illustration, and instead focus on the larger point.

## 本书之外

A lot of extra content that you won’t find in this book is available at www. dummies.com. Go online to find the following:

> ✓ Online articles covering additional topics at
>
> ​	www.dummies.com/extras/javafx
>
> ​	Here you find articles covering additional features of JavaFX that didn’t quite fit in the book.
>
> ✓ The Cheat Sheet for this book is at
>
> ​	www.dummies.com/cheatsheet/javafx
>
> ​	Here you’ll find a convenient summary of some of the most important JavaFX classes.
>
> ✓ Code listings for this book at
>
> ​	www.dummies.com/extras/javafx
>
> ​	All the code listings used in this book are available for download.
>
> ✓ Updates to this book, if I have any, are also available at
>
> ​	www.dummies.com/extras/javafx

## 下一步该去哪儿

Yes, you can get there from here. With this book in hand, you’re ready to dive right into to the cool and refreshing water of the JavaFX pool. Browse through the Table of Contents and decide where you want to start. Be bold! Be courageous! Be adventurous! And above all, have fun!