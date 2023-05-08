"use strict";
import * as __dom__ from "./__dom__.js";
export default class __SIRI__ {
  /*________CONSTRUCTOR STARTED_________*/
  constructor(data = [0]) {
    this.data = data;
    this.voice;
    this.__Database__ = [
      "Hi I can't speak English",
      "well said we have",
      "something you can do",
      "Ghs Julian",
    ];
    /*  console.log(`Send Modules Using An Array 
    Example ---->
    for (let i in this.data[0].feelings) {
      console.log(this.data[0].feelings[i]);
    }
  `);
  */
  }
  /*________CONSTRUCTOR FINISHED_________*/
  /*________ASK STARTED_________*/
  __Ask__(text, ask, ans) {
    var question = text.toLowerCase();
    return this.__REPLY__(ans);
    /* if (question.includes(index.get_question(ask).toLowerCase())) {
      return this.__REPLY__(ans);
    }*/
  }
  /*________ASK FINISHED_________*/
  /*________REPLY STARTED_________*/
  __REPLY__(data) {
    var reply;
    var r_num = Math.floor(Math.random() * data.length);
    reply = data[r_num];
    return reply;
  }
  /*________REPLY STARTED_________*/

  __cheakCommand(text, cmd_list) {
    //console.log("something");
    var command = text.toLowerCase();
    console.log(command);
    for (let x in cmd_list) {
      for (let i in cmd_list[x]) {
        if (command.includes(cmd_list[x][i])) {
          //   this.__Database__.push(cmd_list[x][i]);
          return true;
        }
      }
    }
  }
  /*________REPLY FINISHED_________*/
  /*________LISTEN STARTED_________*/
  __Speak__(getCmd) {
    if ("speechSynthesis" in window) {
       var newUtterance = new SpeechSynthesisUtterance();
      newUtterance.text = "";
      window.speechSynthesis.speak(newUtterance);
      var speaker = window.speechSynthesis;
      let command = getCmd;
      console.log(getCmd);
      var toSpeak = new window.SpeechSynthesisUtterance(command);
      var voices = speaker.getVoices();
      toSpeak.voice = voices[8];
      toSpeak.pitch = 1.3;
      toSpeak.rate = 0.9;
      toSpeak.volume = 10;
      toSpeak.lang = "en-US";
      speaker.speak(toSpeak);
      this.__ContentArea__(getCmd);
    } else {
      console.log("Speech Doesn't Support");
    }
  }
  /*________LISTEN FINISHED_________*/

  __ContentArea__(text) {
    __dom__.__ghs("#siri").textContent = text;
  }
  __If_said(data) {
    for (let i = 0; i < this.__Database__.length; i++) {
      if (data.includes(this.__Database__[i])) {
        return true;
      } else {
        return false;
      }
    }
  }
}
