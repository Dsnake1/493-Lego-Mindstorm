

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left")
        .appendField(new Blockly.FieldDropdown([["30 degrees","slight_left"], ["60 degrees","strong_left"], ["90 degrees","hard_left"], ["120 degrees","120_left"], ["150 degrees","150_left"], ["180 degrees","180_left"]]), "left");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('this is to turn left');
    this.setHelpUrl('');
  }
};
 
Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn right")
        .appendField(new Blockly.FieldDropdown([["30 degrees","slight_right"], ["60 degrees","strong_right"], ["90 degrees","hard_right"], ["120 degrees","120_right"], ["150 degrees","150_right"], ["180 degrees","180_right"]]), "right");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('this is to turn right');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_forward_in'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Move forward ")
        .appendField(new Blockly.FieldDropdown([["1 inches","1_in"],["2 inches","2_in"],["3 inches","3_in"],["4 inches","4_in"],["5 inches","5_in"],["6 inches","6_in"],["7 inches","7_in"],["8 inches","8_in"],["9 inches","9_in"],["10 inches","10_in"],["11 inches","11_in"],]), "forward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move forward in inches');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_forward_ft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move forward ")
        .appendField(new Blockly.FieldDropdown([["1 feet","1_ft"],["2 feet","2_ft"],["3 feet","3_ft"],["4 feet","4_ft"],["5 feet","5_ft"],]), "forward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move forward in feet');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['move_backward_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move backward ")
        .appendField(new Blockly.FieldDropdown([["1 inches","1_in"],["2 inches","2_in"],["3 inches","3_in"],["4 inches","4_in"],["5 inches","5_in"],["6 inches","6_in"],["7 inches","7_in"],["8 inches","8_in"],["9 inches","9_in"],["10 inches","10_in"],["11 inches","11_in"],]), "backward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move backward in inches');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_backward_ft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move backward ")
        .appendField(new Blockly.FieldDropdown([["1 feet","1_ft"],["2 feet","2_ft"],["3 feet","3_ft"],["4 feet","4_ft"],["5 feet","5_ft"],]), "backward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move backward in feet');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['touch_sensor'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Touch Sensor: Go forward until touch")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('This will drive the robot forward until it touches something');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['distance_sensor'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Distance Sensor")
        .appendField(new Blockly.FieldDropdown([["2 inches","2_cm"],["4 inches","4_cm"],["6 inches","6_cm"],["8 inches","8_cm"],["10 inches","10_cm"],]), "distance");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('This block will move your robot until you are a specified centimeter distance from an object');
    this.setHelpUrl('');
  }
};
                                                
Blockly.Blocks['do_donuts_clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Do Donuts Clockwise")
        .appendField(new Blockly.FieldDropdown([["1 turns","1_turn"], ["2 turns","2_turn"], ["3 turns","3_turn"], ["4 turns","4_turn"], ["5 turns","5_turn"]]), "spins")
        .appendField(new Blockly.FieldDropdown([["1 turns","1_turn"], ["2 turns","2_turn"], ["3 turns","3_turn"], ["4 turns","4_turn"], ["5 turns","5_turn"]]), "spins")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('this is to do donuts clockwise');
    this.setHelpUrl('');
  }
};
                                               
Blockly.Blocks['do_donuts_counterclockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Do Donuts Counterclockwise")
        .appendField(new Blockly.FieldDropdown([["1 turns","1_turn"], ["2 turns","2_turn"], ["3 turns","3_turn"], ["4 turns","4_turn"], ["5 turns","5_turn"]]), "spins")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('this is to do donuts counterclockwise');
    this.setHelpUrl('');
  }
};                            
