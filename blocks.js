

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

Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_forward")
        .appendField(new Blockly.FieldDropdown([["inches","forward_inches"], ["feet","forward_feet"]]), "forward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to move forward');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['move_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move_backward")
        .appendField(new Blockly.FieldDropdown([["inches","backward_inches"], ["feet","backward_feet"]]), "backward");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('this is to reverse');
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