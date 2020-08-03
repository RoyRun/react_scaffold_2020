
export function func1(str) {
    console.log('func1....')
    return str.reverse();
}

export function slowImport(component, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(component)
        })
    }, time)
}