/* Perform the following tasks:

Refactor the code to use template literals.
Refactor the code to use arrow function(s).
Refactor the code to use object destructuring.
*/

import people from './people.json';

people.forEach((person) => {
  const names = person.name.split(' ');
  const firstName = names[0];
  const lastName = names[1];
  const { email } = person;
  const { phone } = person;

  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email} \nPhone number: ${phone} \n`);
});
