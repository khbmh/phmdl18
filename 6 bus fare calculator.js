/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const passengerAge = 4;
const student = false;

const ticketFare = 800;

if (passengerAge < 10) {
  console.log(`Free`);
} else if (passengerAge >= 60) {
  console.log(`You have to pay:`, ticketFare * 0.85);
} else if (student) {
  console.log(`You have to pay:`, ticketFare * 0.5);
} else {
  console.log(`You have to pay:`, ticketFare * 1);
}
