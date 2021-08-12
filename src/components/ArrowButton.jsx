import React from 'react';
import {StyledStartButton} from './styles/StyledStartButton';

const StartButton = ({callback, icon}) => (
    <StyledStartButton onClick={callback}>{icon}</StyledStartButton>
)
export default StartButton;