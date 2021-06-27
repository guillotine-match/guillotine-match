// 21.06.26 윤시준 tlwns5598@gmail.com
// 사용자가 입력한 라디오 버튼을 조회하여 어떤 member가 승리했는지 알아냅니다.

var m1 = 0; 
var m2 = 0;
var result_obj;
var result_message="";
var ele;

// 문서 로드되었을 때 호출
function init() { 
    
    ele = document.getElementsByTagName('input');
    // 모든 input 요소 ele 객체로 반환

    result_obj = document.getElementById("resultbutton");

    // resultbutton 눌리면 아래 click event 리스너 함수들로 이동
    // resultbutton 오브젝트 : result_obj
    
    // 다음 순서로 eventlistener 함수 실행!!
	result_obj.addEventListener("click", eachMemberSum);
	result_obj.addEventListener("click", showResult);
    // result_obj.addEventListener("click", ImportGradientCSS);
    result_obj.addEventListener("click", ImgLink);
    result_obj.addEventListener("click", pointReset);
}

// 사용자가 선택 완료 버튼 눌렀을 때
// 이놈부터 실행
function eachMemberSum() {
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {

            if (ele[i].className == "member1"){
                if((ele[i].checked)){
                    m1++;
                }
            }
            else if (ele[i].className == "member2"){
                if((ele[i].checked)){
                    m2++;
                }
            }
        }
    }
}

// 사용자가 선택 완료 눌렀을 때
// 두 번째 실행할 함수
var winner="";


// 사용자가 선택 완료 눌렀을 때
// 세 번째 실행할 함수
function showResult(){

    if(m1==m2){
        winner="please choose radio button again";
    } else if(m1>m2){
        
        winner="Genji 승리!";
        alert(winner);

        var x = document.getElementById("portrait_box1_ID"); 
        x.style.display = "block";	

        document.getElementById('portrait_box1_ID').scrollIntoView();

    } else if(m1<m2){
        
        winner="Reaper 승리!";
        alert(winner);

        var y = document.getElementById("portrait_box2_ID"); 
        y.style.display = "block";	

        document.getElementById('portrait_box2_ID').scrollIntoView();

    } else {
        winner="else 값이 나올 수가 없는데 개발자가 코딩을 잘못했네"
    }

    m1=0;
    m2=0;
}

// onclick 시 승자 전용 gradition css 로딩하기

// function import_gradient_animation_cssfile (){
//     var cssId = 'myCss';  
//     if (!document.getElementById(cssId))
//     {
//         var head  = document.getElementsByTagName('head')[0];
//         var link  = document.createElement('link');
//         link.id   = cssId;
//         link.rel  = 'stylesheet';
//         link.type = 'text/css';
//         link.href = '../code_css/gradientAnimation.css';
//         link.media = 'all';
//         head.appendChild(link);
//     }
// }

function pointReset(){

}