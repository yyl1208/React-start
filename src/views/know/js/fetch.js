// 传统ajax 指的是 XMLHttpRequest (XHR)

// XHR 不符合关注分离的原则
const url = "";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.responseType = "json";

fetch(url)
  .then(
    (res) => {
      console.log("联系服务器成功了");
      return res.json();
    }
    // (err) => {
    //   console.log("联系服务器失败了");
    //   return new Promise(() => {});
    // }
  )
  .then((response) => {
    console.log("获取数据成功", response);
  })
  .catch((err) => {
    console.log(err);
  });

export async function info() {
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch(err) {
    console.log(err);
  }
}
