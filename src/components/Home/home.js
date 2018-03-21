import React from 'react';
import NewsSlider from '../widgets/NewsSlider/Slider';
import NewsList from '../widgets/NewsList/NewsList';

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
      <NewsList 
        type="card"
        loadmore={true}
        start={1}
        amount={3}
      />
    </div>
  );
};

export default Home;
