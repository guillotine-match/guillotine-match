

function control(e) {
	let id = e.target.id;
	if(id == "play") { // play 버튼
        alert(winner);
		if(winner=="p1"){
            p1_victoryAudio.play(); 
        } else if(winner="p2"){
            p2_victoryAudio.play();
        } else if(winner="anon"){
            p1_victoryAudio.pause(); 
            p2_victoryAudio.pause();
        }

	}
	else if(id == "pause") { // pause 버튼
        if(winner=="p1"){
            p1_victoryAudio.pause(); 
        } else if(winner="p2"){
            p2_victoryAudio.pause();
        }
	}
	else if(id == "replay") { // replay 버튼
        if(winner=="p1"){
            p1_victoryAudio.load(); 
            p1_victoryAudio.play(); 
        } else if(winner="p2"){
            p2_victoryAudio.load();
            p2_victoryAudio.play();
        }
	}
	else if(id == "vol-") { // vol- 버튼
        
        // 음량 0.1 감소
        if(winner=="p1"){
            p1_victoryAudio.volume -= 0.1; 
            if(p1_victoryAudio.volume < 0.1) p1_victoryAudio.volume = 0;
        } else if(winner="p2"){
            p2_victoryAudio.volume -= 0.1; 
            if(p2_victoryAudio.volume < 0.1) p2_victoryAudio.volume = 0;
        }
	}
	else if(id == "vol+") { // vol+ 버튼
        
        // 음량 0.1 증가
        if(winner=="p1"){
            p1_victoryAudio.volume += 0.1; 
            if(p1_victoryAudio.volume > 0.9) p1_victoryAudio.volume = 1.0;
        } else if(winner="p2"){
            p2_victoryAudio.volume += 0.1; 
            if(p2_victoryAudio.volume > 0.9) p2_victoryAudio.volume = 1.0;
        }
	}

	else if(id == "mute on/off") { 
        // mute on/off 버튼
        if(winner=="p1"){
            p1_victoryAudio.muted = !p1_victoryAudio.muted; // 음소거 토글
        }
		if(winner=="p2"){
            p2_victoryAudio.muted = !p2_victoryAudio.muted; // 음소거 토글
        }
	}
}