import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javax.swing.*;
import java.lang.String;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
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
import javafx.scene.web.WebHistory;
import javafx.scene.web.WebHistory.Entry;
import netscape.javascript.JSObject;



public class WebViewSample3 extends Application {

    private Scene scene;

    @Override
    public void start(Stage stage) {
        // create scene
        WebView browser = new WebView();
        WebEngine webEngine = browser.getEngine();
        webEngine.load(WebViewSample3.class.getResource("index.html").toExternalForm());

        stage.setTitle("Web View Sample");
        
        TextField txtTrackWidth, txtWheelDiameter, tempCelsius;
        Label lblWheelDiameter, lblTrackWidth, lblTouchSensor, lblLeftMotor, lblRightMotor,
               lblSoundSensor, lblUltrasonicSensor, lblLightSensor;
        Button btnDownloadCode;
        ComboBox cboLeftMotor, cboRightMotor, cboTouchSensor, cboUltrasonicSensor, cboSoundSensor, cboLightSensor;

        GridPane gridPane = new GridPane();
        
        ObservableList<String> motorOptions = FXCollections.observableArrayList ("A", "B", "C");
        ObservableList<String> inputPortOptions = FXCollections.observableArrayList ( "Not used", "1", "2", "3", "4");
       
        //Create widgets.
        lblTrackWidth = new Label("Track Width");
        txtTrackWidth = new TextField();
        lblWheelDiameter = new Label("Wheel Diameter");
        txtWheelDiameter = new TextField();

        lblLeftMotor = new Label("Left Motor");
        cboLeftMotor = new ComboBox();
        cboLeftMotor.getItems().addAll ("A", "B", "C");
        //cboLeftMotor.setSelectedIndex(1);  //start with motor B
        cboLeftMotor.setValue("B");

        lblRightMotor = new Label("Right Motor");
        cboRightMotor = new ComboBox();
        cboRightMotor.getItems().addAll ("A", "B", "C");
        cboRightMotor.setValue("C");

        lblTouchSensor = new Label("Touch Sensor");
        cboTouchSensor = new ComboBox();
        cboTouchSensor.getItems().addAll ("Not used", "1", "2", "3", "4");
        cboTouchSensor.setValue("Not used");
        
        lblUltrasonicSensor = new Label("Ultrasonic Sensor");
        cboUltrasonicSensor = new ComboBox();
        cboUltrasonicSensor.getItems().addAll ("Not used", "1", "2", "3", "4");
        cboUltrasonicSensor.setValue("Not used");
        
        lblSoundSensor = new Label("Sound Sensor");
        cboSoundSensor = new ComboBox();
        cboSoundSensor.getItems().addAll ("Not used", "1", "2", "3", "4");
        cboSoundSensor.setValue("Not used");
        
        lblLightSensor = new Label("Light Sensor");
        cboLightSensor = new ComboBox();
        cboLightSensor.getItems().addAll ("Not used", "1", "2", "3", "4");
        cboLightSensor.setValue("Not used");

        btnDownloadCode = new Button ("Download code");
        btnDownloadCode.setOnAction((ActionEvent t) -> {
               String code = (String) webEngine.executeScript("getCode()");
               String msg = "";
               msg += " Track with " + txtTrackWidth.getText() + "\n";
               msg += " Wheel diameter "  + txtWheelDiameter.getText()+ "\n";
               msg += " Left motor " + cboLeftMotor.getValue() + "\n";
               msg += " Right motor " + cboRightMotor.getValue() + "\n";
               msg += " Touch sensor " + cboTouchSensor.getValue() + "\n";
               msg += " Ultrasonic sensor " + cboUltrasonicSensor.getValue() + "\n";
               msg += " Sound sensor " + cboSoundSensor.getValue() + "\n";
               msg += " Light sensor " + cboLightSensor.getValue() + "\n";
               msg += "\n" + code;
               JOptionPane.showMessageDialog (null, msg);

               String touch_sen, light_sen, sound_sen, ultrasonic_sen, leftMotor, rightMotor, wheelDiam, trackWid;              
               touch_sen = cboTouchSensor.getValue().toString();
               light_sen = cboLightSensor.getValue().toString();
               sound_sen = cboSoundSensor.getValue().toString();
               ultrasonic_sen = cboUltrasonicSensor.getValue().toString();
               leftMotor = cboLeftMotor.getValue().toString();
               rightMotor = cboRightMotor.getValue().toString();
               wheelDiam = txtWheelDiameter.getText();
               trackWid = txtTrackWidth.getText();                                                             
               //Now we take the code string and pass it to the parser to get what we need.
               parser(code, touch_sen, light_sen, sound_sen, ultrasonic_sen, leftMotor, rightMotor, wheelDiam, trackWid);
        });

        BorderPane background = new BorderPane();
        background.setCenter(browser);         
        
        gridPane.add (browser,             0, 0, 1, 7);
        gridPane.add (lblTrackWidth,       1, 0, 1, 1);
        gridPane.add (txtTrackWidth,       2, 0, 1, 1);
        gridPane.add (lblWheelDiameter,    1, 1, 1, 1);
        gridPane.add (txtWheelDiameter,    2, 1, 1, 1);
        gridPane.add (lblLeftMotor,        1, 2, 1, 1);
        gridPane.add (cboLeftMotor,        2, 2, 1, 1);
        gridPane.add (lblRightMotor,       1, 3, 1, 1);
        gridPane.add (cboRightMotor,       2, 3, 1, 1);
        gridPane.add (lblTouchSensor,      1, 4, 1, 1);
        gridPane.add (cboTouchSensor,      2, 4, 1, 1);         
        gridPane.add (lblUltrasonicSensor, 1, 5, 1, 1);
        gridPane.add (cboUltrasonicSensor, 2, 5, 1, 1);         
        gridPane.add (lblSoundSensor,      1, 6, 1, 1);
        gridPane.add (cboSoundSensor,      2, 6, 1, 1);         
        gridPane.add (lblLightSensor,      1, 7, 1, 1);
        gridPane.add (cboLightSensor,      2, 7, 1, 1);                                 
        gridPane.add (btnDownloadCode,     1, 8, 2, 1);      
        
        Scene scene = new Scene(gridPane, 1024, 600);
        stage.setScene(scene);
        // show stage
        stage.show();
    }
    
    public void parser(String splitMe, String touch_sen, String light_sen, String sound_sen, String distance_sen, String leftMotor, String rightMotor, String wheelDiam, String trackWid) {
    
        String[] splitString = splitMe.split("\\n");
        String[] result = new String[1000];
        int r=0;
        
        double wheelCircum = Double.parseDouble(wheelDiam) * Math.PI;
        double turnCircum = Double.parseDouble(trackWid) * 2 * Math.PI;
        
        for (int i = 0; i < splitString.length; i ++)
        { 
           if (splitString[i]=="NULL" || splitString[i]=="" || splitString[i]==" "|| splitString[i]=="EOF")
           {
             break;
           }
           else
           {
               if (splitString[i].contains("move_forward_in"))
               {      
                  String[] tempStrNum = splitString[i].split("!");
                  String trimTempStrNum = tempStrNum[1].trim();
                  double distance = Double.parseDouble(trimTempStrNum);
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg);
                  //take split string and put it as NXC code here, add it to array as a string
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+rightMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
               }
               else if (splitString[i].contains("move_forward_ft"))
               {    
                  String[] tempStrNum = splitString[i].split("!");
                  String trimTempStrNum = tempStrNum[1].trim();
                  double distance = Double.parseDouble(trimTempStrNum) * 12; //convert feet to inches
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg);
                  //take split string and put it as NXC code here, add it to array as a string
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+rightMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
               }
               else if (splitString[i].contains("move_backward_in"))
               {  
                  String[] tempStrNum = splitString[i].split("!");
                  String trimTempStrNum = tempStrNum[1].trim();
                  double distance = Double.parseDouble(trimTempStrNum); //convert feet to inches
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg);
                  //take split string and put it as NXC code here, add it to array as a string
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+rightMotor+", -30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
               }
               else if (splitString[i].contains("move_backward_ft"))
               {   
                  String[] tempStrNum = splitString[i].split("!");
                  String trimTempStrNum = tempStrNum[1].trim();
                  double distance = Double.parseDouble(trimTempStrNum) * 12; //convert feet to inches
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg);
                  //take split string and put it as NXC code here, add it to array as a string
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+rightMotor+", -30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("little_turn_left"))
                {    
                  double distance = (1/12D) * turnCircum;
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg); 
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("strong_turn_left"))
                {    
                  double distance = (1/6D) * turnCircum;
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg); 
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("hard_turn_left"))
                {    
                  double distance = (1/4D) * turnCircum;
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg); 
                  String NXC_Code="RotateMotor(OUT_"+leftMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("little_turn_right"))
                {    
                  double distance = (1/12D) * turnCircum;
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg); 
                  String NXC_Code="RotateMotor(OUT_"+rightMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("strong_turn_right"))
                {    
                  double distance = (1/6D) * turnCircum;
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg); 
                  String NXC_Code="RotateMotor(OUT_"+rightMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("hard_turn_right"))
                {    
                  double distance = (1/4D) * turnCircum;
                  long revDeg = revolutionsDeg(wheelCircum,distance);
                  String tempStrCalculated = Long.toString(revDeg); 
                  String NXC_Code="RotateMotor(OUT_"+rightMotor+", 30, "+tempStrCalculated+");\n";
                  result[r] = NXC_Code;
                  r++;
                } 
                else if (splitString[i].contains("touch_sensor"))
                {    
                  String NXC_Code="SetSensor(IN_"+touch_sen+",SENSOR_TOUCH);\n OnFwd(OUT_"+leftMotor+rightMotor+", 75);\nuntil (SENSOR_"+touch_sen+" == 1);\nOff(OUT_"+leftMotor+rightMotor+");\n";
                  result[r] = NXC_Code;
                  r++;
                }
                else if (splitString[i].contains("distance_sensor"))
                {   
                  String[] tempStrNum = splitString[i].split("!");
                  String trimTempStrNum = tempStrNum[1].trim();
                  //take split string and put it as NXC code here, add it to array as a string
                  String NXC_Code="SetSensorLowspeed(IN_"+distance_sen+");\nwhile(true){OnFwd(OUT_"+leftMotor+rightMotor+",50);\nwhile(SensorUS(IN_"+distance_sen+")>"+trimTempStrNum+");\nOff(OUT_"+leftMotor+rightMotor+");\nOnRev(OUT_"+rightMotor+",100);\nWait(800);\n}\n";
                  result[r] = NXC_Code;
                  r++;
                } 
                else{}  
           }
        }
        try
        {
           File fout = new File("out.nxc");
           FileOutputStream fos = new FileOutputStream(fout);
           BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
           bw.write("task main () {"); //print out the nxc header stuff to file
           bw.newLine();
         
           for (int z = 0; z < r; z++)
           {
             bw.write(result[z]); //print out the result array to file
             bw.newLine();
           }
         
           bw.write("}");    	//print out the nxc footer stuff to file
        
           bw.close();
        } 
        catch (IOException e)
        {
           System.err.println("Problem writing to the file");
        }
        //at this point everything will have been sent to the file, and it should be able to be compiled
        set_compile();
   }

   public long revolutionsDeg(double circum, double distance) {
      double revTemp = distance / circum;
      double degrees = revTemp * 360;
      return Math.round(degrees);
   }

   public void set_compile() {
      //Create command line string
      //String CMD = "cmd.exe /c pause";
      String CMD = "cmd.exe /c nbc -Susb -d out.nxc -nbc=blah.out -E=err.txt > test.out";
      try {
         //Runtime object to hold Runtime execution
         Runtime rt = Runtime.getRuntime();
         rt.exec(CMD);
      } catch (Exception e) {
         e.printStackTrace(System.err);
      }
   }


   public static void main(String[] args) {
       launch(args);
   }
}

