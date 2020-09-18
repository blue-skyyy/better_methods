/**
 * @description: a method of returning  format size
 * @size  img url
 * @return:
 */

function dataURLtoFile(url) {
  if (!url) return null;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(function (res) {
        return res.blob();
      })
      .then(function (data) {
        resolve(data.size);
      })
      .catch((_) => {
        reject(new Error("can not get size"));
      });
  });
}
