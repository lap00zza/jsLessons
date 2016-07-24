/**
 * Created by Jewel Mahanta (@lap00zza) on 24-07-2016.
 */

/*
 Write a program to calculate the total price of your phone purchase. You
 will keep purchasing phones (hint: loop!) until you run out of money in
 your bank account. You'll also buy accessories for each phone as long as
 your purchase amount is below your mental spending threshold.

 After you've calculated your purchase amount, add in the tax, then print
 out the calculated purchase amount, properly formatted.

 Finally, check the amount against your bank account balance to see if you
 can afford it or not.

 You should set up some constants for the "tax rate," "phone price," "accessory price,"
 and "spending threshold," as well as a variable for your "bank account balance.""

 You should define functions for calculating the tax and for formatting the price with
 a "$" and rounding to two decimal places.

 Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..)
 covered in "Input" earlier. You may prompt the user for their bank account balance,
 for example. Have fun and be creative!
 */

const TAX_RATE = 0.25;
const PHONE_PRICE = 245;
const ACCESSORY_PRICE = 50;
const SPENDING_THRESHOLD = 5000;

var bank_account_balance = 10000;
var spent_amount = 0;

function tax(amount) {
    return (TAX_RATE * amount) + amount
}

function priceFormat(amount) {
    return "$" + amount.toFixed(2)
}

while(spent_amount < bank_account_balance){
    // Lets buy a new phone
    spent_amount += PHONE_PRICE;

    // To see if we can actually afford the phone
    if (spent_amount < SPENDING_THRESHOLD){
        spent_amount += ACCESSORY_PRICE;
    }
}

var total_amount = tax(spent_amount);
console.log("Cost of purchase: " + priceFormat(total_amount));

if(total_amount > SPENDING_THRESHOLD){
    console.log("You ran out of money LoL");
}