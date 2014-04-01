define(function(require){
    require('bower_components/jquery/dist/jquery');
    var $image = $('<img src="assets/images/loading.gif" alt="">');
    $image.css({
      position:"absolute",
      left:50 ,
      top: 50,
    });
    function show(){
      $image.appendTo($('body'));
    };

    function hide(){
      $image.hide();
    };

    return {
      show: show,
      hide: hide
    }

})