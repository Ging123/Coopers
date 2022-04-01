import Circles from './components/Circles/Index';
import Post from './components/Slide/Index';
import './styles.scss';

const GoodThingsContainer = () => {
  return (
    <div className='good-things-container'>
      <div className='background-green'>
        <h1>good things</h1>
        <Post/>
      </div> 
      <Circles/>
    </div>
  );
}

export default GoodThingsContainer;