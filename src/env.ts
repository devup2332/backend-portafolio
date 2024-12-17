import "dotenv/config";

export const env = {
  API_KEY_SEND_MAILER: process.env.API_KEY_SEND_MAILER || "",
  PORT: process.env.PORT || "",
  TEMPLATE_ID: process.env.TEMPLATE_ID || "",
};
