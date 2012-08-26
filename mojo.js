(function (exports) {
    exports.hobo = function(food) {
        return (food === 'icecream') ? 'mmm' : 'yuk';
    };
})(typeof exports === 'undefined' ? this.mojo={} : exports);