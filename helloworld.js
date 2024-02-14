const myName = () => {
    return "Alberto"
}

const sayHello = (userName) => {
    return "Hello " + userName();
}

console.log(sayHello(myName));