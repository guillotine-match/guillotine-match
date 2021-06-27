// 21.06.26 윤시준 tlwns5598@gmail.com
// 사용자가 입력한 라디오 버튼을 조회하여 어떤 member가 승리했는지 알아냅니다.

var m1 = 0; 
var m2 = 0;

var result_obj;

var result_message="";

var ele;
var winner="";

var winImgobj1;
var winImgobj2;

//portrait_box1_ID objects
var x
var y


// 문서 로드되었을 때 호출
function init() { 
    
    ele = document.getElementsByTagName('input');
    // 모든 input 요소 ele 객체로 반환

    result_obj = document.getElementById("resultbutton");

    winImgobj1 = document.getElementById("winpic1");
    winImgobj2 = document.getElementById("winpic2");
    
    w = document.getElementById("portrait_box0_ID"); 
    x = document.getElementById("portrait_box1_ID"); 
    y = document.getElementById("portrait_box2_ID"); 

    // resultbutton 눌리면 아래 click event 리스너 함수들로 이동
    
    // 다음 순서로 eventlistener 함수 실행!!
	result_obj.addEventListener("click", eachMemberSum);
	result_obj.addEventListener("click", showResult);
    result_obj.addEventListener("click", ImportGradientCSS);
    result_obj.addEventListener("click", deleter);
    // result_obj.addEventListener("click", imageScaleUp);
}






// 사용자가 결과 선택 Click 
// (radio / class / checked 여부로 멤버별 radio 클릭 수 조회)
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
// 세 번째 실행할 함수
function showResult(){

    if(m1==m2){
        winner="승자를 다시 결정해야 합니다.";
        alert(winner+"승리");

    } else if(m1>m2){
        
        winner="member1";
        w.style.display = "none";	
        x.style.display = "block";	
        y.style.display = "none";	

        document.getElementById('portrait_box1_ID').scrollIntoView();

    } else if(m1<m2){
        
        winner="member2";
        w.style.display = "none";	
        x.style.display = "none";	
        y.style.display = "block";	

        document.getElementById('portrait_box2_ID').scrollIntoView();

    } else {
        winner="else 값이 나올 수가 없는데 개발자가 코딩을 잘못했네"
    }
    m1=0;
    m2=0;
}

var cssId = 'myCss';  
function ImportGradientCSS(){
    if (!document.getElementById(cssId))
    {   
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        
        link.media = 'all';

        if(winner=='member1'){
            link.href = '../code_css/a.css';
            
        }
        if(winner=='member2'){
            link.href = '../code_css/b.css';
            
        }
    }
    head.appendChild(link);
}
