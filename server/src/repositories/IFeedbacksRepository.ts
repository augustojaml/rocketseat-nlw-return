export type ICreateFeedbacks = {
  type: string;
  comment: string;
  screenshot?: string;
};

export interface IFeedBacksRepository {
  create: (data: ICreateFeedbacks) => Promise<void>;
}
