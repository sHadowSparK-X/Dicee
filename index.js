if(sessionStorage.getItem('pageRefresh')){
    tossDice();
}

function tossDice(){
    var dice1 = Math.floor((Math.random())*6+1);
    var dice2 = Math.floor((Math.random())*6+1);

    if(dice1>dice2) document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    else if(dice1<dice2) document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    else document.querySelector("h1").innerHTML = "Draw!";

    var newImgSrc1 = "images/dice"+dice1+".png";
    var newImgSrc2 = "images/dice"+dice2+".png";

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", newImgSrc1);
    image2.setAttribute("src", newImgSrc2);

}

sessionStorage.setItem('pageRefresh', 'true');
