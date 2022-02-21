import axios from "axios";
import { useState } from "react";

export const Search = () => {
  const [data, setData] = useState()

  
  return (
    <div>
      <h1>Google</h1>
      <input className="search-box" type="text" placeholder="search google" />
      <button onClick={()=>{
            haldesearch()
      }}>search</button>
    </div>

  
  );
  async function haldesearch(){
    let data = await axios.get("https://fast-reef-22226.herokuapp.com/data")
     console.log(data.data);
}
};


