export default class Scene1 extends Phaser.Scene{
    constructor() {
        super('boot_game');
    }
    preload(){
        this.load.image('background', './src/assets/opp3_cave_tiles/environment/background/Cave_background800x600.png');
        this.load.spritesheet('bat', './src/assets/bat_move_red.png', {
            frameWidth: 16,
            frameHeight: 24
        });
        this.load.spritesheet('bat_die', './src/assets/bat_dead.png',{
            frameWidth: 16,
            frameHeight: 24
        });
    }

    create(){
        this.add.text(20,20, "Loading game...");
        this.scene.start('play_game');
    }
}