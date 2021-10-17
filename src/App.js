import { useEffect, useState } from 'react';
import BreadCrumb from './components/BreadCrumb';
import Navbar from './components/Navbar';
import { getImages } from './services/api';
import Images from './components/Images';
import SnackBar from './components/SnackBar';

function App() {
  const[data, setData] = useState([]);
  const [text, setText] = useState('mountains');
  const [count, setCount] = useState(20);
  const [open, toggleSnack] = useState(false);


  useEffect(() => {

    if(count < 3 || count > 200){
      toggleSnack(true);
      return;
    }

    toggleSnack(false);

  getImages(text, count).then(res => {
    setData(res.data.hits)
    console.log(res.data.hits);
  }, )
},[text, count])

const onTextChange = (text) => {
  console.log(text)
  setText(text);
}

const onCountChange = (count) => {
  setCount(count);
}
  return (
    <>
      <Navbar/>
      <BreadCrumb onTextChange={onTextChange} onCountChange={onCountChange}/>
      <Images data = {data}/>
      <SnackBar open = {open} toggleSnack={toggleSnack}/>
    </>
  );
}

export default App;
