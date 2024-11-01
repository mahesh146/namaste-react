import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";

// React.creatElement => REactElement -JS Object => HTMLElement(render);
const heading = React.createElement("h1", { id : "heading"}, "Hello React");


//JSX (traspiled before it reaches the JS) - PARCEL - Babel

//JSX => React.creatElement => REactElement -JS Object => HTMLElement(render); 
const jsxheading = <h1 className="head" tabIndex="5"> This is from JSX Heading</h1>

console.log(jsxheading);


// react element
//const elem = <span>React element</span> ;


// title component

 const Title = () =>(
 <div>
    
    <h1 className="heading" tabIndex= "5">This if from title component</h1></div>

 );

// react element
const titleElement = (
    <h1 className="heading" tabIndex= "5">This if from title element</h1>  
);

console.log(title);
const HeadingComponent = () =>(
  
    <div id="container">
        {titleElement}
        {<Title/>}
        <h1 className="heading">This is functional component</h1></div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<HeadingComponent/>);
//root.render(jsxheading); 