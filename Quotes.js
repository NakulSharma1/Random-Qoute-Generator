
const quotes =[
    {
        quote : "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best." ,
        name:"~Marilyn Monroe"
    },
    
    {
        quote : "Be yourself; everyone else is already taken.",
        name:"~Oscar Wilde"
    },
    
    {
        quote :"Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
        name:"~Albert Einstein"
    },
    
    {
        quote : "So many books, so little time.",
        name: "~Frank Zappa"
    },
    
    {
        quote : "Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.",
        name:"~Bernard M.Baruch"
    },
]
/**let btn = document.querySelector('#quoteBtn'); */
let quoteData = document.querySelector("#quote");
let quoteAuthor = document.querySelector("#quoteAuthor");

/** btn.addEventListener('click',addQuote); */

let prevNum = 0;

function addQuote(e)
{
    //let add = Math.floor(Math.random()*quotes.length)
    let newNum = Math.floor(Math.random()*quotes.length);
    let add = Math.floor(Math.random()*quotes.length);
    newNum += add;
    console.log(newNum);
    if(newNum >= quotes.length){
        let div = Math.floor(Math.random()*quotes.length);

        newNum%=div;
    } 
    console.log(newNum);
    quoteData.innerText = quotes[newNum].quote;
    quoteAuthor.innerText = quotes[newNum].name; 
}

addQuote();

