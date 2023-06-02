# CSS 화면구현(2023-06-02)

## selecter
- 상황에 맞게 적절하게 사용하면 됨.
- 	/* 
      tag 의 식별자인 id 를 각각 추가하고
      id 에 대하여 select 를 실행하고 속성 부여하기 
      */
      button#save {
      }
      /* 
      tag 에 index를 사용하여 select 하기
      */ 
      /* 박스 안에들어있는 첫번째 버튼 */
      div#button button:nth-of-type(1) {
      }
## CSS를 사용하여 interactive(활동적인) 효과주기  : hover
-   button:hover {
        background-color: #777;
        color: black;
      }
- /* 보라색 밑줄 시간 지정하기 */
        transition-duration: 0.8s;
## 박스 고정하기 : transparent
- /* 투명색 추가하기 */
        border: 2px solid transparent;
## 박스 동그라미
- /* 박스 동그라미 만들기 */
        border-radius: 20px;
- border-radius: 50%;