import React from 'react';
import About from './About';
import Preview from './Preview';
import Comments from './Comments';
import Context from './Context';


const Home = () => {
    return (
        <div>
            <Context />
            <About />
            <Preview />
            <Comments />
        </div>
    );
};

export default Home;