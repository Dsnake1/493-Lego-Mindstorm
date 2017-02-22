Blockly.JavaScript['page_settings'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.body.style.color = "' + value_color + '";\n';
  code +=    'document.body.style.backgroundColor = "' + value_background + '";\n';
  code +=    'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
  code +=    statements_page_header;
  return code;
};

Blockly.JavaScript['page_header'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.getElementById("header").innerHTML = "' + value_header_text + '";\n';
  code +=    'document.getElementById("header").style.color = "' + value_color + '";\n';
  return code;
};

Blockly.JavaScript['color_blue'] = function(block) {
  var colour_blue = block.getFieldValue('blue');

  var code = '#3333FF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_red'] = function(block) {
  var colour_red = block.getFieldValue('red');

  var code = '#FF3333';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_green'] = function(block) {
  var colour_green = block.getFieldValue('green');

  var code = '#33FF33';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_black'] = function(block) {
  var colour_black = block.getFieldValue('black');

  var code = '#000000';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_white'] = function(block) {
  var colour_white = block.getFieldValue('white');

  var code = '#FFFFFF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turn_left'] = function(block) {

  var dropdown_left = block.getFieldValue('left');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_A, 30, 360);\n'; //default value for turn left is a slight_left value
  
  if (dropdown_left === "strong_left") { //determine if user wants a strong left turn
    code = 'RotateMotor(OUT_A, 30, 720);\n';
  }
  
  if (dropdown_left === "hard_left") { //determine if user wants a hard left turn
    code = 'RotateMotor(OUT_A, 30, 1440);\n';
  }

  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  var dropdown_right = block.getFieldValue('right');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_B, 30, 360);\n'; //default value for turn right is a slight_right value
  
  if (dropdown_right === "strong_right") { //determine if user wants a strong right turn
    code = 'RotateMotor(OUT_B, 30, 720);\n';
  }
  
  if (dropdown_right === "hard_right") { //determine if user wants a hard right turn
    code = 'RotateMotor(OUT_B, 30, 1440);\n';
  }

  return code;
};

Blockly.JavaScript['move_forward_in'] = function(block) {
  var number_inches = block.getFieldValue('forward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_A, 30, 30);\n'; //set default value to move forward 1 inch
  
  if (number_inches === "2_in") {
    code = 'RotateMotor(OUT_A, 30, 60);\n';
  }
  
  if (number_inches === "3_in") {
    code = 'RotateMotor(OUT_A, 30, 90);\n';
  }
  
  if (number_inches === "4_in") {
    code = 'RotateMotor(OUT_A, 30, 120);\n';
  }
  
  if (number_inches === "5_in") {
    code = 'RotateMotor(OUT_A, 30, 150);\n';
  }
  
  if (number_inches === "6_in") {
    code = 'RotateMotor(OUT_A, 30, 180);\n';
  }
  
  if (number_inches === "7_in") {
    code = 'RotateMotor(OUT_A, 30, 210);\n';
  }
  
  if (number_inches === "8_in") {
    code = 'RotateMotor(OUT_A, 30, 240);\n';
  }
  
  if (number_inches === "9_in") {
    code = 'RotateMotor(OUT_A, 30, 270);\n';
  }
  
  if (number_inches === "10_in") {
    code = 'RotateMotor(OUT_A, 30, 300);\n';
  }
  
  if (number_inches === "11_in") {
    code = 'RotateMotor(OUT_A, 30, 330);\n';
  }  
  
  return code;
};

Blockly.JavaScript['move_forward_ft'] = function(block) {
  var number_feet = block.getFieldValue('forward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_A, 30, 360);\n'; //set default value to move forward 1 foot
  
  if (number_feet === "2_ft") {
    code = 'RotateMotor(OUT_A, 30, 720);\n';
  }
  
  if (number_feet === "3_ft") {
    code = 'RotateMotor(OUT_A, 30, 1080);\n';
  }
  
  if (number_feet === "4_ft") {
    code = 'RotateMotor(OUT_A, 30, 1440);\n';
  }
  
  if (number_feet === "5_ft") {
    code = 'RotateMotor(OUT_A, 30, 1800);\n';
  }
    
  
  return code;
};

Blockly.JavaScript['move_backward_in'] = function(block) {
  var number_inches = block.getFieldValue('backward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_A, 30, -30);\n'; //set default value to move backward 1 inch
  
  if (number_inches === "2_in") {
    code = 'RotateMotor(OUT_A, 30, -60);\n';
  }
  
  if (number_inches === "3_in") {
    code = 'RotateMotor(OUT_A, 30, -90);\n';
  }
  
  if (number_inches === "4_in") {
    code = 'RotateMotor(OUT_A, 30, -120);\n';
  }
  
  if (number_inches === "5_in") {
    code = 'RotateMotor(OUT_A, 30, -150);\n';
  }
  
  if (number_inches === "6_in") {
    code = 'RotateMotor(OUT_A, 30, -180);\n';
  }
  
  if (number_inches === "7_in") {
    code = 'RotateMotor(OUT_A, 30, -210);\n';
  }
  
  if (number_inches === "8_in") {
    code = 'RotateMotor(OUT_A, 30, -240);\n';
  }
  
  if (number_inches === "9_in") {
    code = 'RotateMotor(OUT_A, 30, -270);\n';
  }
  
  if (number_inches === "10_in") {
    code = 'RotateMotor(OUT_A, 30, -300);\n';
  }
  
  if (number_inches === "11_in") {
    code = 'RotateMotor(OUT_A, 30, -330);\n';
  }  
  
  return code;
};

Blockly.JavaScript['move_backward_ft'] = function(block) {
  var number_feet = block.getFieldValue('backward');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_A, 30, -360);\n'; //set default value to move backward 1 foot
  
  if (number_feet === "2_ft") {
    code = 'RotateMotor(OUT_A, 30, -720);\n';
  }
  
  if (number_feet === "3_ft") {
    code = 'RotateMotor(OUT_A, 30, -1080);\n';
  }
  
  if (number_feet === "4_ft") {
    code = 'RotateMotor(OUT_A, 30, -1440);\n';
  }
  
  if (number_feet === "5_ft") {
    code = 'RotateMotor(OUT_A, 30, -1800);\n';
  }
    
  return code;
};

Blockly.JavaScript['do_donuts'] = function(block) {
  var dropdown_spin_type = block.getFieldValue('spin_type');
  var number_inches = block.getFieldValue('inches');
  // TODO: Assemble JavaScript into code variable.
  var code = 'RotateMotor(OUT_A, 30, -1800);\n';
      code += 'RotateMotor(OUT_B, 30, 1800);\n'; 
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