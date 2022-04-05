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