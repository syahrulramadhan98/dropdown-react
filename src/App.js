import './App.css';
import Select from 'react-select';
import {useEffect, useState} from 'react';

function App() {
  const [datas, setDatas] = useState([])
  const [userSelect,setUserSelect] = useState("")
  const [isShow,setIsShow] =useState(false)

  const getData = async() =>{
    const callData = await fetch("https://pokeapi.co/api/v2/berry/")
    const valueData = await callData.json()
    const result = valueData.results.map(data=>{
      return {
        label: data.name,
        value: data.name
      }
    })
    setDatas(result.sort((a,b)=> a.label.localeCompare(b.label)))
  }
  useEffect(()=>{
    getData()
  }, [])

  const handleSubmit = () =>{
    setIsShow(state => !state)
  }

  const handleChange = (value) =>{
    setUserSelect(value)
  }

  return (
    <div className="App">
      <p>{isShow ? userSelect : ""}</p>
      <button onClick={() => handleSubmit()} disabled={!userSelect}>{isShow ? "Hide Button" : "Show Button"}</button>
      <Select options={datas} onChange={(e)=>handleChange(e.value)}></Select>
    </div>
  );
}

export default App;
