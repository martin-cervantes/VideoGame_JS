import 'phaser';
import logoImg from '../img/logo.png';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', logoImg);
  }

  create () {
  }
};
