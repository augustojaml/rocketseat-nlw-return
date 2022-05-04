import { IMailAdapter, ISendProps } from '../IMailAdapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a9e29e6213fb6f',
    pass: 'a6537b1e18fd36',
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail(data: ISendProps) {
    await transport.sendMail({
      from: 'Equipe Feedget <augustojaml@gmail.com>',
      to: 'Augusto Monteiro <jamonteirolima@gmail.com>',
      subject: data.subject,
      html: data.body,
    });
  }
}
