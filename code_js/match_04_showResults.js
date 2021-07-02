
// 승자 저장 -   출력
function showResult(){
    
    vic_sound1.pause();
    vic_sound2.pause();

    if(m1==m2){ // 무승부
        portBox1.style.display = "block";	//  초상화
        portBox2.style.display = "none";	// player1 초상화
        portBox3.style.display = "none";	// player2 초상화
        winner="an"; 

    } else if(m1>m2){ // 1번 승
        portBox1.style.display = "none";	
        portBox2.style.display = "block";	
        portBox3.style.display = "none";	
        document.getElementById('portrait_box1_ID').scrollIntoView();
        winner="p1";

    } else if(m1<m2){// 2번 승
        portBox1.style.display = "none";	
        portBox2.style.display = "none";	
        portBox3.style.display = "block";	
        document.getElementById('portrait_box2_ID').scrollIntoView();
        winner="p2";
    }
}

function winnerMP3() {
    if(winner=='p1'){
        vic_sound1.load();
        vic_sound1.play();
    }
    if(winner=='p2'){
        vic_sound2.load();
        vic_sound2.play();
    }
}