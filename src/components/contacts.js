import React from 'react'

const Contacts = ({ contacts }) => {
contacts=Array.from(contacts)
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.empID}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.nam}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Contacts