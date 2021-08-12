import React from 'react';

import { StyledControls } from './styles/StyledControls';

import ArrowButton from './ArrowButton';

const Controls = ({ callbacks }) => {
    return (
        <StyledControls >
            <div className='rotate'>
                <div>
                    <ArrowButton callback={callbacks[0]} />
                    <ArrowButton callback={callbacks[1]} />
                </div>
                <div>
                    <ArrowButton callback={callbacks[2]} />
                    <ArrowButton callback={callbacks[3]} />
                </div>
            </div>
        </StyledControls>
    )
}

export default Controls;