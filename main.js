const { createMarble } = require("./marbleMaker.js")

const marble = createMarble("big")

const { weaveBag } = require("./bagMaker.js")

const bag = weaveBag("silk")

console.log(marble)

console.log(bag)