
import config from "./index.js";

export default 
class Scene2 extends Phaser.Scene{
    constructor() {
        super('play_game');
    }

    create(){
        this.background = this.add.image(400, 300,'background');

        this.platforms = this.physics.add.staticGroup();

        this.gems = this.physics.add.sprite(600, 360, 'gem_sprite', 3).setScale(2);
       
        this.physics.world.enable(this.gems);
        this.gems.body.setCollideWorldBounds(true);
    
        this.gems.body.setFrictionX(3)
        this.gems.body.setGravityY(300);

        //  this.gems.create(260, 160, 'gem_sprite', 3).setScale(2);
        console.log(this.gems)
        

        this.player = this.physics.add.sprite(config.width / 8, config.height - 100, 'dwarf_stand_R');
        this.player.setBounce(0.1).setCollideWorldBounds(true);
        this.player.body.setGravityY(300)
        this.player.setScale(3);
       
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.gems, this.platforms);
        this.physics.add.collider(this.gems, this.player);

        this.bat = this.add.sprite(100,100, 'bat');
        this.bat.setScale(3);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.bat.play('bat_attack');

        this.bat.setInteractive();
        this.input.on('gameobjectdown',this.destroyBat, this);

        // this.add.text(20, 20, "Playing game", {
        //     font: "25px Arial",
        //     fill: "yellow"
        // })
        this.platformCreator(100, 100, 40,'platform_sprite', 1);
        this.platformCreator(250, 200, 40,'platform_sprite', 1);
        this.platformCreator(300, 300, 40,'platform_sprite', 2); 
        this.platformCreator(500, 500, 40,'platform_sprite', 5); 
        this.platformCreator(600, 400, 40,'platform_sprite', 6); 
        this.platformCreator(100, 100, 40,'platform_sprite', 1); 
        this.platformCreator(0, config.height-38, 40,'platform_sprite', 20, 1)  
    }


    /**
     * Function for creating platforms 
     *
     * @param {numbere} startX - where platform should start on X axis
     * @param {number} startY - where platform should start on Y axis
     * @param {number} tileWidth - frameWidth from loading spritesheet
     * @param {string} spriteSheetKey - name of the sprite
     * @param {number} centerTilesAmount - number of central tiles of platform
     * @param {number} [scale=1] - <optional> - scale of the tile
     * @memberof Scene2
     */
    platformCreator(startX, startY, tileWidth, spriteSheetKey, centerTilesAmount, scale=1) {
        this.platforms.create(startX, startY, spriteSheetKey, 0).setScale(scale);
        
        for (let i = 1; i < centerTilesAmount+1; i++) {
            
            let nextTileX = startX + (tileWidth*i);
            this.platforms.create(nextTileX, startY, spriteSheetKey, 1).setScale(scale);
        }
        let lastTileX = ((centerTilesAmount + 1) * tileWidth) + startX;
        this.platforms.create(lastTileX, startY, spriteSheetKey, 2).setScale(scale);
    }

    gemCreator(x,y){
        
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

        if (this.cursors.left.isDown){
            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityX(-160);
                this.player.setVelocityY(-430);
                this.player.play('dwarf_jump_R', true)
                this.player.flipX = true; 
            } else {
                this.player.setVelocityX(-160);
                this.player.anims.play('dwarf_move_R', true); 
                this.player.flipX = true;    
            }         
        }
        else if (this.cursors.right.isDown){
            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityX(160);
                this.player.setVelocityY(-430);
                this.player.play('dwarf_jump_R', true)
                this.player.flipX = false; 
            } else {
                this.player.setVelocityX(160);
                this.player.anims.play('dwarf_move_R', true);
                this.player.flipX = false     
            }          
        }
        else if (this.cursors.up.isDown && this.player.body.touching.down){ 
            this.player.setVelocityY(-430);
            this.player.play('dwarf_jump_R', true)
        }
        else{
            this.player.setVelocityX(0);
            this.player.anims.play('dwarf_stand_R', true);     
            
        } 
    }

}