import { SendMessageTypes } from "../Types";

export const phoneToJid = ({
  to,
  isGroup = false,
}: SendMessageTypes): string => {
  let number = to.toString();
  if (isGroup) {
    number = number.replace(/\s|[+]|[-]/gim, "");
    if (!number.includes("@g.us")) number = number + "@g.us";
  } else {
    number = number.replace(/\s|[+]|[-]/gim, "");
    if (!number.includes("@s.whatsapp.net"))
      number = number + "@s.whatsapp.net";
  }

  return number;
};
