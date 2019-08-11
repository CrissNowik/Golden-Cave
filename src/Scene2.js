
import config from "./index.js";

export default class Scene2 extends Phaser.Scene{
    constructor() {
        super('play_game');
    }

    create(){
        // this.background = this.add.image(0,0, 'background');
        // this.background.setOrigin(0,0);

        this.bat = this.add.sprite(100,100, 'bat');
        this.bat.setScale(3);

        this.anims.create({
            key: 'bat_attack',
            frames: this.anims.generateFrameNumbers('bat'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'bat_die',
            frames: this.anims.generateFrameNumbers('bat_die'),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        });

        this.bat.play('bat_attack');

        this.bat.setInteractive();
        this.input.on('gameobjectdown',this.destroyBat, this);

        this.add.text(20, 20, "Playing game", {
            font: "25px Arial",
            fill: "yellow"
        })
       
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
    }


}