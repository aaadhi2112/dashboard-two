import React from 'react';
import './NavAvatar.css';

function NavAvatar() {
  return (
    <div className='avatar'>
        <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '40px', height: '40px' }}
                className='rounded-circle'
              />
              <div className='ms-2'>
                <p className='fw-bold mb-0' style={{fontSize:"12px"}}>John Doe</p>
                <p className='text-muted mb-0'  style={{fontSize:"12px"}}>john.doe@gmail.com</p>
              </div>
            </div>
    </div>


  )
}

export default NavAvatar