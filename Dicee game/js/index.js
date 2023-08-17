//dice image 1: 

//assigning random no bw 1-6

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//assigning random dice image 1-6 with the help of random number

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

//saving the random images

var randomImageSource1 = "images/" + randomDiceImage1;

//assigning left dice image to the variable

var image1 = document.querySelectorAll("img")[0];

//linking the image 1 to the random dice images

image1.setAttribute("src" , randomImageSource1);




//dice image 2:

//assigning random no bw 1-6

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//assigning random dice images 1-6 with the help of random number

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

//saving the random images

var randomImageSource2 = "images/" + randomDiceImage2;

//assigning right dice image to the variable

var image2 = document.querySelectorAll("img")[1];

//linking the image 2 to the random dice images

image2.setAttribute("src" , randomImageSource2);




//who win the game:

if(randomNumber1 > randomNumber2){

    document.querySelector(".content").innerHTML = "Player 1 wins the game!";
    alert("To play again Refreh the page");
}

else if(randomNumber2 > randomNumber1){

    document.querySelector(".content").innerHTML = "Player 2 wins the game!";
     alert("To play again Refreh the page");
}

else{

    document.querySelector(".content").innerHTML = "It's a Draw";
     alert("To play again Refreh the page");
}