/**
 * @description: a method of exporting stream file
 * @url  url
 * @method method
 * @headers request headers
 * @params post methond params
 * @return:
 */
function mydownload(url, downloadName = "文件", options = {}) {
  const { suffix, method, headers = {}, params } = options;

  const fileName = `${downloadName}.${suffix || "xlsx"}`;

  let request = new XMLHttpRequest();

  request.open(method || "GET", url, true);

  request.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  if (headers) {
    for (let key of headers) {
      request.setRequestHeader(key, headers[key]);
    }
  }

  request.responseType = "blob";

  request.onload = function () {
    let blob = this.response;
    // 兼容IE
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      let downloadLink = document.createElement("a");
      let contentTypeHeader = request.getResponseHeader("Content-Type");
      downloadLink.href = window.URL.createObjectURL(
        new Blob([blob], { type: contentTypeHeader })
      );
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadLink.href);
    }
  };

  request.send(params || null);
}

// 图片url转blob下载到本地
function downloadImg(url) {
  fetch(url)
    .then((res) => {
      return res.blob();
    })
    .then((data) => {
      let downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(data);
      downloadLink.download = new Date().getTime() + ".jpeg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadLink.href);
    });
}

// base64下载到本地
function dowmloadImg(url) {
  let img = new Image(); // 获取要下载的图片
  img.src = url;
  img.onload = () => {
    let a = document.createElement("a"); // 创建一个a节点插入的document
    let event = new MouseEvent("click"); // 模拟鼠标click点击事件
    a.download = "downImg"; // 设置a节点的download属性值
    a.href = url; // 将图片的src赋值给a节点的href
    a.dispatchEvent(event); // 触发鼠标点击事件
    a.parentNode.removeChild(a);
  };
  img.onerror = (err) => {
    alert("下载失败");
  };
}
