import Phaser from 'phaser';

export default class Pause extends Phaser.Scene {
  constructor() {
    super('Pause');
  }

  preload() {
    this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  create() {
    this.make.text({
      x: 300, y: 200, text: 'P a u s e', style: { font: '40px monospace', fill: '#fff' },
    });
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.scene.resume('Game');
      this.scene.stop('Pause');
    }
  }
}
