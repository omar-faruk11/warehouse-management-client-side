import React from 'react';

const Blogs = () => {
    return (
        <div className=' container mx-auto mt-20 '>
            <div className="flex justify-center items-center text-2xl uppercase my-5"> My blogs</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className=" rounded rounded-l-none border-l-2 shadow-md border-rose-500 p-4  text-justify">
                    <h3 className="text-xl mb-1">
                        # Difference between javascript and nodejs.
                    </h3>
                    <p className="text-gray-600">
                        javascript is a programming language that is used for writing scripts on the website but Node js is a  javascript runtime environment of javascript.javascript can only be run in the browsers But node js can run anyware. javaxcript is a basically used on the client-side. But node js is use on the server-side. We can use HTML in javascript  but Node js does not have capability to add html tags.
                    </p>
                </div>
                <div className=" rounded rounded-l-none border-l-2 shadow-md border-rose-500 p-4  text-justify">
                    <h3 className="text-xl mb-1">
                        # When should you use nodejs and when should you use mongodb
                    </h3>
                    <p className="text-gray-600">
                        Node: Node js is use to build servers that can respond to web requests,  if you need To exchange data Immediately you can use Node js .
                            <br />
                        MongoDB: If your application needs  the ability to persistently store data in way. you can use mongoDb .                    </p>
                </div>
                <div className=" rounded rounded-l-none border-l-2 shadow-md border-rose-500 p-4  text-justify">
                    <h3 className="text-xl mb-1">
                        # Differences between sql and nosql databases.
                    </h3>
                    <p className="text-gray-600">
                        SQL is relational database management system.
                        NOSQL is Non-relational or distributed database system . SQL have not dynamic schema . It's have fixed or static.
                        But NOSQL have dynami schema. SQL database is best for complex queries . But NOSQL database is not good for complex queries .SQL database is not suited for hierarichicaldata storage. But NOSQL database is the best sulited for hierarchicle data storage.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;