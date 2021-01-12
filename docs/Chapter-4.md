# Chapter 4 Setting the Stage and Scene Layout

> **In This Chapter**
>
> - Looking at some useful methods of the Stage and Scene classes
> -  Alternating scenes within a single stage
> - Displaying additional stages as message and confirmation boxes
> - Discovering the proper way to exit a JavaFX program

*O for a Muse of fire, that would ascend*
*The brightest heaven of Invention,*

*A kingdom for a stage, princes to act,*
*And monarchs to behold the swelling scene!*

So begins William Shakespeare’s play Henry V, and so also begins this chapter, in which I explore the various ways to manipulate the appearance of a JavaFX application by manipulating its stage and its swelling scenes.

Specifically, you read important details about the Stage class and the Scene class so that you can control such things as whether the window is resizable and if so, whether it has a maximum or a minimum size. You also read how to coerce your programs into displaying additional stages beyond the primary stage, such as an alert or confirmation dialog box. And finally, you read the proper way to end a JavaFX program by handling the events generated when the user closes the stage.

## Examining the Stage Class

A stage, which is represented by the Stage class, is the topmost container in which a JavaFX user interface appears. In Windows, on a Mac, or in Linux, a stage is usually a window. On other types of devices, such as a smartphone or tablet, the stage may be the full screen or a tiled region of the screen.

When a JavaFX application is launched, a stage known as the primary stage is automatically created. A reference to this stage is passed to the application’s start method via the primaryStage parameter:

```java
@Override public void start(Stage primaryStage) 
{
  // primaryStage refers to the
  // application's primary stage. 
}
```

You can then use the primary stage to create the application’s user interface by adding a scene, which contains one or more controls or other user-interface nodes.

<img src="assets/tip.png" width="80"/>In many cases, you will need to access the primary stage outside of the scope of the start method. You can easily make this possible by defining a class field and using it to reference the primary stage. You see an example of how to do that later in this chapter, in the section “Switching Scenes.”

The primary stage initially takes on the default characteristics of a normal windowed application, which depends on the operating system within which the program will run. You can, if you choose, change these defaults to suit the needs of your application. At the minimum, you should always set the window title. You may also want to change details, such as whether the stage is resizable and various aspects of the stage’s appearance.

The Stage class comes equipped with many methods that let you manipulate the appearance and behavior of a stage. Table 4-1 lists the ones you’re most likely to use.

**Table 4-1 Commonly Used Methods of the Stage Class**

| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| void close()                           | Closes the stage.                                            |
| void initModality(Modality modality)   | Sets the modality of the stage. This method must be called before the show method is called. The modality can be one of the following: Modality.NONE Modality.APPLICATION_MODAL Modality.WINDOW_MODAL |
| void initStyle(StageStyle style)       | Sets the style for the stage. This method must be called before the show method is called. The style can be one of the following: StageStyle.DECORATED StageStyle.UNDECORATED StageStyle.TRANSPARENT StageStyle.UNIFIED StageStyle.UTILITY |
| void getMaxHeight(double maxheight)    | Gets the maximum height for the stage.                       |
| void getMaxWidth(double maxwidth)      | Gets the maximum width for the stage.                        |
| void getMinHeight(double maxheight)    | Gets the minimum height for the stage.                       |
| void getMinWidth(double maxwidth)      | Gets the minimum width for the stage.                        |
| void setFullScreen(boolean fullscreen) | Sets the fullscreen status of the stage.                     |
| void setIconified(boolean iconified)   | Sets the iconified status of the stage.                      |
| void setMaximized(boolean maximized)   | Sets the maximized status of the stage.                      |
| void setMaxHeight(double maxheight)    | Sets the maximum height for the stage.                       |
| void setMaxWidth(double maxwidth)      | Sets the maximum width for the stage.                        |
| void setMinHeight(double maxheight)    | Sets the minimum height for the stage.                       |
| void setMinWidth(double maxwidth)      | Sets the minimum width for the stage.                        |
| void setResizable(boolean resizable)   | Sets the fullscreen status of the stage.                     |
| void setScene(Scene scene)             | Sets the scene to be displayed on the stage.                 |
| void setTitle(String title)            | Sets the title to be displayed in the stage’s title bar, if a title bar is visible. |
| void show()                            | Makes the stage visible.                                     |
| void showAndWait()                     | Makes the stage visible and then waits until the stage is closed before continuing. |
| void toFront()                         | Forces the stage to the foreground.                          |
| void toBack()                          | Forces the stage to the background.                          |

The following paragraphs point out some of the ins and outs of using the Stage class methods listed in Table 4-1:

> **✓ For many (if not most) applications, the only three methods from Table 4-1 you need to use are setScene, setTitle, and show.**
>
> - Every stage must have a scene.
> - Every stage should have a title.
> - There’s not much point in creating a stage if you don’t intend on showing it to the user.
>
> The other methods in the table let you change the appearance or behavior of the stage, but the defaults are acceptable in most cases.
>
> **✓ If you want to prevent the user from resizing the stage, use the setResizable method like this:**
>
> ```java
> primaryStage.setResizable(false);
> ```
>
> Then, the user can’t change the size of the window. (By default, the stage is resizable. Thus, you don’t need to call the setResizable method unless you want to make the stage non-resizable.)
>
> **✓ If the stage is resizable, you can set the minimum and maximum size for the window.** For example:
>
> ```java
> primaryStage.setResizable(true); 
> primaryStage.setMinWidth(200); 
> primaryStage.setMinHeight(200); 
> primaryStage.setMaxWidth(600); 
> primaryStage.setMaxHeight(600);
> ```
>
> In this example, the user can resize the window, but the smallest allowable size is 200-x-200 pixels and the largest allowable size is 600-x-600 pixels.
>
> **✓ If you want to display the stage in a maximized window, call setMaximized:**
>
> ```java
> primaryStage.setMaximized(true);
> ```
>
> A maximized window still has the usual decorations (a title bar, window borders, and Minimize, Restore, and Close buttons). If you want the stage to completely take over the screen with no such decorations, use the setFullScreen method instead:
>
> ```java
> primaryStage.setFullScreen(true);
> ```
>
> When your stage enters fullscreen mode, JavaFX displays a message advising the user on how to exit fullscreen mode.
>
> **✓ If, for some reason, you want to start your program minimized to an icon, use the setIconified method:**
>
> ```java
> primaryStage.setIconified(true);
> ```
>
> **✓ For more information about the close method,** see the section “Exit, Stage Right” later in this chapter.
>
> **✓ The initModality and initStyle methods are interesting because they can be called only before you call the show method.** The initModality method allows you to create a modal dialog box — that is, a window that must be closed before the user can continue using other functions within the program. And the initStyle method lets you create windows that do not have the usual decorations such as a title bar or Minimize, Restore, and Close buttons. You typically use these methods when you need to create additional stages for your application beyond the primary stage. You can read more about how that works later in this chapter, in the section “Creating a Dialog Box.”

