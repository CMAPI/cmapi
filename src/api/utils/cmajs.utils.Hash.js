cmajs.utils.Hash = function () {
  var i;
  this.length = 0;
  this.items = [];
  for (i = 0; i < arguments.length; i += 2) {
    if (typeof (arguments[i + 1]) !== 'undefined') {
      this.items[arguments[i]] = arguments[i + 1];
      this.length += 1;
    }
  }
  /**
   * @method removeItem
   * @memberof emp.helpers
   * @return {object}
   */
  this.removeItem = function (in_key) {
    var tmp_previous;
    if (typeof (this.items[in_key]) !== 'undefined') {
      this.length -= 1;
      tmp_previous = this.items[in_key];
      delete this.items[in_key];
    }

    return tmp_previous;
  };
  /**
   * @method getItem
   * @memberof emp.helpers
   * @return {object}
   */
  this.getItem = function (in_key) {
    return this.items[in_key];
  };
  /**
   * @method setItem
   * @memberof emp.helpers
   * @return {object}
   */
  this.setItem = function (in_key, in_value) {
    var tmp_previous;
    if (typeof (in_value) !== 'undefined') {
      if (typeof (this.items[in_key]) === 'undefined') {
        this.length += 1;
      } else {
        tmp_previous = this.items[in_key];
      }

      this.items[in_key] = in_value;
    }

    return tmp_previous;
  };
  /**
   * @method hasItem
   * @memberof emp.helpers
   * @return {object}
   */
  this.hasItem = function (in_key) {
    return typeof (this.items[in_key]) !== 'undefined';
  };
  /**
   * @method clear
   * @memberof emp.helpers
   * @return {object}
   */
  this.clear = function () {
    var i;

    for (i in this.items) {
      if (this.items.hasOwnProperty(i)) {
        delete this.items[i];
      }
    }

    this.length = 0;
  };
};
