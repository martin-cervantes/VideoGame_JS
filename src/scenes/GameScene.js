import Phaser from 'phaser';
import Player from '../game/player';
import Projectile from '../game/projectile';
import Enemy from '../game/enemy';
import Explosion from '../game/explosion';

import Sound from '../game/sound';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.timer = 0;
    this.enemies = [];
    this.projectiles = [];
  }

  preload() {
    this.bgLayer3 = this.add.tileSprite(400, 240, 0, 0, 'bgLayer3');
    this.bgLayer1 = this.add.tileSprite(400, 240, 800, 480, 'bgLayer1');
    this.bgLayer2 = this.add.tileSprite(400, 240, 800, 480, 'bgLayer2');
  }

  create() {
    this.backgoundMusic = new Sound(this, this.sound, 'gameMusic', true);
    this.backgoundMusic.play();

    this.laser = new Sound(this, this.sound, 'laserFire', false);

    this.explosion = new Sound(this, this.sound, 'explosionSound', false);

    this.anims.create({
      key: 'shipMove',
      frames: this.anims.generateFrameNumbers('shipAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1,
    });
    this.player = new Player(this, 60, 230, 'shipAnimation');
    this.player.anims.play('shipMove', true);

    this.anims.create({
      key: 'mineMove',
      frames: this.anims.generateFrameNumbers('mineAnimation', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('explosionAnimation', {
        start: 0,
        end: 10,
      }),
      frameRate: 20,
      repeat: 0,
    });

    this.lifesLabel = this.make.text({
      x: 10, y: 5, text: 'Lifes: 3', style: { font: '20px monospace', fill: '#fff' },
    });
    this.healthLabel = this.make.text({
      x: 10, y: 30, text: 'Health: 100', style: { font: '20px monospace', fill: '#fff' },
    });
    this.scoreLabel = this.make.text({
      x: 10, y: 55, text: 'Score: 0', style: { font: '20px monospace', fill: '#fff' },
    });
  }

  addEnemies() {
    const enemy = new Enemy(this, 800, 200, 'mineAnimation');
    enemy.anims.play('mineMove', true);

    this.enemies.push(enemy);
  }

  addProjectiles(x, y) {
    this.laser.play();

    const laser = new Projectile(this, x, y, 'laser');

    this.projectiles.push(laser);
  }

  addExplosions(x, y) {
    this.explosion.play();

    const explosion = new Explosion(this, x, y, 'explosionAnimation');
    explosion.anims.play('explosion', true);
    explosion.on('animationcomplete', () => explosion.destroy());
  }

  update() {
    this.handleInput();

    this.updateEnemies();

    this.updateProjectiles();

    this.checkPeCollisions();

    this.checkEpCollisions();

    this.checkPlayerHealth();
  }

  handleInput() {
    if (this.cursorKeys.up.isDown && this.player.y > 35) {
      this.player.y -= this.player.speed;
    } else if (this.cursorKeys.down.isDown && this.player.y < 435) {
      this.player.y += this.player.speed;
    }

    if (this.cursorKeys.left.isDown && this.player.x > 45) {
      this.player.x -= this.player.speed;
    } else if (this.cursorKeys.right.isDown && this.player.x < 750) {
      this.player.x += this.player.speed;
    }

    if (Phaser.Input.Keyboard.JustDown(this.space)) {
      this.addProjectiles(this.player.x + 65, this.player.y);
    }

    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.scene.pause('Game');
      this.scene.launch('Pause');
    }
  }

  updateEnemies() {
    this.timer += 1;

    const dif = Math.floor(300 / (this.player.score / 500 + 1));

    if (this.timer % dif === 0) this.addEnemies();

    this.enemies.forEach((e, i) => {
      e.x -= e.speed;

      if (e.x < 0) {
        e.destroy();
        this.enemies.splice(i, 1);

        this.player.directDamage(10);
      }
    });
  }

  updateProjectiles() {
    this.projectiles.forEach((p, i) => {
      p.x += p.speed;

      if (p.x > 800) {
        p.destroy();
        this.projectiles.splice(i, 1);
      }
    });
  }

  checkPeCollisions() {
    this.projectiles.forEach((p, i) => {
      this.enemies.forEach((e, j) => {
        if (p.checkCollision(e)) {
          if (e.directDamage(p.damage) <= 0) {
            e.destroy();
            this.enemies.splice(j, 1);

            this.addExplosions(e.x, e.y);

            this.player.calcScore(e.value);
          }

          p.destroy();
          this.projectiles.splice(i, 1);
        }
      });
    });
  }

  checkEpCollisions() {
    this.enemies.forEach((e, i) => {
      if (e.checkCollision(this.player)) {
        if (e.directDamage(this.player.directDamage(e.danger)) <= 0) {
          e.destroy();
          this.enemies.splice(i, 1);

          this.addExplosions(e.x, e.y);
        }
      }
    });
  }

  checkPlayerHealth() {
    if (this.player.health <= 0) {
      this.player.renewal();

      this.cameras.main.shake(500);
    }

    if (this.player.lifes === 0) {
      localStorage.setItem('score', this.player.score);
      this.cameras.main.fade(700);

      this.scene.start('Over');
      this.backgoundMusic.destroy();
    }

    this.lifesLabel.setText(`Lifes: ${this.player.lifes}`);
    this.healthLabel.setText(`Health: ${this.player.health}`);
    this.scoreLabel.setText(`Score: ${this.player.score}`);
  }
}
