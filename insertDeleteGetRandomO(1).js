/** Design a data structure that supports all following operations in average O(1) time.
*insert(val): Inserts an item val to the set if not already present.
*remove(val): Removes an item val from the set if present.
*getRandom: Returns a random element from current set of elements.Each element must have the same probability of being returned.

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
   if (this.map.hasOwnProperty(val)) return false;
   this.arr.push(val);
   this.map[val] = this.arr.length - 1;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.hasOwnProperty(val)) return false;

    //swap with the last item in arr
    const lastVal = this.arr[this.arr.length - 1];
    const curIndex = this.map[val];

    this.arr[curIndex] = lastVal;
    this.map[lastVal] = curIndex;

    this.arr.pop();
    delete this.map[val];

    return true;

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() *(this.arr.length))];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
