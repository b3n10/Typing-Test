"use strict";

let text = document.getElementsByClassName("text")[0];
let hint = document.getElementsByClassName("hint")[0];
//get text from database
let textString = "Once upon a time there was an old woman who loved baking gingerbread. She would bake gingerbread cookies, cakes, houses and gingerbread people, all decorated with chocolate and peppermint, caramel candies and colored frosting. She lived with her husband on a farm at the edge of town. The sweet spicy smell of gingerbread brought children skipping and running to see what would be offered that day. Unfortunately the children gobbled up the treats so fast that the old woman had a hard time keeping her supply of flour and spices to continue making the batches of gingerbread. Sometimes she suspected little hands of having reached through her kitchen window because gingerbread pieces and cookies would disappear. One time a whole gingerbread house vanished mysteriously. She told her husband, \"Those naughty children are at it again. They don't understand all they have to do is knock on the door and I'll give them my gingerbread treats.\" One day she made a special batch of gingerbread men because they were extra big. Unfortunately for the last gingerbread man she ran out of batter and he was half the size of the others. She decorated the gingerbread men with care, each having socks, shirt and pants of different colors. When it came to the little gingerbread man she felt sorry for him and gave him more color than the others. \"It doesn't matter he's small,\" she thought, \"He'll still be tasty.\"";

text.innerHTML = textString;
document.getElementsByClassName("hint")[0].innerHTML = "Type Next Character - " + text.innerHTML[0];

window.addEventListener("keydown", kd, true);

function kd() {
  if (text.innerHTML[0] === event.key) {//if correct key, plus point accuracy
    console.log("Key is", event.key);
    text.innerHTML = text.innerHTML.slice(1, text.innerHTML.length);
  } else if (event.key === "Control" || event.key === "Alt" || event.key === "Shift" || event.key === "Tab" || event.key === "Meta" || event.key === "ArrowUp" || event.key === "Arrowdown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
    //do nothing
  } else {//if incorrect, minus point accuracy
    console.log("Incorrect key");
    console.log("Key is", event.key);
  }

  document.getElementsByClassName("hint")[0].innerHTML = "Type Next Character -> " + ((text.innerHTML[0] === " ") ? "[space]" : text.innerHTML[0]);
  console.log("next character is-\""+text.innerHTML[0]+"\"");

  if (text.innerHTML.length === 0) window.removeEventListener("keydown", kd, true);
}
