import { LikeComponent } from './like.component';

let likeComponent = new LikeComponent(10, false);
// likeComponent.likesCount = 2;
// likeComponent.isSelected = false;
likeComponent.onClick();
console.log(`likesCount: ${likeComponent.likesCount}, isSelected: ${likeComponent.isSelected}`);