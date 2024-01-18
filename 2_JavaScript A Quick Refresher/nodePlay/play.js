let name = 'Joao'
let age = 29
const hasCart = false


function concateUser(Username, Userage, UserhasCart){
    return(
        'My name is ' + Username +
        ', My age is ' + Userage +
        ', and the user has car ' + UserhasCart 
    )
}

console.log(concateUser(name, age, hasCart))