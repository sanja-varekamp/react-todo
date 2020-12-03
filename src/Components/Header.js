import React from 'react';
import '../App.css';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`${fadeIn}`;
const Paragraph = styled.p`animation: 3s ${fadein} ;`;


function header() {
    const today = new Date();
    
    return (    
        <div className="header">
          <h1>What do I have to do today?</h1>
          <Paragraph>{today.toDateString()}</ Paragraph>
        </div>
        
    );
  }
  
  export default header;