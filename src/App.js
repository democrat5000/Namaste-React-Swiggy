import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Body from "./components/Body";


// ======Hello World From React ==================
// const heading = React.createElement("h1", {className: "heading"}, "Hello World From React!!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// =========Nesting Structure==========

// const nesting = React.createElement("div", {id: "parent"}, 
//   React.createElement("div", {id: "child"},
//     React.createElement("h1", {id: "grandchild1"}, "I am an h1 tag")
//   )
// );

// =====Two nested grandchildren====

// 

// =====2 children & 2 sets of 2 grandchildren each======

// const nesting = React.createElement("div", {id: "parent"},
//   [
//     React.createElement("div", {id: "child1"},
//       [
//         React.createElement("h1", {id: "grandchild1"}, "I am h1 tag"),
//         React.createElement("h2", {id: "grandchild2"}, "I am h2 tag")
//       ],
//       React.createElement("div", {id: "child2"},
//         [
//           React.createElement("h1", {id: "grandchild3"}, "I am h1 tag"),
//           React.createElement("h2", {id: "grandchild4"}, "I am h2 tag")
//         ])
//       )])

// ====React Shorthand=======
// const e = React.createElement

// const nesting = e("div", {id:parent},
//   [e("div", {}, 
// [
//   e("h1", {}, "I am h1 tag"),
//   e("h2", {}, "I am h2 tag")
// ],
//   e("div", {}, 
// [
//   e("h1", {}, "I am h1 tag"),
//   e("h2", {}, "I am h2 tag")
// ])
// )]);

// ===Component Composition===

// const HeadingComponent = ()=> {
//   return (
//     <h1>I am a heading component</h1>
//   )
// }

// const GreetingComponent = ()=> {
//  return (<h2>I am a nested component</h2>) 
// }

// const ComponentComposition = ()=> {
//   return (
//     <div>
//       <HeadingComponent/>
//       <GreetingComponent/>
//     </div>
    
//   )
// }


// =======Root Create & Render=========



const AppLayout = ()=> {
  return(
    <div className="app">
      <Header/>
      <Banner/>
      <Body/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);