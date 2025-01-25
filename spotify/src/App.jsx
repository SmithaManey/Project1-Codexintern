import React from "react";
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios"
import { useState  } from "react";



function App() {
  const [URL, setURL] = useState("")
  
  const handleURL = (e) => {
    e.preventDefault()
    setURL(e.target.value)
  }

  console.log(URL)
  const downloadSong = async () => {
    setURL("")
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
  params: {
    songId: 'https://open.spotify.com/track/7jT3LcNj4XPYOlbNkPWNhU'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };
    
    
    try{
      
      const rspn = await axios.request(options)
     // console.log(rspn.data.data.downloadLink)
      window.location.href = rspn.data.data.downloadLink
    } catch (error) {
      console.log(error)

    }
  }



  return(
    <div className="h-screen w-screen bg-gradient-to-tl from-zinc-200 via-cyan-400 to-zinc-200 flex items-center justify-center flex-col gap-y-5" >

       <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
         <SlSocialSpotify size={50}/>
         <p>Song Downloader</p>
       </div>
    
    
      <div className="flex gap-x-2">
         <input type="url"  className="h-10 w-[450px] border-none outline-none px-5 rounded-lg" onChange={handleURL}/>
         <button className="bg-white h-10 px-2 rounded-lg font-bold hover:bg-black hover:text-white" onClick={downloadSong} value={URL}>Download</button>
      </div>

    </div>
  )
}

export default App