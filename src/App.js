import './App.css';
import { Navbar } from './components/navbar/Navbar.component';
import { useEffect , useState } from 'react';
import axios from 'axios';





function App() {

  const [data , setData ] = useState(null);

  const fetchData = async () => {
    const res = await axios.get("/api/v1/employee");
    const done = await res.data;
    setData(done);
    console.log(data);
  }

  useEffect(()=>{
    fetchData();
  },[data])


  return (
    <div className="App">
      <Navbar />
      {
        data.length && data.map(item => (
            <>
           <h1>{item.name}</h1>
           <h2>{item.email}</h2>
           </>
         )
        )
      }
    </div>
  );
}

export default App;
