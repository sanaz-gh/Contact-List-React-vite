import React from "react";
import styles from "./ContactItem.module.css";
// Icons
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";



const ContactItem = ({
    data: {
        id, name, lastName, email, phone },
        deleteHandler,
}) => {
  return (
    <li className={styles.item} key={id}>
    <p>{name} {lastName}</p>
    <p>
    <span></span>
    {email}
    </p>
    <p>
    <MdOutlineMailOutline style={{ color: 'blue'}}/>
    <span></span>
    {phone}
    </p>
    <FaPhone style={{ color: 'blue'}} />
    <p>
    <HiArchiveBoxXMark onClick={()=> deleteHandler(id)} style={{ color: 'blue'}}  />
    </p>
    </li>
  )
}
export default ContactItem;