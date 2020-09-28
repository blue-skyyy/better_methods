/**
 *
 * @param {*} width
 * @param {*} height
 * @param {*} img1 url
 * @param {*} img2 urlimg2在上
 * img1 img2 最好都为png格式
 * @return {Promise}:
 */

const composeImg = (width, height, img1, img2) => {
  return new Promise((reslove, reject) => {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    let arr = [img1, img2];
    const draw = (n) => {
      if (n < 2) {
        let img = new Image();
        img.setAttribute("crossOrigin", "anonymous");
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
          draw(n + 1);
        };
        img.src = arr[n];
      } else {
        reslove(canvas.toDataURL());
      }
    };
    draw(0);
  });
};
