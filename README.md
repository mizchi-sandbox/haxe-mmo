# HaXe MMO

This is an experimental project of little MMO implement using enchant.js and socket.io, all written by HaXe.

## How to run

required libraries

```sh
# haxelib
haxelib install nodejs

# node
npm install
```

## Fix Express for HaXe

add this code to node_modules/express/lib/express.js

```
exports.static_ = exports.static;
```

it is to avoid `static` var.

## Build and Start

```
haxe build.xml
node app.js
```

open localhost:3000
