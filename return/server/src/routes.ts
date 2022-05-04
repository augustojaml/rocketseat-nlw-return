import { Router } from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';

import { prisma } from './prisma';
import { FeedBacksPrismaRepository } from './repositories/prisma/FeedBacksPrismaRepository';
import { CreateFeedBackUseCase } from './useCases/CreateFeedBackUseCase';

export const routes = Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedBackRepository = new FeedBacksPrismaRepository();
  const nodemailerMail = new NodemailerMailAdapter();
  const createFeedBack = new CreateFeedBackUseCase(
    feedBackRepository,
    nodemailerMail
  );

  await createFeedBack.execute({ type, comment, screenshot });

  res.status(201).json({ message: 'Feedback created' });
});
