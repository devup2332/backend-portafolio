import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { env } from "../env";
import { Personalization } from "mailersend/lib/modules/Email.module";
import { Request, Response } from "express";
import { ContactSchema } from "../schemas/contactSchema";
import { logColor } from "../utils/logColor";

const mailerSend = new MailerSend({
  apiKey: env.API_KEY_SEND_MAILER,
});
export class ContactController {
  constructor() {}

  async sendEmail(req: Request, res: Response) {
    try {
      const parsed = ContactSchema.parse(req.body);

      const { email, firstName, lastName, phone, message } = parsed;

      const sentFrom = new Sender("drojas@drojascam.com", "Diego Rojas");

      const recipients = [new Recipient("devup2332@gmail.com", "Devup")];

      const body: Personalization[] = [
        {
          email: "devup2332@gmail.com",
          data: {
            full_name: `${firstName} ${lastName}`,
            message_body: message,
            message_phone: phone,
            message_email: email,
          },
        },
      ];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("Contact Message")
        .setTemplateId(env.TEMPLATE_ID)
        .setPersonalization(body);

      await mailerSend.email.send(emailParams);

      logColor("EMAIL WAS SEND SUCCESSFULLY", "green");
      res
        .json({
          message: "Email was sent successfully",
          status: 200,
        })
        .status(200);
    } catch (err) {
      console.error({ err });
      res
        .json({
          message: "An expected error",
          status: 500,
          err,
        })
        .status(500);
    }
  }
}
