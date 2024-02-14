const myName = () => {
    return "Alberto"
}

const hello = () => {
    return "Hello"
}

const sayHello = (userName) => {
    return (hello() + " " + userName());
}

console.log(sayHello(myName));