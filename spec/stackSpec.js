describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method

  describe('#add()', function() {
    it('should add 1 item and increase size by 1', function() {
      stack.add('a');
      expect(stack.size()).to.equal(1);
    });
    it('should add multiple values to the stack', function() {
      stack.add('kevin');
      stack.add('evan');
      stack.add('mike');
      expect(stack.size()).to.equal(3);
    });
  });

  describe('#size()', function() {
    it('should return 0 for empty object', function() {
      expect(stack.size()).to.equal(0);
    });
    it('should return the number of values in the object', function() {
      stack.add('javascript');
      expect(stack.size()).to.equal(1);
      stack.add('george');
      expect(stack.size()).to.equal(2);
      stack.add('c');
      stack.add('d');
      stack.add('e');
      expect(stack.size()).to.equal(5);
    });
  });
  describe('#remove()', function() {
    it('should remove a single value from the stack', function() {
      stack.add('a');
      stack.remove();
      expect(stack.size()).to.equal(0);
    });
    it('should remove multiple values from the stack', function() {
      stack.add('a');
      stack.add('b');
      stack.add('c');
      stack.remove();
      stack.remove();
      expect(stack.size()).to.equal(1);
    });
  });
});
