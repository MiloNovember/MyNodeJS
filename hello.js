function Hello () {
    let name = ''
    this.setName = function (theName) {
        name = theName
    }

    this.sayHello = function () {
        console.log('Hello ' + name);
    }
}

module.exports = Hello