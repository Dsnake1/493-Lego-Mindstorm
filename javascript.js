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

  var code = 'turn left code;\n';

  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  var dropdown_right = block.getFieldValue('right');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turn right code;\n';
  return code;
};

Blockly.JavaScript['move_forward'] = function(block) {
  var number_feet = block.getFieldValue('feet');
  var number_inches = block.getFieldValue('inches');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move forward code;\n';
  return code;
};

Blockly.JavaScript['move_backward'] = function(block) {
  var number_feet = block.getFieldValue('feet');
  var number_inches = block.getFieldValue('inches');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move backward code;\n';
  return code;
};

Blockly.JavaScript['do_donuts'] = function(block) {
  var dropdown_spin_type = block.getFieldValue('spin_type');
  var number_inches = block.getFieldValue('inches');
  // TODO: Assemble JavaScript into code variable.
  var code = 'do donuts code;\n';
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