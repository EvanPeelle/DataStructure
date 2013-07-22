// Hey! Copy your code from src/functional/stack.js and paste it here
var makeStack = function(){
  var stack = {};
  stack.counter = 0;

  stack.add = stackMethods.add;
  stack.remove = stackMethods.remove;
  stack.size = stackMethods.size;

  return stack;
};

  var stackMethods = {
    add : function(value){
      this[this.counter] = value;
      this.counter += 1;
    },
    remove : function(value){
      delete this[this.counter];
      this.counter -= 1;
    },
    size : function(value){
      return this.counter;
    }
  };