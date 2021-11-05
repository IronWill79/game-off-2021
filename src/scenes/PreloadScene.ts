import { Spider } from 'entities/Spider';
import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    Spider.preload(this);
  }
}
