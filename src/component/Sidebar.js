import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, Message, PeopleAlt, Tag } from '@mui/icons-material';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { db } from '../firebase';
import SidebarOption from './SidebarOption';

function Sidebar() {
    const [channels,loading,error] = useCollection(db.collection("rooms"));


  return <SidebarContainer>
  <SidebarHeader>
  <SidebarHeaderInfo>
      <h2>Rudra HQ</h2>
      <h3>
      <FiberManualRecord />
      Rudransh Sharma
      </h3>
  
  </SidebarHeaderInfo>
  <Create />

  </SidebarHeader>

  <SideOption>
  <SidebarOption icon={<Message />} name="Threads" />
  <SidebarOption icon={<Inbox />} name="Mentions & reactions" />
  <SidebarOption icon={<Drafts />} name="Saved items" />
  <SidebarOption icon={<BookmarkBorder />} name="Channel browser" />
  <SidebarOption icon={<PeopleAlt />} name="People & user groups" />
  <SidebarOption icon={<Apps />} name="Apps" />
  <SidebarOption icon={<FileCopy />} name="File browser" />
  <SidebarOption icon={<ExpandLess />} name="Show less" />

  <Channel>
      <SidebarOption icon={<ExpandMore />} name="Channel" />
  </Channel>

  <SidebarOption icon={<Add />} addChannelOption name="Add Channel" />
  {channels?.docs.map((doc) => (<SidebarOption key={doc.id} id={doc.id} name={doc.data().name}/>)
)}


  </SideOption>

  </SidebarContainer>;
}

export default Sidebar;

const SidebarContainer = styled.div`
display: flex;
flex: 0.3;
color: white;
height: 100vh;
flex-direction: column;
background-color: var(--slack-color)
`;
const SidebarHeader = styled.div`
display: flex;
align-items: center;
padding-bottom: 10px;
padding: 13px;
justify-content: space-between;
border-bottom: 1px solid #49274b;

> .MuiSvgIcon-root{
    padding: 8px;
    border-radius: 999px;
    color: #49274b;
    background-color: white;
}
`;
const SidebarHeaderInfo = styled.div`
> h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
> h3{
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
}
> h3 .MuiSvgIcon-root {
    font-size: 12px;
    color: greenyellow;
    padding-right: 5px;
}
`;

const SideOption = styled.div`
 padding-top: 10px;
`;

const Channel =styled.div`
padding: 10px 0;
margin: 10px 0;
border-top: 1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
`;



