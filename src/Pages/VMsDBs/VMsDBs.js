import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./VMsDBs.css";
import data from "./mock-data.json";
import ReadOnlyRow from "../../Components/Table/ReadOnlyRow";
import EditableRow from "../../Components/Table/Editable";

function VMsDBsPage() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    OS: "",
    bootDisk: "",
    dataDisk: "",
    workloadType: "",
    appDescription: "",
    connection: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    OS: "",
    bootDisk: "",
    dataDisk: "",
    workloadType: "",
    appDescription: "",
    connection: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      OS: addFormData.OS,
      bootDisk: addFormData.bootDisk,
      dataDisk: addFormData.dataDisk,
      workloadType: addFormData.workloadType,
      appDescription: addFormData.appDescription,
      connection: addFormData.appDescription,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      OS: editFormData.OS,
      bootDisk: editFormData.bootDisk,
      dataDisk: editFormData.dataDisk,
      workloadType: editFormData.workloadType,
      appDescription:editFormData.appDescription,
      connection: editFormData.connection,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      OS: contact.OS,
      bootDisk: contact.bootDisk,
      dataDisk: contact.dataDisk,
      workloadType: contact.workloadType,
      appDescription:contact.appDescription,
      connection: contact.connection,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <section>
      <h1>Virtual Machines and Databases</h1>
      <p>
        This page is for you to upload the customer's virtual machines and
        databases to be migrated
      </p>
      <h2>Virtual Machines</h2>
      <h4>Current Location (on-premise, other cloud)</h4>
      <div className="foundations-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Hypervisor</th>
                <th>Name</th>
                <th>OS (Version)</th>
                <th>Boot Disk Size</th>
                <th>Data Disk (Qtty and Size in Gb)</th>
                <th>Workload Type</th>
                <th>Application Description</th>
                <th>OCI Connection</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>

        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a hypervisor..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter a Name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter an OS version..."
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter a boot disk..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </section>
  );
}

export default VMsDBsPage;
