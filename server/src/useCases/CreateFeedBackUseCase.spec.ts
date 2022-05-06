import { CreateFeedBackUseCase } from './CreateFeedBackUseCase';

let createFeedBack: CreateFeedBackUseCase;

const createFeedBackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('CreateFeedBackUseCase', () => {
  beforeEach(() => {
    createFeedBack = new CreateFeedBackUseCase(
      { create: createFeedBackSpy },
      { sendMail: sendMailSpy }
    );
  });

  it('should not be able to create feedback with type null', async () => {
    await expect(
      createFeedBack.execute({
        type: '',
        comment: 'fake-comment',
        screenshot: 'data:image/png;base64,sdfadsfadsfadslfaldksfç',
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create feedback with comment null', async () => {
    await expect(
      createFeedBack.execute({
        type: 'fake-BUG',
        comment: '',
        screenshot: 'data:image/png;base64,sdfadsfadsfadslfaldksfç',
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create feedback with  format screenshot', async () => {
    await expect(
      createFeedBack.execute({
        type: 'fake-BUG',
        comment: 'fake-comment',
        screenshot: 'sdfadsfadsfadslfaldksfç',
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create feedback', async () => {
    await expect(
      createFeedBack.execute({
        type: 'fake-BUG',
        comment: 'fake-comment',
        screenshot: 'data:image/png;base64,sdfadsfadsfadslfaldksfç',
      })
    ).resolves.not.toThrow();
  });
});
