// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(kudos = "*"){
    return function(kudos2 = "special"){
        return `You are ${kudos}${kudos2}${kudos}!`
        }
}
