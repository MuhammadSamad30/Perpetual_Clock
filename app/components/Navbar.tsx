import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Muhammad Samad</h1>
            </div>
        </header>
    );
};

export default Navbar;
