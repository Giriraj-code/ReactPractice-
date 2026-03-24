UseEffect side by side multiple chizo chalne ko chal ne deta he bina main process ko disturb kiye ab hume lage ga ki 
parallel chalata he to asanai he 

useEffect uske kamo ko react ke main rendering process ya jo bhi main process ke hojane ke bad side stack ke kam ko execute kerta he sath sath parallel ni chalata he 

useEffect call back me ak function mang ta he 

phela use case useEffect ka ye he ki jab jab humari state change ho ri he like jab jab number ki state change hori like 1 se 2 se 3 se 4 ..... tab tab side effect me useEffect chal raha he {is ko hum mounting bhi bolte he }

syntax : useEffect(dunction(){
    console.log('side stack process');
}) <-- ider hum dependencies dete he

agar mene ye dependencies deti useEffect ko to vo sirf ak bar run hoga 