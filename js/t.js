"use strict";
import __SIRI__ from "./__SIRI__.js";
import * as __knowledge__ from "./__knowledge__.js";
import * as __questions__ from "./__questions__.js";

var siri = new __SIRI__();
export function __SAY__(voice) {
  if (voice) {
    return siri.__REPLY__(__knowledge__.siri);
  }
}
export * from "./t.js";
