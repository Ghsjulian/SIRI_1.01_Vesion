"use strict";
export function __ghs(tag) {
  return document.querySelector(tag);
}

function __CloseContentArea__() {
  __ghs("#container").style.display = "none";
}

export * from "./__dom__.js";
