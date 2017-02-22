

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left")
        .appendField(new Blockly.FieldDropdown([["a little","slight_left"], ["a lot","strong_left"], ["hard turn","hard_left"]]), "left");
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
        .appendField(new Blockly.FieldDropdown([["a little","slight_right"], ["a lot","strong_right"], ["hard turn","hard_right"]]), "right");
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
        .appendField("move_forward_inches")
        .appendField(new Blockly.FieldDropdown([["1","1_in"],["2","2_in"],["3","3_in"],["4","4_in"],["5","5_in"],["6","6_in"],["7","7_in"],["8","8_in"],["9","9_in"],["10","10_in"],["11","11_in"],]), "forward");
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
        .appendField("move_forward_feet")
        .appendField(new Blockly.FieldDropdown([["1","1_ft"],["2","2_ft"],["3","3_ft"],["4","4_ft"],["5","5_ft"],]), "forward");
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
        .appendField("move_backward_inches")
        .appendField(new Blockly.FieldDropdown([["1","1_in"],["2","2_in"],["3","3_in"],["4","4_in"],["5","5_in"],["6","6_in"],["7","7_in"],["8","8_in"],["9","9_in"],["10","10_in"],["11","11_in"],]), "backward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move forward in inches');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_backward_ft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_backward_feet")
        .appendField(new Blockly.FieldDropdown([["1","1_ft"],["2","2_ft"],["3","3_ft"],["4","4_ft"],["5","5_ft"],]), "backward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move forward in feet');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['do_donuts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do a donut! spin ")
        .appendField(new Blockly.FieldDropdown([["right","spin_right"], ["left","spin_left"]]), "spin_type")
        .appendField(new Blockly.FieldNumber('0'), "spinz")
        .appendField("times!");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('this is to reverse');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['root_thang'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("Start your shitty robot here")
        .appendField("Header:");
    this.appendValueInput("turn_left")
        .setCheck("color")
        .appendField("Text Color:");
    this.appendValueInput("page_background")
        .setCheck("color")
        .appendField("Background Color:");
    this.appendValueInput("page_paragraph")
        .setCheck("String")
        .appendField("Paragraph:");
    this.setTooltip('');
  }
};