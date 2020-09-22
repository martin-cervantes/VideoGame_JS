import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  init() {
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  preload () {
    this.bgLayer3 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer3');
    this.bgLayer1 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer1');
    this.bgLayer2 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer2');
  }

  create () {
    this.sfx = this.sound.add('gameMusic');
    this.sfx.loop = true;
    this.sfx.play();

    this.anims.create({
      key: 'shipMove',
      frames: this.anims.generateFrameNumbers('shipAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1
    });
    this.player = this.physics.add.sprite(300, 200, 'shipAnimation');
    this.player.anims.play('shipMove', true);

    this.anims.create({
      key: 'mineMove',
      frames: this.anims.generateFrameNumbers('mineAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1
    });
    this.enemy = this.physics.add.sprite(700, 200, 'mineAnimation');
    this.enemy.anims.play('mineMove', true);

    this.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('explosionAnimation', {
        start: 0,
        end: 10,
      }),
      frameRate: 20,
      repeat: -1
    });
    this.explosion = this.physics.add.sprite(100, 100, 'explosionAnimation');
    this.explosion.anims.play('explosion', true);

    this.laser = this.add.tileSprite(400, 200, 0, 0, 'laser');
  }

  update() {
    this.handleInput();

    // this.updatePlayer();

    // this.updateEnemies();
    //
    // this.updateProjectiles()
    //
    // this.updateCollisions();
    //
    // this.updateExplosions();
  }

  handleInput () {
    if (this.up.isDown) {
      console.log('up');
    } else if (this.down.isDown) {
      console.log('down');
    } else if (this.left.isDown) {
      console.log('left');
    } else if (this.right.isDown) {
      console.log('right');
    } else if (this.space.isDown) {
      console.log('space');
    }
  }
};
