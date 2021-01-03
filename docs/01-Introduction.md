# Introduction

In the beginning there was AWT, the Abstract Window Toolkit. AWT was Java’s first system for displaying window-based user interfaces in Java. AWT begat Swing, which soon became the preferred way to create user-friendly applications in Java.

But then there was JavaFX, the worthy successor to the GUI throne. JavaFX is designed to create stunning user interfaces that can run on a wide variety of devices, including traditional desktop and portable computers, tablets, smartphones, TV set-top boxes, game consoles, and many other types of devices.

Until recently, JavaFX was the red-headed stepchild of the Java world. It coexisted with Java, but wasn’t an official part of Java. But beginning with Java version 8, JavaFX is now fully integrated into Java. And while JavaFX and Swing coexist today, Oracle has made it clear that Swing is in its twilight and JavaFX represents the future of user-interface programming.

So you’re holding the right book in your hands. JavaFX is an essential skill for every Java programmer to have at his or her disposal, and this book will help you master that skill.

## About This Book

This isn’t the kind of book you pick up and read from start to finish, as if it was a cheap novel. If I ever see you reading it at the beach, I’ll kick sand in your face. Beaches are for reading romance novels or murder mysteries, not programming books.

Assuming, then, that you have found a more suitable location to read this book, you can, if you want, read it straight through starting with Chapter 1 and finishing with Chapter 20. However, this sequence isn’t necessary. If you are brand new to JavaFX programming, I suggest you read at least Part I in sequence so that you’ll gain a basic understanding of how JavaFX works. But after you have the basics down, you can read the chapters in whatever sequence makes sense for you. If you need to know about adding effects to a shape, skip straight to Chapter 14. For information about about animation, skip ahead to Chapter 17.

You don’t have to memorize anything in this book. It’s a need-to-know book: You pick it up when you need to know something. Need a reminder on how to rotate a shape? Pick up the book. Can’t remember the details of the TilePane class? Pick up the book. After you find what you need, put down the book and get on with your life.

This book works like a reference. Start with the topic you want to find out about. Look for it in the Table of Contents or in the index. The Table of Contents is detailed enough that you can find most of the topics you’re looking for. If not, turn to the index, where you can find even more detail.

Of course, the book is loaded with information — so if you want to take a brief excursion into your topic, you’re more than welcome. If you want to know the big picture on the scene graph, read Chapter 7. But if you just want a reminder on how to set the maximum scene size, read just the section on the Scene class.

Whenever I describe sample Java code, I present it as follows:

```java
@override public void start(Stage primaryStage)
```

And Java class names, keywords, or other language elements are always shown in monospace type.

## Foolish Assumptions

In this book, I make very few assumptions about what you already may or may not know about JavaFX. But I do have to make two basic assumptions:

> ✓ You own or have access to a computer on which Java JDK 8 has been installed or on which you have permission to install.
>
> ​	JavaFX 8 is an integral part of JDK 8, so JDK 8 is a requirement for figuring out JavaFX. If you have not yet installed it, you’ll find instructions on how to do so in Chapter 1.
>
> ✓ You know the basics of Java programming.
>
> ​	If you’re new to Java, may I suggest one of two books: my own Java All-In-One For Dummies, 4 th Edition, or Barry Burd’s Java For Dummies, 6th Edition. Both are published by Wiley.

There are no other prerequisites to this book.

## How This Book Is Organized

This book is organized into five parts. Here’s a brief description of what you find in each part.

### Part I: Getting Started with JavaFX

This part contains the information you need to get started with JavaFX programming. After a brief introduction to what JavaFX is and why it’s so popular, you discover the basics of creating simple JavaFX programs. You figure out how to create simple JavaFX scenes populated with common controls such as labels, text field, and buttons. Then, you find out how to write programs that respond to user input, such as when the user clicks a button or enters text into a text field. And finally, you read how to use basic layout managers to control the arrangement of controls in your JavaFX scene.

### Part II: JavaFX Controls

The chapters in this part focus on the various types of controls you can use in a JavaFX application. Chapter 7 starts by explaining the details of how the JavaFX scene graph works and presents the details of the class hierarchy used by the various controls. Then, the remaining chapters in this part present information about specific types of controls, ranging from check boxes and radio buttons to tables and menus.

### Part III: Enhancing Your Scenic Design

The chapters in this part help you improve the appearance of your applications. First, you read about additional types of layout managers that give you more precise control over the way your user interface is arranged. Then, you discover how to use CSS styles to apply formatting details. Next, you figure out how to incorporate simple shapes into your scenes. And finally, you can read about JavaFX’s special effects, which let you embellish your display with shadows, motion blurs, and so on.

### Part IV: Making Your Programs Come Alive

The chapters in this part focus on various ways to make your programs more responsive and engaging. You discover how to work with properties, which you can use to make one part of your user interface respond to changes in another part of your user interface. Then, you discover how to incorporate media including sound and video. Next, you figure out how to create sophisticated animations that make the objects on the screen dance about. And finally, you read how to create programs that respond to multi-finger gestures on touch-enabled devices.

### Part V: The Part of Tens

This wouldn’t be a For Dummies book without a Part of Tens. Each of the chapters here presents ten items of special interest. Chapter 19 presents ten additional JavaFX controls that didn’t fit in Part II. And Chapter 20 presents ten steps to creating a JavaFX application that displays a three-dimensional scene.

## Icons Used in This Book

Like any For Dummies book, this book is chock-full of helpful icons that draw your attention to items of particular importance. You find the following icons throughout this book:

<img src="assets/image-20210103235640021.png" width="80" align="left"/>

Danger, Will Robinson! This icon highlights information that may help you avert disaster.



<img src="assets/image-20210103235329436.png" width="80" align="left"/>

Did I tell you about the memory course I took?



<img src="assets/image-20210103235452916.png" width="80" align="left"/>

Pay special attention to this icon; it lets you know that some particularly useful tidbit is at hand.



<img src="assets/image-20210103235548312.png" width="80" align="left"/>

Hold it — overly technical stuff is just around the corner. Obviously, because this is a programming book, almost every paragraph of the next 400 or so pages could get this icon. So I reserve it for those paragraphs that go into greater depth, down into explaining how something works under the covers probably deeper than you really need to know to use a feature, but often enlightening. You also sometimes find this icon when I want to illustrate a point with an example that uses some Java feature that hasn’t been covered so far in the book, but that is covered later. In those cases, the icon is just a reminder that you shouldn’t get bogged down in the details of the illustration, and instead focus on the larger point.

## Beyond the Book

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

## Where to Go from Here

Yes, you can get there from here. With this book in hand, you’re ready to dive right into to the cool and refreshing water of the JavaFX pool. Browse through the Table of Contents and decide where you want to start. Be bold! Be courageous! Be adventurous! And above all, have fun!