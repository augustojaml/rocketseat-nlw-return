import { prisma } from '../../prisma';
import {
  IFeedBacksRepository,
  ICreateFeedbacks,
} from '../IFeedbacksRepository';

export class FeedBacksPrismaRepository
  implements IFeedBacksRepository
{
  async create(data: ICreateFeedbacks) {
    await prisma.feedBack.create({
      data: data,
    });
  }
}
