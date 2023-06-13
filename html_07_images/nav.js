document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");

  /*
  document.querySelector("li#Home").addEventListener("click", () => {
    alert("Home 으로 가기");
  });
  document.querySelector("li#dept").addEventListener("click", () => {
    alert("dept 으로 가기");
  });
  */

  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;

    if (nav_text === "Home") {
      document.location.href = "./index.html";
    } else if (nav_text === "거래처") {
      document.location.href = "./background.html";
    } else if (nav_text === "상품") {
      document.location.href = "./background2.html";
    } else if (nav_text === "로그아웃") {
      alert("바이루");
    } else if (nav_text === "관리자") {
      document.location.href = "https://naver.com";
    }
    alert(target.innerText);
  };

  // nav_ul.onClick = nav_click (브라우저 오류 있음)
  /*
  if (nav_ul) {
    nav_ul.addEventListener("click", nav_click);
  }
  */
  // < null safe 코드 >
  // nav_ul 객체변수가 null 이 아닐경우에만 addEventListener() 함수실행.
  // null 이면 무시
  nav_ul?.addEventListener("click", nav_click);
});
