import { v4 as uuidv4 } from 'uuid'

export const getUniqueId = () => {
  return `${uuidv4()}-${generateUniqueStringWithTimestamp()}`;
}
const generateUniqueStringWithTimestamp = () => {
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');
const second = String(now.getSeconds()).padStart(2, '0');
const miliseconds = String(now.getMilliseconds());

return `${year}${month}${day}${hour}${minute}${second}${miliseconds}`;
}