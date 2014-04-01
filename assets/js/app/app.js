define(function(require){
  var BGdp = require('app/BGGistDataPuller');
  var mask = require('app/mask');
  BGdp = new BGdp("liaa");
  BGdp.fetchGists();
  mask.show();



   // Notification Center
   var BGChannel = require('app/BGChannel');
   var BGRenderer = require('app/BGRenderer');
    BGChannel.subscribe("gists.feched",function(data){
       BGRenderer.renderGistsList(data.data);
       mask.hide();


    });

});