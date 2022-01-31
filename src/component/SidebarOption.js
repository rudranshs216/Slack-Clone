import { Tag } from '@mui/icons-material';
import React from 'react';
import {useCollection} from "react-firebase-hooks/firestore"
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

function SidebarOption({icon,name, addChannelOption, id}) {

const dispatch = useDispatch();

const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name");

    if (channelName){
        db.collection("rooms").add({
            name: channelName,
        })
    }
    
}
const selectChannel = () => {
  if(id){
   dispatch(enterRoom({
     roomId: id,
   }))
  }

}

  return <SideOp onClick={addChannelOption ? addChannel : selectChannel}>
  {icon ? <Icon> {icon} </Icon> : (<Icon> <Tag/> </Icon>)}
     
     <p>{name}</p>

  </SideOp>;
}

export default SidebarOption;

const SideOp = styled.div`
display: flex;
padding: 5px 0 5px 10px;
align-items: center;
cursor: pointer;
 :hover {
     background-color: rgba(0,0,0,0.1);
 }
`;

const Icon = styled.div`
  margin-right: 10px;
`;
