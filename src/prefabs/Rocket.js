class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        //add to scene display and update
        scene.add.existing(this)
        
        //set up vars
        this.isFiring = false
        this.moveSpeed = 2
    }

    update(){
        //left and right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -=this.moveSpeed
            } else if (keyRIGHT.isDown && this.x <=game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed
            }
        }

        //firing
        if(Phaser.Input.Keyboard.JustDown(keyFIRE)){
            this.isFiring = true
        }
        //move up on fire
        if(this.isFiring && this.y >= borderUISize *3 + borderPadding){
            this.y -= this.moveSpeed
        }
        //reset on miss
        if(this.y<=borderUISize*3 + borderPadding){
            this.reset()
        }
    }

    reset(){
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}