var randomNumber1=Math.random();
randomNumber1=(Math.floor(randomNumber1*6))+1;

var str1="dice"+String(randomNumber1)+".png";
document.getElementById("img1").src=str1;

var randomNumber2=Math.random();
randomNumber2=(Math.floor(randomNumber2*6))+1;

var str2="dice"+String(randomNumber2)+".png";
document.getElementById("img2").src=str2;

var sel=document.querySelector("div h1");

if (randomNumber1>randomNumber2){
    sel.innerHTML="Player 1 Wins!";
    sel.classList.add("p1Win")
}
else if (randomNumber1===randomNumber2){
    sel.innerHTML="Draw!!";
}
else{
    sel.innerHTML="Player 2 Wins";
    sel.classList.add("p2Win");
}
