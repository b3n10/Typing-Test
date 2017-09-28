"use strict";

let TypeTest = (function() {
  function TypeTest(txt, hnt) {
    this.txt = document.getElementsByClassName(txt)[0];
    this.hnt = document.getElementsByClassName(hnt)[0];
    //get script from database or json file
    //this.script = "Once upon a time there was an old woman who loved baking gingerbread. She would bake gingerbread cookies, cakes, houses and gingerbread people, all decorated with chocolate and peppermint, caramel candies and colored frosting. She lived with her husband on a farm at the edge of town. The sweet spicy smell of gingerbread brought children skipping and running to see what would be offered that day. Unfortunately the children gobbled up the treats so fast that the old woman had a hard time keeping her supply of flour and spices to continue making the batches of gingerbread. Sometimes she suspected little hands of having reached through her kitchen window because gingerbread pieces and cookies would disappear. One time a whole gingerbread house vanished mysteriously. She told her husband, \"Those naughty children are at it again. They don't understand all they have to do is knock on the door and I'll give them my gingerbread treats.\" One day she made a special batch of gingerbread men because they were extra big. Unfortunately for the last gingerbread man she ran out of batter and he was half the size of the others. She decorated the gingerbread men with care, each having socks, shirt and pants of different colors. When it came to the little gingerbread man she felt sorry for him and gave him more color than the others. \"It doesn't matter he's small,\" she thought, \"He'll still be tasty.\"";
    //init div texts
    this.txt.innerHTML = "hello";//this.script;
    this.hnt.innerHTML = "Next Character: " + ((this.txt.innerHTML[0] === " ") ? "[space]" : this.txt.innerHTML[0]);
  }
  TypeTest.prototype.keyDown = function() {
    if (this.txt.innerHTML[0] === event.key) {
      //if correct key, plus point accuracy
      this.txt.innerHTML = this.txt.innerHTML.slice(1, this.txt.innerHTML.length);
    } else if (event.key === "Control" || event.key === "Alt" || event.key === "Shift" || event.key === "Tab" || event.key === "Meta" || event.key === "ArrowUp" || event.key === "Arrowdown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
      //do nothing
    } else {
      //if incorrect, minus point accuracy
    }

    //test script is done
    if (this.txt.innerHTML.length === 0) {
      window.removeEventListener("keydown", this.keyDown, true);
      this.hnt.innerHTML = "Done !";
    } else {
      this.hnt.innerHTML = "Next Character: " + ((this.txt.innerHTML[0] === " ") ? "[space]" : this.txt.innerHTML[0]);
    }
  }
  return TypeTest;
})();

let t = new TypeTest("text", "hint");
window.addEventListener("keydown", t.keyDown.bind(t), true);
