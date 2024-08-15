import { useEffect, useState } from 'react';
import './App.css';
import { addAlien, back1msg } from './service/backend1';
import { back2msg, getAllAliens } from './service/Backend2';

function App() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [back1, setBack1] = useState("")
  const [back2, setBack2] = useState("")
  const [formAlien, setFormAlien] = useState({
    name: '',
    planet: ''
  });

  const [aliens, setAliens] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)

    addAlien(formAlien)
      .then(res=>{setMessage("added")})
      .catch(err=>{setMessage("error")})
      .finally(()=>{
        setFormAlien({
          name: '',
          planet: ''
        })
        setLoading(false)
        getAllAliens()
          .then(res=>setAliens(res.data))
          .catch(err=>console.log(err))
      })
  }

  useEffect(()=>{
    back1msg()
      .then(res=>{
        setBack1(res.data.message)
      })
    back2msg()
      .then(res=>{
        setBack2(res.data.message)
        getAllAliens()
          .then(res=>setAliens(res.data))
          .catch(err=>console.log(err))
      })
  },[])

  return (
    <div className='screen'>
      <div className="">{back1}</div>
      <div>{back2}</div>
      <div className="width-full flex align-center flex-column">
        <form onSubmit={handleSubmit}
        style={{width: '90%', maxWidth: '640px', margin: '36px', padding: '24px', borderRadius: '10px', boxShadow: '0 0 5px rgba(0,0,0,0.5)'}}>
          <div className='inter' style={{textAlign: 'center', fontSize: '36px', marginBottom: '24px'}}>
            Add Alien
          </div>
          <div style={{marginBottom: '16px'}}>
            <label htmlFor="name" className='inter' style={{fontSize: '20px'}}>Name</label>
            <input type="text" name="name" id="name" placeholder='please enter name' value={formAlien.name}
            onChange={(e)=>setFormAlien({...formAlien, name: e.target.value})} required/>
          </div>
          <div style={{marginBottom: '16px'}}>
            <label htmlFor="planet" className='inter' style={{fontSize: '20px'}}>Planet</label>
            <input type="text" name="planet" id="planet" placeholder='please enter planet' value={formAlien.planet}
            onChange={(e)=>setFormAlien({...formAlien, planet: e.target.value})} required/>
          </div>
          {message}
          {
            loading?
            <div className="flex" style={{justifyContent: 'end'}}>
              <input type="submit" value="Loading" style={{height: '44px', width: '100px', borderRadius: '26px'}} disabled/>
            </div>
            :
            <div className="flex" style={{justifyContent: 'end'}}>
              <input type="submit" value="Add" style={{height: '44px', width: '100px', borderRadius: '26px'}} />
            </div>
          }
        </form>
        <div style={{width: '90%', maxWidth: '640px', padding: '24px', borderRadius: '10px', boxShadow: '0 0 5px rgba(0,0,0,0.5)'}}>
          {aliens && aliens.map((alien, i)=>(
            <div key={i} style={{border: '1px solid black', padding: '16px', borderRadius: '5px', marginBottom: '16px'}}>
              <div className="inter">{alien.name}</div>
              <div className="inter">{alien.planet}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
