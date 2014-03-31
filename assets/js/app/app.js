define(function(require){
  var BGdp = require('app/BGGistDataPuller');
  BGdp = new BGdp("liaa");
  BGdp.fetchGists();


   // Notification Center
   var BGChannel = require('app/BGChannel');
   var BGRenderer = require('app/BGRenderer');
    BGChannel.subscribe("gists.feched",function(data){
       BGRenderer.renderGistsList(data.data);


    });

});