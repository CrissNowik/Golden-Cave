import Phaser from "phaser";
import background from "./assets/opp3_cave_tiles/environment/background/bg_cave.png"
// import dwarf from "./assets/Dwarf_Sprite_Sheet1.2v";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("background", background)
  // this.load.sprite("dwarf", dwarf);
}

function create() {
  const background = this.add.image(64, 64, "background").setSize(2,2);
}

function update() {
  
}
