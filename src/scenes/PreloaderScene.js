import 'phaser';
import bgMainMenu from '../assets/img/bgMainMenu.png';
import bgLayer1 from '../assets/img/bgLayer1.png';
import bgLayer2 from '../assets/img/bgLayer2.png';
import bgLayer3 from '../assets/img/bgLayer3.png';
import bgGameOver from '../assets/img/bgGameOver.png';

import btnPlay from '../assets/img/btnPlay.png';
import btnPlay0 from '../assets/img/btnPlay0.png';
import btnOptions from '../assets/img/btnOptions.png';
import btnOptions0 from '../assets/img/btnOptions0.png';
import btnCredits from '../assets/img/btnCredits.png';
import btnCredits0 from '../assets/img/btnCredits0.png';

import shipAnimation from '../assets/img/shipAnimation.png';
import mineAnimation from '../assets/img/mineAnimation.png';
import explosionAnimation from '../assets/img/explosionAnimation.png';
import laser from '../assets/img/laser.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }

  preload () {
    this.add.image(400, 200, 'phaserLogo');

    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 360, 320, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;

    let loadingText = this.make.text({ x: 400, y: 340, text: 'Loading...', style: { font: '20px monospace', fill: '#fff' } });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({ x: 400, y: 385, text: '0%', style: { font: '18px monospace', fill: '#fff' } });
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({ x: 400, y: 430, text: '', style: { font: '18px monospace', fill: '#fff' } });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xfff, 1);
      progressBar.fillRect(250, 370, 300 * value, 30);
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(200, this.ready, [], this);

    // load assets needed in our game
    this.load.image('bgMainMenu', bgMainMenu);
    this.load.image('bgLayer1', bgLayer1);
    this.load.image('bgLayer2', bgLayer2);
    this.load.image('bgLayer3', bgLayer3);
    this.load.image('bgGameOver', bgGameOver);

    this.load.image('btnPlay', btnPlay);
    this.load.image('btnPlay0', btnPlay0);
    this.load.image('btnOptions', btnOptions);
    this.load.image('btnOptions0', btnOptions0);
    this.load.image('btnCredits', btnCredits);
    this.load.image('btnCredits0', btnCredits0);

    this.load.spritesheet('shipAnimation', shipAnimation, { frameWidth: 115, frameHeight: 69 });
    this.load.spritesheet('mineAnimation', mineAnimation, { frameWidth: 47, frameHeight: 61 });
    this.load.spritesheet('explosionAnimation', explosionAnimation, { frameWidth: 134, frameHeight: 134 });
    this.load.image('laser', laser);
  }

  create () {
  }

  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Game');
    }
  }
};
