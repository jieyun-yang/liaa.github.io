define(function(require){
    var jq = require('bower_components/jquery/dist/jquery');

    function renderGistsList(gists){
        var $container = $('.gists_list');
        for (var i=0, length=gists.length; i < length; i++ ){
            console.log(gists[i]);
            var gist = gists[i];
            var id = gist.id;
            var filename = (gist.title).slice(0,-3);

            var href = gist.html_url;
            $container.append($(
                // <li><a data-filename="开发手记.md" data-id="7677704">开发手记.md</a></li>
                '<li><a href="'+ href +'"  target="_blank" class="js-showgistcontent gist_title" data-filename="'+filename+'" data-id="'+id+'">'+filename+'</a></li>'
            ));
            $container.appendTo('body');
        }
    }





    //
    return {
       renderGistsList: renderGistsList
    }
})