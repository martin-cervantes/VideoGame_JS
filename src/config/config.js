import Phaser from 'phaser';

const physicsConfig = {
  default: 'arcade',
  arcade: {
    debug: false,
  },
};

export default {
  type: Phaser.AUTO,
  parent: 'VideoGame_JS',
  width: 800,
  height: 480,
  physics: physicsConfig,
  dom: {
    createContainer: true,
  },
};
