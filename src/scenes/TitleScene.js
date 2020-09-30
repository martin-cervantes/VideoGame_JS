import 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext';

import Sound from '../game/sound';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.add.image(400, 240, 'bgMainMenu');
  }

  create() {
    this.backgoundMusic = new Sound(this, this.sound, 'menuMusic', true);
    this.backgoundMusic.play();

    this.btnPlay = this.add.sprite(400, 380, 'btnPlay').setInteractive();

    this.add.text(280, 240, 'Please enter your name', { color: 'white', fontSize: '20px ' });

    const inputText = new InputText(this, 425, 300, 200, 50, {
      type: 'text',
      placeholder: 'Your name here',
      readOnly: false,
      spellCheck: false,
      autoComplete: 'off',
      fontSize: '20px',
      color: '#ffffff',
      border: 0,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      outline: 'none',
    });

    this.add.existing(inputText);

    this.btnPlay.on('pointerdown', () => {
      const { text } = inputText;

      if (text !== '') {
        localStorage.setItem('user', text);
        this.scene.start('Game');
        this.backgoundMusic.destroy();
      } else {
        this.add.text(280, 240, 'Please enter your name', { color: 'red', fontSize: '20px ' });
      }
    });

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('btnPlay0');
    });

    this.btnPlay.on('pointerout', () => {
      this.btnPlay.setTexture('btnPlay');
    });
  }
}
