//CODE 01

function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(){
    console.log('Paper delivered to house 2')
}
function houseThree(){
    console.log('Paper delivered to house 3')
}
houseOne()
houseTwo()
houseThree()



//CODE 02 EXAMPLE OF setTimeout
function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(){
    setTimeout(() => console.log('Paper delivered to house 2'), 3000)//This will be the last to print to the console after 3 seconds.
}
function houseThree(){
    console.log('Paper delivered to house 3')
}
houseOne() 
houseTwo()
houseThree()



//CODE 03 EXAMPLE OF setTimeout AND CALLBACK
function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(callback){
    setTimeout(() => {
        console.log('Paper delivered to house 2')
        callback() //The callback() which in this case is houseThree runs immediately after the houseTwo runs
    }, 3000) //We set a timeout of 3 seconds for houseTwo to run
}
function houseThree(){
    console.log('Paper delivered to house 3')
}
houseOne()
houseTwo(houseThree) //houseTwo is higher Order function and houseThree is a callback




//CODE 04 EXAMPLE OF CALLBACK HELL OR PYRAMID OF DOOM
function houseOne(){
    setTimeout(() => {
        console.log('Paper delivered to house 1')
        setTimeout(() => {
            console.log('Paper delivered to house 2')
            setTimeout(() => {
                console.log('Paper delivered to house 3')
            }, 3000)
        }, 4000)
    }, 5000)
}
houseOne()



//CODE 05 EXAMPLE OF PROMISE
const promise = new Promise((resolve, reject) => {
    const error = false
    if(!error){
        resolve('Promise has been fullfilled')
    }else{
        reject('Error: Operation has failed')
    }
})
console.log(promise)
promise
    .then(data => console.log(data))
    .catch(err => console.log(err))



//CODE 06 EXAMPLE OF PROMISE CHAIN
function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}
function houseTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 5000)
    })
}
function houseThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}

houseOne()
    .then(data => console.log(data))
    .then(houseTwo)
    .then(data => console.log(data))
    .then(houseThree)
    .then(data => console.log(data))
    .catch(err => console.log(err))



//CODE 07 EXAMPLE OF ASYNC/AWAIT

function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}
function houseTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 5000)
    })
}
function houseThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}

async function getPaid(){
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}

getPaid()



//Code 08 --- Adding a try and catch block
async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
}
getACuteDogPhoto()

