
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


// =======Root Create & Render=========
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nesting);