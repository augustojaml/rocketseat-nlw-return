import { IMailAdapter } from '../adapters/IMailAdapter';
import { IFeedBacksRepository } from '../repositories/IFeedbacksRepository';

type CreateFeedBackRequest = {
  type: string;
  comment: string;
  screenshot?: string;
};

export class CreateFeedBackUseCase {
  constructor(
    private feedBacksRepository: IFeedBacksRepository,
    private mailAdapter: IMailAdapter
  ) {}

  async execute(data: CreateFeedBackRequest) {
    //

    if (!data.type) {
      throw new Error('Type is required');
    }

    if (!data.comment) {
      throw new Error('comment is required');
    }

    if (data.screenshot && !data.screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }

    await this.feedBacksRepository.create(data);
    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p><b>Tipo do feedback</b>: ${data.type}</p>`,
        `<p><b>Comentário</b>:  ${data.comment}</p>`,
        data.screenshot ? `<p><img src="${data.screenshot}" /></p>` : '',
        `</div>`,
      ].join('\n'),
    });
  }
}
