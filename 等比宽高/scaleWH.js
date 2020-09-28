/**
 * 图片按宽高比以指定大小进行自动缩放
 * @param imageW
 * @param imageH
 * @param maxWidth
 *     允许缩放的最大宽度
 * @param maxHeight
 *     允许缩放的最大高度
 * @return {Object} width height
 *
 */
function scaleWH(imageW, imageH, maxWidth, maxHeight) {
  // 用于设定图片的宽度和高度
  let tempWidth;
  let tempHeight;

  if (imageW > 0 && imageH > 0) {
    //原图片宽高比例 大于 指定的宽高比例，这就说明了原图片的宽度必然 > 高度
    if (imageW / imageH >= maxWidth / maxHeight) {
      if (imageW > maxWidth) {
        tempWidth = maxWidth;
        // 按原图片的比例进行缩放
        tempHeight = (imageH * maxWidth) / imageW;
      } else {
        // 按原图片的大小进行缩放
        tempWidth = imageW;
        tempHeight = imageH;
      }
    } else {
      // 原图片的高度必然 > 宽度
      if (imageH > maxHeight) {
        tempHeight = maxHeight;
        // 按原图片的比例进行缩放
        tempWidth = (imageW * maxHeight) / imageH;
      } else {
        // 按原图片的大小进行缩放
        tempWidth = imageW;
        tempHeight = imageH;
      }
    }
    return {
      width: tempWidth,
      height: tempHeight
    };
  }
}
