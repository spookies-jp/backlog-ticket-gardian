const expect = require('expect.js');
const $ = require('../utils.js');

// for existy
expect($.existy(null)).to.be(false);
expect($.existy(undefined)).to.be(false);

expect($.existy(false)).to.be(true);
expect($.existy({})).to.be(true);
expect($.existy([])).to.be(true);
expect($.existy(0)).to.be(true);


// for falsy
expect($.falsy(null)).to.be(true);
expect($.falsy(undefined)).to.be(true);
expect($.falsy(false)).to.be(true);
expect($.falsy(0)).to.be(true);
expect($.falsy('0')).to.be(true);
expect($.falsy(0.0)).to.be(true);
expect($.falsy('false')).to.be(true);
expect($.falsy('')).to.be(true);

expect($.falsy(true)).to.be(false);
expect($.falsy([])).to.be(false);
expect($.falsy({})).to.be(false);
expect($.falsy(1)).to.be(false);


