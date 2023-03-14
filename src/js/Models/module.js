import { Config } from "../config.js";
import { ModuleElement } from "./moduleElement.js";

export class Module {
  constructor(props) {
    this.elements = []
    this.config = new Config()
    Object.keys(props).forEach(p => {
      this[p] = props[p]
    })
    this.GatherElements()
    console.log(this.moduleId, this.elements)
  }

  GatherElements() {
    // Gather all elements within the Module controlled area
    let els = []
    let haveDatasets = Array.from(document.querySelector(`#${this.moduleId}`).querySelectorAll('*'))
      .forEach(e => {
        let flag = false
        let newElement = new ModuleElement()
        for (let d in e.dataset) {
          if (this.config.allowableDatasetItems.indexOf(d) != -1) {
            newElement.dataItems = e.dataset
            flag = true
            // console.log(newElement);
          }
        }
        if (flag) {
          this.elements.push(newElement)
          newElement.id = e.id
          flag = false
        }
      })
  }
}