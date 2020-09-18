function blobToBase64(blob) {
  return new Promise((reslove, reject) => {
    let file = new FileReader();
    file.onload = function (e) {
      reslove(e.target.result);
    };
    file.readAsDataURL(blob);
    file.onerror = () => {
      reject("转化错误");
    };
  });
}
