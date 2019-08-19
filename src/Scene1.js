export default 
class Scene1 extends Phaser.Scene{
    constructor() {
        super('boot_game');
    }
    preload(){
        this.load.image('ground', './src/assets/environment/platform 128x64.png');
        this.load.image('background', './src/assets/environment/Cave_background800x600.png');

        this.load.spritesheet('platform_sprite', './src/assets/environment/platform_sprite.png', {frameWidth: 40, frameHeight: 38});
        this.load.spritesheet('gem_sprite', './src/assets/environment/Gems6colours16x16.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('dwarf_stand_R', './src/assets/player/dwarf_stand_R.png', {frameWidth: 26, frameHeight: 20});
        this.load.spritesheet('dwarf_move_R', './src/assets/player/dwarf_move_R.png', {frameWidth: 28, frameHeight: 21});
        this.load.spritesheet('dwarf_jump_R', './src/assets/player/dwarf_jump_R.png', {frameWidth: 38, frameHeight: 32});
        this.load.spritesheet('bat', './src/assets/enemies/bat/bat_move_red.png', {frameWidth: 16, frameHeight: 24});
        this.load.spritesheet('bat_die', './src/assets/enemies/bat/bat_dead.png', {frameWidth: 16, frameHeight: 24});
    }

    create(){
        this.add.text(20,20, "Loading game...");
        this.scene.start('play_game');

        this.anims.create({
            key: 'dwarf_stand_R',
            frames: this.anims.generateFrameNumbers('dwarf_stand_R'),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'dwarf_move_R',
            frames: this.anims.generateFrameNumbers('dwarf_move_R'),
            frameRate: 16,
            repeat: -1
        })
        this.anims.create({
            key: 'dwarf_jump_R',
            frames: this.anims.generateFrameNumbers('dwarf_jump_R'),
            frameRate: 10,
            repeat: -1
        })

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
    }
}