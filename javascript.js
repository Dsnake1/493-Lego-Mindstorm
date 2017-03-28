//These javascript definitions define the blocks in the workspace 
//and return a generic string value that the parser in the java application will then convert to real NXC code. 
//The newline characters are delimiters between the generic commands the blocks will generate.

Blockly.JavaScript['turn_left'] = function(block) {
  var dropdown_left = block.getFieldValue('left');
  // TODO: Assemble JavaScript into code variable.
  var code = 'little_turn_left\n'; //default value for turn left is a slight_left value
  
  if (dropdown_left === "strong_left") { //determine if user wants a strong left turn
    code = 'strong_turn_left\n';
  }
  
  if (dropdown_left === "hard_left") { //determine if user wants a hard left turn
    code = 'hard_turn_left\n';
  }

  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  var dropdown_right = block.getFieldValue('right');
  // TODO: Assemble JavaScript into code variable.
  var code = 'little_turn_right\n'; //default value for turn right is a slight_right value
  
  if (dropdown_right === "strong_right") { //determine if user wants a strong right turn
    code = 'strong_turn_right\n';
  }
  
  if (dropdown_right === "hard_right") { //determine if user wants a hard right turn
    code = 'hard_turn_right\n';
  }
  return code;
};

Blockly.JavaScript['move_forward_in'] = function(block) {
  var number_inches = block.getFieldValue('forward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_forward_in!1\n';//set default value to move forward 1 inch
  
  if (number_inches === "2_in") {
    code = 'move_forward_in!2\n';
  }
  
  if (number_inches === "3_in") {
    code = 'move_forward_in!3\n';
  }
  
  if (number_inches === "4_in") {
    code = 'move_forward_in!4\n';
  }
  
  if (number_inches === "5_in") {
    code = 'move_forward_in!5\n';
  }
  
  if (number_inches === "6_in") {
    code = 'move_forward_in!6\n';
  }
  
  if (number_inches === "7_in") {
    code = 'move_forward_in!7\n';
  }
  
  if (number_inches === "8_in") {
    code = 'move_forward_in!8\n';
  }
  
  if (number_inches === "9_in") {
    code = 'move_forward_in!9\n';
  }
  
  if (number_inches === "10_in") {
    code = 'move_forward_in!10\n';
  }
  
  if (number_inches === "11_in") {
    code = 'move_forward_in!11\n';
  }  
  return code;
};

Blockly.JavaScript['move_forward_ft'] = function(block) {
  var number_feet = block.getFieldValue('forward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_forward_ft!1\n';
  
  if (number_feet === "2_ft") {
    code = 'move_forward_ft!2\n';
  }
  
  if (number_feet === "3_ft") {
    code = 'move_forward_ft!3\n';
  }
  
  if (number_feet === "4_ft") {
    code = 'move_forward_ft!4\n';
  }
  
  if (number_feet === "5_ft") {
    code = 'move_forward_ft!5\n';
  }
  return code;
};

Blockly.JavaScript['move_backward_in'] = function(block) {
  var number_inches = block.getFieldValue('backward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_backward_in!1\n';//set default value to move backward 1 inch
  
  if (number_inches === "2_in") {
    code = 'move_backward_in!2\n';
  }
  
  if (number_inches === "3_in") {
    code = 'move_backward_in!3\n';
  }
  
  if (number_inches === "4_in") {
    code = 'move_backward_in!4\n';
  }
  
  if (number_inches === "5_in") {
    code = 'move_backward_in!5\n';
  }
  
  if (number_inches === "6_in") {
    code = 'move_backward_in!6\n';
  }
  
  if (number_inches === "7_in") {
    code = 'move_backward_in!7\n';
  }
  
  if (number_inches === "8_in") {
    code = 'move_backward_in!8\n';
  }
  
  if (number_inches === "9_in") {
    code = 'move_backward_in!9\n';
  }
  
  if (number_inches === "10_in") {
    code = 'move_backward_in!10\n';
  }
  
  if (number_inches === "11_in") {
    code = 'move_backward_in!11\n';
  }  
  return code;
};

Blockly.JavaScript['move_backward_ft'] = function(block) {
  var number_feet = block.getFieldValue('backward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_backward_ft!1\n';
  
  if (number_feet === "2_ft") {
    code = 'move_backward_ft!2\n';
  }
  
  if (number_feet === "3_ft") {
    code = 'move_backward_ft!3\n';
  }
  
  if (number_feet === "4_ft") {
    code = 'move_backward_ft!4\n';
  }
  
  if (number_feet === "5_ft") {
    code = 'move_backward_ft!5\n';
  }
  return code;
};

Blockly.JavaScript['do_donuts'] = function(block) {
  var dropdown_spin_type = block.getFieldValue('spin_type');
  var number_inches = block.getFieldValue('inches');
  // TODO: Assemble JavaScript into code variable.
  var code = 'do_donuts\n';

  return code;
};

Blockly.JavaScript['root_thang'] = function(block) {
  var turn_left = Blockly.JavaScript.statementToCode(block, 'turn_left');
  var turn_right = Blockly.JavaScript.valueToCode(block, 'turn_right');
  var move_forward = Blockly.JavaScript.valueToCode(block, 'move_forward');
  var move_backward = Blockly.JavaScript.valueToCode(block, 'move_backward');
  var do_donuts = Blockly.JavaScript.statementToCode(block, 'do_donuts');

  var code = 'main()\n{';
  code +=    turn_left;
  code +=    turn_right;
  code +=    move_forward;
  code +=    move_backward;
  code +=    do_donuts;
  code +=    code 
  
  return code;
  
  
  return code;
};