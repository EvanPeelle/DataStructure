var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; //soon to be known as counter. 

  // Implement the methods below
  var stack = {};

  stack.add = function(value){
    stack[size] = value;
    size += 1;
  };

  stack.remove = function(){
    delete stack[size];
    size-=1;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
