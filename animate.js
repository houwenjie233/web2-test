/*
* @Author: 10709
* @Date:   2019-12-12 16:13:43
* @Last Modified by:   10709
* @Last Modified time: 2019-12-13 09:27:03
*/

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
function animatetwo(obj,json,callback){
	obj.timer = setInterval(function(){
		for(var attr in json){
			var now = parseInt(getStyle(obj,attr));
			obj.style[attr] = now +1+ 'px';
		}
		if(now==-400){
			callback&&callback();
		}
	}, 10)
}