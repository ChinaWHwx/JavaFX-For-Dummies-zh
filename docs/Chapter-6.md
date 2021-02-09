# Chapter 6 Getting Input from the User

> **In This Chapter**
>
> - Working with text fields and areas
> - Validating numeric data and creating check boxes
> - Setting radio buttons
> - Using some of these components in a complete program

In the first five chapters of this book, I discuss how to create JavaFX programs using only two basic JavaFX input controls: labels and buttons. If all you ever want to write are programs that display text when the user clicks a button, you can put the book down now. But if you want to write programs that actually do something worthwhile, you need to use other JavaFX input controls.

In this chapter, you find out how to use some of the most common JavaFX controls. First, you read about the label and controls that get information from the user. You find out more details about the text field control, which gets a line of text, and the text area control, which gets multiple lines. Then I move on to two input controls that get either/or information from the user: radio buttons and check boxes.

Along the way, you discover an important aspect of any JavaFX program that collects input data from the user: data validation. Data validation routines are essential to ensure that the user doesn’t enter bogus data. For example, you can use data validation to ensure that the user enters data into required fields or that the data the user enters into a numeric field is indeed a valid number.

## Using Text Fields

A text field is a box into which the user can type a single text. You create text fields by using the TextField class. Table 6-1 shows some of the more interesting and useful constructors and methods of this class.

**Table 6-1 Handy TextField Constructors and Methods**

| Constructor                      | Description                                          |
| -------------------------------- | ---------------------------------------------------- |
| TextField()                      | Creates a new text field.                            |
| TextField(String text, int cols) | Creates a new text field with an initial text value. |

| Method                            | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| String getText()                  | Gets the text value entered in the field.                    |
| void requestFocus()               | Asks for the focus to be moved to this text field. Note that the field must be in a scene for the focus request to work. |
| void setEditable(boolean value)   | If false, makes the field read-only.                         |
| void setMaxWidth(double width)    | Sets the maximum width for the field.                        |
| void setMinWidth(double width)    | Sets the minimum width for the field.                        |
| void setPrefColumnCount(int cols) | Sets the preferred size of the text field in columns (that is, the number of average-width text characters). |
| void setPrefWidth(double width)   | Sets the preferred width for the field.                      |
| void setPromptText(String prompt) | Sets the field’s prompt value. The prompt value will not be displayed if the field has a text value or if the field has focus. |
| void setText(String text)         | Sets the field’s text value.                                 |

The TextField class is defined in the javafx.scene.control package, so you should include the following imports statement in any program that uses a text field:

```java
imports javafx.scene.control.*;
```

The most common way to create a text field is to call the constructor without arguments, like this:

```java
TextField text1 = new TextField();
```

You can set the initial value to be displayed like this:

```java
TextField text1 = new TextField("Initial value");
```

Or, if you need to set the value later, you can call the setText method:

```java
text1.setText("Text value");
```

To retrieve the value that the user has entered into a text field, call the getText method like this:

```java
String value = text1.getText();
```

As with any JavaFX control, managing the width of a text field can be a bit tricky. Ultimately, JavaFX will determine the width of the text field based on a number of factors, including the size of the window that contains the stage and scene and any size constraints placed on the pane or panes that contain the text field. You can set minimum and maximum limits for the text field size by calling the setMinWidth and setMaxWidth methods, and you can indicate the preferred width via the setPrefWidth method, as in this example:

```java
TextField text1 = new TextField(); 
text1.setMinWidth(150); 
text1.setMaxWidth(250); 
text1.setPrefWidth(200);
```

Another way to set the preferred width is with the setPrefColumnCount method, which sets the width in terms of average-sized characters. For example, the following line sizes the field large enough to display approximately 50 characters:

```java
text1.setPrefColumnCount(50);
```

Note that the setPrefColumnCount method does not limit the number of characters the user can enter into the field. Instead, it limits the number of characters the field can display at one time.

Whenever you use a text field, provide a prompt that lets the user know what data he should enter into the field. One common way to do that is to place a label control immediately to the left of the text field. For example:

```java
Label lblName = new Label("Name:"); 
lblName.setMinWidth(75); 
TextField txtName = new TextField(); 
txtName.setMinWidth(200); 
HBox pane = new HBox(10, lblName, txtName);
```

Here, a label and a text field are created and added to an HBox pane so they will be displayed side-by-side.

JavaFX also allows you to display a prompt inside of a text field. The prompt is displayed in a lighter text color and disappears when the field receives focus. You use the setPromptText method to create such a prompt:

```java
TextField txtName = new TextField(); 
txtName.setPromptText("Enter the customer's name");
```

Here, the text Enter the customer’s name will appear inside the text field.

To retrieve the value entered by the user into a text field, you use the getText method, as in this example:

```java
String lastName = textLastName.getText();
```

Here the value entered by the user in the textLastName text field is assigned to the String variable lastName.

Figure 6-1 shows the operation of a simple program that uses a text field to allow the user to enter the name of a character in a play and the name of the actor who will play the role. Assuming the user enters text in both fields, the program then displays a message box indicating who will play the role of the character. If the user omits either or both fields, a message box displays to indicate the error. (The program uses the MessageBox class that was presented in Listing 4-2 in Chapter 4 to display the message box.)

Figure 6-1 shows what the main stage for this program looks like, as well as the message box windows displayed when the user enters both names or when the user omits a name. The JavaFX code for this program is shown in Listing 6-1.

> Figure 6-1: The Role Player application in action.

![Figure 6-1](./assets/Figure-6-1.png)

**Listing 6-1: The Role Player Program**

```java
import javafx.application.*; 
import javafx.stage.*; 
import javafx.scene.*; 
import javafx.scene.layout.*; 
import javafx.scene.control.*; 
import javafx.geometry.*;

public class RolePlayer extends Application 
{

  public static void main(String[] args) 
  { 
    launch(args); 
  }

  TextField txtCharacter; 
  TextField txtActor;

  @Override public void start(Stage primaryStage) 
  {

    // Create the Character 
    Label lblCharacter = new Label("Character's Name:"); 
    lblCharacter.setMinWidth(100); 
    lblCharacter.setAlignment(Pos.BOTTOM_RIGHT);

    // Create the Character text field 
    txtCharacter = new TextField 
      txtCharacter.setMinWidth(200); 
    txtCharacter.setMaxWidth(200); 
    txtCharacter.setPromptText( 
      "Enter the name of the character here.");

    // Create the Actor label 
    Label lblActor = new Label("Actor's Name:"); 
    lblActor.setMinWidth(100); 
    lblActor.setAlignment(Pos.BOTTOM_RIGHT);

    // Create the Actor text field 
    txtActor = new TextField(); 
    txtActor.setMinWidth(200); 
    txtActor.setMaxWidth(200); 
    txtActor.setPromptText("Enter the name of the actor here.");

    // Create the OK button 
    Button btnOK = new Button("OK"); 
    btnOK.setMinWidth(75); 
    btnOK.setOnAction(e -> btnOK_Click() );

    // Create the Character pane 
    HBox paneCharacter = new HBox(20, lblCharacter, txtCharacter); 
    paneCharacter.setPadding(new Insets(10));

    // Create the Actor pane 
    HBox paneActor = new HBox(20, lblActor, txtActor); 
    paneActor.setPadding(new Insets(10));

    // Create the Button pane 
    HBox paneButton = new HBox(20, btnOK); 
    paneButton.setPadding(new Insets(10)); 
    paneButton.setAlignment(Pos.BOTTOM_RIGHT);

    // Add the Character, Actor, and Button panes to a VBox 
    VBox pane = new VBox(10, paneCharacter, paneActor, paneButton);

    // Set the stage 
    Scene scene = new Scene(pane); 
    primaryStage.setScene(scene); 
    primaryStage.setTitle("Role Player"); 
    primaryStage.show();
  }
  public void btnOK_Click() 
  { 
    String errorMessage = "";

    if (txtCharacter.getText().length() == 0) 
    { 
      errorMessage += "\nCharacter is a required field.";
    }

    if (txtActor.getText().length() == 0) 
    { 
      errorMessage += "\nActor is a required field."; 
    }

    if (errorMessage.length() == 0) 
    { 
      String message = "The role of " 
        + txtCharacter.getText() 
        + " will be played by " 
        + txtActor.getText() + "."; 
      MessageBox.show(message,"Cast");
    } 
    else 
    { 
      MessageBox.show(errorMessage, "Missing Data");
    }
  }
}
```

