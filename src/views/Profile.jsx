import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Profile = () => {
  return (
    <div className="text-center m-5">
    <h2 className="mb-2">Profile</h2>
    <i className="bi bi-person icon-circle mb-4"></i>
      <h4 className="mb-4">acavaelmail@gmail.com</h4>
      <button type="button" className="btn btn-outline-dark mb-4">
        Cerrar sesión
      </button>
    </div>
  )
}

export default Profile
