import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;

  @media(max-width: 930px){
    max-width: 90vw;
    max-height: 75vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(50vw / ${props => props.width})
    );
  }
`;