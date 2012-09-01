# HaXe Test

```
npm install
haxe build.xml
open index.html
```

and add this code to node_modules/express/lib/express.js

```
exports.static_ = exports.static;
```

it is to avoid `static` var.
