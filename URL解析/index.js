/**
 *
 * @param {*} url  window.location.search
 */
export const parseUrlParam = (url) => {
  if (!url) return null;
  let paramsStr = url.slice(1);
  const paramsArr = paramsStr.split("&");
  let paramsObj = {};
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      let [key, val] = param.split("="); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
      paramsObj[key] = val;
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = null;
    }
  });
  return paramsObj;
};
