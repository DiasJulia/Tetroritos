import {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {createStage} from '../gameHelpers';


export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(()=>{
      setRowsCleared(0);

      const sweepRows = newStage =>
      newStage.reduce((ack, row) => {
        if(row.findIndex(cell => cell[0] ===0) === -1) {
          setRowsCleared(prev => prev +1);
          //O método unshift Adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
          //vai acrescentar o número de colunas deletadas ao topo do campo do jogo
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          //Dá a impressão de que as colunas restantes desceram
          return ack
        }
        ack.push(row);
        return ack;
      }, []);

        const updateStage = prevStage =>{
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
              );
        
              // Then draw the tetromino
              player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                  if (value !== 0) {
                    newStage[y + player.pos.y][x + player.pos.x] = [
                      value,
                      `${player.collided ? 'merged' : 'clear'}`,
                    ];
                  }
                });
              });
              //Verificar colisões
              if(player.collided) {
                resetPlayer();
                return sweepRows(newStage);
              }
              return newStage;
            };

        setStage(prev => updateStage(prev));

    }, [ player,
    resetPlayer,])

    return[stage, setStage, rowsCleared]
}