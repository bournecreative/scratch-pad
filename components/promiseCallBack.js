export const promiseCallBack = (arg) => {
    return new Promise((resolve, reject) => {
        if (arg) {
            resolve(arg)
        } else {
            reject('Missing argument!!', )
        }
    })
}