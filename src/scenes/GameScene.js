import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
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
};
