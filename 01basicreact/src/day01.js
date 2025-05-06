

/*
function App1() {
  return (
      <h1>Hello world</h1>
    //  <p>Welcome to my app!</p>  THIS LINE HAS AN ERROR
  );
}
*/

// The above code has an error because the return statement is not returning a single element.
// In React, a component must return a single root element. If you want to return multiple elements, you can wrap
//  them in a parent element like a <div> or use React fragments.

function App1() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Welcome to my app!</p>
      <h1>Hello world</h1>
    </div>
  );
}
export default App1;

/*
function App1() {
  return (
     
      <>
            <p>Welcome to my app!</p>
            <h1>Hello world</h1>
      </>
  );
}
  */
 // <> & </> is a shorthand for React.Fragment. It allows you to group multiple elements without adding an extra node to the DOM.
