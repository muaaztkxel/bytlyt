import { dominationMapping, dominations , coinsList} from "./constants"
import { CoinList } from "./type"

/**
 * This function takes a list of coins as an argument and using it
 * returns an object with information about the number of rolls and number of
 * coins that have not been rolled up, for every denomination. 
 * @param {CoinsList} list - A list of coins.
 * @returns {result<FinalResult>}
 */
export function arrangeCoinsInRoll(list: CoinList) {
    const inputCoinsWithLength:  { [key: string] : number } = {};
    const outupObj: { [key: string] : {rolls: number, rest: number } } = {};
    /** 
    * iterarting trough the whole list to get the length of all dominations
    */
    list.map((val: Number) => {
            if(!inputCoinsWithLength.hasOwnProperty(String(val))){
                inputCoinsWithLength[String(val)] = 0
            }
            inputCoinsWithLength[String(val)] += 1;
    })
    /** 
     * iterating to get the rolls 
     * to get the roll we will devide with the given exchange domination 
     * and the rest can eaily get with remainder 
    */
     dominations.map((domination: string) => {
        const totalCoins = inputCoinsWithLength[domination]
        outupObj[domination] = {
            rolls: parseInt(String(totalCoins / dominationMapping[domination])),
            rest: (totalCoins % dominationMapping[String(domination)]),
        }
    })
    return outupObj
}

(function(){
  // Main function
  console.table(arrangeCoinsInRoll(coinsList));
})()