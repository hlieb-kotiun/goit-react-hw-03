import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.listItem} key={id}>
            <div className={s.wrapper}>
              <span className={s.span}>
                <FaUser />
                {name}
              </span>
              <span className={s.span}>
                <FaPhone />
                {number}
              </span>
            </div>
            <button className="" onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
