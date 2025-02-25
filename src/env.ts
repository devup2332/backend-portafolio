process.loadEnvFile();
const { API_KEY_SEND_MAILER = "", PORT = 3000, TEMPLATE_ID = "" } = process.env;
export const env = {
  API_KEY_SEND_MAILER,
  PORT,
  TEMPLATE_ID,
};
