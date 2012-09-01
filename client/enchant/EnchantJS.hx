package enchant;


class Rect
{
	public var left : Int;
	public var top : Int;
	public var right : Int;
	public var bottom : Int;
}

extern class Event
{
	public var type : Dynamic;
	public var target : Dynamic;
	public var x : Int;
	public var y : Int;
	public var localX : Int;
	public var localY : Int;

	public function new(type:Dynamic) : Void;
	public function _initPosition(pageX:Int, pageY:Int) : Void;

	public static var LOAD;
	public static var PROGRESS;
	public static var ENTER_FRAME ;
	public static var EXIT_FRAME;
	public static var ENTER;
	public static var EXIT;
	public static var ADDED;
	public static var ADDED_TO_SCENE;
	public static var REMOVED;
	public static var REMOVED_FROM_SCENE;
	public static var TOUCH_START;
	public static var TOUCH_MOVE;
	public static var TOUCH_END;
	public static var RENDER;
	public static var INPUT_START;
	public static var INPUT_CHANGE;
	public static var INPUT_END;
	public static var LEFT_BUTTON_DOWN;
	public static var LEFT_BUTTON_UP;
	public static var RIGHT_BUTTON_DOWN;
	public static var RIGHT_BUTTON_UP;
	public static var UP_BUTTON_DOWN;
	public static var UP_BUTTON_UP;
	public static var DOWN_BUTTON_DOWN;
	public static var DOWN_BUTTON_UP;
	public static var A_BUTTON_DOWN;
	public static var A_BUTTON_UP;
	public static var B_BUTTON_DOWN;
	public static var B_BUTTON_UP;
}

extern class EventTarget
{
	public function new() : Void;
	public function addEventListener(type:String, listener:Dynamic) : Void;
	public function removeEventListener(type:String, listener:Dynamic) : Void;
	public function dispatchEvent(e:Event) : Void;
}

extern class Game
{
	public var fps : Int;
	public var frame : Int;
	public var ready : Bool;
	public var running : Bool;
	public var assets : Array<Dynamic>;
	public var input : Dynamic;
	
	public var rootScene : Scene;
	public var loadingScene : Scene;
	
	public function new(width : Int, height : Int) : Void;

	public function preload(assets:Dynamic) : Void;
	public function load(src:String, callbackfun : Void -> Void ) : Dynamic;
	public function start() : Void;
	public function stop() : Void;
	public function pause() : Void;
	public function pushScene(scene:Scene) : Scene;
	public function popScene() : Scene;
	public function replaceScene(scene : Scene ) : Scene;
	public function removeScene(scene : Scene ) : Scene;
	public function keybind(key:Dynamic, button:Dynamic) : Void;
	
	public var onload : Void -> Void;

}

extern class Node extends EventTarget
{
	public function new() : Void;
	public function moveTo(x:Float, y:Float) : Void;
	public function moveBy(x:Float, y:Float) : Void;
	public var x : Float;
	public var y : Float;
	public var parentNode : Node;
	public var scene : Scene;
}

extern class Entity extends Node
{
	public function new() : Void;
	public var width : Float;
	public var height : Float;
	public var backgroundColor : Dynamic;
	public var opacity : Dynamic;
	public var visible : Bool;
	public var touchEnabled : Bool;
	public function intersect(other:Entity) : Bool;
	public function within(other:Entity, distance:Int) : Bool;
}
extern class Sprite extends Entity
{
	public function new(width:Int, height:Int):Void;
	public var image : Dynamic;
	public var frame : Int;
	public function scale(x:Float, y:Float):Void;
	public function rotate(deg:Float):Void;
	public var scaleX : Float;
	public var scaleY : Float;
	public var rotation : Float;
}

extern class Label extends Entity
{
	public function new(text:String):Void;

	public var text : String;
	public var font : Dynamic;
	public var color : Dynamic;
}

extern class Map extends Entity
{
	public function new(tileWidth:Int, tileHeight:Int) : Void;
	public function loadData(data:Array< Array<Int> >) : Void;
	public function hitTest(x:Float, y:Float) : Bool;
	public var image : Dynamic;
	public var tileWidth : Int;
	public var tileHeight : Int;
	public var Width : Int;
	public var Height : Int;
	private function redraw(x:Int, y:Int, width:Int, height:Int ) : Void;
}

extern class Group extends Node
{
	public function new() : Void;
	public function addChild(node : Node) : Void;
	public function insertBefore(node : Node, reference : Node) : Void;
	public function removeChild(node : Node) : Void;
	public var firstChild : Node;
	public var lastChild : Node;
}

extern class Scene extends Group
{
	public function new() : Void;
	public var backgroundColor : Dynamic;
}

extern class Surface extends EventTarget
{
	public function new(width:Int, height:Int) : Void;
	public function getPixel(x:Int, y:Int) : Dynamic;
	public function setPixel(x:Int, y:Int, r:Int, g:Int, b:Int, a:Int) : Void;

	public function clear() : Void;
	public function draw(image: Dynamic) : Void;
	public function clone() : Surface;

	public static function load(src:String) : Surface;
}

extern class Sound extends EventTarget
{

	public function new() : Void;
	public function play() : Void;
	public function pause() : Void;
	public function stop() : Void;
	public var currentTime : Float;
	public var volume : Float;

	public static function load(src:String, type:Dynamic) : Sound;
}

//

extern class Pad extends Sprite
{
	public function new() : Void;
	
}
