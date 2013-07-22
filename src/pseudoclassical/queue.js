var Queue = function(){
  this.counter = 0;
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