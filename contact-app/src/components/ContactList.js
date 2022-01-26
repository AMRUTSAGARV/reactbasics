import React  from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {           // if we want to pass the data from parent to the child we use (props)
    console.log(props);


const deleteContactHandler = (id) => {
    props.getContactId(id);
}
    const renderContactList = props.contacts.map((contact) => {
        return 
            <ContactCard contact={contact} clickHandler = {deleteContactHandler } key ={ contact.id}/>
        
    });
    return 
        <div className="ui called list">
            {renderContactList}
        </div>
    
};

export default ContactList;