import React from 'react';
import styles from './HomePage.module.css';


const HomePage = (props) => {
    return (
        <main>
                <h3 className={styles.h3}>Welcome!</h3>
                <section className={styles.dSection}>        
                <p>Welcome to LibRo!</p>
                <p>Sign in or Sign Up to start keeping track of your books.</p>
                </section>    
        </main>
    );
}

export default HomePage;