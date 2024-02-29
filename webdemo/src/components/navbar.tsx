import { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
    const [NavItems, setNavItems] = useState([]);

    useEffect(() => {
        fetchNavItems();
    }, []);

    const fetchNavItems = async () => {
        try {
            const res = await fetch('/api/nav-items');
            const navItems = await res.json();
            setNavItems(navItems);
        } catch (error) {
            console.error("Error fetching nav-items data:", error);
        }
    };

    console.log(NavItems);

    return (
        <nav>
            nav
        </nav>
    );
}