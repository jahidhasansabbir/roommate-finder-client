import React from 'react';
import { NavLink } from 'react-router';

const MyListingRow = ({roommate}) => {
     const { _id,displayName, title, location, email } = roommate;
     const handleDeletePost=(id)=>{
        fetch('http://localhost:3000/delete', {
            method: 'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
     }
  return (
    <tr>
      <th>{title}</th>
      <td> {displayName}
      </td>
      <td>{email}
      </td>
      <td>{location}</td>

      <th className='flex flex-col gap-1'>
        <NavLink to={`/update/${_id}`} className="btn text-white bg-blue-600 btn-xs">Update</NavLink>
        <button onClick={()=>handleDeletePost(_id)} className="btn text-white bg-red-500 btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default MyListingRow;