import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.Name}</td>
      <td>{contact.Os}</td>
      <td>{contact.bootDisk} </td>
      <td>{contact.dataDisk}</td>
      <td>{contact.workloadType}</td>
      <td>{contact.appDescription}</td>
      <td>{contact.connection}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, contact)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;