import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

const ContactsList = ({contacts, deleteHandler}) => {
  return (
    <div className={styles.container}>
    <h3>contacts list</h3>
    {contacts.length ? ( <ul className={styles.contacts}>
      {contacts.map((contact) => (<ContactItem key={contact.id} data={contact} 
      deleteHandler = {deleteHandler} />))}
    </ul>) : <p className={styles.message}>No Contacts Yet!</p>}
    </div>
  )
}
export default ContactsList;