import axios from 'axios'
import { useState, useEffect } from 'react';

function PostRequest () {

    const [message, setMessage] = useState([])
    const [user, setUser] = useState("No User Yet")

    useEffect(() => {
        axios.post("http://165.120.188.147:2514/createAccount").then((res) => {
            setUser(res.data.user)
        }).catch(console.log)
    }, [])

function getMessages() {

    axios.get("http://165.120.188.147:2514/getMessages") 
    .then((response)=>setMessage(response.data))
    .catch((error)=>setMessage("Error, please try again") )
}
 
const htmlMessages = []
for (let m of message)
{htmlMessages.push(<p>Name: {m.user}<br/>Message:{m.message}</p>)}


    return ( <div>
<h1>My Message Board : {user}</h1>
        <button onClick={()=>getMessages()}>Refresh Messages</button>
        <br/>
        {htmlMessages}
        </div>
     );
}

export default PostRequest ;