/**
 * @description: a method of formate time
 * @format  "YYYY-MM-DD"
 * @timeStamp 时间戳 毫秒
 * @return: 格式化结果
 */
function formatDate(format, timeStamp) {
  function format2n(val) {
    return val < 10 ? "0" + "" + val : val;
  }

  var date = new Date(timeStamp);
  var year = date.getFullYear() + "";
  var month = format2n(date.getMonth() + 1) + "";
  var day = format2n(date.getDate()) + "";
  var hour = format2n(date.getHours()) + "";
  var minute = format2n(date.getMinutes()) + "";
  var second = format2n(date.getSeconds()) + "";
  return format
    .replace(/YYYY/g, year)
    .replace(/YYY/g, year.slice(1))
    .replace(/YY/g, year.slice(2))
    .replace(/Y/g, year.slice(3))
    .replace(/MM/g, month)
    .replace(/M/g, month.slice(1))
    .replace(/DD/g, day)
    .replace(/D/g, day.slice(1))
    .replace(/hh/g, hour)
    .replace(/h/g, hour.slice(1))
    .replace(/mm/g, minute)
    .replace(/m/g, minute.slice(1))
    .replace(/ss/g, second)
    .replace(/s/g, second.slice(1));
}
