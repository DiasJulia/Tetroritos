import React, { useState } from 'react';

import {createStage, checkCollision } from '../gameHelpers';

//componentes Personalizados com CSS
import { StyledTetris } from './styles/StyledTetris';
import { StyledTetrisWrapper } from './styles/StyledTetris';

//Custom Hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
//components
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer); 


    console.log('renderizando')

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
          updatePlayerPos({ x: dir, y: 0 });
        }
      };

    const startGame = () => {
        //reiniciar
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if (!checkCollision(player, stage, {x:0, y:1})){
            updatePlayerPos({x:0, y:1, collided: false})
        } else {
            if (player.pos.y < 1){
                console.log("Fim!");
                setGameOver(true);
            }
            updatePlayerPos({x: 0, y:0, collided: true})
        }   
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({keyCode}) => {
        if(!gameOver){
            if (keyCode === 37 || keyCode === 65){
                movePlayer(-1);
            } else if(keyCode === 39 || keyCode === 68) {
                movePlayer(1);
            }else if (keyCode === 40 || keyCode === 83) {
                dropPlayer();
            } else if(keyCode === 38 || keyCode === 87) {
                playerRotate(stage, 1);
            }
        }
            console.log(keyCode)
    }

    return (
        <StyledTetrisWrapper role='button' tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="game Over" />
                    ) : (
                            <div>
                                <Display text="Score" />
                                <Display text="Rows" />
                                <Display text="Level" />
                            </div>
                        )}
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris