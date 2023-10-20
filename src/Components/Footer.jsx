import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid md:grid-flow-col gap-4 list-none">
                    <li>
                        <Link to="/productlist">All Products</Link>
                    </li>
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