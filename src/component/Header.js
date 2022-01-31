import { AccessTime, HelpOutline, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

function Header() {
  return <HeaderContainer>
  <HeaderLeft >
  <HeaderAvatar/>
      
  </HeaderLeft>
  <HeaderMiddle>
      <AccessTimeIcon />
      <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder='Search'/>
      </HeaderSearch>

  </HeaderMiddle>
  <HeaderRight>
      <HelpOutlineIcon/>
  </HeaderRight>

  </HeaderContainer>;
}

export default Header;
const HeaderContainer = styled.div`
padding: 5px 0;
background-color: var(--slack-color);
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`;
const HeaderLeft = styled.div`
margin: 0 20px;
`;
const HeaderMiddle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 600px;

`;
const HeaderRight = styled.div`
margin: 0 20px;

`;
const HeaderSearch = styled.div`
margin: 10px;
display: flex;
align-items: center;
width: 100%;
background-color: #421f44;
border: 1px solid gray;
border-radius: 5px;

> input{
background-color: transparent;
border: none;
outline: none;
color: white;
font-size: 16px;
font-weight: 300;
text-align: center;    
width: 100%;
    }    
`;
const HeaderAvatar = styled(Avatar)`
 cursor: pointer;
 :hover{
     opacity: 0.8;
 }
`;
const AccessTimeIcon = styled(AccessTime)`
margin: 0 30px;
cursor: pointer;
`;
const SearchIcon = styled(Search)`
margin: 0 0 0 30px ;
cursor: pointer;

`;
const HelpOutlineIcon = styled(HelpOutline)`
cursor: pointer;

`;


