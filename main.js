// Instructions: additional review of intro to javascript types

// console.log('Hello World')
// console.log('2' + 1)

// console.log('10' + 2)
// console.log(11 - 2)
// console.log(9 * 3)
// console.log('11' / 3)

// Instructions: review of setting a variable

// var x = 100;
// console.log(x % 2)

// alert('This is a warning')


// Instructions: Introduction to loops, for and while loops

// for(i = 0; i <= 100; i++){
//     console.log(i)
// }

// var happy = 10;

// for(happy; happy > 0; happy--){
//     console.log(happy)
// }

// while(happy > 0){
//     console.log(happy--)
// }


// Instructions: Introduction to conditional statements, if, else and else if 

// if (happy == 11){
//     console.log('True')
// } else if (happy >= 10){
//     console.log('The else if is true')
// } else {
//     console.log('Nothing here was true')
// }

// if (happy == 10 && happy >= 10){
//     console.log('Both conditions were true')
// }

// if (happy == 10 || happy < 10){
//     console.log('One of these was true')
// }

// if (happy > 10 || happy != 10) {
//     console.log('One of these was true')
// } else {
//     console.log('everything was false')
// }

// Fizzbuz Challenge //

// 1. log in the console numbers 1 to 100
// 2. numbers that are multiples of 3 log 'Fizz'
// 3. numbers that are multiples of 5 log 'Buzz'
// 4. numbers that are multiples of 3 & 5 log 'Fizzbuzz'

// for(i=1; i<101; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("Fizzbuzz")
//     } else if (i % 3 == 0){
//         console.log('fizz')
//     } else if (i % 5 == 0){
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }

// Instructions: using the information we learned in lasat class about 'grabbing' elements from the DOM,
// in addition to the things we learned today (conditionals and basic functions) and allowing an image
// to be changed by clicking on it, then setting up ability to 'toggle' back and forth

var image = document.getElementById('theImage').addEventListener('click', changeImage);

// function changeImage(){
//     console.log('This is my image click function')
// }

var count = 0
function changeImage() {
    if (count % 2 == 0) {
        document.getElementById('theImage').src = "/assets/images/wind_surfer.jpeg";
        count++
        console.log(count)
    } else {
        document.getElementById('theImage').src = "/assets/images/surfer.jpeg";
        count++
    }
}