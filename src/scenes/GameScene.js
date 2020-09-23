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

    this.time = 0;
    this.enemies = [];
    this.projectiles = [];
    this.explosions = [];
  }

  preload () {
    this.bgLayer3 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer3');
    this.bgLayer1 = this.add.tileSprite(400, 240, 800, 480, 'bgLayer1');
    this.bgLayer2 = this.add.tileSprite(400, 240, 800, 480, 'bgLayer2');
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
    this.player.animation = this.physics.add.sprite(60, 230, 'shipAnimation');
    this.player.animation.anims.play('shipMove', true);
    this.player.laser = this.sound.add('laserFire');

    this.anims.create({
      key: 'mineMove',
      frames: this.anims.generateFrameNumbers('mineAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1
    });

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
    this.explosion.animation.anims.play('explosion', false);
    this.explosion.animation.on('animationcomplete', () => this.explosion.animation.destroy());
  }

  addEnemies() {
    const enemy = new Enemy();
    enemy.animation = this.physics.add.sprite(800, 200, 'mineAnimation');
    enemy.animation.y = Phaser.Math.Between(35, 435);
    enemy.animation.anims.play('mineMove', true);

    this.enemies.push(enemy);
  }

  addProjectiles(x, y) {
    this.player.laser.play();

    const laser = new Projectile();
    laser.img = this.add.image(x, y, 'laser');

    this.projectiles.push(laser);
  }

  addExplosions() {
  }

  update() {
    // this.bgLayer1.titlePositionX -= 1;
    // this.bgLayer2.titlePositionX -= 0.5;
    this.handleInput();

    this.updatePlayer();

    this.updateEnemies();

    this.updateProjectiles();

    this.updateCollisions();

    this.updateExplosions();
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
      this.addProjectiles(this.player.animation.x + 65, this.player.animation.y);
      // this.player.animation.setActive(false).setVisible(false);
    }
  }

  updatePlayer() {
  }

  updateEnemies() {
    this.time += 1;

    if (this.time % 150 === 0) this.addEnemies();

    this.enemies.forEach( (e, i) => {
      e.animation.x -= e.speed;

      if (e.animation.x < 0) {
        e.animation.destroy();
        this.enemies.splice(i, 1);
      }
    });
  }

  updateProjectiles() {
    this.projectiles.forEach( (p, i) => {
      p.img.x += p.speed;

      if (p.img.x > 800) {
        p.img.destroy();
        this.projectiles.splice(i, 1);
      }
    });
  }

  updateCollisions() {
  }

  updateExplosions() {
  }
};
