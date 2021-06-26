// 21.06.26 윤시준 tlwns5598@gmail.com

// <코드 사용처>
// 사용자가 입력한 라디오 버튼을 조회하여 어떤 member가 승리했는지 알아냅니다.

// <설명>
// 현재 웹 페이지상의 모든 인풋 태그를 받아온 후
// 그 중 라디오 요소만 조회합니다.
// 각 라디오 요소가 가르키는 대상은 class 값으로 저장하고
// class 값이 member1이면 => m1++
// class 값이 member2이면 => m2++ 하여
// 각 값을 구해내고 둘을 비교합니다.

var m1 = 0; 
var m2 = 0; 
var result_obj;
var result_message="";
var ele;

function init() { // 문서 로드되었을 때 호출
    
    ele = document.getElementsByTagName('input');
    // 모든 input 요소 ele 객체로 반환

    result_obj = document.getElementById("resultbutton");

    // resultbutton 눌리면 아래 click event 리스너 함수들로 이동
    // resultbutton 오브젝트 : result_obj

	result_obj.addEventListener("click", eachMemberSum);
	result_obj.addEventListener("click", compare);
	result_obj.addEventListener("click", showResult);
}

// 사용자가 선택 완료 눌렀을 때
// 첫 번째 실행할 함수 !!
function eachMemberSum() {
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {

            if (ele[i].class == "no_____"){
                alert("class 으로 진입 성공");

                if((ele[i].checked)){
                    this.m1++;
                }
            }
            
            // else if ((ele[i].class == "member2") && (ele[i].checked)){this.m2++;}
            // // 클래스가 1번 멤버이고 라디오 선택이 확인됐다면 m1 ++
            // // 클래스가 2번 멤버이고 라디오 선택이 확인됐다면 m2 ++


        }
    }
}

// 사용자가 선택 완료 눌렀을 때
// 두 번째 실행할 함수
var winner="";
function compare(){
    var m1=this.m1;
    var m2=this.m2;
    if(m1==m2){
        winner="please choose radio button again";
    } else if(m1>m2){
        winner="member1";
    } else if(m1<m2){
        winner="member2";
    } else {
        winner="else 값이 나올 수가 없는데 개발자가 코딩을 잘못했네"
    }
}

// 사용자가 선택 완료 눌렀을 때
// 세 번째 실행할 함수
function showResult(){
    // alert(m1);
    // alert(winner);
    // 1. 사용자가 작업 완료 버튼 눌렀을 때 함수 실행되도록 구현
    // 2. 함수 기능은 이긴 member 이름과 + 이미지 보여주기
}