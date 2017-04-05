Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left")
        .appendField(new Blockly.FieldDropdown([["30 degrees","tl_30"], ["60 degrees","tl_60"], ["90 degrees","tl_90"]]), "left");
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
        .appendField(new Blockly.FieldDropdown([["30 degrees","tr_30"], ["60 degrees","tr_60"], ["90 degrees","tr_90"]]), "right");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('this is to turn right');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['turn_left_in_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left in place")
        .appendField(new Blockly.FieldDropdown([["30 degrees","tlip_30"], ["60 degrees","tlip_60"], ["90 degrees","tlip_90"]]), "left_ip");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('this is to turn left');
    this.setHelpUrl('');
  }
};
 
Blockly.Blocks['turn_right_in_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn right in place")
        .appendField(new Blockly.FieldDropdown([["30 degrees","trip_30"], ["60 degrees","trip_60"], ["90 degrees","trip_90"]]), "right_ip");
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
                                                  