var makeQueue = function(){
  var storage = {};
  var size = 0; // Hint: set an initial value here
  var queue = {};

  queue.add = function(value){
    queue[size] = value;
    size += 1;
  };

  queue.remove = function(){
   delete queue[0];
   size-=1;
  };

  queue.size = function(){
    return size;
  };
  return queue;
};