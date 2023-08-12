// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/typescript
export function number(busStops: [number, number][]): number {
    let on: number = 0;
    for (let i = 0; i < busStops.length; i++){
        let currentStop: [number, number] = busStops[i];
        for(let j = 0; j < currentStop.length; j++){
            if (j === 1){
                on -= currentStop[j]
            }
            else on += currentStop[j]
        }
    }
    return on >= 0 ? on : 0;
  }