
/**
 * 
 * @param {*} start {x:event.touches[0].pageX, y:event.touches[0].pageY}
 * @param {*} end {x:event.touches[0].pageX, y:event.touches[0].pageY}}
 * @returns number
 */
function getSilideDirection(start, end) {
  let dx = end.x - start.x;
  let dy = end.y - start.y;
   // 上
   if (Math.abs(dy) > Math.abs(dx) && dy < 0) {
    console.log("=======up=====");
    return 1;
  }
  // 右
  if (Math.abs(dx) > Math.abs(dy) && dx > 0) {
    console.log("=======right=====");
    return 2;
  }
  // 下
  if (Math.abs(dy) > Math.abs(dx) && dy > 0) {
    console.log("=======down=====");
    return 3;
  }
  // 左
  if (Math.abs(dx) > Math.abs(dy) && dx < 0) {
    console.log("=======left=====");
    return 4;
  }
  
 
}