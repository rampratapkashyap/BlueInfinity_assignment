import React from 'react'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'

export const Patient = ({ patients, deletePatient }) => {

  return patients.map(patient => (

    <tr key={patient.name}>
      <td>{patient.name}</td>
      <td>{patient.age}</td>
      <td>{patient.mobile}</td>
      <td className='delete-btn' onClick={() => deletePatient(patient.name)}>
        <Icon icon={trash} />
      </td>
      <td><a href="/invoice"> Invoice </a></td>

    </tr>

  ))
}
export default Patient
