/**
 * @description: a method of returning  format size
 * @size  size
 * @remain remain
 * @units units
 * @return:
 */
function formatFileSize(size = parseFloat(size), remain = 2, units) {
  if (size < 1024) {
    return parseFloat(size.toFixed(remain)) + "B";
  }
  let unit;
  units = units || ["B", "KB", "MB", "GB", "TB"];
  while ((unit = units.shift()) && size > 1024) {
    size = size / 1024;
  }
  return (unit === "B" ? size : parseFloat(size.toFixed(remain))) + unit;
}
