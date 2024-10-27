
/*----creating react object with normal kind like creating element*
*
const heading = React.createElement("h1", { id: "heading"},"Hello world");
const root= ReactDOM.createRoot(document.getElementById("root"));
*/


/** 
 * 
 * <div id="parent">
 * 
 *      <div id="child">
 * 
 *          <h1> "I'm h1 tag"</h1>
 * 
 *       </div>
 * 
 * 
 * 
 * </div>
*/


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
