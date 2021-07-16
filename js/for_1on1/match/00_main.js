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

// sound ------- victory_sound
let vic_sound1;
let vic_sound2;

// sound ------- guillotine : back - forward
let back_forward;

// sound ------- guillotine : back - forward
let audio_click;

// 단두대 박스넘버
let current_Box;
let selected_Box;
let selected_Box_num=0;

// chatting ID 에서 bottom y 좌표 받아서 
// bottom 값에 넣은 후 
// article(ID) 의 height 변경하기 
let bottom = 0;
let chattingID;
// document.getElementById('(article)').style.height = (bottom + 50);