var target;
var abBottom;

// 승자 저장 -   출력
function showResult(){
    
    vic_sound1.pause();
    vic_sound2.pause();


    if(m1==m2){ // 무승부
        anonBox.style.display = "block";	// anonymous 그림
        team1box.style.display = "none";	// player1 초상화
        team2box.style.display = "none";	// player2 초상화
        winner="an"; 

        // 재경기 메시지
        alert("무승부입니다! 다시 선택해 주세요.")

    } else if(m1>m2){ // 1번 승


        anonBox.style.display = "none";	    // anonymous 그림
        team1box.style.display = "block";	// player1 초상화
        team2box.style.display = "none";	// player2 초상화

        document.getElementById('team1box').scrollIntoView();
        winner="p1";

        // team1_stylesheet
        team1_stylesheet_on();
        
    } else if(m1<m2){// 2번 승


        anonBox.style.display = "none";	    // anonymous 그림
        team1box.style.display = "none";	// player1 초상화
        team2box.style.display = "block";	// player2 초상화



        document.getElementById('team2box').scrollIntoView();
        winner="p2";
        
        // team2_stylesheet
        team2_stylesheet_on();  
    }
}







function winnerMP3() {
    
    anchor.load();
    anchor.play();

    if(winner=='p1'){
        vic_sound1.load();
        vic_sound1.play();
    }
    if(winner=='p2'){
        vic_sound2.load();
        vic_sound2.play();
    }
}