import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <Contact onDelete={onDelete} contacts={contacts} />
    </div>
  );
};

export default ContactList;
