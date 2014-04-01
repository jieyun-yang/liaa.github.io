This is BLOGIST. 
Turn your Github Gist into blog posts. [DEMO](http://blog.kidliaa.com/)

## How BLOGIST works:

BLOGIST use Github [gist api](https://developer.github.com/v3/gists/) to fetch user gists, then make a list out of it. show them in the browser. 

## Why BLOGIST

* github gists provide the git history function that you can check what happen with your posts at any time
* easy to use with the "gist" package in sublime text, write blog like a boss

## What's More:

The heart of BLOGIST is a __data puller__ (I call it BGGistDataPuller). The data puller response for:

1. fetches all the gists of a user
2. fetches a specified gist if given an "gist id"
3. publishes a notification with the data has been fetched (currently just "gists.fetched" or "gist.fetched") to any object that intrested in.

So you can do anything you want to do base on BLOGIST heart with the facilities that Github API provided.

TODO:

* design and write a theme
* reconstruct the app structure
