import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import { db } from '../firebase';
import ChatInput from './ChatInput';
import Message from './Message';

const Chat = () => {
 const chatRef = useRef(null);   
 
 const roomId = useSelector(selectRoomId);

 const [roomDetails] = useDocument(roomId && db.collection("rooms").doc(roomId));

 const [roomMessage, loading] = useCollection(roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc"));

 useEffect(()=>{
     chatRef?.current?.scrollIntoView({
         behavior: "smooth",
     });

 },[roomId, loading])


  return <ChatContainer>
      <Header>
          <HeaderLeft>
             <h4><strong>#{roomDetails?.data().name}</strong></h4> 
             <StarBorderOutlined/>
          </HeaderLeft>
          <HeaderRight>
            <p><InfoOutlined/> Details</p>
          </HeaderRight>
      </Header>
      
      <ChatMesssage>
         {roomMessage?.docs.map((doc)=>{
             const {message, user, timestamp, profilePic} = doc.data();

             return (
                 <Message
                     key={doc.id}
                     message= {message}
                     user={user}
                     timestamp = {timestamp}
                     profilePic = {profilePic}

                 />
             )
         })}
         
       </ChatMesssage>

      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />

  </ChatContainer>;
};

export default Chat;

const ChatContainer = styled.div`
 flex: 0.7;
 flex-grow: 1;
 overflow-y: scroll  !important;
 > h1{
    color: black;
 }
`;

const Chatbottom = styled.div`
padding-bottom: 200px;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

 >h4{
     display: flex;
     text-transform: lowercase;
     margin-right: 10px;
 }
.MuiSvgIcon-root{
    margin-left: 10px;
    font-size: 18px;
}
`;
const HeaderRight = styled.div`
>p{
display: flex;
align-items: center;
font-size: 14px;
}
>p .MuiSvgIcon-root{
    margin-right: 5px;
    font-size: 16px;
}

`;

const ChatMesssage = styled.div`
 overflow-y: scroll  !important;
 padding-bottom: 200px;
`;
