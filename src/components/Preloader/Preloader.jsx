import { RotatingLines } from 'react-loader-spinner';

import React from 'react';

const Preloader = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <h2
                style={{
                    marginBottom: '30px',
                }}
            >
                Подождите, идет загрузка...
            </h2>

            <RotatingLines
                strokeColor='#f7cc50'
                strokeWidth='5'
                animationDuration='0.75'
                width='140'
                visible={true}
            />
        </div>
    );
};

export default Preloader;
