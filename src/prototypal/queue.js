var Queue = function(){
  var queue = Object.create(Queue.prototype);
  queue.counter = 0;
  return queue;
};

Queue.prototype.add = function(value){
    this[this.counter] = value;
    this.counter += 1;
};
Queue.prototype.remove = function(value){
    delete this[0];
    this.counter -= 1;
};
Queue.prototype.size = function(value){
    return this.counter;
};