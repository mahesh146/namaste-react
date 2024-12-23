import { useEffect,useState } from "react";


//this hook checks the internet connection and tells the user in the UI if Internet goes off
//Any component that uses the useOnlineStatus hook will re-render due to the state change - in our case Body and Header component are getting re-rendered when internet goes on/off
const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

 //check if online
  //by using (https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event) Window.online event - superpower given to us by browsers that allow us to detect the online and offline status of the user's network connection.


    useEffect(()=>{


        window.addEventListener("offline", (event)=>{
            setOnlineStatus(false);
            console.log("No internet ❌❌❌" )
        });

        window.addEventListener("online", (event)=>{
            setOnlineStatus(true);
            console.log("You are now connected to the network 👌");
        })

    },[]);

    return onlineStatus;
}

export default useOnlineStatus