import { Module } from "./Models/module.js";

export class UIManager {
  constructor(root) {
    this.modules = []
    this.GatherModules(root)
  }
  GatherModules(el) {
    let pageItems = el.querySelectorAll('*')
    pageItems.forEach(pi => {
      if (pi.dataset.mod != null) {
        let data = document.querySelector(`#${pi.id}`).dataset
        this.modules.push(new Module({ 'moduleId': pi.id, 'data': data }))
      }
    })
  }
}

/*
Read index.html
Identify any modules
Send data for each Module through to Module constructor
*/