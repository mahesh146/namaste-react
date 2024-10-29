import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",{ id : "parent" },[

    /**
     * Before JSX writing code while importing react library into
     *  our 'div' tag.
     */
        
     React.createElement(
        "div",{id : "child1"},
        [React.createElement("h1",{}, "I'm H1 tag from child1"),React.createElement("h2", {},"Im in h2 tag from child1") ]),
        
     React.createElement(
        "div",{id : "child2"},
        [React.createElement("h1",{}, "I'm H1 tag from child2"),React.createElement("h2", {},"Im in h2 tag from child2") ])




    ]
        
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
