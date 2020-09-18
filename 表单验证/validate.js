let validtors = {
  // 不为空
  isNotEmpty: function (errMsg, value) {
    if (!value) {
      return errMsg;
    }
  },
  // 判断最小length
  minLength: function (errMsg, value, { minLen }) {
    if (value && value.length < minLen) {
      return errMsg;
    }
  },
  // 判断最大length
  maxLength: function (errMsg, value, { maxLen }) {
    if (value && value.length > maxLen) {
      return errMsg;
    }
  }
};

class Validtor {
  constructor(options) {
    this.rules = [];
  }

  add(value, rules) {
    rules.forEach((rule) => {
      const { strategy, errMsg, maxLen, minLen } = rule;
      this.rules.push(() => {
        if (validtors[strategy]) {
          return validtors[strategy].call(
            null,
            errMsg,
            value,
            Object.assign({}, { maxLen, minLen })
          );
        } else {
          throw new Error("validtors对象不存在stratege属性");
        }
      });
    });
  }

  run() {
    for (let fn of this.rules) {
      let err = fn();
      if (err) {
        return err;
      }
    }
  }
}
