import { useState } from "react";
import { RiBeerFill } from "react-icons/ri";
import { RiBeerLine } from "react-icons/ri";


const Like = () => {
  
    const [iconChange, setIconChange] = useState(true)
    const fillToggle = () => {
      setIconChange(!iconChange);
    }
  
    return (
      <>
          {iconChange ? <RiBeerFill size={80} onClick={fillToggle} /> : <RiBeerLine size={80} onClick={fillToggle} />}
      </>
    )
  }

export default Like