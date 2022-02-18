import Crypto from 'crypto-js';
const secret = 'test_abcd';

export const decryptAES = (value: string) =>
    Crypto.AES.decrypt(value, secret).toString(Crypto.enc.Utf8);
export const encryptAES = (value: string) => Crypto.AES.encrypt(value, secret).toString();
