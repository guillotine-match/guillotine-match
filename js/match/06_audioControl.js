// audio control part
function control(e) {

    let id = e.target.id;
    audio_click.load();        
    audio_click.play();

    if(m1>m2){
        if(id == "play") {              vic_sound1.play();}
        else if(id == "pause"){         vic_sound1.pause(); }
        else if(id == "replay"){        vic_sound1.load();             vic_sound1.play();}
        else if(id == "vol-"){          vic_sound1.volume -= 0.1;      if(vic_sound1.volume < 0.1) vic_sound1.volume = 0;}
        else if(id == "vol+"){          vic_sound1.volume += 0.1;      if(vic_sound1.volume > 0.9) vic_sound1.volume = 1.0;}
        else if(id == "mute on/off"){   vic_sound1.muted = !vic_sound1.muted;}
    } 
    
    else if(m1<m2){
        if(id == "play2") {              vic_sound2.play();}
        else if(id == "pause2"){         vic_sound2.pause();}
        else if(id == "replay2"){        vic_sound2.load();             vic_sound2.play();}
        else if(id == "vol2-"){          vic_sound2.volume -= 0.1;      if(vic_sound2.volume < 0.1) vic_sound2.volume = 0;}
        else if(id == "vol2+"){          vic_sound2.volume += 0.1;      if(vic_sound2.volume > 0.9) vic_sound2.volume = 1.0;}
        else if(id == "mute on/off2"){   vic_sound2.muted = !vic_sound2.muted;}
    }

}