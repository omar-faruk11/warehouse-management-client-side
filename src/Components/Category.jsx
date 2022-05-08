import React from 'react';

const Category = ({ category }) => {
    const { pcategory, image } = category;
    return (
        <div>
            <div className="grid grid-cols-5 bg-rose-200 rounded">
                <div className="col-span-2">
                    <img className='w-28 h-28 p-1' src={image} alt="" />
                </div>
                <div className="col-span-3 flex justify-center items-center capitalize">
                    <h3 className=' text-3xl '>{pcategory}</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;