// Hey! Copy your code from src/functional/stack.js and paste it here
var Stack = function(){
  var stack = Object.create(Stack.prototype);
  stack.counter = 0;
  return stack;
};

Stack.prototype.add = function(value){
    this[this.counter] = value;
    this.counter += 1;
};
Stack.prototype.remove = function(value){
    delete this[this.counter];
    this.counter -= 1;
};
Stack.prototype.size = function(value){
    return this.counter;
};