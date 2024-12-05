// import {Vector2} from "./Vector2.js";
// //import {events} from "./Events.js";

// export class GameObject {
//   constructor({ posicao }) {
//     this.posicao = posicao ?? new Vector2(0, 0);
//     this.children = [];
//     this.parent = null;
//     this.hasReadyBeenCalled = false;
//   }

//   // First entry point of the loop
//   stepEntry(delta, root) {
//     // Call updates on all children first
//     this.children.forEach((child) => child.stepEntry(delta, root));

//     // Call ready on the first frame
//     if (!this.hasReadyBeenCalled) {
//       this.hasReadyBeenCalled = true;
//       this.ready();
//     }

//     // Call any implemented Step code
//     this.step(delta, root);
//   }

//   // Called before the first `step`
//   ready() {
//     // ...
//   }

//   // Called once every frame
//   step(_delta) {
//     // ...
//   }

//   /* draw entry */
//   draw(ctx, x, y) {
//     const drawPosX = x + this.posicao.x;
//     const drawPosY = y + this.posicao.y;

//     // Do the actual rendering for Images
//     this.desenharImagem(ctx, drawPosX, drawPosY);

//     // Pass on to children
//     this.children.forEach((child) => child.draw(ctx, drawPosX, drawPosY));
//   }

//   desenharImagem(ctx, drawPosX, drawPosY) {
//     //...
//   }

//   // Remove from the tree
//   destroy() {
//     this.children.forEach(child => {
//       child.destroy();
//     })
//     this.parent.removeChild(this)
//   }

//   /* Other Game Objects are nestable inside this one */
//   addChild(gameObjects) {
//     gameObjects.parent = this;
//     this.children.push(gameObjects);
//   }

//   removeChild(gameObjects) {
//     events.unsubscribe(gameObjects);
//     this.children = this.children.filter(g => {
//       return gameObjects !== g;
//     })
//   }
// }