export type ISendProps = {
  subject: string;
  body: string;
};

export interface IMailAdapter {
  sendMail: (data: ISendProps) => Promise<void>;
}
