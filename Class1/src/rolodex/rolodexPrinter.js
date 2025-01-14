/* Perform the following tasks:

Refactor the code to use template literals.
Refactor the code to use arrow function(s).
Refactor the code to use object destructuring.
Refactor the code to use array destructuring.
*/

import people from './people.json';

people.forEach((person) => {
  const [firstName, lastName] = person.name.split(' ');
  const { email } = person;
  const { phone } = person;

  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email} \nPhone number: ${phone} \n`);
});

/* It could also be refactored even shorter into:

people.forEach(({ name, email, phone }) => {
  const [firstName, lastName] = name.split(' ');

  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email} \nPhone
  number: ${phone} \n`);
});
*/
