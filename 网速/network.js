function netSpeed() {
  if (navigator.userAgent.indexOf("Chrome") > -1) {
    return `${((navigator.connection.downlink * 1024) / 8).toFixed(2)}KB/s`;
  }
  return null;
}
