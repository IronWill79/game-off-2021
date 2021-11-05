export class Spider extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
  }

  static preload(scene: Phaser.Scene) {
    scene.load.image('spider');
  }
}
