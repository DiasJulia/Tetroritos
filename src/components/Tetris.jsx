import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

//componentes Personalizados com CSS
import { StyledTetris } from './styles/StyledTetris';
import { StyledTetrisWrapper } from './styles/StyledTetris';

//Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useEffect } from 'react';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';

//components
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';
import ArrowButton from './ArrowButton';
import Controls from './Controls';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    const [isMobile, setIsMobile] = useState(width <= 930);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    console.log('renderizando')

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    };

    const startGame = () => {
        //reiniciar
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setRows(0);
        setLevel(0);
        setGameOver(false);
    }

    const drop = () => {
        //Sobe de nivel a cada 10 colunas limpas
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200)
        }
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            if (player.pos.y < 1) {
                console.log("Fim!");
                setDropTime(null)
                setGameOver(true);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const dropPlayer = () => {
        setDropTime(null)
        drop();
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40 || keyCode === 83) {
                setDropTime(1000 / (level + 1) + 200)
            }
        }
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37 || keyCode === 65) {
                movePlayer(-1);
            } else if (keyCode === 39 || keyCode === 68) {
                movePlayer(1);
            } else if (keyCode === 40 || keyCode === 83) {
                dropPlayer();
            } else if (keyCode === 38 || keyCode === 87) {
                playerRotate(stage, 1);
            }
        }
        console.log(keyCode)
    }

    const leftTile = () => {
        movePlayer(-1);
    }

    const turnTile = () => {
        playerRotate(stage, 1);
    }

    const rightTile = () => {
        movePlayer(1);
    }

    const dropTile = () => {
        dropPlayer();
        setDropTime(1000 / (level + 1) + 200)
    }

    //Função achada na insternet que está nos hooks (useInterval)
    //Recebe uma função para realizar e um tempo de repetição
    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper
            role='button'
            tabIndex="0"
            onKeyDown={e => move(e)}
            onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside className='aside'>
                {isMobile ? (
                        
                        <Controls callbacks={[turnTile, rightTile, leftTile, dropTile]}></Controls>
                    ) : (
                        <div>
                        </div>
                    )

                    }
                    {gameOver ? (
                        <div className='d-md-flex'>
                            <Display gameOver={gameOver} text="game Over" />
                            <Display gameOver={gameOver} text="Hehe perdeu" />
                            <Display text={`Score ${score}`} />
                        </div>
                    ) : (
                        <div className='d-md-flex'>
                            <Display text={`Score ${score}`} />
                            <Display text={`Rows ${rows}`} />
                            <Display text={`Level ${level}`} />
                        </div>
                    )}
                    
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris