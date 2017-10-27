"use strict";

let TypeTest = (function() {
	function TypeTest() {
		this.txt = document.getElementsByClassName("text")[0];
		this.hnt = document.getElementsByClassName("hint")[0];
		this.sp = 0, this.tp = 0;
		this.scripts = "Domain name lookup service to search the whois database for domain name registration information.";//should be taken from a json file, xml, or database
		this.hint();
	}
	TypeTest.prototype.hint = function(_status) {
		this.txt.innerHTML = this.highlight(this.scripts);
		this.hnt.innerHTML = (_status) ? _status : ("Next Character: " + ((this.scripts[0] === " ") ? "\< space \>" : this.scripts[0]));
	}
	TypeTest.prototype.highlight = function(_string) {
		let text = "<span class='highlight'>";
		let i = 0;

		while (_string[i] !== undefined && _string[i] !== ' ') {
			text += _string[i];
			i++;
		}

		text += "</span>";
		text += _string.slice(i, _string.length);

		return text;
	}
	TypeTest.prototype.score = function() {
		this.tp++;
		if (event.key === this.scripts[0]) {
			this.sp++;
		}
		return "Accuracy: " + ((this.sp/this.tp) * 100).toFixed(2) + "%";
	}
	TypeTest.prototype.keyDown = function() {
		if (event.key !== "Control" && event.key !== "Shift" && event.key !== "Meta" && event.key !== "Alt" && event.key !== "ArrowLeft" && event.key !== "ArrowUp" && event.key !== "ArrowDown" && event.key !== "ArrowRight") {
			let s = this.score();
			this.scripts = this.scripts.slice(1, this.scripts.length);//remove first character

			//check if done
			if (this.scripts.length === 0) {
				this.hint("Done !<br>" + s);
				window.removeEventListener("keydown", kd, true);
			} else {
				this.hint();
			}
		}
	}
	return TypeTest;
}());

let tt = new TypeTest();
let kd = tt.keyDown.bind(tt);
window.addEventListener("keydown", kd, true);
