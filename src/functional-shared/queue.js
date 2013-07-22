// Hey! Copy your code from src/functional/queue.js and paste it here

var makeQueue = function(){
  var queue = {};
  queue.counter = 0;

  queue.add = stackMethods.add;
  queue.remove = stackMethods.remove;
  queue.size = stackMethods.size;

  return queue;
};

  var stackMethods = {
    add : function(value){
      this[this.counter] = value;
      this.counter += 1;
    },
    remove : function(value){
      delete this[0];
      this.counter -= 1;
    },
    size : function(value){
      return this.counter;
    }
};