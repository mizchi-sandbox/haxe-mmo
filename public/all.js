var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var Dict = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
};
Dict.__name__ = true;
Dict.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,keys: function() {
		var a = new Array();
		for(var i in this.h) a.push(i);;
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.exists(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h[key] != null;
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: Dict
}
var HxEventType = { __ename__ : true, __constructs__ : ["event_LOAD","event_PROGRESS","event_ENTER_FRAME","event_EXIT_FRAME","event_ENTER","event_EXIT","event_ADDED","event_ADDED_TO_SCENE","event_REMOVED","event_REMOVED_FROM_SCENE","event_TOUCH_START","event_TOUCH_MOVE","event_TOUCH_END","event_RENDER","event_INPUT_START","event_INPUT_CHANGE","event_INPUT_END","event_LEFT_BUTTON_DOWN","event_LEFT_BUTTON_UP","event_RIGHT_BUTTON_DOWN","event_RIGHT_BUTTON_UP","event_UP_BUTTON_DOWN","event_UP_BUTTON_UP","event_DOWN_BUTTON_DOWN","event_DOWN_BUTTON_UP","event_A_BUTTON_DOWN","event_A_BUTTON_UP","event_B_BUTTON_DOWN","event_B_BUTTON_UP"] }
HxEventType.event_LOAD = ["event_LOAD",0];
HxEventType.event_LOAD.toString = $estr;
HxEventType.event_LOAD.__enum__ = HxEventType;
HxEventType.event_PROGRESS = ["event_PROGRESS",1];
HxEventType.event_PROGRESS.toString = $estr;
HxEventType.event_PROGRESS.__enum__ = HxEventType;
HxEventType.event_ENTER_FRAME = ["event_ENTER_FRAME",2];
HxEventType.event_ENTER_FRAME.toString = $estr;
HxEventType.event_ENTER_FRAME.__enum__ = HxEventType;
HxEventType.event_EXIT_FRAME = ["event_EXIT_FRAME",3];
HxEventType.event_EXIT_FRAME.toString = $estr;
HxEventType.event_EXIT_FRAME.__enum__ = HxEventType;
HxEventType.event_ENTER = ["event_ENTER",4];
HxEventType.event_ENTER.toString = $estr;
HxEventType.event_ENTER.__enum__ = HxEventType;
HxEventType.event_EXIT = ["event_EXIT",5];
HxEventType.event_EXIT.toString = $estr;
HxEventType.event_EXIT.__enum__ = HxEventType;
HxEventType.event_ADDED = ["event_ADDED",6];
HxEventType.event_ADDED.toString = $estr;
HxEventType.event_ADDED.__enum__ = HxEventType;
HxEventType.event_ADDED_TO_SCENE = ["event_ADDED_TO_SCENE",7];
HxEventType.event_ADDED_TO_SCENE.toString = $estr;
HxEventType.event_ADDED_TO_SCENE.__enum__ = HxEventType;
HxEventType.event_REMOVED = ["event_REMOVED",8];
HxEventType.event_REMOVED.toString = $estr;
HxEventType.event_REMOVED.__enum__ = HxEventType;
HxEventType.event_REMOVED_FROM_SCENE = ["event_REMOVED_FROM_SCENE",9];
HxEventType.event_REMOVED_FROM_SCENE.toString = $estr;
HxEventType.event_REMOVED_FROM_SCENE.__enum__ = HxEventType;
HxEventType.event_TOUCH_START = ["event_TOUCH_START",10];
HxEventType.event_TOUCH_START.toString = $estr;
HxEventType.event_TOUCH_START.__enum__ = HxEventType;
HxEventType.event_TOUCH_MOVE = ["event_TOUCH_MOVE",11];
HxEventType.event_TOUCH_MOVE.toString = $estr;
HxEventType.event_TOUCH_MOVE.__enum__ = HxEventType;
HxEventType.event_TOUCH_END = ["event_TOUCH_END",12];
HxEventType.event_TOUCH_END.toString = $estr;
HxEventType.event_TOUCH_END.__enum__ = HxEventType;
HxEventType.event_RENDER = ["event_RENDER",13];
HxEventType.event_RENDER.toString = $estr;
HxEventType.event_RENDER.__enum__ = HxEventType;
HxEventType.event_INPUT_START = ["event_INPUT_START",14];
HxEventType.event_INPUT_START.toString = $estr;
HxEventType.event_INPUT_START.__enum__ = HxEventType;
HxEventType.event_INPUT_CHANGE = ["event_INPUT_CHANGE",15];
HxEventType.event_INPUT_CHANGE.toString = $estr;
HxEventType.event_INPUT_CHANGE.__enum__ = HxEventType;
HxEventType.event_INPUT_END = ["event_INPUT_END",16];
HxEventType.event_INPUT_END.toString = $estr;
HxEventType.event_INPUT_END.__enum__ = HxEventType;
HxEventType.event_LEFT_BUTTON_DOWN = ["event_LEFT_BUTTON_DOWN",17];
HxEventType.event_LEFT_BUTTON_DOWN.toString = $estr;
HxEventType.event_LEFT_BUTTON_DOWN.__enum__ = HxEventType;
HxEventType.event_LEFT_BUTTON_UP = ["event_LEFT_BUTTON_UP",18];
HxEventType.event_LEFT_BUTTON_UP.toString = $estr;
HxEventType.event_LEFT_BUTTON_UP.__enum__ = HxEventType;
HxEventType.event_RIGHT_BUTTON_DOWN = ["event_RIGHT_BUTTON_DOWN",19];
HxEventType.event_RIGHT_BUTTON_DOWN.toString = $estr;
HxEventType.event_RIGHT_BUTTON_DOWN.__enum__ = HxEventType;
HxEventType.event_RIGHT_BUTTON_UP = ["event_RIGHT_BUTTON_UP",20];
HxEventType.event_RIGHT_BUTTON_UP.toString = $estr;
HxEventType.event_RIGHT_BUTTON_UP.__enum__ = HxEventType;
HxEventType.event_UP_BUTTON_DOWN = ["event_UP_BUTTON_DOWN",21];
HxEventType.event_UP_BUTTON_DOWN.toString = $estr;
HxEventType.event_UP_BUTTON_DOWN.__enum__ = HxEventType;
HxEventType.event_UP_BUTTON_UP = ["event_UP_BUTTON_UP",22];
HxEventType.event_UP_BUTTON_UP.toString = $estr;
HxEventType.event_UP_BUTTON_UP.__enum__ = HxEventType;
HxEventType.event_DOWN_BUTTON_DOWN = ["event_DOWN_BUTTON_DOWN",23];
HxEventType.event_DOWN_BUTTON_DOWN.toString = $estr;
HxEventType.event_DOWN_BUTTON_DOWN.__enum__ = HxEventType;
HxEventType.event_DOWN_BUTTON_UP = ["event_DOWN_BUTTON_UP",24];
HxEventType.event_DOWN_BUTTON_UP.toString = $estr;
HxEventType.event_DOWN_BUTTON_UP.__enum__ = HxEventType;
HxEventType.event_A_BUTTON_DOWN = ["event_A_BUTTON_DOWN",25];
HxEventType.event_A_BUTTON_DOWN.toString = $estr;
HxEventType.event_A_BUTTON_DOWN.__enum__ = HxEventType;
HxEventType.event_A_BUTTON_UP = ["event_A_BUTTON_UP",26];
HxEventType.event_A_BUTTON_UP.toString = $estr;
HxEventType.event_A_BUTTON_UP.__enum__ = HxEventType;
HxEventType.event_B_BUTTON_DOWN = ["event_B_BUTTON_DOWN",27];
HxEventType.event_B_BUTTON_DOWN.toString = $estr;
HxEventType.event_B_BUTTON_DOWN.__enum__ = HxEventType;
HxEventType.event_B_BUTTON_UP = ["event_B_BUTTON_UP",28];
HxEventType.event_B_BUTTON_UP.toString = $estr;
HxEventType.event_B_BUTTON_UP.__enum__ = HxEventType;
var HxInput = function(inp) {
	this._input = inp;
};
HxInput.__name__ = true;
HxInput.prototype = {
	get_down: function() {
		return this._input.down;
	}
	,get_right: function() {
		return this._input.right;
	}
	,get_up: function() {
		return this._input.up;
	}
	,get_left: function() {
		return this._input.left;
	}
	,__class__: HxInput
}
var HxAssets = function(assets) {
	this._assets = assets;
};
HxAssets.__name__ = true;
HxAssets.prototype = {
	get: function(name) {
		return this._assets[name];
	}
	,__class__: HxAssets
}
var HxGame = function(width,height) {
	this._game = new enchant.Game(width,height);
	this.input = new HxInput(this._game.input);
	this.assets = new HxAssets(this._game.assets);
	this.rootScene = new HxScene(this._game.rootScene);
};
HxGame.__name__ = true;
HxGame.prototype = {
	end: function(score,msg) {
		alert(msg);
	}
	,getAsset: function(name) {
		return this._game.assets[name];
	}
	,set_onload: function(fn) {
		return this._game.onload = fn;
	}
	,get_onload: function() {
		return this._game.onload;
	}
	,start: function() {
		this._game.start();
	}
	,preload: function(assets) {
		return this._game.preload(assets);
	}
	,setPreloadBase: function(baseurl) {
		this._preloadBase = baseurl;
	}
	,get_frame: function() {
		return this._game.frame;
	}
	,set_fps: function(fps) {
		return this._game.fps = fps;
	}
	,get_fps: function() {
		return this._game.fps;
	}
	,__class__: HxGame
}
var HxEventTarget = function(inst) {
	this._target = inst;
};
HxEventTarget.__name__ = true;
HxEventTarget.prototype = {
	dispatchEvent: function(e) {
		this._target.dispatchEvent(e);
	}
	,removeEventListener: function(type,listener) {
		this._target.removeEventListener(type,listener);
	}
	,addEventListener: function(type,listener) {
		var strtype = (function($this) {
			var $r;
			switch( (type)[1] ) {
			case 0:
				$r = "load";
				break;
			case 1:
				$r = "progress";
				break;
			case 2:
				$r = "enterframe";
				break;
			case 3:
				$r = "exitframe";
				break;
			case 4:
				$r = "enter";
				break;
			case 5:
				$r = "exit";
				break;
			case 6:
				$r = "added";
				break;
			case 7:
				$r = "addedtoscene";
				break;
			case 8:
				$r = "removed";
				break;
			case 9:
				$r = "removedfromscene";
				break;
			case 10:
				$r = "touchstart";
				break;
			case 11:
				$r = "touchmove";
				break;
			case 12:
				$r = "touchend";
				break;
			case 13:
				$r = "render";
				break;
			case 14:
				$r = "inputstart";
				break;
			case 15:
				$r = "inputchange";
				break;
			case 16:
				$r = "inputend";
				break;
			case 17:
				$r = "leftbuttondown";
				break;
			case 18:
				$r = "leftbuttonup";
				break;
			case 19:
				$r = "rightbuttondown";
				break;
			case 20:
				$r = "rightbuttonup";
				break;
			case 21:
				$r = "upbuttondown";
				break;
			case 22:
				$r = "upbuttonup";
				break;
			case 23:
				$r = "downbuttondown";
				break;
			case 24:
				$r = "downbuttonup";
				break;
			case 25:
				$r = "abuttondown";
				break;
			case 26:
				$r = "abuttonup";
				break;
			case 27:
				$r = "bbuttondown";
				break;
			case 28:
				$r = "bbuttonup";
				break;
			}
			return $r;
		}(this));
		this._target.addEventListener(strtype,listener);
	}
	,__class__: HxEventTarget
}
var HxNode = function(node) {
	this._node = node;
	HxEventTarget.call(this,this._node);
};
HxNode.__name__ = true;
HxNode.__super__ = HxEventTarget;
HxNode.prototype = $extend(HxEventTarget.prototype,{
	set_y: function(y) {
		return this._node.y = y;
	}
	,get_y: function() {
		return this._node.y;
	}
	,set_x: function(x) {
		return this._node.x = x;
	}
	,get_x: function() {
		return this._node.x;
	}
	,moveBy: function(x,y) {
		this._node.moveBy(x,y);
	}
	,moveTo: function(x,y) {
		this._node.moveTo(x,y);
	}
	,__class__: HxNode
});
var HxEntity = function(inst) {
	this._entity = inst;
	HxNode.call(this,inst);
};
HxEntity.__name__ = true;
HxEntity.__super__ = HxNode;
HxEntity.prototype = $extend(HxNode.prototype,{
	set_touchEnabled: function(touchEnabled) {
		return this._entity.touchEnabled = touchEnabled;
	}
	,get_touchEnabled: function() {
		return this._entity.touchEnabled;
	}
	,set_visible: function(visible) {
		return this._entity.visible = visible;
	}
	,get_visible: function() {
		return this._entity.visible;
	}
	,set_opacity: function(opacity) {
		return this._entity.opacity = opacity;
	}
	,get_opacity: function() {
		return this._entity.opacity;
	}
	,set_backgroundColor: function(backgroundColor) {
		return this._entity.backgroundColor = backgroundColor;
	}
	,get_backgroundColor: function() {
		return this._entity.backgroundColor;
	}
	,set_height: function(height) {
		return this._entity.height = height;
	}
	,get_height: function() {
		return this._entity.height;
	}
	,set_width: function(width) {
		return this._entity.width = width;
	}
	,get_width: function() {
		return this._entity.width;
	}
	,within: function(other,distance) {
		return this._entity.within(other._entity,distance);
	}
	,intersect: function(other) {
		return this._entity.intersect(other._entity);
	}
	,__class__: HxEntity
});
var HxSpriteBase = function(sprite) {
	this._sprite = sprite;
	HxEntity.call(this,this._sprite);
};
HxSpriteBase.__name__ = true;
HxSpriteBase.__super__ = HxEntity;
HxSpriteBase.prototype = $extend(HxEntity.prototype,{
	set_rotation: function(rotation) {
		return this._sprite.rotation = rotation;
	}
	,get_rotation: function() {
		return this._sprite.rotation;
	}
	,set_scaleY: function(scale) {
		return this._sprite.scaleY = scale;
	}
	,get_scaleY: function() {
		return this._sprite.scaleY;
	}
	,set_scaleX: function(scale) {
		return this._sprite.scaleX = scale;
	}
	,get_scaleX: function() {
		return this._sprite.scaleX;
	}
	,set_frame: function(frame) {
		return this._sprite.frame = frame;
	}
	,get_frame: function() {
		return this._sprite.frame;
	}
	,set_image: function(image) {
		return this._sprite.image = image;
	}
	,get_image: function() {
		return this._sprite.image;
	}
	,rotate: function(deg) {
		this._sprite.rotate(deg);
	}
	,scale: function(x,y) {
		this._sprite.scale(x,y);
	}
	,__class__: HxSpriteBase
});
var HxSprite = function(w,h) {
	HxSpriteBase.call(this,new enchant.Sprite(w,h));
};
HxSprite.__name__ = true;
HxSprite.__super__ = HxSpriteBase;
HxSprite.prototype = $extend(HxSpriteBase.prototype,{
	__class__: HxSprite
});
var HxLabel = function(text) {
	this._label = new enchant.Label(text);
	HxEntity.call(this,this._label);
};
HxLabel.__name__ = true;
HxLabel.__super__ = HxEntity;
HxLabel.prototype = $extend(HxEntity.prototype,{
	set_color: function(color) {
		return this._label.color = color;
	}
	,get_color: function() {
		return this._label.color;
	}
	,set_font: function(font) {
		return this._label.font = font;
	}
	,get_font: function() {
		return this._label.font;
	}
	,set_text: function(text) {
		return this._label.text = text;
	}
	,get_text: function() {
		return this._label.text;
	}
	,__class__: HxLabel
});
var HxMap = function(tileWidth,tileHeight) {
	this._map = new enchant.Map(tileWidth,tileHeight);
	HxEntity.call(this,this._map);
};
HxMap.__name__ = true;
HxMap.__super__ = HxEntity;
HxMap.prototype = $extend(HxEntity.prototype,{
	set_Height: function(Height) {
		return this._map.Height = Height;
	}
	,get_Height: function() {
		return this._map.Height;
	}
	,set_Width: function(Width) {
		return this._map.Width = Width;
	}
	,get_Width: function() {
		return this._map.Width;
	}
	,set_tileHeight: function(tileHeight) {
		return this._map.tileHeight = tileHeight;
	}
	,get_tileHeight: function() {
		return this._map.tileHeight;
	}
	,set_tileWidth: function(tileWidth) {
		return this._map.tileWidth = tileWidth;
	}
	,get_tileWidth: function() {
		return this._map.tileWidth;
	}
	,set_image: function(image) {
		return this._map.image = image;
	}
	,get_image: function() {
		return this._map.image;
	}
	,hitTest: function(x,y) {
		return this._map.hitTest(x,y);
	}
	,loadData: function(data) {
		this._map.loadData(data);
	}
	,__class__: HxMap
});
var HxGroup = function(group) {
	this._group = group;
	this._dict = new Dict();
	HxNode.call(this,this._group);
};
HxGroup.__name__ = true;
HxGroup.__super__ = HxNode;
HxGroup.prototype = $extend(HxNode.prototype,{
	get_lastChild: function() {
		return this._dict.get(this._group.lastChild);
	}
	,get_firstChild: function() {
		return this._dict.get(this._group.firstChild);
	}
	,removeChild: function(node) {
		this._group.removeChild(node._node);
		this._dict.remove(node._node);
	}
	,insertBefore: function(node,reference) {
		this._group.insertBefore(node._node,reference._node);
		this._dict.set(node._node,node);
	}
	,addChild: function(node) {
		this._group.addChild(node._node);
		this._dict.set(node._node,node);
	}
	,__class__: HxGroup
});
var HxScene = function(scene) {
	this._scene = scene;
	HxGroup.call(this,this._scene);
};
HxScene.__name__ = true;
HxScene.__super__ = HxGroup;
HxScene.prototype = $extend(HxGroup.prototype,{
	set_backgroundColor: function(backgroundColor) {
		return this._scene.backgroundColor = backgroundColor;
	}
	,get_backgroundColor: function() {
		return this._scene.backgroundColor;
	}
	,__class__: HxScene
});
var HxSurface = function(surface) {
	this._surface = surface;
	HxEventTarget.call(this,this._surface);
};
HxSurface.__name__ = true;
HxSurface.load = function(src) {
	return new HxSurface(enchant.Surface.load(src));
}
HxSurface.__super__ = HxEventTarget;
HxSurface.prototype = $extend(HxEventTarget.prototype,{
	clone: function() {
		return new HxSurface(this._surface.clone());
	}
	,draw: function(image) {
		this._surface.draw(image);
	}
	,clear: function() {
		this._surface.clear();
	}
	,setPixel: function(x,y,r,g,b,a) {
		this._surface.setPixel(x,y,r,g,b,a);
	}
	,getPixel: function(x,y) {
		return this._surface.getPixel(x,y);
	}
	,__class__: HxSurface
});
var HxSound = function(sound) {
	this._sound = sound;
	HxEventTarget.call(this,this._sound);
};
HxSound.__name__ = true;
HxSound.load = function(src,type) {
	return new HxSound(enchant.Sound.load(src,type));
}
HxSound.__super__ = HxEventTarget;
HxSound.prototype = $extend(HxEventTarget.prototype,{
	set_volume: function(volume) {
		return this._sound.volume = volume;
	}
	,get_volume: function() {
		return this._sound.volume;
	}
	,set_currentTime: function(currentTime) {
		return this._sound.currentTime = currentTime;
	}
	,get_currentTime: function() {
		return this._sound.currentTime;
	}
	,stop: function() {
		this._sound.stop();
	}
	,pause: function() {
		this._sound.pause();
	}
	,play: function() {
		this._sound.play();
	}
	,__class__: HxSound
});
var HxPad = function() {
	this._pad = new enchant.ui.Pad();;
	HxSpriteBase.call(this,this._pad);
};
HxPad.__name__ = true;
HxPad.__super__ = HxSpriteBase;
HxPad.prototype = $extend(HxSpriteBase.prototype,{
	__class__: HxPad
});
var HxOverrides = function() { }
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
IntIter.__name__ = true;
IntIter.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
	,__class__: IntIter
}
var Bear = function() {
	var _g = this;
	HxSprite.call(this,32,32);
	this._node.x = 8;
	this._node.y = 8;
	this._sprite.image = Main.game.assets._assets["chara1.gif"];
	this.addEventListener(HxEventType.event_ENTER_FRAME,function(e) {
		if(Main.game.input._input.right) {
			var _g1 = _g;
			_g1._node.x = _g1._node.x + 2;
		}
		if(Main.game.input._input.left) {
			var _g1 = _g;
			_g1._node.x = _g1._node.x - 2;
		}
		if(Main.game.input._input.up) {
			var _g1 = _g;
			_g1._node.y = _g1._node.y - 2;
		}
		if(Main.game.input._input.down) {
			var _g1 = _g;
			_g1._node.y = _g1._node.y + 2;
		}
	});
};
Bear.__name__ = true;
Bear.__super__ = HxSprite;
Bear.prototype = $extend(HxSprite.prototype,{
	__class__: Bear
});
var Main = function() {
	var _g = this;
	HxGame.call(this,320,320);
	this._game.fps = 24;
	this._game.preload(["chara1.gif"]);
	this._game.onload = function() {
		var window = js.Lib.window;
		var io = js.Lib.window.io;
		Main.socket = io.connect("/entrance");
		Main.socket.emit("login","jdkfsajfkldas");
		window.socket = Main.socket;
		var bear = new Bear();
		_g.rootScene.addChild(bear);
		_g.rootScene._scene.backgroundColor = "#aaaaaa";
	};
	this._game.start();
};
Main.__name__ = true;
Main.main = function() {
	Main.game = new Main();
}
Main.__super__ = HxGame;
Main.prototype = $extend(HxGame.prototype,{
	__class__: Main
});
var Std = function() { }
Std.__name__ = true;
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	toString: function() {
		return this.b;
	}
	,addSub: function(s,pos,len) {
		this.b += HxOverrides.substr(s,pos,len);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
}
var enchant = enchant || {}
enchant.Rect = function() { }
enchant.Rect.__name__ = true;
enchant.Rect.prototype = {
	__class__: enchant.Rect
}
var js = js || {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.isClass = function(o) {
	return o.__name__;
}
js.Boot.isEnum = function(e) {
	return e.__ename__;
}
js.Boot.getClass = function(o) {
	return o.__class__;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Lib = function() { }
js.Lib.__name__ = true;
js.Lib.debug = function() {
	debugger;
}
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.prototype.__class__ = Array;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var Void = { __ename__ : ["Void"]};
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
Main.main();
