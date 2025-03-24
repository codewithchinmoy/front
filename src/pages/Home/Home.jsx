/*import React  from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
const Home = () => {
  const[category,setCategory ]= useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        
    </div>
  )
}

export default Home*/
import React, { useState } from 'react'; // Import useState
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';


const Home = () => {
  const [category, setCategory] = useState('All'); // Initialize state with "All"

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;