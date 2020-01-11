"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeComponent = new like_component_1.LikeComponent(10, false);
// likeComponent.likesCount = 2;
// likeComponent.isSelected = false;
likeComponent.onClick();
console.log("likesCount: " + likeComponent.likesCount + ", isSelected: " + likeComponent.isSelected);
