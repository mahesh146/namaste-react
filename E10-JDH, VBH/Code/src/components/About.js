import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


//here trying one class based component (UserClass) inside another class based component (About) , in this case order of execution ----> 1)Parent Constructor - 2)Parent Render method - 3)Child Constructor - 4)Child Render method, hence this is how lifecycle of CBC works
// class About extends React.Component{ //can also be written like this ⬇️
class About extends Component{
  constructor(props){
    super(props);


    console.log("Parent Constructor");
  }
  componentDidMount(){
    // It is used for making api calls
    console.log("Parent Component did mount");
}


render(){

    console.log("Parent render");
    return(
      <div>
      <h1>About</h1>
      <h2>This is Namaste React Web series</h2>
      {/* <User name={"Passing props from user component"} /> */}
      <UserClass name={"User class1 :Passing props from {user class} component"} /> 
      {/* <UserClass name={"User class2;Passing props from {user class} component"} />  */}
{/*  all these props are combined into a single object and passed onto component*/ }
    </div> 
    )
}
}



// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web series</h2>
//       <User name={"Passing props from user component"} />
//       <UserClass name={"Passing props from {user class} component"} /> 
// {/*  all these props are combined into a single object and passed onto component*/ }
//     </div>
//   );
// };

export default About;
/**
 * 1. parent constructor
 *  -parent render
 *  - User class1 child constructor
 *  - User class1 child render
 *  - User class2 child constructor
 *  - User class2 child render
 * 
 * <DOM UPDATED - IN SINGLE BATCH - REACT IS OPTIMISING>
 *  - Child component did mount
 *  - Parent component did mount
 *  refer to thislink : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram///
 */