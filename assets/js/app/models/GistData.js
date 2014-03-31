define(function(){
  function GistData(id, title, html_url){
    this.id = id;
    this.title = title;
    this.html_url = html_url;
  }
  return GistData;
})