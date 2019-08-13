import Phaser from "./phaser.min.js";
import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";

const config = {
        width: 800,
        height: 600,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2],
        pixelArt: true,
        physics: {
          default: 'arcade',
          arcade: {
            debug: true
          }
        }
      }

const game = new Phaser.Game(config);

export default config;


