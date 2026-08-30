/** Mirrors bluebell-backend faq.model.ts */

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
