//github provide API for fetch user's gist by:
// "https://api.github.com/users/{username}/gists"
define(function(require){
    var BGhelper = require("app/helper");
    var GistData = require("app/models/GistData");
    var BGChannel = require("app/BGChannel");
    function gistDataPuller(username) {
        this.useranem = username;
        this.gists = [];
    }

    gistDataPuller.prototype.fetchGists = function (){
        // TODO: 开始异步拉去数据的额时候给用户一个可视化的loading页面
        var that = this;
        var ajaxOptions;
        ajaxOptions = {

            url: "https://api.github.com/users/"+this.useranem+"/gists"
        };
        console.log(ajaxOptions.url);
        var ajax = $.ajax(ajaxOptions);
        ajax.done(function(data){
            that.gists = data;
            console.log("Sir, the gists is already fetching.");
            for (var i = 0; i < that.gists.length ; i++) //得到每一个gist
            {
                var gist = data[i];
                var filename;
                var id;
                var html_url;

                id = gist.id;
                filename = BGhelper.searchValueByKeyFromObject("filename",gist);
                html_url = gist.html_url;
                gist = new GistData();
                gist.id = id;
                gist.title = filename;
                gist.html_url = html_url;
                console.log(filename);
                that.gists[i] = gist;
//            that.gists.push(gist); //NOTE: 这里如果使用这个来填充这个gists数组的话会导致浏览器卡死...Why



            }
            BGChannel.publish("gists.feched",{data:that.gists});

        });
        // TODO: 拉去gists错误处理
    }

    gistDataPuller.prototype.fetchGistById = function(gistId){
        $.ajax({
            url: 'https://api.github.com/gists/'+ gistId,
            type: 'GET',
            dataType: 'jsonp'
        }).success( function(gistdata) {
                //gistdata模型看这里 https://api.github.com/gists/7677704
//            var content = gistdata.data.files[filename].content;
                var data = gistdata.data;
                console.log("SUCCESS: feched gist with id "+gistId);

                BGChannel.publish("gist.feched",{data:data});
            }).error( function(e) {
                // TODO: 拉去gist错误处理
            });
    }


    return gistDataPuller;
})

