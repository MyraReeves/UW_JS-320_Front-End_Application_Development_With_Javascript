/* INSTRUCTIONS:
  Create a module that meets the following requirements:
    1. Create a class called HTMLElement.
        This class should have a constructor with two parameters:  tag and content.
          Both of these parameters should be stored as instance variables within the class.
        Instance variables should have the same names as the parameters.

    2. Once the HTMLElement class is created, add a function to the class called render
        It should be possible to call the render function publicly.
        This function should return the HTML element with the content provided.
        Within 'render', use a template literal to render the element.

  See the README for an example.
*/

// /////////////////////
// Define class here //
// ///////////////////
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    console.log(`HTML generated will be: ${this.tag} ${this.content}`);
    return this.tag + this.content;
  }
}

// ///////////
// Testing //
// /////////
const testingHTMLGenerator = new HTMLElement('<h1>', 'Test header');
testingHTMLGenerator.render();

// /////////////////////////////////////////////
// Export class here.                        //
// Change what is below to export the class //
// instead of an empty object literal.     //
// /////////////////////////////////////////
export default { HTMLElement };
