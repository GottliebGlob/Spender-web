import React from 'react';
import Router from "next/router";
import {signOut} from "../../utlits/firebase/auth";


export const MainPage = () => {

    const signOutHandler = async () => {
        await signOut()
        Router.push(`./`)
    }

    return (
        <div>
            <h1>Hello main page!</h1>
            <button onClick={signOutHandler} >
                Войти
            </button>
        </div>
    );
};

