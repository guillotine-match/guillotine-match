//각 팀 선택 수 
let m1 = 0; 
let m2 = 0;

// 라디오 객체 저장 변수
let ele;

// 승자 저장할 텍스트 변수
let winner="an";

// 버튼 객체
let result_Btn;
let refresh_Btn;

// win_text & portrait_box
let anonBox;
let team1box;
let team2box;

// shift Box 목록 : item 값 주고 사용 -> display off 할 수 있게
let sboxList;

// 참가자, 매칭 횟수
let total_match;
let total_player = total_match*2;

// sound ------- guillotine/radio : select sound
let selected1;
let selected2;

// sound ------- anchor move button
let anchor;


// sound ------- guillotine : back - forward
let back_forward;
let audio_click;

// 단두대 박스넘버
let current_Box;
let selected_Box;
let selected_Box_num=0;

// youtube box
let youtubeBox;
let youtube_Iframe1;
let youtube_Iframe2;