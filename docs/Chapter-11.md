# 第 11 章  更多与精确场景设计有关的布局面板

> **In This Chapter**
>
> - Using four more layout panes to create spectacular layouts 
> - Introducing rectangle shapes
> - Adding scroll bars to a layout 
> - Creating two complete programs

In Chapter 5, you can read about how to work with four basic layout pane classes that let you control the arrangement of controls in a scene: HBox, which arranges nodes horizontally; VBox, which arranges nodes vertically; FlowPane, which arranges nodes both horizontally and vertically; and BorderPane, which divides the scene into five regions: Top, Right, Bottom, Left, and Center.

In this chapter, you discover four additional layout panes that give you additional ways to arrange the elements in a scene. Specifically, you discover how to use the following five layout pane classes:

> ✓ StackPane: The StackPane class is a bit different than the other layout panes in that it doesn’t visually separate nodes from one another. Instead, it displays nodes directly on top of each other. For example, if you add a rectangle shape and a text shape to a stack pane, the text will appear directly over the rectangle.
>
> ✓ AnchorPane: This layout lets you anchor nodes to the top, right, bottom, left, or center of the pane. As the pane resizes, the nodes are repositioned but remain tied to their anchor points. Note: A node can be anchored to more than one position. For example, you might anchor a node to the top and the right. Then, when you resize the pane, the node will remain near the top-right corner of the pane.
>
> ✓ GridPane: Arranges nodes in a grid of rows and columns. The grid does not have to be uniformly sized like a chess board. Instead, the width of each column and the height of each row can vary according to its content. In addition, content can span columns or rows. GridPane is an ideal layout type for forms that gather information from the user via user interface controls such as text boxes, list boxes, and so on.
>
> ✓ TilePane: If you want a layout that resembles a chess board, in which each cell in a grid is the same size, TilePane is the layout pane you’re looking for. TilePane is ideal for organizing thumbnails of image files or other objects of the same size.
>
> ✓ ScrollPane: Technically, the ScrollPane class is not a layout pane at all; it inherits the Control class, not the Pane class. However, it’s primary use is to create layouts that are too large to display all at once and so require a scroll bar to allow the user to pan left and right or up and down (or both) to see all its contents.

Keep in mind that layout panes are typically used in combinations to create the complete layout for your scene. For example, you might use a GridPane to organize user input controls and then place the GridPane in the center section of a BorderPane to place it in the middle of the scene. Or, you might use VBox panes to display labels beneath image thumbnails and then add the VBox panes to a tile pane to display the labeled images in a tiled arrangement.

## Using the StackPane Layout

A stack pane layout is unusual in that it does not arrange its nodes by spreading them out so that you can see them all. Instead, it stacks its nodes one on top of the other so that they overlap. The first node you add to a stack pane at the bottom of the stack; the last node is on the top.

You will most often use a stack pane layout with shapes rather than controls. Because I haven’t yet covered shapes, I limit the examples in this section to simple rectangles created with the Rectangle class. You can read more about this class in Chapter 13. For now, just realize that you can create a rectangle like this:

```java
Rectangle r1 = new Rectangle(100,100);
```

To add a fill color, call the setFill method, like this:

```java
r1.setFill(Color.RED);
```

The Color class defines a number of constants for commonly used colors. In this section, I use just three: LIGHTGRAY, DARKGRAY, and DIMGRAY.

<img src="assets/technical-stuff.png" width="80"/>The Rectangle class is in the javafx.scene.shape package, and the Color class is in javafx.scene.paint. Thus, you need to include the following import statements to use these classes:

```java
import javafx.scene.shapes.*; 
import javafx.scene.paint.*;
```

To create a stack pane, you use the StackPane class, whose constructors and methods are shown in Table 11-1.

**Table 11-1 StackPane Constructors and Methods**

| Constructor                 | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| StackPane()                 | Creates an empty stack pane.                                 |
| StackPane(Node... children) | Creates a stack pane with the specified child nodes. This constructor lets you create a stack pane and add child nodes to it at the same time. |

|      |      |
| ---- | ---- |
|      |      |
|      |      |
|      |      |
|      |      |

