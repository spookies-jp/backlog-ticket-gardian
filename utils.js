var utils = {

  /**
   * 存在する値ならtrue
   */
  existy: function(v) {

    if (v === undefined) {
      return false;
    }
    return (v != null)
  },

  /**
   * false判定されるもの
   */
  falsy: function(v) {

    if (this.existy(v)) {

      if (v === 'false') {
        return true;
      }
      if (v) {
        return false;
      }
    }
    return true;
  },

  empty: function(v) {
    return this.falsy(v);
  },
}

if (typeof module !== 'undefined' && module && module.exports) {
  module.exports = utils;
}
