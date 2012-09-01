package ;

import js.Lib;
import EnchantHX;

class Bear extends HxSprite {
  public function new() {
    super(32, 32);
    x = 8;
    y = 8;
    image = Main.game.assets.get('chara1.gif');

    addEventListener(event_ENTER_FRAME, function(e) {
      if (Main.game.input.right) {
        x += 2;
      }
      if (Main.game.input.left) {
        x -= 2;
      }
      if (Main.game.input.up) {
        y -= 2;
      }
      if (Main.game.input.down) {
        y += 2;
      }
      
    });
  }
}
 
class Main extends HxGame {
  public static var game : HxGame;
  public static var socket : Dynamic;

  function new() {
    super(320, 320);

    fps = 24;
    preload(['chara1.gif']);
    // The images used in the game should be preloaded

    onload = function() {
      var window: Dynamic = untyped js.Lib.window;
      var io: Dynamic = untyped js.Lib.window.io;
      socket = io.connect('/entrance');
      socket.emit("login", "jdkfsajfkldas");
      window.socket = socket;

      var bear = new Bear();
      // add bear to rootScene (default scene)
      rootScene.addChild(bear);
      rootScene.backgroundColor = '#aaaaaa';
    };
    start();
  }
  static function main() {
    game = new Main();
  }
  
}
