
var app = 0

console.log(app)

var heyy = 0

console.log(heyy)

    // computer nuber
    
var b = 0

do{


do{
        
    var ran = Math.floor(Math.random() * 10) + 1

    var b  = b + ran 

    console.log(b)



} while (b < 16)

if(b > 20){

alert (" The computer went over 20. Congratulations, YOU WON!!!!!!.")

var a = 0

heyy++

} else {
    // user number
    
    
    alert("Your turn")

    do{


        var ran = Math.floor(Math.random() * 10) + 1

        var a = a + ran 

        console.log(a)

        if(a > 20){
            break
        }

        var number2 = prompt(`Okay the number you are holding right now is ${a}. Would you like to go again or are you okay with your number. if you are okay with your number, type no. If you would like to go again press enter`)



    } while(number2 != "no")

    if(a > 20){

        alert (" Sorry you went over 20. The computer has won.")

        app++

    } else {

    
    // 1/4


        if ((b > a) && (b <= 20) && (a <= 20)) {

            alert (`Sorry the Computer won. Computer number was ${b}, and user number was ${a}.`)

            app++

        } else if ((a > b) && (a <= 20) && (b <=20)) { 

        alert (`Congratulations, YOU WON!!!!!! Computer number was ${b}, and user number was ${a}.`)

            heyy++

        } else if (b == a){ 

            alert (`It was a tie. Computer number was ${b}, and user number was ${a}.`)

        }
}

}
 alert (`here is the score: computer has won ${app} amount of times and you have won ${heyy} amount of times`)


 var you = prompt("If you would like to play again, press enter If not type quit")


} while  ( you != "quit" )
    

//     if (ran == number){
//         app++

//         console.log(app)

//         alert (`Hey your number was ${number}. YOU WON!!!!`)

//     } else {
//         heyy++

//         console.log(heyy)

//         alert (`Aww the computers number was ${ran}. You lose better luck next`)

//     }

//     alert (`here is the score: computer has won ${heyy} amount of times and you has won ${app} amount of times`)

//     var dog = prompt ("If you would like to play again press enter. If you want to leave the game type quit")

// }while ( dog != "quit" )


 






















// The point of the game is to see who gets closer to 20.
// During the first turn, the computer will draw a number from 1 to 10. This number will be added to a total. If this total is equal to or greater than 16, the computer will not draw more numbers.
// During the second turn, the user will draw a number from 1 to 10. This number will be added to a total. The user can request more numbers as needed. However, if the user total goes over 20, the user will be unable to draw more numbers. 
// If the computer goes over 20, the user will win automatically.
// During this round, the program will see who won: if the computer went over 20, the user wins automatically (this means the user doesn't have to draw numbers). If the user goes over 20, the computer will win. If both players are under 20, the player with the total closest to 20 will win.
// At the end of the round, a counter will show the number of wins and loses both players have. If the user wants to play again, this counter will remain active for the next round (this means the counter will not be reset to 0 for the next round.
// The program will ask the user to play again. If so, a new round will begin following the rules above. If not, a message will show up with the final score of all the rounds.























































































// alert ("Welcome to guess that number. You will be playing aginst the computer to see if you guess the number. If the number you guess is the same as the random number, you will get a point but if the number you guess is not the same as the random number, then the computer gets a point. If you dont want to play again, then it will show you the finial score of your game. GOOD LUCK!!!!!")

// var app = 0

// console.log(app)

// var heyy = 0

// console.log(heyy)

// do{


//     var ran = Math.floor(Math.random() * 10) + 1


//     alert ("I got my number now see if you can match it")

//     var number = prompt("Enter your number")

//     console.log(number)

    

//     if (ran == number){
//         app++

//         console.log(app)

//         alert (`Hey your number was ${number}. YOU WON!!!!`)

//     } else {
//         heyy++

//         console.log(heyy)

//         alert (`Aww the computers number was ${ran}. You lose better luck next`)

//     }

//     alert (`here is the score: computer has won ${heyy} amount of times and you has won ${app} amount of times`)

//     var dog = prompt ("If you would like to play again press enter. If you want to leave the game type quit")

// }while ( dog != "quit" )






