import React from "react";
import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";


const Contacts = () => {
    
    const [contacts, setContacts] = useState([]);
    const [alert, setALert] = useState("");
    const [contact, setContact] = useState({
        id:"",
        name:"",
        lastname:"",
        email:"",
        phone:""
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({...contact, [name]: value}));
    };
    const AddHandler = () => {
    if (
        !contact.name ||
        !contact.lastname ||
        !contact.email ||
        !contact.phone
    ) {
        setALert ('please enter valid data!');
        return;
    }

    setALert("");
    const newContact = {...contact, id: v4()};
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
                name:"",
                lastname:"",
                email:"",
                phone:"",
            })
    };
    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }

  return (
   <div className={styles.container}>
    <div className={styles.form}>
    { inputs.map((input, index) => (
    <input 
        key={index}
        type={input.type} 
        placeholder={input.placeholder}
        name={input.name}
        value={contact[input.name]}
        onChange={changeHandler}
    />
    ))}
    <button onClick={AddHandler}>Add Contacts</button>
    <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
    <ContactsList contacts = {contacts} deleteHandler={deleteHandler}/>
   </div>
   </div>
  );
}
export default Contacts;