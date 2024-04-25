let boxVal = document.querySelectorAll('.box')
let pera = document.querySelector('p');
let box = document.querySelector('.main-container')

let playerTurn = true;

let winnPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


boxVal.forEach((item) => {
    item.addEventListener("click", function () {
        if (playerTurn) {
            item.innerHTML = 'O';
            playerTurn = false;

        } else {
            item.innerHTML = 'X';
            playerTurn = true;
        }
        item.disabled = true;
        winnPattern();
    })
})


const winnPattern = () => {
    for (let pattern of winnPatterns) {
        let po1 = boxVal[pattern[0]].innerHTML;
        let po2 = boxVal[pattern[1]].innerHTML;
        let po3 = boxVal[pattern[2]].innerHTML;


        if (po1 != '' && po2 != '' && po3 != '') {
            if (po1 === po2 && po2 === po3) {
                pera.innerHTML = "winner!! " + po1
                disBtn();
                // playAgain();
            }
            

        }else{
            playAgain();
        }
       

    }

}

const disBtn = () => {
    boxVal.forEach((item) => {
        item.disabled = true
    })
}


const playAgain = () => {
    boxVal.forEach((item,i)=>{
        item.addEventListener('click',function(){
            let item1 = boxVal[0].innerHTML
            let item2 = boxVal[1].innerHTML
            let item3 = boxVal[2].innerHTML
            let item4 = boxVal[3].innerHTML
            let item5 = boxVal[4].innerHTML
            let item6 = boxVal[5].innerHTML
            let item7 = boxVal[6].innerHTML
            let item8 = boxVal[7].innerHTML
            let item9 = boxVal[8].innerHTML
            if(item1 != '' && item2 != '' && item3 != '' && item4 != '' && item5 != '' && item6 != '' && item7 != '' && item8 != '' && item9 != '' )
            {
                document.querySelector("h6").innerHTML = "Play Again!!"
            }
            
        })
    })

}

