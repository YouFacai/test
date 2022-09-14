var minEatingSpeed = function(piles, h) {
    piles.sort((a,b)=>a-b)
    if(piles.length == h) return piles[piles.length-1];
    let index= piles[0];
    let count = 0;
    while(count != h){
        count = 0;
        for(let val of piles){
            count+=Math.ceil(val / index)
        }
        if(count > h) {
            index++;
            continue;
        };
        if(count <= h) return index;
    }
};

console.log(minEatingSpeed([312884470],312884469))