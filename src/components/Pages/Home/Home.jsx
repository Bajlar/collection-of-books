import React from 'react';
import LeftHomePart from './LeftHomePart';
import RightHomePart from './RightHomePart';


const Home = () => {
  return (
    <div className="container flex flex-col-reverse md:flex-row justify-between items-center mt-12">
      <LeftHomePart />
      <RightHomePart />
    </div>
  );
};

export default Home;