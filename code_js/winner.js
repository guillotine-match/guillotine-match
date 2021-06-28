// 21.06.26 윤시준 tlwns5598@gmail.com
// 사용자가 입력한 라디오 버튼을 조회하여 어떤 member가 승리했는지 알아냅니다.

//m1 선택 수 
//m2 선택 수 
let m1 = 0; 
let m2 = 0;

// 버튼 객체
let result_obj;
let nwPage_obj;

// 라디오 객체 저장 변수
let ele;

// 승자 저장할 텍스트 변수
let winner="";

//portrait_box1_ID objects
let x;
let y;

// ra 라디오 선택 오디오
// let ra1;
// let ra2;

// a1 승리 오디오
let a1;
let a2;

// 멤버 클래스 분류
// 멤버 1,2 멤버 ~1, ~2 (not)
let mem1s;
let mem2s;
let not1s;
let not2s;




// 문서 로드되었을 때 호출
function init() { 
    
    ele = document.getElementsByTagName('input');
    // 모든 input 요소 ele 객체로 반환

    result_obj = document.getElementById("resultbutton");
    nwPage_obj = document.getElementById('newPagebtn');

    // ra1 = document.getElementById("r_audio1");
    // ra2 = document.getElementById("r_audio2");
    a1 = document.getElementById("audio1");
    a2 = document.getElementById("audio2");

    w = document.getElementById("portrait_box0_ID"); 
    x = document.getElementById("portrait_box1_ID"); 
    y = document.getElementById("portrait_box2_ID"); 

    mem1s = document.getElementsByClassName("member1"); 
    mem2s = document.getElementsByClassName("member2"); 
    not1s = document.getElementsByClassName("not___1"); 
    not2s = document.getElementsByClassName("not___2"); 

    // result 버튼 클릭 시
	result_obj.addEventListener("click", showResult);
    result_obj.addEventListener("click", ImportGradientCSS);
    result_obj.addEventListener("click", winnerMP3);
    
    // 새로고침 버튼 클릭 시
    nwPage_obj.addEventListener("click", moveTop);
}
// 실시간 멤버 점수 조회
function func(e){
    let k1=0;
    let k2=0;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {

            if (ele[i].className == "member1"){
                if((ele[i].checked)){
                    k1++;
                }
            }
            else if (ele[i].className == "member2"){
                if((ele[i].checked)){
                    k2++;
                }
            }
        }
    }
    m1=k1;
    m2=k2;
    // if(m1>m2){
    //     ra1.load();
    //     ra1.play();
    // }
    // if(m1<m2){
    //     ra2.load();
    //     ra2.play();
    // }
}

// 승자 저장 -   출력
function showResult(){

    if(m1==m2){
        winner="승자를 다시 결정해야 합니다.";

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


function winnerMP3() {
    if(winner=='member1'){
        a1.muted=false;
        a1.load();
        a1.play();
    }
    if(winner=='member2'){
        a2.muted=false;
        a2.load();
        a2.play();
    }
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

// function moveTop(){
// document.getElementById('question_area').scrollIntoView();
// }