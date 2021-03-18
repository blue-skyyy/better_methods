// 选项有固定字段，每个字段要么都有值要么都每值。不满足则判定不可提交。

const opts = [
  { title: "A", image: "", audio: "aa" },
  { title: "B", image: "", audio: "" },
  { title: "C", image: "", audio: "cc" }
];

const requiredArr = ["title", "image", "audio"];

function isEqual(curr, next) {
  try {
    requiredArr.forEach((d) => {
      if (curr[d] && next[d]) {
        console.log("有相同的key：", d);
      } else if (!curr[d] && !next[d]) {
        // 两者都没有则不比较
        void null;
      } else {
        throw new Error(`没有相同的key：${d}`);
      }
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

let i = 0;
let isSame = true;
while (i < opts.length - 1) {
  let curr = opts[i];
  let next = opts[i + 1];
  let flag = isEqual(curr, next);
  if (flag) {
    i++;
  } else {
    isSame = false;
    break;
  }
}
