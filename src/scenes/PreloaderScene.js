import 'phaser';
import bgMainMenu from '../assets/img/bgMainMenu.png';
import bgLayer1 from '../assets/img/bgLayer1.png';
import bgLayer2 from '../assets/img/bgLayer2.png';
import bgLayer3 from '../assets/img/bgLayer3.png';
import bgGameOver from '../assets/img/bgGameOver.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }

  preload () {
    this.add.image(400, 100, 'phaserLogo');

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('bgMainMenu', bgMainMenu);
    this.load.image('bgLayer1', bgLayer1);
    this.load.image('bgLayer2', bgLayer2);
    this.load.image('bgLayer3', bgLayer3);
    this.load.image('bgGameOver', bgGameOver);
  }

  init () {
    this.readyCount = 0;
  }

  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }

  create () {
  }
};
