function urlToBase64(url, type = "image/png", quality = 0.92) {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      let dataUrl = canvas.toDataURL(type, quality);
      if (isBase64(dataUrl)) {
        resolve(dataUrl);
      } else {
        reject("转换base64失败");
      }
      canvas = null;
    };
  });
}

function isBase64(str) {
  let reg = /^data:.+;base64,/;
  return reg.test(str);
}
