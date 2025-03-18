import React,{useState} from 'react'

const useToggle = (InitialState=false) => {
const [IsToggled, setToggle] = useState(InitialState)
const ToggleMenu=()=>setToggle((prev)=>!prev)
  return [
    IsToggled,
    ToggleMenu
  ]
}

export default useToggle
