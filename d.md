## 主要涉及:
* gistData的设计

    p:  * id
        * title
        * html_url

* gistDatePuller的设计
    * initWith




## 需要拿到的数据:
* apiA: description:使用这个来自定义页面页面栏目


## 用到的开源库:
* [marked](https://github.com/chjj/marked) markdown ==> html

## Github API
* [API V3](developer.github.com/v3/)
* [GIST API V3](developer.github.com/v3/gists/)

## 项目中应用到的API
* apiA: 获得用户的所有gist: `https://api.github.com/users/liaa/gists`
* apiB: 获得指定的gist: `https://api.github.com/gists/:gistId`

## 步骤
第一步:获取特定用户所有的gist: (提取gistid, filename,作为参数传入第二步)
**API: 获得指定用户所有gist**
用get方法访问apiA.得到一个数组含有以下格式的objects.
```js
{
    "url": "https://api.github.com/gists/7677704",
    "forks_url": "https://api.github.com/gists/7677704/forks",
    "commits_url": "https://api.github.com/gists/7677704/commits",
    "id": "7677704",
    "git_pull_url": "https://gist.github.com/7677704.git",
    "git_push_url": "https://gist.github.com/7677704.git",
    "html_url": "https://gist.github.com/7677704",
    "files": {
      "开发手记.md": {
        "filename": "开发手记.md",
        "type": "text/plain",
        "language": "Markdown",
        "raw_url": "https://gist.github.com/liaa/7677704/raw/516e28e789390b9a93bd380655b04f62e82b7759/%E5%BC%80%E5%8F%91%E6%89%8B%E8%AE%B0.md",
        "size": 521
      }
    },
    "public": true,
    "created_at": "2013-11-27T15:35:03Z",
    "updated_at": "2013-11-27T15:35:03Z",
    "description": "#test",
    "comments": 0,
    "user": {
      "login": "liaa",
      "id": 1857448,
      "avatar_url": "https://0.gravatar.com/avatar/a5cc37ccc0c5b973d71bcf8b4a77af01?d=https%3A%2F%2Fidenticons.github.com%2F5f3a128e58fa4bec935186403c2a7d25.png&r=x",
      "gravatar_id": "a5cc37ccc0c5b973d71bcf8b4a77af01",
      "url": "https://api.github.com/users/liaa",
      "html_url": "https://github.com/liaa",
      "followers_url": "https://api.github.com/users/liaa/followers",
      "following_url": "https://api.github.com/users/liaa/following{/other_user}",
      "gists_url": "https://api.github.com/users/liaa/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/liaa/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/liaa/subscriptions",
      "organizations_url": "https://api.github.com/users/liaa/orgs",
      "repos_url": "https://api.github.com/users/liaa/repos",
      "events_url": "https://api.github.com/users/liaa/events{/privacy}",
      "received_events_url": "https://api.github.com/users/liaa/received_events",
      "type": "User",
      "site_admin": false
    },
    "comments_url": "https://api.github.com/gists/7677704/comments"
  },
```


第二步:获得指定的gist. loadgist(gistid, filename)
一个gist object是下面一种结构的object:
```js
{
  "url": "https://api.github.com/gists/7677704",
  "forks_url": "https://api.github.com/gists/7677704/forks",
  "commits_url": "https://api.github.com/gists/7677704/commits",
  "id": "7677704",
  "git_pull_url": "https://gist.github.com/7677704.git",
  "git_push_url": "https://gist.github.com/7677704.git",
  "html_url": "https://gist.github.com/7677704",
  "files": {
    "开发手记.md": {
      "filename": "开发手记.md",
      "type": "text/plain",
      "language": "Markdown",
      "raw_url": "https://gist.github.com/liaa/7677704/raw/516e28e789390b9a93bd380655b04f62e82b7759/%E5%BC%80%E5%8F%91%E6%89%8B%E8%AE%B0.md",
      "size": 521,
      "content": "## CSS方面\n**使用css3的multiple background制作更好看的背景图**\n\n效果图:\n![Alt text](https://dl.dropboxusercontent.com/u/85873187/mdi/mdi-2013-11-27233025.png \"Optional title\")\n\n```css\n.nav-list {\n    background-position: left -40px;\n    background-repeat: repeat-x;\n    background: url(../images/nav-bg-ex.png) right center no-repeat,url(../images/nav-bg.png) left -40px repeat-x;\n}\n```\n\n这样在不支持multiple background的浏览器中 `url(../images/nav-bg.png) left -40px repeat-x`会正常工作."
    }
  },
  "public": true,
  "created_at": "2013-11-27T15:35:03Z",
  "updated_at": "2013-11-27T15:35:03Z",
  "description": "#test",
  "comments": 0,
  "user": {
    "login": "liaa",
    "id": 1857448,
    "avatar_url": "https://1.gravatar.com/avatar/a5cc37ccc0c5b973d71bcf8b4a77af01?d=https%3A%2F%2Fidenticons.github.com%2F5f3a128e58fa4bec935186403c2a7d25.png&r=x",
    "gravatar_id": "a5cc37ccc0c5b973d71bcf8b4a77af01",
    "url": "https://api.github.com/users/liaa",
    "html_url": "https://github.com/liaa",
    "followers_url": "https://api.github.com/users/liaa/followers",
    "following_url": "https://api.github.com/users/liaa/following{/other_user}",
    "gists_url": "https://api.github.com/users/liaa/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/liaa/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/liaa/subscriptions",
    "organizations_url": "https://api.github.com/users/liaa/orgs",
    "repos_url": "https://api.github.com/users/liaa/repos",
    "events_url": "https://api.github.com/users/liaa/events{/privacy}",
    "received_events_url": "https://api.github.com/users/liaa/received_events",
    "type": "User",
    "site_admin": false
  },
  "comments_url": "https://api.github.com/gists/7677704/comments",
  "forks": [

  ],
  "history": [
    {
      "user": {
        "login": "liaa",
        "id": 1857448,
        "avatar_url": "https://1.gravatar.com/avatar/a5cc37ccc0c5b973d71bcf8b4a77af01?d=https%3A%2F%2Fidenticons.github.com%2F5f3a128e58fa4bec935186403c2a7d25.png&r=x",
        "gravatar_id": "a5cc37ccc0c5b973d71bcf8b4a77af01",
        "url": "https://api.github.com/users/liaa",
        "html_url": "https://github.com/liaa",
        "followers_url": "https://api.github.com/users/liaa/followers",
        "following_url": "https://api.github.com/users/liaa/following{/other_user}",
        "gists_url": "https://api.github.com/users/liaa/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/liaa/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/liaa/subscriptions",
        "organizations_url": "https://api.github.com/users/liaa/orgs",
        "repos_url": "https://api.github.com/users/liaa/repos",
        "events_url": "https://api.github.com/users/liaa/events{/privacy}",
        "received_events_url": "https://api.github.com/users/liaa/received_events",
        "type": "User",
        "site_admin": false
      },
      "version": "4f9992dc4d79981aedb50a218c47e830f6b4677d",
      "committed_at": "2013-11-27T15:35:03Z",
      "change_status": {
        "total": 15,
        "additions": 15,
        "deletions": 0
      },
      "url": "https://api.github.com/gists/7677704/4f9992dc4d79981aedb50a218c47e830f6b4677d"
    }
  ]
}
```



```js
function loadgist(gistid, filename) {

    $.ajax({
      url: 'https://api.github.com/gists/'+gistid,
      type: 'GET',
      dataType: 'jsonp'
    }).success( function(gistdata) {
        var content = gistdata.data.files[filename].content;
        DoSomethingWith(content)
      }).error( function(e) {
      // ajax error
    });
        
    }

    function DoSomethingWith(content) {
        $("#info").text(content);
    }

    loadgist(5822336, "KentsBlog.md");
```

## BGRender
gists属性配置: BGGistDataPuller 第25行来配置能偶在BGRenderer中想要使用的gist属性.