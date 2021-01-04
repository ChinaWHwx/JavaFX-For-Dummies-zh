# 介绍

最初有 AWT，抽象窗口工具包。 AWT 是 Java 第一个用于显示基于窗口的用户界面的系统。AWT 诞生了 Swing，它很快成为使用 Java 创建用户友好应用程序的首选方式。

但随后出现了JavaFX，GUI 宝座名副其实的继承者。JavaFX 旨在创建可在各种设备上运行的出色的用户界面，这些设备包括传统的台式机和手提电脑，平板电脑，智能手机，电视机顶盒，游戏机以及许多其他类型的设备。

直到最近，JavaFX 还是 Java 世界的红发继子（比喻受到不公平对待）。它与 Java 共存，却不是 Java 的正式组成部分。但是从 Java 8 开始，JavaFX 已完全集成到 Java 中。虽然 JavaFX 和 Swing 现在是共存的，但 Oracle 已经明确表示 Swing 正处于黄昏时期，而 JavaFX 代表着用户界面编程的未来。

所以你手里拿的书是正确的。 JavaFX 是每个 Java 程序员都可以拥有的基本技能，本书将帮助你掌握它。

## 关于本书

这不是那种廉价小说，需要你从头读到尾。如果让我看到你在沙滩上读这本书，我会把沙子踢到你脸上。海滩是用来阅读爱情小说或者谋杀悬疑小说的，而不是编程书籍。

假如你已经找到了一个更合适的阅读本书的地方，如果你愿意，可以从第 1 章开始，到第 20 章结束。不过，这个顺序不是必需的。如果你是 JavaFX 编程新手，我建议你至少按顺序阅读第 1 部分，以便对 JavaFX 的工作原理有基本的了解。当你掌握了基础知识之后，就可以按照对你有意义的顺序来阅读这些章节。譬如你需要知道如何给图形添加效果，直接跳到第 14 章。想了解有关动画的信息，跳到第 17 章。

您无需记住本书中的任何内容。这是一本“need-to-know”（需知）书籍：当你需要了解某些内容时，可以将其拿起。想知道关于旋转图形的提示？拿起这本书。忘记了 TilePane 类的详细信息？拿起这本书。在你找到需要的东西之后，放下它，继续你的生活。

这本书可作为参考书。从你想了解的主题开始，在目录或索引中查找它。目录很详细，足够找到你要找的大部分主题。如果没有，请转到索引，在那里你可以找到更多的细节。

当然，这本书包含了大量的信息——所以如果你想对你感兴趣的主题进行一个简短的浏览，非常欢迎。如果你想知道场景图的全貌，请阅读第 7 章。但如果你只想要如何设置场景尺寸最大值的提示，只需要阅读 Scene 类这一节。

每当我描述 Java 代码示例时，都会将其如下所示：

```java
@override public void start(Stage primaryStage)
```

Java 类名、关键字或其他语言元素始终以等宽字体显示。

## 鲁莽的假设

在本书中，我几乎没有设想你是否已经了解 JavaFX。但我必须做出两个基本假设：

> ✓ 你拥有或者可以访问一台已经安装了 Java JDK 8 的计算机，亦或者你有安装权限。
>
> ​	JavaFX 8 是 JDK 8 的一部分，所以 JDK 8 是解决 JavaFX 的必要条件。如果尚未安装，请参阅第 1 章中的说明。
>
> ✓ 你了解 Java 编程的基础知识。
>
> ​	如果你是 Java 的新手，我推荐以下两本书之一：我自己的《 Java All-In-One For Dummies》（第四版）或 Barry Burd 的《 Java for Dummies》（第六版）。两者均由 Wiley 出版社出版。

除以上之外，本书没有其他先决条件。

## 本书组织架构

本书分为五个部分，下面是每个部分的简要说明。

### Part I: 开始使用 JavaFX

这一部分包含开始使用JavaFX编程所需的信息。在简要介绍什么是JavaFX以及它为什么如此流行之后，您将了解创建简单JavaFX程序的基础。您将弄清楚如何创建简单的JavaFX场景，其中填充了常用控件，例如标签，文本字段和按钮。然后，您了解如何编写响应用户输入的程序，例如当用户单击按钮或在文本字段中输入文本时。最后，您将学习如何使用基本的布局管理器来控制JavaFX场景中控件的排列。

这一部分包含了开始使用JavaFX编程所需的信息。在简要介绍JavaFX是什么以及它为什么如此流行之后，您将了解创建简单JavaFX程序的基础知识。您将了解如何创建简单的JavaFX场景，这些场景使用常见的控件填充，如标签、文本字段和按钮。然后，您将了解如何编写响应用户输入的程序，例如当用户单击按钮或向文本字段输入文本时。最后，您将了解如何使用基本的布局管理器来控制JavaFX场景中控件的安排。

This part contains the information you need to get started with JavaFX programming. After a brief introduction to what JavaFX is and why it’s so popular, you discover the basics of creating simple JavaFX programs. You figure out how to create simple JavaFX scenes populated with common controls such as labels, text field, and buttons. Then, you find out how to write programs that respond to user input, such as when the user clicks a button or enters text into a text field. And finally, you read how to use basic layout managers to control the arrangement of controls in your JavaFX scene.

### Part II: JavaFX 控件

本部分的各章重点介绍可在JavaFX应用程序中使用的各种控件。第7章首先说明JavaFX场景图的工作原理，并介绍各种控件使用的类层次结构。然后，本部分的其余章节介绍了有关特定类型的控件的信息，从复选框和单选按钮到表格和菜单，不一而足。

本部分的章节主要关注在JavaFX应用程序中可以使用的各种类型的控件。第7章从解释JavaFX场景图的工作细节开始，并展示了各种控件使用的类层次结构的细节。然后，本部分的其余章节将介绍有关特定类型控件的信息，从复选框和单选按钮到表格和菜单。

The chapters in this part focus on the various types of controls you can use in a JavaFX application. Chapter 7 starts by explaining the details of how the JavaFX scene graph works and presents the details of the class hierarchy used by the various controls. Then, the remaining chapters in this part present information about specific types of controls, ranging from check boxes and radio buttons to tables and menus.

### Part III: 加强你的场景设计

本部分中的各章可帮助您改善应用程序的外观。首先，您了解了布局管理器的其他类型，这些类型的布局管理器使您可以更精确地控制用户界面的排列方式。然后，您发现如何使用CSS样式来应用格式设置详细信息。接下来，您将了解如何将简单的形状合并到场景中。最后，您可以阅读有关JavaFX的特殊效果的信息，这些效果可以使您的显示具有阴影，运动模糊等效果。

本部分的章节将帮助您改进应用程序的外观。首先，您将了解到其他类型的布局管理器，它们可以让您更精确地控制用户界面的安排方式。然后，您将了解如何使用CSS样式来应用格式化细节。接下来，你要弄清楚如何将简单的形状整合到你的场景中。最后，您可以阅读关于JavaFX的特效，它允许您使用阴影、运动模糊等来修饰您的显示。

The chapters in this part help you improve the appearance of your applications. First, you read about additional types of layout managers that give you more precise control over the way your user interface is arranged. Then, you discover how to use CSS styles to apply formatting details. Next, you figure out how to incorporate simple shapes into your scenes. And finally, you can read about JavaFX’s special effects, which let you embellish your display with shadows, motion blurs, and so on.

### Part IV: 让你的程序活起来

本部分的各章重点介绍使程序更具响应性和吸引力的各种方法。您会发现如何使用属性，这些属性可用于使用户界面的一部分响应用户界面另一部分的更改。然后，您发现如何合并包括声音和视频在内的媒体。接下来，您将了解如何创建复杂的动画来使屏幕上的对象跳动。最后，您将学习如何在支持触摸的设备上创建响应多手指手势的程序。

这一部分的章节着重于各种方法来使你的程序更有响应性和吸引力。您将了解如何使用属性，您可以使用属性使用户界面的一部分响应用户界面另一部分的更改。然后，您将了解如何合并包括声音和视频在内的媒体。接下来，您将了解如何创建复杂的动画，使屏幕上的对象跳舞。最后，您将了解如何创建程序来响应支持触摸的设备上的多手指手势。

The chapters in this part focus on various ways to make your programs more responsive and engaging. You discover how to work with properties, which you can use to make one part of your user interface respond to changes in another part of your user interface. Then, you discover how to incorporate media including sound and video. Next, you figure out how to create sophisticated animations that make the objects on the screen dance about. And finally, you read how to create programs that respond to multi-finger gestures on touch-enabled devices.

### Part V: 与“十”相关的部分

没有几分之一就不是一本傻瓜书。这里的每一章都提出十个特别感兴趣的项目。第19章介绍了另外10个第二部分不适合的JavaFX控件。第20章介绍创建显示三维场景的JavaFX应用程序的十个步骤。

这不是一本“傻瓜书”如果没有几十个部分的话。这里的每一章都有十个特别有趣的项目。第19章介绍了另外10个JavaFX控件，它们在第二部分中没有出现。第20章介绍了创建一个显示三维场景的JavaFX应用程序的10个步骤。

This wouldn’t be a For Dummies book without a Part of Tens. Each of the chapters here presents ten items of special interest. Chapter 19 presents ten additional JavaFX controls that didn’t fit in Part II. And Chapter 20 presents ten steps to creating a JavaFX application that displays a three-dimensional scene.

## 本书使用的图标

像任何《傻瓜书》一样，这本书充满了有用的图标，吸引您注意特别重要的项目。您可以在本书中找到以下图标：

像任何一本“傻瓜书”一样，这本书充满了有用的图标，可以吸引你对特别重要项目的注意。你可以在本书中找到以下图标:

Like any For Dummies book, this book is chock-full of helpful icons that draw your attention to items of particular importance. You find the following icons throughout this book:

<img src="assets/warning.png" width="80"/>危险，威尔·鲁滨逊！此图标突出显示可以帮助您避免灾难的信息。

危险,威尔•罗宾逊此图标突出显示可能帮助您避免灾难的信息。

Danger, Will Robinson! This icon highlights information that may help you avert disaster.

<img src="assets/remember.png" width="80"/>我是否告诉过我我的记忆课程？

我跟你说过我上的记忆课吗?

Did I tell you about the memory course I took?

<img src="assets/tip.png" width="80"/>

请特别注意此图标；它使您知道手头有一些特别有用的花絮。

要特别注意这个图标;它让您知道一些特别有用的珍闻在手边。

Pay special attention to this icon; it lets you know that some particularly useful tidbit is at hand.

<img src="assets/technical-stuff.png" width="80"/>

抓住它-过于技术性的东西指日可待。显然，由于这是一本编程书籍，因此接下来的约400页左右的几乎每个段落都可以显示此图标。因此，我将其保留给那些更深入的段落，以解释某些事物在幕后的工作方式，其作用可能比您真正想使用某功能所需的深度要大，但通常会启发人。当我想用一个示例来说明一个点时，有时也会找到该图标，该示例使用了本书中到目前为止尚未介绍的某些Java功能，但稍后会介绍。在这种情况下，该图标只是提醒您，您不应陷入插图的细节之中，而应专注于较大的点。

慢着——技术含量过高的东西就在眼前。显然，因为这是一本编程书，接下来400页左右的几乎每一段都可以得到这个图标。所以我把它留给那些更深入的段落，深入地解释某些东西是如何工作的，可能比你使用一个特性所需要知道的还要深入，但通常很有启发性。当我想用一个示例来说明某一点时，您有时也会发现这个图标，该示例使用一些Java特性，这些特性目前在本书中还没有介绍，但稍后会介绍。在这种情况下，图标只是一个提醒，你不应该拘泥于插图的细节，而应该关注更大的一点。

Hold it — overly technical stuff is just around the corner. Obviously, because this is a programming book, almost every paragraph of the next 400 or so pages could get this icon. So I reserve it for those paragraphs that go into greater depth, down into explaining how something works under the covers probably deeper than you really need to know to use a feature, but often enlightening. You also sometimes find this icon when I want to illustrate a point with an example that uses some Java feature that hasn’t been covered so far in the book, but that is covered later. In those cases, the icon is just a reminder that you shouldn’t get bogged down in the details of the illustration, and instead focus on the larger point.

## 本书之外

您可以在www上找到本书中找不到的许多其他内容。 dummies.com。联机查找以下内容：

很多你在这本书中找不到的额外内容可以在www上找到。dummies.com。请上网查阅以下资料:

A lot of extra content that you won’t find in this book is available at www.dummies.com. Go online to find the following:

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

是的，您可以从这里到达那里。有了本书，您就可以直接深入JavaFX池的凉爽水域。浏览目录并确定要从哪里开始。大胆！要勇敢！冒险！最重要的是，玩得开心！

是的，你可以从这里到那里。有了这本书，您就可以直接进入JavaFX池的清凉之水了。浏览目录，决定从哪里开始。大胆的!是勇敢的!冒险!最重要的是，玩得开心!

Yes, you can get there from here. With this book in hand, you’re ready to dive right into to the cool and refreshing water of the JavaFX pool. Browse through the Table of Contents and decide where you want to start. Be bold! Be courageous! Be adventurous! And above all, have fun!