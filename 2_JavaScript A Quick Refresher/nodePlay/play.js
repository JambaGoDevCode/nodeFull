let name = 'Joao'
let age = 29
const hasCart = false

const constateUserArrFunc = (Username, Userage, UserhasCart) => {
    return(
        'My name is ' + Username + 
        ', My age is ' + Userage + 
        ', and the user has car ' + UserhasCart
    )
}

const concateArr = constateUserArrFunc(name, age, hasCart)
console.log(concateArr);

const add = (a,b) => a + b
const addOne = a => a + 1
const addRandon = () => 1 + 2

console.log(add(4,1))
console.log(addOne(4))
console.log(addRandon(4))

function concateUser(Username, Userage, UserhasCart){
    return(
        'My name is ' + Username +
        ', My age is ' + Userage +
        ', and the user has car ' + UserhasCart 
    )
}

console.log(concateUser(name, age, hasCart))