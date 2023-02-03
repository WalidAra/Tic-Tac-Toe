let gameStatues = ['','','','','','','','',''] ;
let player = 'X' ;
let indexes = ["a", "b" ,"c","d","e","f","g","h","i"] ;
let win = false ;

document.getElementById("reset_btn").onclick = () => {

    document.getElementById("x").innerHTML = "X Your Turn";
    document.getElementById("o").innerHTML = "";

    indexes.forEach(function (ele,index){

        document.getElementById(ele).classList.remove("X");
        document.getElementById(ele).classList.remove("O");
        document.getElementById(ele).innerHTML = '';
        gameStatues[index] = '';
        document.getElementById(ele).style.pointerEvents = "auto";
    })
    player = 'X';
}

indexes.forEach(print);

function print(ele , index){

    let mark = document.getElementById(ele) ;
    if(win != true){
        mark.onclick = () =>{
            if(player === 'X'){
                mark.classList.add("X");
                document.getElementById("x").innerHTML = "";
                document.getElementById("o").innerHTML = "O Your Turn";
                mark.innerHTML = player ;
                gameStatues[index] = player ;
                player = 'O';
            }
    
            else if( player === 'O'){
                mark.classList.add("O");
                document.getElementById("x").innerHTML = "X Your Turn";
                document.getElementById("o").innerHTML = "";
                mark.innerHTML = player ;
                gameStatues[index] = player ;
                player = 'X';
            }
    
            mark.style.pointerEvents = "none";
            console.log(gameStatues)
    
            check(gameStatues);
        }
    }
}

function check(gameStatues){

    const conditions = [
        [0,1,2] , [3,4,5] , [6,7,8] ,
        [0,3,6] , [1,4,7] , [2,5,8] ,
        [0,4,8] , [2,4,6]
    ];

    for(var i = 0 ; i < 8 ;i++){

        if( gameStatues[conditions[i][0]] == '' || gameStatues[conditions[i][1]] == '' || gameStatues[conditions[i][2]] == '' ) continue ;
        else if( (gameStatues[conditions[i][0]] == gameStatues[conditions[i][1]]) && (gameStatues[conditions[i][1]] == gameStatues[conditions[i][2]]) ){
            win = true ;
            indexes.forEach(function (ele){
                document.getElementById(ele).style.pointerEvents = "none";
            })
            if( gameStatues[conditions[i][0]] == 'X') 
            {
                alert("X wins , press the reset button for a other round ");
                document.getElementById("x").innerHTML = "X Wins";
                document.getElementById("o").innerHTML = "";
            }

            else if( gameStatues[conditions[i][0]] == 'O' ){
                alert("O wins , press the reset button for a other round ");
                document.getElementById("x").innerHTML = "";
                document.getElementById("o").innerHTML = "O Wins";
            }
            break;
        }
    }

    if( win != true){
        spaces = 9;

        for( var i = 0 ; i < gameStatues.length ;i++){
            if(gameStatues[i] !== ''){
                spaces -= 1;
            }
            console.log(`here ${spaces}`);
        }

        if( spaces == 0 ){
            document.getElementById("x").innerHTML = "Draw";
            document.getElementById("o").innerHTML = "Draw";
            alert("Draw press the reset button for a other round");
        }
    }
}