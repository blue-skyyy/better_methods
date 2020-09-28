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
  },
  // 手机格式
  isMobile: function (value, errorMsg) {
    if (!/^1[0-9]\d{9}$/.test(value)) {
      return errorMsg;
    }
  },
  // 字母数字
  isNumberEnglist: (value, errorMsg) => {
    let reg = /^(\d|[a-z]|[A-Z])*$/;
    if (reg.test(value)) {
      void null;
    } else {
      return errorMsg;
    }
  }
};

class Validtor {
  constructor(options) {
    this.validtors = validtors;
    this.strategies = [];
    // 自定义验证规则
    if (options.rules) {
      options.rules.forEach((rule) => {
        const { key, cb } = rule;
        this.validtors[key] = cb;
      });
    }
  }

  // 添加要校验的key
  add(value, rules) {
    rules.forEach((rule) => {
      const { strategy, errMsg, ...rest } = rule;
      this.strategies.push(() => {
        if (validtors[strategy]) {
          return validtors[strategy].call(null, errMsg, value, rest);
        } else {
          throw new Error("validtors对象不存在stratege属性");
        }
      });
    });
  }

  // 执行
  run() {
    for (let fn of this.strategies) {
      let err = fn();
      if (err) {
        return err;
      }
    }
  }
}
