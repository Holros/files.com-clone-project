import { useEffect, useRef, memo } from 'react';
import style from "../css/modal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function Modal({ data, show, setShow }) {
  const modalElement = useRef(null)
  console.log("Modal.js Rendered");
  const hideModal = () => {
    setShow(false)
  }  
  
  useEffect(()=>{
    if(show) {
      
    modalElement.current.style.display = "flex" 
     }
     else{
       
    modalElement.current.style.display = "none "
     }
  }, [show])
  const dataArray = Object.keys(data)
  const individualData = dataArray.map((individual) => <p style={{marginBottom:"8px"}}><span style={{color:"green"}}>{individual}</span> : {data[individual]}</p>
  )
  return (
    <div  ref={modalElement} className={style.modal}>
      <div className={style.modalContent}>
        <h2 style={{textAlign:"center", margin:"10px"}}>Your details has been submitted    <FontAwesomeIcon icon={faCheck} beatFade style={{color: "#38ab30",marginLeft:"10px", fontSize:"40px"}} /> </h2>
        <p style={{marginBottom:"15px", alignSelf:"flex-start"}}>Your Input has been recieved you inputted the following data:</p>
        <div style={{alignSelf:"flex-start"}}>
          {individualData}
        </div>
        <button onClick={hideModal} style={{backgroundColor:"green",padding:"10px 20px",color:"white",border:"none",borderRadius:"8px", outline:"2px solid white", position:"absolute", bottom:"15px"}}>Close</button>
      </div>  
    </div>
  );
}
export default memo(Modal);
