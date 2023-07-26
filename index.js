function receivesAFunction (newFunction) {
    newFunction()
    return `Look at this ${newFunction} ayy`
}

function returnsANamedFunction () {
    const namedFunction = function (){}
    return namedFunction
}

const returnsAnAnonymousFunction = function () {
    () => {}

    return () => {}
}