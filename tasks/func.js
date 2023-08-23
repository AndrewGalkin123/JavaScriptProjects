var maxProfit = function(prices) {
    max = 0
    min = prices[0]
    for(let i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
};

let array = [6,1,56,1,5,2,1]
console.log(maxProfit(array))