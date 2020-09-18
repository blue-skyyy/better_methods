let elementStyle = document.createElement("div").style;

/**
 * @description: prefix style
 * @style  stylename
 */

function vendor(prop) {
  let ucProp = prop.charAt(0).toUpperCase() + prop.substr(1);
  let transformNames = {
    webkit: `webkit${ucProp}`,
    Moz: `Moz${ucProp}`,
    O: `O${ucProp}`,
    ms: `ms${ucProp}`,
    standard: prop
  };
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
}

function prefixStyle(style) {
  const ret = vendor(style);
  if (ret === false) {
    return false;
  }
  if (ret === "standard") {
    return style;
  }

  return ret + style.charAt(0).toUpperCase() + style.substr(1);
}
