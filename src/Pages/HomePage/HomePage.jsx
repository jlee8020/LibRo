import React from 'react';
import styles from './HomePage.module.css';


const HomePage = (props) => {
    return (
        <main>
                <h3 className={styles.h3}>Welcome!</h3>
                <section className={styles.dSection}>
                        <p>Test</p>
                </section>    
        </main>
    );
}

export default HomePage;