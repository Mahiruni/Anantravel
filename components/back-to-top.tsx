'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
export default function BackToTop(){const [show,setShow]=useState(false);useEffect(()=>{const f=()=>setShow(window.scrollY>500);window.addEventListener('scroll',f,{passive:true});f();return()=>window.removeEventListener('scroll',f)},[]);return <button className={`back-to-top ${show?'show':''}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp size={19}/></button>}
