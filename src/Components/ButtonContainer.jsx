import React from 'react';

const ButtonContainer = (props) => {
    const text = props.children;
    console.log(text);
    return (
        <button className='text-md uppercase text-white border border-white hover:bg-rose-500 duration-500 px-5 py-1 rounded-full '>
            {text}
        </button>
    );
};

export default ButtonContainer;