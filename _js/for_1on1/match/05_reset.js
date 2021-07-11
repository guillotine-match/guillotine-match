// reset 버튼 클릭

function resetClicked(btn_id){

    //  reset_button_sound
    anchor.load();
    anchor.play();

    // 모든 리셋 함수
    portrait_reset();
    audio_stop();
    radio_reset();
    sbox_and_variable_reset();
    scroll_reset();
    winner_text_reset();
    audio_display_off();
    reset_gradient();
} 

function portrait_reset(){
    // portrait_reset
    portBox1.style.display = "block";
    portBox2.style.display = "none";
    portBox3.style.display = "none";
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
    ShowBoxIdx();
}

function scroll_reset(){
    document.getElementById('Guillotine').scrollIntoView();
}

function winner_text_reset(){
    let mem1 = document.getElementById('team1ID');
    let mem2 = document.getElementById('team2ID');
    mem1.innerHTML ='';
    mem2.innerHTML ='';
    mem1.style.display = "none";
    mem2.style.display = "none";
}

function audio_display_off(){
    audio_area_ID = document.getElementById("audio_area_ID"); 
    audio_area_ID.style.display="none";
}