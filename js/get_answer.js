"use strict";
import * as feelings from "./feelings.js";
import * as ask_ from "./questions.js";
import * as index from "./index.js";

function ask(text) {
  var question = text.toLowerCase();
  var data = ask_.data;
  for (let x in data) {
    for (let i in data[x]) {
      if (question.includes(index.get_question(data[x][i]))) {
        return index.get_reply(feelings.who_am_i);
      } else {
        return "I Dont't Understand Sir !";
      }
    }
  }
}
console.log(ask("hi"));
