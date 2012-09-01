package;
import js.Node;

class Main {
  static function main() {
    //Express
    var express: Dynamic = Node.require("express");
    var app = express.createServer();
    app.use(express.static_(Node.__dirname + '/public'));
    app.listen(3000);
    trace('server: 3000');

    //Socket.IO
    var io = Node.require('socket.io').listen(app);
    var entrance = io.of('/entrance');
    entrance.on('connection', IO.connection);
    entrance.on('disconnect', IO.disconnect);
  }
}

class IO {
  public static function connection(socket):Void {
    var user_id:String = socket.id;
    socket.emit('login', user_id);
  	trace(socket.id);
  }
  public static function disconnect(socket):Void {
  	trace(socket.id);
  }
}