import Phaser from 'phaser';
import phaserLogo from '../assets/img/phaserLogo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('phaserLogo', phaserLogo);
  }

  create() {
    this.scene.start('Preloader');
  }
}
