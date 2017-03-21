/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 *
 * This file is available and licensed under the following license:
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *  - Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  - Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the distribution.
 *  - Neither the name of Oracle nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

//package webviewsample;
import java.lang.String;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
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
import javax.swing.*;

public class WebViewSample2 extends Application {

    private Scene scene;

    @Override
    public void start(Stage stage) {
        // create scene
        stage.setTitle("Web View Sample");
        scene = new Scene(new Browser(stage), 900, 600, Color.web("#666970"));
        stage.setScene(scene);
        // apply CSS style
        scene.getStylesheets().add("webviewsample/BrowserToolbar.css");
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
    final Button showCommands = new Button("Show Commands");
    final WebView smallView = new WebView();
    private boolean needDocumentationButton = true;
    
    
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
             //String lastBlock = (String) webEngine.executeScript("getLastBlock()");
             String code = (String) webEngine.executeScript("getCode()");
             //JOptionPane.showMessageDialog (null, "CLICK - " + lastBlock);
             //JOptionPane.showMessageDialog (null, code);
             //Now we take the code string and pass it to the parser to get what we need.
             parser(code);
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
        //webEngine.load(WebViewSample2.class.getResource("showImages.html").toExternalForm());
        webEngine.load(WebViewSample2.class.getResource("index.html").toExternalForm());

        //add components
        getChildren().add(toolBar);
        getChildren().add(browser);
    }
    
     public void parser(String splitMe) 
         {
           String[] splitString = splitMe.split("\\n");
           String[] result = new String[1000];
           int r=0;
         
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
                 int tempIntNum = Integer.parseInt(trimTempStrNum) * 10;
                 String tempStrCalculated = Integer.toString(tempIntNum);
                 //take split string and put it as NXC code here, add it to array as a string
                 String NXC_Code="RotateMotor(OUT_A, 30, "+tempStrCalculated+");\nRotateMotor(OUT_B, 30, "+tempStrCalculated+ ");\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("move_forward_ft"))
               {    
                 String[] tempStrNum = splitString[i].split("!");
                 String trimTempStrNum = tempStrNum[1].trim();
                 int tempIntNum = Integer.parseInt(trimTempStrNum) * 180;
                 String tempStrCalculated = Integer.toString(tempIntNum);
                 //take split string and put it as NXC code here, add it to array as a string
                 String NXC_Code="RotateMotor(OUT_A, 30, "+tempStrCalculated+");\nRotateMotor(OUT_B, 30, "+tempStrCalculated+ ");\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("move_backward_in"))
               {  
                 String[] tempStrNum = splitString[i].split("!");
                 String trimTempStrNum = tempStrNum[1].trim();
                 int tempIntNum = Integer.parseInt(trimTempStrNum) * 10;
                 String tempStrCalculated = Integer.toString(tempIntNum);
                 //take split string and put it as NXC code here, add it to array as a string
                 String NXC_Code="RotateMotor(OUT_A, -30, "+tempStrCalculated+");\nRotateMotor(OUT_B, -30, "+tempStrCalculated+ ");\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("move_backward_ft"))
               {   
                 String[] tempStrNum = splitString[i].split("!");
                 String trimTempStrNum = tempStrNum[1].trim();
                 int tempIntNum = Integer.parseInt(trimTempStrNum) * 180;
                 String tempStrCalculated = Integer.toString(tempIntNum);
                 //take split string and put it as NXC code here, add it to array as a string
                 String NXC_Code="RotateMotor(OUT_A, -30, "+tempStrCalculated+");\nRotateMotor(OUT_B, -30, "+tempStrCalculated+ ");\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("little_turn_left"))
               {    
                 String NXC_Code="RotateMotor(OUT_A, 30, 360);\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("strong_turn_left"))
               {    
                 String NXC_Code="RotateMotor(OUT_A, 30, 720);\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("hard_turn_left"))
               {    
                 String NXC_Code="RotateMotor(OUT_A, 30, 1080);\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("little_turn_right"))
               {    
                 String NXC_Code="RotateMotor(OUT_B, 30, 360);\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("strong_turn_right"))
               {    
                 String NXC_Code="RotateMotor(OUT_B, 30, 720);\n";
                 result[r] = NXC_Code;
                 r++;
               }
               else if (splitString[i].contains("hard_turn_right"))
               {    
                 String NXC_Code="RotateMotor(OUT_B, 30, 1080);\n";
                 result[r] = NXC_Code;
                 r++;
               } 
               else{}  
             }
           }
           try
           {
           File fout = new File("out.txt");
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
         }


    // JavaScript interface object
    public static class JavaApp {

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
        double tbHeight = toolBar.prefHeight(w);
        layoutInArea(browser,0,0,w,h-tbHeight,0,HPos.CENTER,VPos.CENTER);
        layoutInArea(toolBar,0,h-tbHeight,w,tbHeight,0,HPos.CENTER,VPos.CENTER);
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
