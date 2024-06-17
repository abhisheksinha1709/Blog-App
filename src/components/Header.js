import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <h3>Blog Post</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="post"><button>New Post</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
