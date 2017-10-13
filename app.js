"use strict";

let TypeTest = function(_txt, _hnt) {
	let txt = document.getElementsByClassName(_txt)[0];
	let hnt = document.getElementsByClassName(_hnt)[0];

	let TTobj = {
		txt1: "hello, my name is",

		hint: function(_status) {
			txt.innerHTML = TTobj.highlight(tt.txt1);
			hnt.innerHTML = (_status) ? _status : ("Next Character: " + ((txt.innerHTML[0] === " ") ? "\< space \>" : txt.innerHTML[0]));
		},

		highlight: function(_string) {
			let text = "<span class='highlight'>";
			let i = 0;

			while (_string[i] !== undefined && _string[i] !== ' ') {
				text += _string[i];
				i++;
			}

			text += "</span>";
			text += _string.slice(i, _string.length);

			return text;
		},

		keyDown: function() {
			//can't use this from addEventListener function
			TTobj.txt1 = TTobj.txt1.slice(1, TTobj.txt1.length);//remove first character

			//check if done
			if (TTobj.txt1.length === 0) {
				TTobj.hint("Done !");
				window.removeEventListener("keydown", TTobj.keyDown, true);
			} else {
				TTobj.hint();
			}
		}
	}

	return TTobj;
}

let tt = TypeTest("text", "hint");
tt.hint();//run once to see next char
window.addEventListener("keydown", tt.keyDown, true);

