
let cardss = []
//let sum = firstCard + secondCard
let sum=0
let message=""
let msg= document.getElementById("msg")
let sumEl=document.getElementById("sumEl")
let cards=document.getElementById("cards")
let card= 5
let hasBlackjack=false
let isAlive=false
let player=
{
    name: "Bhumi",
    chips: 150
}
let playerel=document.getElementById("playerEl")
playerel.textContent= player.name + " : "+ "$"+ player.chips

function startGame()
{
    isAlive=true
    let firstCard = randCard()
    let secondCard = randCard()
    cardss = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame()
{
    sumEl.textContent= "Sum: " 
cards.textContent = "Cards: "
for(let i=0;i<cardss.length;i++)
{
    cards.textContent+= cardss[i]+" "
    
}
sumEl.textContent+= sum
    if(sum <21)
{
    message= "Do you want new card?"
}
else if(sum== 21)
{
    message= "You won"
    hasBlackjack=true
    
}
else
{
    message= "You have lost."
    isAlive=false
}
msg.textContent=message

}
function newc()
{
   if(hasBlackjack==false && isAlive==true)
    {console.log("TAking a new card")
    let c=randCard()
    sum+=c
    cardss.push(c)
    renderGame()
    }
    
    
}
function randCard()
{
    let randCard= Math.floor(Math.random()*13 +1)
    return randCard
}