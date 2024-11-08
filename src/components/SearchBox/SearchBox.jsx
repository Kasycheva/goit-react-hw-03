import s from "./SearchBox.module.css";
import { MdOutlinePersonSearch } from "react-icons/md";

const SearchBox = ({ onChange, value }) => {
  return (
    <div className={s.div}>
      <label className={s.text} htmlFor="search">
        <MdOutlinePersonSearch className={s.icon} />
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
