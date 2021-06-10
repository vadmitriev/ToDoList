export const sleep = (ms = 1) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
