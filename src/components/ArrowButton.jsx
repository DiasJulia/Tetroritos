import React from 'react';
import { StyledArrowButton } from './styles/StyleArrowButton';
import {StyledStartButton} from './styles/StyledStartButton';

const StartButton = ({callback, icon}) => (
    <StyledArrowButton onClick={callback}></StyledArrowButton>
)
export default StartButton;