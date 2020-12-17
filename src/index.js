import Phaser from 'phaser';
import config from './config/config';

import './css/style.css';

import logo from './assets/img/phaserLogo.png';

import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import PauseScene from './scenes/PauseScene';
import GameOverScene from './scenes/GameOverScene';
import HighScoresScene from './scenes/HighScoresScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Pause', PauseScene);
    this.scene.add('Over', GameOverScene);
    this.scene.add('HighScores', HighScoresScene);

    this.scene.start('Boot');
  }
}

const icon = document.querySelector("link[rel*='icon']") || document.createElement('link');
icon.type = 'image/x-icon';
icon.rel = 'shortcut icon';
icon.href = logo;
document.getElementsByTagName('head')[0].appendChild(icon);

window.game = new Game();
