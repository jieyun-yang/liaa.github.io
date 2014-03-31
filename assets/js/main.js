require(["app/app"],function(app){
  require.config({
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'bower_components/jquery/dist/jquery', //为什么这样配置了 var j = require('jquery'); 不是到这个路径下找文件
        underscore: 'libs/underscore',
        // bjqs.css: "./../css/bjqs.css",

    },
    shim: {
        // "lib/bjqs-1.3": ["lib/jquery","css!./../../css/bjqs.css"]
    }


});
});