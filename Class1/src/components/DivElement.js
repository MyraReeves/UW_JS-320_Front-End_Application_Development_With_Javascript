/* INSTRUCTIONS:
Create a module that meets the following requirements:
  1. Create a class called 'DivElement' that extends the 'HTMLElement' class created previously.
     You'll need to import the class made in that file.
     The new class should have a constructor with one parameter: content
     The new class should inherit the 'render' function in the parent class
      (do not override it, aka define it in 'DivElement').
  2. Within the 'render' function, use a template literal to render the element.
See the README for an example.
*/

// //////////////////////// //
// Import HTMLElement here //
// ////////////////////// //
import HTMLElement from './HTMLElement';

// ////////////////// //
// Define class here //
// //////////////// //
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
  }

  render() {
    return `<div>${this.content}</div>`;
  }
}

// //////// //
// Testing //
// ////// //
// const andIThinkToMyself = new DivElement('What a wonderful world');
// console.log('\n')
// console.log(andIThinkToMyself.render());

// ////////////////// //
// Export class here //
// //////////////// //
export default DivElement;
