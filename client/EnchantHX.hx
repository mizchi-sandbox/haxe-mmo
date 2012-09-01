package ;


import enchant.EnchantJS;
import Dict;

enum HxEventType {
	event_LOAD;
	event_PROGRESS;
	event_ENTER_FRAME;
	event_EXIT_FRAME;
	event_ENTER;
	event_EXIT;
	event_ADDED;
	event_ADDED_TO_SCENE;
	event_REMOVED;
	event_REMOVED_FROM_SCENE;
	event_TOUCH_START;
	event_TOUCH_MOVE;
	event_TOUCH_END;
	event_RENDER;
	event_INPUT_START;
	event_INPUT_CHANGE;
	event_INPUT_END;
	event_LEFT_BUTTON_DOWN;
	event_LEFT_BUTTON_UP;
	event_RIGHT_BUTTON_DOWN;
	event_RIGHT_BUTTON_UP;
	event_UP_BUTTON_DOWN;
	event_UP_BUTTON_UP;
	event_DOWN_BUTTON_DOWN;
	event_DOWN_BUTTON_UP;
	event_A_BUTTON_DOWN;
	event_A_BUTTON_UP;
	event_B_BUTTON_DOWN;
	event_B_BUTTON_UP;
}

	
class HxInput
{
	var _input : Dynamic;
	
	public inline function new(inp:Dynamic) : Void {
		_input = inp;
	}
	
	public var left(get_left, null) : Bool;
	public var up(get_up, null) : Bool;
	public var right(get_right, null) : Bool;
	public var down(get_down, null) : Bool;

	//
	private inline function get_left() : Bool {
		return untyped _input.left;
	}
	private inline function get_up() : Bool {
		return untyped _input.up;
	}
	private inline function get_right() : Bool {
		return untyped _input.right;
	}
	private inline function get_down() : Bool {
		return untyped _input.down;
	}
}

class HxAssets
{
	var _assets : Dynamic;

	public inline function new(assets:Dynamic) : Void {
		_assets = assets;
	}
	
	public inline function get(name:String) : Dynamic {
		return untyped _assets[name];
	}
}

class HxGame
{
	var _game : enchant.Game;
	var _preloadBase : String;
	
	public var fps(get_fps, set_fps) : Int;
	private inline function get_fps() : Int {
		return _game.fps;
	}
	private inline function set_fps(fps:Int) : Int {
		return _game.fps = fps;
	}

	public var frame(get_frame, null) : Int;
	private inline function get_frame() : Int {
		return _game.frame;
	}
/*	public var ready : Bool;
	public var running : Bool;
	public var assets : Array<Dynamic>;
*/
	public var assets : HxAssets;
	public var input : HxInput;
	
	public var rootScene : HxScene;
	//public var loadingScene : Scene;
	
	public inline function new(width : Int, height : Int) : Void
	{
		_game = new Game(width, height);
		input = new HxInput(_game.input);
		assets = new HxAssets(_game.assets);

		rootScene = new HxScene(_game.rootScene);
	}

	public inline function setPreloadBase(baseurl:String) : Void {
		_preloadBase = baseurl;
	}
	public inline function preload(assets:Array<String>) : Void
	{
		return untyped _game.preload(assets);
	}
	
	//public inline function load(src:String, callbackfun : Void -> Void ) : Dynamic;
	public inline function start() : Void
	{
		_game.start();
	}
	//public inline function stop() : Void;
	//public inline function pause() : Void;
	//public inline function pushScene(scene:Scene) : Scene;
	//public inline function popScene() : Scene;
	//public inline function replaceScene(scene : Scene ) : Scene;
	//public inline function removeScene(scene : Scene ) : Scene;
	//public inline function keybind(key:Dynamic, button:Dynamic) : Void;
	
	public var onload(get_onload, set_onload) : Void -> Void;
	public inline function get_onload() : Void->Void
	{
		return _game.onload;
	}
	public inline function set_onload(fn:Void->Void) : Void->Void
	{
		return _game.onload = fn;
	}
	
	//
	
	public inline function getAsset(name:String) : Dynamic {
		return untyped _game.assets[name];
	}

	public inline function end(score:Int,msg:Dynamic) : Void {
		untyped alert(msg);
	}
}

class HxEventTarget
{
	public var _target : enchant.EventTarget;
	public inline function new(inst:enchant.EventTarget) : Void {
		_target = inst;
	}
	public inline function addEventListener(type:HxEventType, listener:enchant.Event->Void) : Void {
		var strtype = switch type {
			case event_LOAD: 'load';
			case event_PROGRESS: 'progress';
			case event_ENTER_FRAME: 'enterframe';
			case event_EXIT_FRAME: 'exitframe';
			case event_ENTER: 'enter';
			case event_EXIT: 'exit';
			case event_ADDED: 'added';
			case event_ADDED_TO_SCENE: 'addedtoscene';
			case event_REMOVED: 'removed';
			case event_REMOVED_FROM_SCENE: 'removedfromscene';
			case event_TOUCH_START: 'touchstart';
			case event_TOUCH_MOVE: 'touchmove';
			case event_TOUCH_END: 'touchend';
			case event_RENDER: 'render';
			case event_INPUT_START: 'inputstart';
			case event_INPUT_CHANGE: 'inputchange';
			case event_INPUT_END: 'inputend';
			case event_LEFT_BUTTON_DOWN: 'leftbuttondown';
			case event_LEFT_BUTTON_UP: 'leftbuttonup';
			case event_RIGHT_BUTTON_DOWN: 'rightbuttondown';
			case event_RIGHT_BUTTON_UP: 'rightbuttonup';
			case event_UP_BUTTON_DOWN: 'upbuttondown';
			case event_UP_BUTTON_UP: 'upbuttonup';
			case event_DOWN_BUTTON_DOWN: 'downbuttondown';
			case event_DOWN_BUTTON_UP: 'downbuttonup';
			case event_A_BUTTON_DOWN: 'abuttondown';
			case event_A_BUTTON_UP: 'abuttonup';
			case event_B_BUTTON_DOWN: 'bbuttondown';
			case event_B_BUTTON_UP: 'bbuttonup';
		}
		_target.addEventListener(strtype, listener);
	}
	public inline function removeEventListener(type:String, listener:enchant.Event->Void) : Void {
		_target.removeEventListener(type, listener);
	}
	public inline function dispatchEvent(e:enchant.Event) : Void {
		_target.dispatchEvent(e);
	}
}
class HxNode extends HxEventTarget
{
	public var _node : enchant.Node;
	public inline function new(node:enchant.Node) : Void {
		_node = node;
		super(_node);
	}
	public inline function moveTo(x:Float, y:Float) : Void {
		_node.moveTo(x, y);
	}
	public inline function moveBy(x:Float, y:Float) : Void {
		_node.moveBy(x, y);
	}
	public var x(get_x,set_x) : Float;
	public var y(get_y, set_y) : Float;
	
	//
	private inline function get_x() : Float {
		return _node.x;
	}
	private inline function set_x(x:Float) : Float {
		return _node.x = x;
	}	
	private inline function get_y() : Float {
		return _node.y;
	}
	private inline function set_y(y:Float) : Float {
		return _node.y = y;
	}	
}

class HxEntity extends HxNode
{
	public var _entity : enchant.Entity;
	public inline function new(inst:enchant.Entity) : Void {
		_entity = inst;
		super(inst);
	}
	public var width(get_width,set_width) : Float;
	public var height(get_height,set_height) : Float;
	public var backgroundColor(get_backgroundColor,set_backgroundColor) : Dynamic;
	public var opacity(get_opacity,set_opacity) : Dynamic;
	public var visible(get_visible,set_visible) : Bool;
	public var touchEnabled(get_touchEnabled,set_touchEnabled) : Bool;
	public inline function intersect(other:HxEntity) : Bool {
		return _entity.intersect(other._entity);
	}
	public inline function within(other:HxEntity, distance:Int) : Bool {
		return _entity.within(other._entity, distance);
	}
	
	//
	private inline function get_width() : Float {
		return _entity.width;
	}
	private inline function set_width(width:Float) : Float {
		return _entity.width = width;
	}		
	private inline function get_height() : Float {
		return _entity.height;
	}
	private inline function set_height(height:Float) : Float {
		return _entity.height = height;
	}		
	private inline function get_backgroundColor() : Dynamic {
		return _entity.backgroundColor;
	}
	private inline function set_backgroundColor(backgroundColor:Dynamic) : Dynamic {
		return _entity.backgroundColor = backgroundColor;
	}	
	private inline function get_opacity() : Dynamic {
		return _entity.opacity;
	}
	private inline function set_opacity(opacity:Dynamic) : Dynamic {
		return _entity.opacity = opacity;
	}	
	private inline function get_visible() : Bool {
		return _entity.visible;
	}
	private inline function set_visible(visible:Bool) : Bool {
		return _entity.visible = visible;
	}	
	private inline function get_touchEnabled() : Bool {
		return _entity.touchEnabled;
	}
	private inline function set_touchEnabled(touchEnabled:Bool) : Bool {
		return _entity.touchEnabled = touchEnabled;
	}	
}

class HxSpriteBase extends HxEntity {
	private var _sprite : enchant.Sprite;
	public inline function new(sprite:enchant.Sprite) : Void {
		_sprite = sprite;
		super(_sprite);
		//trace("HxSprite " + untyped this._listener );
	}
	
	
	public var image(get_image, set_image) : Dynamic;
	public var frame(get_frame,set_frame) : Int;
	public inline function scale(x:Float, y:Float):Void {
		_sprite.scale(x, y);
	}
	public inline function rotate(deg:Float):Void {
		_sprite.rotate(deg);
	}
	public var scaleX(get_scaleX,set_scaleX) : Float;
	public var scaleY(get_scaleY,set_scaleY) : Float;
	public var rotation(get_rotation,set_rotation) : Float;	
	
	//
	private inline function get_image() : Dynamic {
		return _sprite.image;
	}
	private inline function set_image(image:Dynamic) : Dynamic {
		return _sprite.image = image;
	}
	private inline function get_frame() : Int {
		return _sprite.frame;
	}
	private inline function set_frame(frame:Int) : Int {
		return _sprite.frame = frame;
	}
	private inline function get_scaleX() : Float {
		return _sprite.scaleX;
	}
	private inline function set_scaleX(scale:Float) : Float {
		return _sprite.scaleX = scale;
	}	
	private inline function get_scaleY() : Float {
		return _sprite.scaleY;
	}
	private inline function set_scaleY(scale:Float) : Float {
		return _sprite.scaleY = scale;
	}	
	private inline function get_rotation() : Float {
		return _sprite.rotation;
	}
	private inline function set_rotation(rotation:Float) : Float {
		return _sprite.rotation = rotation;
	}	
}

class HxSprite extends HxSpriteBase {
	public inline function new(w:Int, h:Int ) : Void {
		super( new Sprite(w, h) );
		//trace("HxSprite " + untyped this._listener );
	}
}

class HxLabel extends HxEntity
{
	public var _label : Label;
	public inline function new(text:String):Void {
		_label = new Label(text);
		super(_label);
	}

	public var text(get_text,set_text) : String;
	public var font(get_font,set_font) : Dynamic;
	public var color(get_color, set_color) : Dynamic;
	
	//
	
	private inline function get_text() : String {
		return _label.text;
	}
	private inline function set_text(text:String) : String {
		return _label.text = text;
	}
	private inline function get_font() : Dynamic {
		return _label.font;
	}
	private inline function set_font(font:Dynamic) : Dynamic {
		return _label.font = font;
	}
	private inline function get_color() : Dynamic {
		return _label.color;
	}
	private inline function set_color(color:Dynamic) : Dynamic {
		return _label.color = color;
	}
}


class HxMap extends HxEntity
{
	var _map : enchant.Map;
	public inline function new(tileWidth:Int, tileHeight:Int) : Void {
		_map = new enchant.Map(tileWidth, tileHeight);
		super(_map);
	}
	public inline function loadData(data:Array< Array<Int> >) : Void {
		_map.loadData(data);
	}
	public inline function hitTest(x:Float, y:Float) : Bool {
		return _map.hitTest(x, y);
	}
	public var image(get_image,set_image) : Dynamic;
	public var tileWidth(get_tileWidth,set_tileWidth) : Int;
	public var tileHeight(get_tileHeight,set_tileHeight) : Int;
	public var Width(get_Width,set_Width) : Int;
	public var Height(get_Height,set_Height) : Int;
	//private inline function redraw(x:Int, y:Int, width:Int, height:Int ) : Void;

	//
	private function get_image() : Dynamic {
		return _map.image;
	}
	private function set_image(image:Dynamic) : Dynamic {
		return _map.image = image;
	}
	private function get_tileWidth() : Int {
		return _map.tileWidth;
	}
	private function set_tileWidth(tileWidth:Int) : Int {
		return _map.tileWidth = tileWidth;
	}
	private function get_tileHeight() : Int {
		return _map.tileHeight;
	}
	private function set_tileHeight(tileHeight:Int) : Int {
		return _map.tileHeight = tileHeight;
	}
	private function get_Width() : Int {
		return _map.Width;
	}
	private function set_Width(Width:Int) : Int {
		return _map.Width = Width;
	}
	private function get_Height() : Int {
		return _map.Height;
	}
	private function set_Height(Height:Int) : Int {
		return _map.Height = Height;
	}
}


class HxGroup extends HxNode
{
	public var _group : enchant.Group;
	private var _dict : Dict<Dynamic,HxNode>;
	
	public inline function new(group:enchant.Group) : Void {
		_group = group;
		_dict = new Dict<Dynamic,HxNode>();
		super(_group);
	}
	public inline function addChild(node : HxNode) : Void {
		_group.addChild( node._node );
		_dict.set( node._node, node );
	}
	public inline function insertBefore(node : HxNode, reference : HxNode) : Void {
		_group.insertBefore(node._node, reference._node);
		_dict.set( node._node, node );
	}
	public inline function removeChild(node : HxNode) : Void {
		_group.removeChild( node._node );
		_dict.remove( node._node );
	}
	public var firstChild(get_firstChild,null) : HxNode;
	public var lastChild(get_lastChild, null) : HxNode;

	//
	
	private inline function get_firstChild() : HxNode {
		return _dict.get( _group.firstChild );
	}
	private inline function get_lastChild() : HxNode {
		return _dict.get( _group.lastChild );
	}
}

class HxScene extends HxGroup
{
	var _scene : enchant.Scene;
	public inline function new(scene:enchant.Scene) : Void {
		_scene = scene;
		super(_scene);
	}
	public var backgroundColor(get_backgroundColor, set_backgroundColor) : String;
	
	//
	private inline function get_backgroundColor() : String {
		return _scene.backgroundColor;
	}
	private inline function set_backgroundColor(backgroundColor:Dynamic) : String {
		return _scene.backgroundColor = backgroundColor;
	}
}

class HxSurface extends HxEventTarget
{
	var _surface : enchant.Surface;
	
	public inline function new(surface:enchant.Surface) : Void {
		_surface = surface;
		super(_surface);
	}
	public inline function getPixel(x:Int, y:Int) : Dynamic {
		return _surface.getPixel(x, y);
	}
	public inline function setPixel(x:Int, y:Int, r:Int, g:Int, b:Int, a:Int) : Void {
		_surface.setPixel(x, y, r, g, b, a);
	}

	public inline function clear() : Void {
		_surface.clear();
	}
	public inline function draw(image: Dynamic) : Void {
		_surface.draw(image);
	}
	public inline function clone() : HxSurface {
		return new HxSurface( _surface.clone() );
	}

	public static function load(src:String) : HxSurface {
		return new HxSurface( enchant.Surface.load(src) );
	}
}

class HxSound extends HxEventTarget
{
	var _sound : enchant.Sound;
	public inline function new(sound:enchant.Sound) : Void {
		_sound = sound;
		super(_sound);
	}
	public inline function play() : Void {
		_sound.play();
	}
	public inline function pause() : Void {
		_sound.pause();
	}
	public inline function stop() : Void {
		_sound.stop();
	}
	public var currentTime(get_currentTime,set_currentTime) : Float;
	public var volume(get_volume,set_volume) : Float;

	public static function load(src:String, type:Dynamic) : HxSound {
		return new HxSound( enchant.Sound.load(src, type) );
	}
	
	//
	
	private inline function get_currentTime() : Float {
		return _sound.currentTime;
	}
	private inline function set_currentTime(currentTime:Float) : Float {
		return _sound.currentTime = currentTime;
	}
	private inline function get_volume() : Float {
		return _sound.volume;
	}
	private inline function set_volume(volume:Float) : Float {
		return _sound.volume = volume;
	}
}

class HxPad extends HxSpriteBase
{
	var _pad : Dynamic;
	public function new() : Void {
		_pad = untyped __js__("new enchant.ui.Pad();");
		super(_pad);
	}
	
}
