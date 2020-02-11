"use strict";
var Game;
(function (Game) {
    var fudge = FudgeCore;
    class Util {
        constructor() {
            this.enemyArray = [];
        }
        static getInstance() {
            if (!Util.instance) {
                Util.instance = new Util();
            }
            return Util.instance;
        }
        getCollidableObjects() {
            return this.collidableObjects;
        }
        setCollidableObjects(array) {
            this.collidableObjects = array;
        }
        getTextureImageByName(name) {
            let img = document.querySelector("#" + name);
            let texture = new fudge.TextureImage();
            texture.image = img;
            return texture;
        }
    }
    Game.Util = Util;
})(Game || (Game = {}));
//# sourceMappingURL=Util.js.map