let sum = 0;
for (let index = 0; index < 10; index++) {
  sum += index + 1;
}
console.log(`1 ~ 10까지 덧셈 = ${sum}`);

// blank 배열
let rndNum = [];
for (let i = 0; i < 10; i++) {
  // min ~ max 범위의 랜덤수 생성하기
  // Math.random() * ( max - min ) + min
  let num = Math.random() * (100 - 1) + 100;

  // 소수점 이하 자르기(정수형으로 만들기 )
  num = Math.floor(num);
  // blank 배열의 요소에 추가하기
  rndNum.push(num);
}
console.table(rndNum);

// rndNum 의 배열을 쫙 늘여 item변수에 넣고 출력하기
// '콜백함수' : 배열의 갯수만큼 출력하는 함수.
// forEach() 는 JS에서 사용하는 확장된 for 문
// forEach(콜백함수) : 콜백함수 배열이 item 과 index 값이 전달된다.
rndNum.forEach((item, index) => {
  console.log(`${index} 번 item ${item}`);
});

// 문자열과 정수형 혼합 가능
// 순수 정수형 배열 만들기
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 문자열과 정수가 혼합된 배열 만들기
const strs = ["대한민국", "우리나라", "Republlic of Korea", 2023, 2024];

strs[1] = "Korea";
// 배열을 임의로 계속 추가 할 수 있다.
strs[5] = "Viva Korea";
strs[20] = "We are the World";
console.table(strs);
console.log(strs[6]);

strs.forEach((item, index) => {
  // 변수의 값이 undefined, null, "" 이 아니면
  // if(변수) 코드는 true 와 같다.
  if (item) {
    console.log(`${index} => ${item}`);
  } else if (!item) {
    console.log("없음");
  }
});

for (let index = 0; index < strs.length; index++) {
  if (strs[index]) {
    console.log(`${index} => ${strs[index]}`);
  } else if (!strs[index]) {
    console.log("없음");
  }
}
