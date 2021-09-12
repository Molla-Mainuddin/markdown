import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

const App = ()=>{

    const[text,setText]=useState("");

    return(
      <>
        <div className="display">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <div className="text-write-div">
          <textarea className="text-area" 
            rows="15" 
            placeholder="write your text here by following markdown rules." 
            value={text} 
            onChange={(e)=>{setText(e.target.value)}} 
           />
        </div>
      </>
    );
}
export default App;
