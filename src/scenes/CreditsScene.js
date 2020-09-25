import 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  preload () {
    this.add.image(400, 240, 'bgMainMenu');
  }

  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });

    this.btnBack = this.add.sprite(650, 420, 'btnBack').setInteractive();

    this.btnBack.on('pointerdown', function (pointer) {
      this.scene.switch('Title');
    }.bind(this));

    this.btnBack.on('pointerover', (event) => {
      this.btnBack.setTexture('btnBack0');
    });

    this.btnBack.on('pointerout', (event) => {
      this.btnBack.setTexture('btnBack');
    });
  }
};
