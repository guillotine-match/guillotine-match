// audio control part
function control(e) {
	let id = e.target.id;
	if(id == "play") { // play 버튼
		if(m1>m2){
            vic_sound1.play(); 

        } else if(m1<m2){
            vic_sound2.play();
        } 
	}
	else if(id == "pause") { // pause 버튼
        if(m1>m2){
            vic_sound1.pause(); 
        } else if(m1<m2){
            vic_sound2.pause();
        }
	}
	else if(id == "replay") { // replay 버튼
        if(m1>m2){
            vic_sound1.load(); 
            vic_sound1.play(); 
        } else if(m1<m2){
            vic_sound2.load();
            vic_sound2.play();
        }
	}
	else if(id == "vol-") { // vol- 버튼
        
        // 음량 0.1 감소
        if(m1>m2){
            vic_sound1.volume -= 0.1; 
            if(vic_sound1.volume < 0.1) vic_sound1.volume = 0;
        } else if(m1<m2){
            vic_sound2.volume -= 0.1; 
            if(vic_sound2.volume < 0.1) vic_sound2.volume = 0;
        }
	}
	else if(id == "vol+") { // vol+ 버튼
        
        // 음량 0.1 증가
        if(m1>m2){
            vic_sound1.volume += 0.1; 
            if(vic_sound1.volume > 0.9) vic_sound1.volume = 1.0;
        } else if(m1<m2){
            vic_sound2.volume += 0.1; 
            if(vic_sound2.volume > 0.9) vic_sound2.volume = 1.0;
        }
	}

	else if(id == "mute on/off") { 
        // mute on/off 버튼
        if(winner=="p1"){
            vic_sound1.muted = !vic_sound1.muted; // 음소거 토글
        }
		if(m1<m2){
            vic_sound2.muted = !vic_sound2.muted; // 음소거 토글
        }
	}
}