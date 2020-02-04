import React from 'react';
import { toast } from 'react-toastify';

toast.configure()

function Toastity() {
  notifySuccess = () => {
    Notify.sendNotification('Success from View!', AlertTypes.success);
  }
  
  const notify = () => { 
    toast('Popped Notification', {position:toast.POSITION.TOP_LEFT});
    toast('Popped Notification', {position:toast.POSITION.TOP_CENTER});
    toast('Popped Notification', {position:toast.POSITION.TOP_RIGHT});
    toast('Popped Notification', {position:toast.POSITION.BOTTOM_LEFT});
    toast('Popped Notification', {position:toast.POSITION.BOTTOM_CENTER});
    toast('Popped Notification', {position:toast.POSITION.BOTTOM_RIGHT});
  }

  return (
    <div>
      <button className="btn btn-danger" onClick={notify}> Notify </button>
      </div>
  )
};


export default Toastity;
