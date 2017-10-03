"use strict";

let TT = (function() {
	function TT(txt, hnt) {
		this.txt = document.getElementsByClassName(txt)[0];
		this.hnt = document.getElementsByClassName(hnt)[0];
		this.script = "hello";
		this.txt.innerHTML = this.script;
		this.hint();//invoke to see next char
		this.aa = setInterval(
			(function(self) {
				return function() {
					self.countdown(document.getElementById('minute'), document.getElementById('seconds'));
				}
			})(this),
			1000);
	}
	TT.prototype.hint = function(_status) {
		this.hnt.innerHTML = (_status) ? _status : ("Next Character: " + ((this.txt.innerHTML[0] === " ") ? "[space]" : this.txt.innerHTML[0]));
	}
	TT.prototype.countdown = function(min, sec) {
		let _sec = parseInt(sec.innerHTML);
		let _min = parseInt(min.innerHTML);

		_sec++;
		sec.innerHTML = (_sec < 10) ? '0' + _sec : _sec;

		if (_sec === 60) {
			_min++;
			min.innerHTML = (_min < 10) ? '0' + _min : _min;
			sec.innerHTML = 0;
		}
	}
	TT.prototype.keydown = function() {
      if (this.txt.innerHTML[0] === event.key) {
        this.txt.innerHTML = this.txt.innerHTML.slice(1, this.txt.innerHTML.length);//remove typed character
      } else if (event.key === "Control" || event.key === "Alt" || event.key === "Shift" || event.key === "Tab" || event.key === "Meta" || event.key === "ArrowUp" || event.key === "Arrowdown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        //do nothing
      } else {
      }

      //test script if done
      if (this.txt.innerHTML.length === 0) {
        window.removeEventListener("keydown", this.keyDown, true);
				this.hint("Done !");
				clearInterval(this.aa);
      } else {
				this.hint();
      }
	}
	return TT;
})();

let tt = new TT("text", "hint");
window.addEventListener("keydown", tt.keydown.bind(tt), true);

/*
function typeTest(txt, hnt) {
  let _txt = document.getElementsByClassName(txt)[0];
  let _hnt = document.getElementsByClassName(hnt)[0];
  //get script from database or json file
  let _script = "Once upon a time there was an old woman who loved baking gingerbread. She would bake gingerbread cookies, cakes, houses and gingerbread people, all decorated with chocolate and peppermint, caramel candies and colored frosting. She lived with her husband on a farm at the edge otown. The sweet spicy smell of gingerbread brought children skipping and running to see what would be offered that day. Unfortunately the children gobbled up the treats so st that the old woman had a hard time keeping her supply of flour and spices to continue making the batches of gingerbread. Sometimes she suspected little hands of having reached through her kitchen window because gingerbread pieces and cookies would disappear. One time a whole gingerbread house vanished mysteriously. She told her husband, \"Those naughty children are at it again. They don't understand all they have to do is knock on the door and I'll give them my gingerbread treats.\" One day she made a special batch of gingerbread men because they were extra big. Unfortunately for the last gingerbread man she ran out of batter and he was halthe size othe others. She decorated the gingerbread men with care, each having socks, shirt and pants of different colors. When it came to the little gingerbread man she felt sorry for him and gave him more color than the others. \"It doesn't matter he's small,\" she thought, \"He'll still be tasty.\"";
  
  //init div texts
  _txt.innerHTML = _script;

	function hint() {
		_hnt.innerHTML = "Next Character: " + ((_txt.innerHTML[0] === " ") ? "[space]" : _txt.innerHTML[0]);
	}

	hint();

  let totalTyped =  0;
  let score = 0;

  //Named object needed to refer keyDown for removeEventListener, because 'this' points to Window (global object)
  let f = {
    keyDown: function() {
      if (_txt.innerHTML[0] === event.key) {
        score++;//if correct key, plus point accuracy
        totalTyped++;
        _txt.innerHTML = _txt.innerHTML.slice(1, _txt.innerHTML.length);//remove typed character
      } else if (event.key === "Control" || event.key === "Alt" || event.key === "Shift" || event.key === "Tab" || event.key === "Meta" || event.key === "ArrowUp" || event.key === "Arrowdown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        //do nothing
      } else {
        score--;//if incorrect, minus point accuracy
        totalTyped++;
      }

      //test script is done
      if (_txt.innerHTML.length === 0) {
        window.removeEventListener("keydown", f.keyDown, true);
        _hnt.innerHTML = "Done !";
        console.log(score + " out of " + _script.length + ", total type: " + totalTyped);
      } else {
				hint();
      }
    }
  }
  return f;
}
let t = typeTest("text", "hint");
window.addEventListener("keydown", t.keyDown, true);
*/
