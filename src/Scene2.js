
import config from "./index.js";

export default 
class Scene2 extends Phaser.Scene{
    constructor() {
        super('play_game');
    }

    create(){

        // this.dwarf = this.add.sprite(200,200, 'dwarf_stand_R');
        // this.dwarf.setScale(3);

        // this.dwarf = this.add.sprite(200,200, 'dwarf_move_R');
        // this.dwarf.setScale(3);

        this.bat = this.add.sprite(100,100, 'bat');
        this.bat.setScale(3);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.bat.play('bat_attack');

        this.bat.setInteractive();
        this.input.on('gameobjectdown',this.destroyBat, this);

        this.add.text(20, 20, "Playing game", {
            font: "25px Arial",
            fill: "yellow"
        })

        this.player = this.physics.add.sprite(config.width / 2 - 17, config.height - 64, 'dwarf_stand_R');
        this.player.setScale(3);
       
    }

    movebat(bat, speed){
        bat.x += speed

        if (bat.x > config.width) {
            this.resetBatPosition(bat);
        }
    }

    resetBatPosition(bat){
        bat.x = 0;
        
        const randomY = Phaser.Math.Between(0, config.height)
        bat.y = randomY;
    }

    destroyBat(pointer, gameObject){
        gameObject.setTexture('bat_die');
        gameObject.play('bat_die');
    }

    update(){
        this.movebat(this.bat, 2);

        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-100);
        } else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(100);
            this.player.play('dwarf_move_R')
        } 

        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-100);
        } else if(this.cursorKeys.down.isDown) {
            this.player.setVelocityY(100);
            this.player.play('dwarf_stand_R')
        }
    }
    movePlayerManager(){
        
    }
}