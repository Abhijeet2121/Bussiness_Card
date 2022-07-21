import './App.css';
import BussinessCard from './BussinessCard';
import data from './data';

function App() {

  const users = data.map(item => {
    return (
        <BussinessCard
            key={item.id}
            item={item}
            />
    )
    })
    return (
    <div className="App"> 
      {users}
    </div>
    );
    }

  export default App;
