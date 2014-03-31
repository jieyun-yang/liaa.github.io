define([],function(){


    //files = {
//    "开发手记.md": {
//        "filename": "开发手记.md",
//            "type": "text/plain",
//            "language": "Markdown",
//            "raw_url": "https://gist.github.com/liaa/7677704/raw/516e28e789390b9a93bd380655b04f62e82b7759/%E5%BC%80%E5%8F%91%E6%89%8B%E8%AE%B0.md",
//            "size": 521
//    }
// searchValueByKeyFromObject("filename", file) ==> "开发手记.md"
    function searchValueByKeyFromObject(key, object){
        var rusult;
        for (var prop in object){
            if( (typeof object[prop]) == 'object' ){
                searchValueByKeyFromObject(key, object[prop]);
            }
            if(prop == key){
                result = object[prop];
            }
        }

        return result;
    };



   return {
       searchValueByKeyFromObject : searchValueByKeyFromObject
   }
});

