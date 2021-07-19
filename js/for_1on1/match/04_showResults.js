// 승자 저장 -   출력
function showResult(){
    
    pauseYoutube();

    if(m1==m2){ // 무승부
        anonBox.style.display = "block";	// anonymous 그림
        team1box.style.display = "none";	// team1 그림
        team2box.style.display = "none";	// team2 그림

        youtubeBox.style.display = "none";	// 
        youtube_Iframe1.style.display = "none";	// 
        youtube_Iframe2.style.display = "none";	// 
        winner="an"; 


        // 재경기 메시지
        alert("무승부입니다! 다시 선택해 주세요.")

    } else if(m1>m2){ // 1번 승

        // portrait box
        anonBox.style.display = "none";	    
        team1box.style.display = "block";	
        team2box.style.display = "none";	

        // youtube
        youtubeBox.style.display = "block";	// 
        youtube_Iframe1.style.display = "block";// 
        youtube_Iframe2.style.display = "none";	// 
        playYoutube();

        //scroll
        document.getElementById('team1box').scrollIntoView();

        //variable
        winner="p1";

        // team1_stylesheet
        team1_stylesheet_on();

        
    } else if(m1<m2){// 2번 승

        // portrait box
        anonBox.style.display = "none";	    
        team1box.style.display = "none";	
        team2box.style.display = "block";	

        // youtube
        youtubeBox.style.display = "block";	// 
        youtube_Iframe1.style.display = "none";	// 
        youtube_Iframe2.style.display = "block";	// 
        playYoutube();

        //scroll
        document.getElementById('team2box').scrollIntoView();

        //variable
        winner="p2";
        
        // team2_stylesheet
        team2_stylesheet_on();  
    }
}

