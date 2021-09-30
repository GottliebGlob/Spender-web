import type {NextPage} from 'next'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from "react";
import {User} from '@firebase/auth-types';
import {signIn, signUp} from "../../utlits/firebase/auth";
import styles from "./index.module.scss"
import Router from "next/router";
import firebase from "../../utlits/firebase/clientApp";



const Home: NextPage = () => {
    //SignIn or SignUp
    const [signInMode, setSignInMode] = useState<boolean>(true)

    //Auth data
    const [user, setUser] = useState<User | null>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null)


    const getUserData = (): void => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged((user: User | null) => {
            console.log(user.uid + " user")
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document: any) => {
                        const userData = document.data()
                        setUser(userData)
                        Router.push(`main/`);
                    })
                    .catch((error: string) => {
                        console.log(error)
                    });
            }
        });
    }

    const signInHandler = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        await signIn(emailRef.current!.value, passwordRef.current!.value)
        getUserData()
    }

    const signUpHandler = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        await signUp(emailRef.current!.value, passwordRef.current!.value, nameRef.current!.value)
        getUserData()
    }

    const DoSignIn = () => {
        return (<div className={styles.authButtonBlock}>
            <button onClick={signInHandler} type="submit" className={styles.signButton}>
                Войти
            </button>
            <p className={styles.signText}> Еще нет аккакунта?</p>
            <button className={styles.signLink} onClick={() => setSignInMode(!signInMode)}> Зарегистрироваться</button>
        </div>)
    }

    const DoSignUp = () => {
        return (<>
            <div className={styles.formField}>
                <label htmlFor="name">Имя</label>
                <input id="name" type="name" ref={nameRef}/>
            </div>

            <div className={styles.authButtonBlock}>
            <button onClick={signUpHandler} type="submit" className={styles.signButton}>
                Зарегистрироваться
            </button>
                <p className={styles.signText}> Уже есть аккаунт?</p>
            <button className={styles.signLink} onClick={() => setSignInMode(!signInMode)}> Войти</button>
        </div>
        </>)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <form className="login">
                <div className={styles.formField}>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" ref={emailRef}/>
                </div>

                <div className={styles.formField}>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" ref={passwordRef}/>
                </div>
                {
                    signInMode ? <DoSignIn/> : <DoSignUp/>
                }

            </form>

        </div>
    )
}

export default Home