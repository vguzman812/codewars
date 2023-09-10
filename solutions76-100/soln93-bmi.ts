/**
 * https://www.codewars.com/kata/57a429e253ba3381850000fb/typescript
 * @description
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 *
 * @param {number} weight
 * @param {number} height
 * @returns {string} "Underweight" | "Normal" | "Overweight" | "Obese"
 * @example
 * Input: 80, 1.80
 * Output: "Normal"
 *
 * @pseudocode
 * square height.
 * divide wieght by squared height
 * conditinoals to check which msg to return
 *
 */

export function bmi(weight: number, height: number): string {
    let num = weight / (height**2);
    let msg: string;
    if (num <= 18.5){
        msg = "Underweight"
    } else if(num <= 25){
        msg = "Normal"
    } else if(num <= 30){
        msg = "Overweight"
    } else {
        msg = "Obese"
    }
    return msg;
}
