import 'phaser';

import Sound from '../game/sound';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  preload () {
    this.add.image(400, 240, 'bgMainMenu');
  }

  create () {
    this.backgoundMusic = new Sound(this, this.sound, 'menuMusic', true);
    this.backgoundMusic.play();

    this.btnPlay = this.add.sprite(400, 260, 'btnPlay').setInteractive();

    this.btnPlay.on('pointerdown', function (pointer) {
       this.scene.start('Game');
       this.backgoundMusic.destroy();
    }.bind(this));

    this.btnPlay.on('pointerover', (event) => {
      this.btnPlay.setTexture('btnPlay0');
    });

    this.btnPlay.on('pointerout', (event) => {
      this.btnPlay.setTexture('btnPlay');
    });

    this.btnOptions = this.add.sprite(400, 320, 'btnOptions').setInteractive();

    this.btnOptions.on('pointerdown', function (pointer) {
       this.scene.start('Options');
    }.bind(this));

    this.btnOptions.on('pointerover', (event) => {
      this.btnOptions.setTexture('btnOptions0');
    });

    this.btnOptions.on('pointerout', (event) => {
      this.btnOptions.setTexture('btnOptions');
    });

    this.btnCredits = this.add.sprite(400, 380, 'btnCredits').setInteractive();

    this.btnCredits.on('pointerdown', function (pointer) {
       this.scene.start('Credits');
    }.bind(this));

    this.btnCredits.on('pointerover', (event) => {
      this.btnCredits.setTexture('btnCredits0');
    });

    this.btnCredits.on('pointerout', (event) => {
      this.btnCredits.setTexture('btnCredits');
    });
  }
};
