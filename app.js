"use strict";

let TypeTest = function() {
	let txt = document.getElementsByClassName("text")[0];
	let hnt = document.getElementsByClassName("hint")[0];
	let sp = 0, tp = 0;

	let TTobj = {
		scripts: "wHat kind of portfolio projects do you think would a career shifter new to web development would impress employers or make someone hirable, give opinion for both front and backend please ",//should be taken from a json file, xml, or database

		hint: function(_status) {
			//console.log(event.key === this.scripts[0]);
			txt.innerHTML = this.highlight(this.scripts);
			hnt.innerHTML = (_status) ? _status : ("Next Character: " + ((this.scripts[0] === " ") ? "\< space \>" : this.scripts[0]));
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

		score: function() {
			tp++;
			if (event.key === this.scripts[0]) {
				sp++;
			}
			return "Accuracy: " + ((sp/tp)*100).toFixed(2) + "%";
		},

		keyDown: function() {
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
	}

	return TTobj;
}

let tt = TypeTest();
tt.hint();//run once to see next char
let kd = tt.keyDown.bind(tt);
window.addEventListener("keydown", kd, true);

