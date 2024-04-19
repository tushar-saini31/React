/*
<div id ="parent">
    <div id=" child">
    <h1></h1>
    <h2></h2>
    </div>
</div>    
*/
const parent = React.createElement(
    "div",{ id: "parent" },[
    React.createElement("div" , { id: "child1" },[
      React.createElement("h1", {}, "Iam a h1 tag"),
      React.createElement("h3", {}, "Iam a h2 tag"),
    ]),
    React.createElement("div", { id: "child2" },
    [
      React.createElement("h1", {}, "Iam a h1 of child1 tag"),
      React.createElement("h3", {}, "Iam a h2 of child2 tag"),
    ]),
  ]);
  
  const heading = React.createElement( 
    "h1",
    {
      id: "heading",
    },
    "welcome to react "
  );
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  