import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function Toastity  () {
  const notify = () => { 
    toast('Popped Notification', {position:toast.POSITION.CENTER_CENTER});
  }

  return (
    <div>
      <button onClick={notify}> Notify </button>
      </div>
  )
};


export default Toastity;
