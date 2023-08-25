function memoize(fn) {
    let memo = new Map()
    return function(...args) {
        const key = Array.from(args).join("_")
        if(memo.has(key)) return memo.get(key)
        memo.set(key, fn(...args))
        return memo.get(key)
    }
}

console.log(...args.map((el) => el * 2))

