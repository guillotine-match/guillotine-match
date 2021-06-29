
// 21.06.26 윤시준 tlwns5598@gmail.com
// 사용자가 입력한 라디오 버튼을 조회하고
// 승리한 member의 이벤트를 보여줍니다

let s1 = document.styleSheets[1];
let s2 = document.styleSheets[2];
let s3 = document.styleSheets[3];

s1.disabled = true;
s2.disabled = true;
s3.disabled = true;

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
let winner="an";

//portrait_box1_ID objects
let x;
let y;
let z;

// radio 선택 오디오
let ra1;
let ra2;
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
    // 모든 input 요소 ele 객체로 반환
    ele = document.getElementsByTagName('input');

    result_obj = document.getElementById("resultbutton");
    nwPage_obj = document.getElementById('newPagebtn');

    a1 = document.getElementById("audio1");
    a2 = document.getElementById("audio2");
    ra1 = document.getElementById("audio3");
    ra2 = document.getElementById("audio4");
    ra1.load();
    ra2.load();

    x = document.getElementById("portrait_box0_ID"); 
    y = document.getElementById("portrait_box1_ID"); 
    z = document.getElementById("portrait_box2_ID"); 

    mem1s = document.getElementsByClassName("member1"); 
    mem2s = document.getElementsByClassName("member2"); 
    not1s = document.getElementsByClassName("not___1"); 
    not2s = document.getElementsByClassName("not___2"); 

    // result 버튼 클릭 시
	result_obj.addEventListener("click", showResult);
    result_obj.addEventListener("click", winnerMP3);
    
    // 새로고침 버튼 클릭 시
    nwPage_obj.addEventListener("click", resetClicked);
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
}
function func2(e){
    if(e=="member1"){
        ra1.load();
        ra1.play();
    }
    else if(e=="member2"){
        ra2.load();
        ra2.play();
    }
}

// 승자 저장 -   출력
function showResult(){
    a1.pause();
    a2.pause();
    if(m1==m2){ // 무승부
        x.style.display = "block";	// anon 초상화
        y.style.display = "none";	// player1 초상화
        z.style.display = "none";	// player2 초상화
        
        s1.disabled = true;
        s2.disabled = true;
        s3.disabled = false;

        winner="an"; 

    } else if(m1>m2){ // 1번 승
        
        x.style.display = "none";	
        y.style.display = "block";	
        z.style.display = "none";	
        document.getElementById('portrait_box1_ID').scrollIntoView();

        s1.disabled = false;
        s2.disabled = true;
        s3.disabled = true;
        
        winner="p1";

    } else if(m1<m2){// 2번 승
        
        x.style.display = "none";	
        y.style.display = "none";	
        z.style.display = "block";	
        document.getElementById('portrait_box2_ID').scrollIntoView();

        s1.disabled = true;
        s2.disabled = false;
        s3.disabled = true;

        winner="p2";
    }
}

function winnerMP3() {
    if(winner=='p1'){
        a1.load();
        a1.play();
    }
    if(winner=='p2'){
        a2.load();
        a2.play();
    }
}

// reset 버튼 클릭 시
function resetClicked(){
    
    // gradient reset
    s1.disabled = true;
    s2.disabled = true;
    s3.disabled = false;
    
    // portrait reset
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

    // radio reset
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {
            ele [i] .checked = false;
        }
    }
    m1, m2=0; winner="";
    
    // scroll reset
    document.getElementById('contestarea').scrollIntoView();

    // audio stop
    a1.pause();
    a2.pause();
}