import { useState } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState("");
    const [author, setAuthor] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const getQuote = async ()=> {
          setLoading(true);
          setError(null);  
          setData("");
          setAuthor("");
          try{
              const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
              if(!res.ok) throw new Error("Fetch Failed");
              const json = await res.json();
              setData(json.text);
              setAuthor(json.source_url);
            } catch(err:any){
                setError(err.message);
            } finally{
                setLoading(false);
            }
    };
  return (
    <>
    <div className='Wrapper'>
        <div className='Container'>
          <h1 className='Headers'>Random Useless Facts Generator</h1>
          <div className='Container2'>
          </div>
        </div>

        <div className='Display'>
          <h1 id="DisplayText">
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && data && (
                <>
                  <p className='Quote'>"{data}"</p>
                  <p className='Author'>-{author}-</p>
                </>
            )}
          </h1>
        </div>
        <button onClick={getQuote} className='GenerateBtn'>
          Generate
        </button>
      </div>
    </>
  )
}

export default App;
