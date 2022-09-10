var MinStack = function() {
    this.stack = [];
    this.currentMin;
    this.minOrder = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.currentMin == undefined || val < this.currentMin || val == this.currentMin) {
        this.minOrder[this.minOrder.length] = val;
        this.currentMin = val;
    }
    this.stack[this.stack.length] = val;
    console.log(this.stack, this.currentMin, this.minOrder)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.currentMin === this.stack[this.stack.length-1]) {
        this.currentMin = this.minOrder[this.minOrder.length-2];
        this.minOrder.length--;
    }
    this.stack.length--;
    console.log(this.stack, this.currentMin, this.minOrder)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    console.log(this.stack, this.currentMin, this.minOrder)
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log(this.stack, this.currentMin, this.minOrder)
    return this.currentMin;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */