import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from "firebase"

const ChatInput = ({channelName,channelId, chatRef}) => {
const [input,setInput] = useState("")

   const sendMessage = e => {
       e.preventDefault();
       if(!channelId){
           return false;
       }
       db.collection("rooms").doc(channelId).collection("messages").add({
           message: input,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           user: "Rudransh Sharma",
           profilePic: "https://yt3.ggpht.com/ytc/AKedOLRnP-ZVqmapcRJaQSHhww8JbqVxx8UeHiHkX0UkVA=s900-c-k-c0x00ffffff-no-rj",
       })

       setInput("");
   }



  return <ChatInputContainer>
    <form>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage} >
            SEND
        </Button>
    </form>

  </ChatInputContainer>;
};

export default ChatInput;

const ChatInputContainer =styled.div`
border-radius: 20px;

>form{
    position: relative;
    display: flex;
    justify-content: center;
}

>form >input{
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
>form >button{
    display: none !important;
}

`;