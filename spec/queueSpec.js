describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).to.be.a('function');
    expect(queue.remove).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method

  describe('#add()', function() {
    it('should add 1 item and increase size by 1', function() {
      queue.add('a');
      expect(queue.size()).to.equal(1);
    });
    it('should add multiple values and increase size accordingly', function() {
      queue.add('kevin');
      queue.add('evan');
      queue.add('mike');
      expect(queue.size()).to.equal(3);
    });
  });

  describe('#size()', function() {
    it('should return 0 for empty object', function() {
      expect(queue.size()).to.equal(0);
    });
    it('should return the number of values in the object', function() {
      queue.add('javascript');
      expect(queue.size()).to.equal(1);
      queue.add('george');
      expect(queue.size()).to.equal(2);
      queue.add('c');
      queue.add('d');
      queue.add('e');
      expect(queue.size()).to.equal(5);
    });
  });

  describe('#remove()', function() {
    it('should remove a single value from the queue', function() {
      queue.add('a');
      queue.remove();
      expect(queue.size()).to.equal(0);
    });
    it('should remove multiple values from the queue', function() {
      queue.add('a');
      queue.add('b');
      queue.add('c');
      queue.remove();
      queue.remove();
      expect(queue.size()).to.equal(1);
    });
  });
  // Hey! Add more tests here to test the functionality of queue
});
