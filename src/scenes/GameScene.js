import 'phaser';
import Player from '../game/player';
import Projectile from '../game/projectile';
import Enemy from '../game/enemy';
import Explosion from '../game/explosion';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  init() {
    this.cursorKeys = this.input.keyboard.createCursorKeys();
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
    // this.sfx.play();

    this.anims.create({
      key: 'shipMove',
      frames: this.anims.generateFrameNumbers('shipAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1
    });
    this.player = new Player();
    this.player.animation = this.physics.add.sprite(300, 200, 'shipAnimation');
    this.player.animation.anims.play('shipMove', true);

    this.anims.create({
      key: 'mineMove',
      frames: this.anims.generateFrameNumbers('mineAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1
    });
    this.enemy = new Enemy();
    this.enemy.animation = this.physics.add.sprite(700, 200, 'mineAnimation');
    this.enemy.animation.anims.play('mineMove', true);

    this.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('explosionAnimation', {
        start: 0,
        end: 10,
      }),
      frameRate: 20,
      repeat: 0
    });
    this.explosion = new Explosion();
    this.explosion.animation = this.physics.add.sprite(100, 100, 'explosionAnimation');
    this.explosion.animation.anims.play('explosion', true);

    this.laser = new Projectile();
    this.laser.img = this.add.tileSprite(400, 200, 0, 0, 'laser');
  }

  update() {
    this.handleInput();

    this.enemy.animation.x -= this.enemy.speed;

    this.laser.img.x += this.laser.speed;

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
    if (this.cursorKeys.up.isDown && this.player.animation.y > 35) {
      this.player.animation.y -= this.player.speed;
    } else if (this.cursorKeys.down.isDown && this.player.animation.y < 435) {
      this.player.animation.y += this.player.speed;
    }

    if (this.cursorKeys.left.isDown && this.player.animation.x > 45) {
      this.player.animation.x -= this.player.speed;
    } else if (this.cursorKeys.right.isDown && this.player.animation.x < 750) {
      this.player.animation.x += this.player.speed;
    }

    if (Phaser.Input.Keyboard.JustDown(this.space)) {
      console.log('space');
      // this.player.animation.setActive(false).setVisible(false);
    }
  }
};
