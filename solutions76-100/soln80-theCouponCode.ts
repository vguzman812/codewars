/**
 * PREP Method
 * Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
 * A coupon is no longer valid on the day AFTER the expiration date.
 * All dates will be passed as strings in this format: "MONTH DATE, YEAR".
 *
 * @param {string} enteredCode - The coupon code to be entered
 * @param {string} correctCode - The correct code that enteredCode will be checked against
 * @param {string} currentDate - The entered date for today
 * @param {string} expirationDate - The day the coupon code expires
 * @return {boolean} - return wether the coupon is valid or not
 * @example
 * Input: checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")
 * Output: true
 * Input: checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")
 * output: false
 * @pseudo
 * Check if enteredCode is the same as correctCode
 *  if not then return false
 *  if it is the same then on to next conditional
 *
 * initialize object
 * store month, day and year as properties in said object
 * make sure that month day and year are Number not Strings
 * set up switches to assign the month to a number.
 *
 *
 * check if currentDate is greater than expirationDate
 *  do this by first comparing year
 *  then month
 *  then day
 *      if greater then return false
 * return true
 */

export function checkCoupon(
	enteredCode: string,
	correctCode: string,
	currentDate: string,
	expirationDate: string
): boolean {
	if (enteredCode !== correctCode) return false;

	const monthToNum = (month: string): number => {
		switch (month.toLowerCase()) {
			case "january":
				return 1;
			case "february":
				return 2;
			case "march":
				return 3;
			case "april":
				return 4;
			case "may":
				return 5;
			case "june":
				return 6;
			case "july":
				return 7;
			case "august":
				return 8;
			case "september":
				return 9;
			case "october":
				return 10;
			case "november":
				return 11;
			case "december":
				return 12;
			default:
				return 0;
		}
	};

	interface Date {
		day: number;
		month: number;
		year: number;
	}

	let current: Date = {
		day: Number(currentDate.split(" ")[1].replace(",", "")),
		month: monthToNum(currentDate.split(" ")[0]),
		year: Number(currentDate.split(" ")[2]),
	};
	let exp: Date = {
		day: Number(expirationDate.split(" ")[1].replace(",", "")),
		month: monthToNum(expirationDate.split(" ")[0]),
		year: Number(expirationDate.split(" ")[2]),
	};

	// check year
	if (current.year > exp.year) return false;
	if (current.year < exp.year) return true;

	// check month
	if (current.month > exp.month) return false;
	if (current.month < exp.month) return true;

	// check day
	if (current.day > exp.day) return false;
	if (current.day < exp.day) return true;

	// Return true if all date parts are equal
	return true;
}

