import { Link } from "react-router-dom";
import MenuList from "../components/Menu";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-around bg-red-500">
        {MenuList.map((path, index) => (
          <div key={index}>
            <Link to={path.path}>{path.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
