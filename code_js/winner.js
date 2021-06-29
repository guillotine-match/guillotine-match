
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
let p1_radioAudio;
let p2_radioAudio;
let p1_radioNO;
let p2_radioNO;

// p1_victoryAudio 승리 오디오
let p1_victoryAudio;
let p2_victoryAudio;

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

    p1_victoryAudio = document.getElementById("audio1");
    p2_victoryAudio = document.getElementById("audio2");
    p1_radioAudio = document.getElementById("audio3");
    p2_radioAudio = document.getElementById("audio4");
    p1_radioNO = document.getElementById("audio5");
    p2_radioNO = document.getElementById("audio6");
    p1_radioAudio.load();
    p2_radioAudio.load();

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
function func2(e){ //라디오버튼 클릭시 이벤트
    
    // 라디오버튼 클릭음
    if(e=="member1"){
        p1_radioAudio.load();
        p1_radioAudio.play();
    }
    else if(e=="member2"){
        p2_radioAudio.load();
        p2_radioAudio.play();
    } 
    else if(e=="not___1"){
        p1_radioNO.load();
        p1_radioNO.play();
    }
    else if(e=="not___2"){
        p2_radioNO.load();
        p2_radioNO.play();
    }
    
    // 경기 결과 리셋
    // gradient reset
    s1.disabled = true;
    s2.disabled = true;
    s3.disabled = false;
    
    // portrait reset
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

    // audio stop
    p1_victoryAudio.pause();
    p2_victoryAudio.pause();
}

// 승자 저장 -   출력
function showResult(){
    p1_victoryAudio.pause();
    p2_victoryAudio.pause();
    if(m1==m2){ // 무승부
        x.style.display = "block";	//  초상화
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
        p1_victoryAudio.load();
        p1_victoryAudio.play();
    }
    if(winner=='p2'){
        p2_victoryAudio.load();
        p2_victoryAudio.play();
    }
}

// reset 버튼 클릭
function resetClicked(){
    
    // gradient reset
    s1.disabled = true;
    s2.disabled = true;
    s3.disabled = false;
    
    // portrait reset
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

    // audio stop
    p1_victoryAudio.pause();
    p2_victoryAudio.pause();

    // radio reset
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {
            ele [i] .checked = false;
        }
    }
    m1, m2=0; winner="an";
    // scroll reset
    document.getElementById('contestarea').scrollIntoView();
}

// audio control part
function control(e) {
	let id = e.target.id;
	if(id == "play") { // play 버튼
		if(m1>m2){
            p1_victoryAudio.play(); 

        } else if(m1<m2){
            p2_victoryAudio.play();
        } 
	}
	else if(id == "pause") { // pause 버튼
        if(m1>m2){
            p1_victoryAudio.pause(); 
        } else if(m1<m2){
            p2_victoryAudio.pause();
        }
	}
	else if(id == "replay") { // replay 버튼
        if(m1>m2){
            p1_victoryAudio.load(); 
            p1_victoryAudio.play(); 
        } else if(m1<m2){
            p2_victoryAudio.load();
            p2_victoryAudio.play();
        }
	}
	else if(id == "vol-") { // vol- 버튼
        
        // 음량 0.1 감소
        if(m1>m2){
            p1_victoryAudio.volume -= 0.1; 
            if(p1_victoryAudio.volume < 0.1) p1_victoryAudio.volume = 0;
        } else if(m1<m2){
            p2_victoryAudio.volume -= 0.1; 
            if(p2_victoryAudio.volume < 0.1) p2_victoryAudio.volume = 0;
        }
	}
	else if(id == "vol+") { // vol+ 버튼
        
        // 음량 0.1 증가
        if(m1>m2){
            p1_victoryAudio.volume += 0.1; 
            if(p1_victoryAudio.volume > 0.9) p1_victoryAudio.volume = 1.0;
        } else if(m1<m2){
            p2_victoryAudio.volume += 0.1; 
            if(p2_victoryAudio.volume > 0.9) p2_victoryAudio.volume = 1.0;
        }
	}

	else if(id == "mute on/off") { 
        // mute on/off 버튼
        if(winner=="p1"){
            p1_victoryAudio.muted = !p1_victoryAudio.muted; // 음소거 토글
        }
		if(m1<m2){
            p2_victoryAudio.muted = !p2_victoryAudio.muted; // 음소거 토글
        }
	}
}