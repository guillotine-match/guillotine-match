let matchIndex=0;

// shift 라고는 하지만 사실 display on off 함수
function boxShifter(){
    // 전체 시프트 박스 display none
    for( var i = 0; i < total_match; i++ ){
        let sboxes; 
        sboxes = sboxList.item(i); 
        sboxes.style.display="none";

    }
    // 현재 시프트 박스만 display block
    let current_box; 
    current_box = sboxList.item(matchIndex); 
    current_box.style.display="block";
}

function select(clsname){ //선택 버튼 (L, R) 클릭 시 

    // 라디오 버튼 개수로 조회
    for(i = 0; i < ele.length; i++) { 
        if(clsname=='tm1'){ // 왼쪽 멤버 선택 시
            ele[matchIndex*2].checked=true;
            func();
            selected1.load();
            selected1.play();
        }
        if(clsname=='tm2'){// 오른쪽 멤버 선택 시
            ele[(matchIndex*2)+1].checked=true;
            func();
            selected2.load();
            selected2.play();
        }
    }
    if(matchIndex<(total_match-1)){
        matchIndex++;
    } else if (matchIndex==total_match){
        // 경기 종료 : 결과화면으로 이동
    }
    boxShifter();
}


function go_next(){
    back_forward_1.load();
    back_forward_1.play();
    if(matchIndex<(total_match-1)){
        matchIndex++;
    } else if (matchIndex==total_match){
        // 경기 종료 : 결과화면으로 이동
    }
    boxShifter();
}

function go_back(){
    back_forward_2.load();
    back_forward_2.play();
    if(matchIndex>0){
        matchIndex--;
    }
    boxShifter();
}

function toggle_MatchArea_Display(){
}