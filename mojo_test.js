var mojo = require("mojo.js");

exports.testHobo = function(test){
    test.equals("fff", mojo.hobo("apple"));
    test.ok(true, "this assertion should pass");
    test.done();
};