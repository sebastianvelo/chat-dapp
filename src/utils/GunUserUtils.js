import GUN from "gun";
import 'gun/sea';
import 'gun/axe';
import { writable } from "svelte/store";

//Database
export const db = GUN();

//Gun user
export const user = db.user().recall({ sessionStorage: true });

//Current user's username
export const username = writable('');

user.get("alias").on(v => username.set(v));

db.on('auth', async (e) => {
    const alias = await user.get("alias");
    username.set(alias);

    console.log(`signed in as ${alias}`);
});


//Auth
export const signout = () => {
    user.leave();
    username.set("");
}

export const login = (username, password) => {
    user.auth(username, password, ({ err }) => err && alert(err));
};

export const signup = (username, password) => {
    user.create(username, password, ({ err }) => {
        if (err) alert(err);
        else login();
    });
};

//User
const getUserAlias = async (data) => await db.user(data).get("alias");
const getDecryptedMessage = async (data, key) => (await SEA.decrypt(data.what, key)) + "";
const getMessageTimestamp = (data) => GUN.state.is(data, "what");
export const getMessage = async (data, key) => ({
    who: await getUserAlias(data),
    what: await getDecryptedMessage(data, key),
    when: getMessageTimestamp(data),
});