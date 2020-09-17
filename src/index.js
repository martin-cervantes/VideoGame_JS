import 'phaser';
import config from './config/config';

import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import GameOverScene from './scenes/GameOverScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Over', GameOverScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();
