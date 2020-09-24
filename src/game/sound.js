export default class Sound extends Phaser.Sound.WebAudioSound {
  constructor (scene, manager, sound, loop) {
    super(manager, sound);
    scene.add.existing(this);

    this.loop = loop;
  }
}
