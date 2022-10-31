// hooks
import { Link } from 'react-router-dom';

// components
import { Menu, MenuList } from '../components/Menu';

const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-around bg-red-500">
                {MenuList.map((menu: Menu, index: number) => (
                    <div key={index}>
                        <Link to={menu.path}>{menu.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
