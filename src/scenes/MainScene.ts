import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('Game Off 2021');
  }

  create() {
    this.add.text(20, 20, 'Game Off 2021', { fontSize: '32px', color: '#fff' });
  }
}
