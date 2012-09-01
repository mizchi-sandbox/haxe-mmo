package ;

/**
 * ...
 * @author mitamex
 */

import EnchantHX;
import enchant.util.Util;

/**
 * ...
 * @author mitamex
 */


class HxWallpaper extends HxSpriteBase { // Spriteを継承したクラスを作成する
	var _wallpaper : Wallpaper;
	public function new(backgroundimage:Dynamic) : Void {
		_wallpaper = new Wallpaper(backgroundimage);
		super(_wallpaper);
	}
}

// 画像でフォントを再現したラベル (参考: draw.text.js)
class HxMutableTextBase extends HxSpriteBase {
	var _text : MutableText;
	public function new(text:MutableText) : Void {
		_text = text;
		super(_text);
	}
	public function setText(txt:String) : Void {
		_text.setText(txt);
	}
	public var text(get_text,set_text):String;
	public var row(get_row, set_row):Int;
	
	//
	
	private function get_text() : String {
		return _text.text;
	}
	private function set_text(text:String) : String {
		return _text.text = text;
	}
	private function get_row() : Int {
		return _text.row;
	}
	private function set_row(row:Int) : Int {
		return _text.row = row;
	}
}

//class HxMutableText extends HxMutableTextBase {
//}

// スコアラベル
class HxScoreLabel extends HxMutableTextBase {
	var _label : ScoreLabel;
	public function new (x:Float, y:Float) : Void {
		_label = new ScoreLabel(x, y);
		super(_label);
	}
	public var score(get_score, set_score): Int;
	
	//
	
	private function get_score() : Int {
		return _label.score;
	}
	private function set_score(score:Int) : Int {
		return _label.score = score;
	}
}
/*
// タイムラベル
extern class TimeLabel extends MutableTextBase {
	public function new(x:Float, y:Float, counttype:String):Void;
	public var time:Int;
}

// ライフラベル
extern class LifeLabel extends enchant.Group {
	public function new(x:Float, y:Float, maxlife:Float):Void;
	public var life:Float;
}

// イージング付きのバー (左右方向のみ) 
extern class Bar extends enchant.Sprite {
	public function new(x:Float, y:Float) : Void;
	public var direction:String;
	public var maxvalue:Float;
}
*/
