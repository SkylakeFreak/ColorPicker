"use client";
import React, { useState } from 'react'

function Front() {

    const [re,setre]=useState(0);
    const [be,setbe]=useState(0);
    const [ge,setge]=useState(0);
    const [total,settotal]=useState([0]);
    const makeRandcolor=()=>{
        const r=Math.floor(Math.random()*255);
        const g=Math.floor(Math.random()*255);
        const b=Math.floor(Math.random()*255);
        setre(r);
        setge(g);
        setbe(b);
        settotal([r,g,b]);
        
        return `rgb(${r},${g},${b})`
    }
    const change=()=>{
        document.body.style.backgroundColor=makeRandcolor();
        
    }
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Copied to clipboard:', text);
            })
            .catch((error) => {
                console.error('Failed to copy:', error);
            });
    };
    const clickme=()=>{
        copyToClipboard(total.join());
    }
  return (
    <div className='flex p-5 md:p-10'>
        <button className='p-5 md:p-10 bg-black ml-2 mt-2 text-white' onClick={change}>Random Color</button>
        <p onClick={clickme} className=' p-5 md:p-10 ml-2 mt-2 bg-black text-white hover:animate-pulse cursor-pointer'>RGB({re},{ge},{be}) click to copy!</p>
        

    </div>
  )
}

export default Front