import React from 'react';
import styles from "./HeaderLayout.module.scss"
import {Typography } from "@mui/material";


export const HeaderLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src="/trans-icon.png" className={styles.logo}/>
                <Typography variant="h5" className={styles.logoText}>Spender</Typography>
            </div>
        </div>
    );
};

