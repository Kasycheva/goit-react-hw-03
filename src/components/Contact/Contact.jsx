import s from "./Contact.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={s.contact}>
      <div className={s.info}>
        <p className={s.text}>
          <HiOutlineUserCircle className={s.icon} />
          {name}
        </p>
        <p className={s.text}>
          <TbPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => onDelete(id)}>
        <RiDeleteBin2Fill className={s.deleteIcon} />
      </button>
    </div>
  );
};

export default Contact;
