/**
 * @description: prefix style
 * @style  stylename
 */

const vendor = (prop) => {
  let element = document.createElement("div");
  let ucProp = prop.charAt(0).toUpperCase() + prop.substr(1);
  let transformNames = {
    webkit: `webkit${ucProp}`,
    Moz: `Moz${ucProp}`,
    O: `O${ucProp}`,
    ms: `ms${ucProp}`,
    standard: prop
  };
  for (let key in transformNames) {
    if (element.style[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
};

export const prefixStyle = (style) => {
  const ret = vendor(style);
  if (ret === false) {
    return false;
  }
  if (ret === "standard") {
    return style;
  }

  return ret + style.charAt(0).toUpperCase() + style.substr(1);
};
