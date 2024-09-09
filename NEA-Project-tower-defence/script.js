let levelOne //level 1 image
let bgImg //background image
let difficulty //an integer that changes based on user input
let cash,lives // these numbers are integers that show player health and cash

function preLoad(){
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  tileMap = new Tiles([
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "gggggggeeeqqeqqeeegggggg",
    "gggggggeeqqqqqqeeegggggg",
    "gggggggeeqqqqqqeeegggggg",
    "eeeegggeqqqqqqqeeegggeee",
    "eeeegggeeeqqqqqeeegggeee",
    "eeeegggeeeqqqeeeeegggeee",
    "eeeegggeeeeeeeeeeegggeee",
    "eeeegggggggggggggggggeee",
    "eeeegggggggggggggggggeee",
    "eeeegggggggggggggggggeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeee",
  ], 0, 0, tileSize, tileSize)
}

function draw() {
  frameRate(60)
}