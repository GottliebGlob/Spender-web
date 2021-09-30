import React from 'react';
import styles from "./HeaderLayout.module.scss"



export const HeaderLayout = () => {
    // @ts-ignore
    return (
        <div className={styles.container}>
            <div>
                <img src="/trans-icon.png" className={styles.logo}/>
            </div>
        </div>
    );
};

