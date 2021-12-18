import GUN from "gun";
import 'gun/sea';
import 'gun/axe';
import { user } from "./GunUserUtils";

const key = "#foo";

//Database
export const db = GUN();

export const chats = db.get("chat");
const getSecret = async (message) => await SEA.encrypt(message, key);
const generateIndex = () => new Date().toISOString();
export const saveMessage = async (decryptedMessage) => {
    const secret = await getSecret(decryptedMessage);
    const message = user.get("all").set({ what: secret });
    chats.get(generateIndex()).put(message);
}