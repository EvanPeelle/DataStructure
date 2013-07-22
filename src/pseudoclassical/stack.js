var Stack = function(){
  this.counter = 0;
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