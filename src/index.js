import 'phaser';
import config from './config/config';

import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import PauseScene from './scenes/PauseScene';
import OptionsScene from './scenes/OptionsScene';
import GameOverScene from './scenes/GameOverScene';
import HighScoresScene from './scenes/HighScoresScene';
import CreditsScene from './scenes/CreditsScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Pause', PauseScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Over', GameOverScene);
    this.scene.add('HighScores', HighScoresScene);
    this.scene.add('Credits', CreditsScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();
