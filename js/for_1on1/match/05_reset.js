// reset 버튼 클릭

function resetClicked(btn_id){

    //  (1) 클릭음
    anchor.load();
    anchor.play();

    // (2) 승리화면 리셋
    portrait_reset();
    
    // (3) 오디오 중단
    audio_stop();
    
    // (4) 라디오 리셋
    radio_reset();
    
    // (5) 쉬프트박스 & 변수 리셋
    sbox_and_variable_reset();

    // (6) 스크롤 리셋
    scroll_reset();

    // (9) 그라디언트 삭제
    reset_gradient();
} 

function portrait_reset(){
    anonBox.style.display = "block";
    team1box.style.display = "none";
    team2box.style.display = "none";
}

function audio_stop(){
    vic_sound1.pause();
    vic_sound2.pause();
}
function radio_reset(){
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {
            ele [i] .checked = false;
        }
    }
}
function sbox_and_variable_reset(){
    m1=0; m2=0; winner="an";
    matchIndex=0;
    selected_Box_num=0;
    boxShifter();
}

function scroll_reset(){
    document.getElementById('Guillotine').scrollIntoView();
}

