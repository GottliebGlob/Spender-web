import firebase from "./clientApp";

interface User {
    id: string,
    email: string,
    name: string,
    value: string,
    aim: number,
    monthStartsFrom: number
}

export const signIn = async (email: string, password: string) => {
    try {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
               return firebase.auth().signInWithEmailAndPassword(
                    email, password
                );
            })

    } catch (error) {
        console.error(error);
    }
};

export const signUp = (email: string, password: string, name: string) => {
    return async () => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((response) => {
                        const uid = response.user.uid
                        const data: User = {
                            id: uid,
                            email,
                            name,
                            value: 'RU',
                            aim: 0,
                            monthStartsFrom: 0
                        };
                        const usersRef = firebase.firestore().collection('users')
                        usersRef
                            .doc(uid)
                            .set(data)
                            .then(() => {
                            })
                            .catch(error => {
                                console.log(error)
                            });
                    })
                    .catch(error => {
                        console.log(error)
                    });
            })
    }
};

export const signOut = () => {
    return async () => {
        await firebase.auth().signOut()
    }
}


