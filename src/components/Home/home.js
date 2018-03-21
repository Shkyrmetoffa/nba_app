import React from 'react';
import NewsSlider from '../widgets/NewsSlider/Slider';

const Home = () => {
  return (
    <div>
      <NewsSlider 
        type="features"
        start={0}
        end={4}
        settings={{
          dots: false
        }}
      />
    </div>
  );
};

export default Home;
