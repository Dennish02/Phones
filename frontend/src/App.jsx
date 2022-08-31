import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "./redux/action";

function App() {
  const dispatch = useDispatch()
  const names = useSelector((state) => state.names);
function handlePeti(){
  dispatch(getBrands())
}
  return (
    <div >
     <h1>Hola</h1>
     <button
     onClick={handlePeti}
     >pedir</button>
<select name="" id="">

{
    names?   
    names.map(e=>(
      <option>{e.name}</option>
    ))

    : <p>NO nombres</p>
   }
</select>
 
    </div>
  )
}

export default App
