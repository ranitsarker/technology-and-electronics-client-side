import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext/DarkModeContext";
const Footer = () => {
    const { isDarkMode } = useDarkMode();

    // Use isDarkMode to conditionally style your about us content
    const footerStyle = {
      background: isDarkMode ? 'black' : 'white',
      color: isDarkMode ? 'white' : 'black',
    };
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded" style={footerStyle}>
                <nav className="grid md:grid-flow-col gap-4 list-none">
                    <li>
                        <Link to="/brands/apple">Apple</Link>
                    </li>
                    <li>
                        <Link to="/brands/samsung">Samsung</Link>
                    </li>
                    <li>
                        <Link to="/brands/sony">Sony</Link>
                    </li>
                    <li>
                        <Link to="/brands/google">Google</Link>
                    </li>
                    <li>
                        <Link to="/brands/intel">Intel</Link>
                    </li>
                    <li>
                        <Link to="/brands/microsoft">Microsoft</Link>
                    </li>
                </nav> 
                <aside>
                    <p>Copyright © 2023 - All right reserved by <Link className="underline" to="/">ElectraTech Ltd</Link></p>
                </aside>
                </footer>
        </>
    );
};

export default Footer;