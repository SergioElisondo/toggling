// adding events listeners to titles
document.getElementById('gtr1Strat').addEventListener('click', gtr1Toggle)
document.getElementById('gtr2Epi').addEventListener('click', gtr2Toggle)
document.getElementById('gtr3LesPaul').addEventListener('click', gtr3Toggle)





// getting images to toggle  -- using 1 prop and 2 method -- 
// classList == property 
// add() == method
// toggle() == method
function gtr1Toggle (){

document.getElementById('stratGtr').classList.toggle('hidden')
document.getElementById('epiExplorer').classList.add('hidden')
document.getElementById('lesPaul').classList.add('hidden')

}

function gtr2Toggle (){
document.getElementById('stratGtr').classList.add('hidden')
document.getElementById('epiExplorer').classList.toggle('hidden')
document.getElementById('lesPaul').classList.add('hidden')
}

function gtr3Toggle (){
document.getElementById('stratGtr').classList.add('hidden')
document.getElementById('epiExplorer').classList.add('hidden')
document.getElementById('lesPaul').classList.toggle('hidden')
}

(function () {
    let move = document.getElementById('stratGtr');
    let move1 = document.getElementById('epiExplorer')
    let move2 = document.getElementById('lesPaul')

    move.onclick = function () {

        if (move.style.marginLeft === "500px") {
            move.style.marginLeft = "0";

        } else {
            move.style.marginLeft = "500px";
        }
    };

    move1.onclick = function () {

        if (move1.style.marginLeft === "500px") {
            move1.style.marginLeft = "0";

        } else {
            move1.style.marginLeft = "500px";
        }
    };

    move2.onclick = function () {

        if (move2.style.marginLeft === "500px") {
            move2.style.marginLeft = "0";

        } else {
            move2.style.marginLeft = "500px";
        }
    };
})();