"use strict";
import __SIRI__ from "./__SIRI__.js";
import * as __knowledge__ from "./__knowledge__.js";
import * as __questions__ from "./__questions__.js";
import * as __dom__ from "./__dom__.js";
import * as t from "./t.js";

var siri = new __SIRI__([__knowledge__, __questions__]);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var speechGrammarList = new SpeechGrammarList();
speechGrammarList.addFromString(grammar, 1);
recognition.grammars = speechGrammarList;
recognition.interimResults = true;
recognition.lang = "en-US" || "en-UK" || "en-IN" || "en-BN" || "en-AU";
recognition.onresult = (event) => {
  let current = event.resultIndex;
  var result = event.results[current][0].transcript;
  var voice = result.toLowerCase();
  if (event.results[0].isFinal) {
    __dom__.__ghs("#user_").textContent = voice;
    //  if (!siri.__If_said(voice)) {
    /*__________________________*/
    console.log(voice);
 
    /*__________________________*/
  }
};

// VOICE RECOGNITION START AND END DECLARATION HERE

recognition.addEventListener("end", () => {
  recognition.start((e) => {
    console.log(e);
  });
});
recognition.start((e) => {
  console.log(e);
});

/*
if (siri.__cheakCommand("how are you", __questions__.commands)) {
  console.log(siri.__REPLY__(__knowledge__.feelings).toLowerCase());
} else {
  console.log("Questions Didn't Match !");
}
console.log(t.__SAY__());
*/
//console.log(t.__SAY__("is it true"));
