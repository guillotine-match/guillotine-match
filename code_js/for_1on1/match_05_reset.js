// reset 버튼 클릭

function resetClicked(btn_id){
    
    // portrait reset
    portBox1.style.display = "block";
    portBox2.style.display = "none";
    portBox3.style.display = "none";

    // audio stop
    vic_sound1.pause();
    vic_sound2.pause();

    // radio reset
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type == "radio") {
            ele [i] .checked = false;
        }
    }
    // 변수 리셋
    m1=0; m2=0; winner="an";
    


    // shift 박스 reset
    for( var i = 0; i < total_match; i++ ){
        let sboxes; 
        sboxes = sboxList.item(i); 
        sboxes.style.display="none";
    }
    let current_box; 
    current_box = sboxList.item(0); 
    current_box.style.display="block";
    matchIndex=0;

    //gradient disable
    document.styleSheets[1].disabled = true; 
    document.styleSheets[2].disabled = true; 

    //  리셋 소리
    anchor.load();
    anchor.play();

    // scroll reset
    if(btn_id=='resetAll'){document.getElementById('Guillotine').scrollIntoView();} 
}

