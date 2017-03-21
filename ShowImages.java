import javafx.application.Application;
import javafx.application.Platform;
import javafx.beans.value.ObservableValue;
import javafx.collections.ListChangeListener.Change;
import javafx.concurrent.Worker.State;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.geometry.HPos;
import javafx.geometry.Pos;
import javafx.geometry.VPos;
import javafx.print.PrinterJob;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.ContextMenu;
import javafx.scene.control.Hyperlink;
import javafx.scene.control.MenuItem;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.Region;
import javafx.scene.paint.Color;
import javafx.scene.web.PopupFeatures;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebHistory;
import javafx.scene.web.WebHistory.Entry;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import netscape.javascript.JSObject;
import javax.swing.JOptionPane;

public class ShowImages extends Application {

    private Scene scene;

    @Override
    public void start(Stage stage) {
        // create scene
        stage.setTitle("Web View Sample");
        scene = new Scene(new Browser(stage), 900, 600, Color.web("#666970"));
        stage.setScene(scene);
        // apply CSS style
        //scene.getStylesheets().add("./BrowserToolbar.css");
        // show stage
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}

class Browser extends Region {

    private final HBox toolBar;
    final WebView browser = new WebView();
    final WebEngine webEngine = browser.getEngine();
    final WebView smallView = new WebView();
    final Button showCommands = new Button("Show Commands");
    
    
    public Browser(final Stage stage) {
        //apply the styles
        getStyleClass().add("browser");
                


        // create the toolbar
        toolBar = new HBox();
        toolBar.setAlignment(Pos.CENTER);
        toolBar.getStyleClass().add("browser-toolbar");
        toolBar.getChildren().add(createSpacer());

        //set action for the button
         showCommands.setOnAction((ActionEvent t) -> {
             JOptionPane.showMessageDialog (null, "CLICK");
         });

        smallView.setPrefSize(120, 80);

        //handle popup windows
        webEngine.setCreatePopupHandler(
                (PopupFeatures config) -> {
                    smallView.setFontScale(0.8);
                    if (!toolBar.getChildren().contains(smallView)) {
                        toolBar.getChildren().add(smallView);
                    }
                    return smallView.getEngine();
        });

        // process page loading
        webEngine.getLoadWorker().stateProperty().addListener(
            (ObservableValue<? extends State> ov, State oldState, 
                State newState) -> {
                    //toolBar.getChildren().remove(showCommands);
                    if (newState == State.SUCCEEDED) {
                        JSObject win
                                = (JSObject) webEngine.executeScript("window");
                        win.setMember("app", new JavaApp());
                        //if (needDocumentationButton) {
                            toolBar.getChildren().add(showCommands);
                        //}
                    }
        });
        // load the home page        
        webEngine.load(ShowImages.class.getResource("index.html").toExternalForm());

        //add components
        getChildren().add(browser);
        getChildren().add(toolBar);
    }

    // JavaScript interface object
    public class JavaApp {

        public void exit() {
            Platform.exit();
        }
        public void showMessage() {//I overloaded showMessage() becuase i thought code could be null
            System.out.println("It did it\n");
            JOptionPane.showMessageDialog (null, "It did it");
        }
        public void showMessage(String msg) {
            System.out.println(msg);
            JOptionPane.showMessageDialog (null, "It Worked " + msg);
        }
    }

    private Node createSpacer() {
        Region spacer = new Region();
        HBox.setHgrow(spacer, Priority.ALWAYS);
        return spacer;
    }

    @Override
    protected void layoutChildren() {
        double w = getWidth();
        double h = getHeight();
        layoutInArea(browser,0,0,w,h,0,HPos.CENTER,VPos.CENTER);
    }

    @Override
    protected double computePrefWidth(double height) {
        return 900;
    }

    @Override
    protected double computePrefHeight(double width) {
        return 600;
    }
}
