System.register([], function (exports_1, context_1) {
    "use strict";
    var hi, b, c;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = '你好');
            b = 20;
            c = 'hello';
            console.log(b, c);
        }
    };
});
