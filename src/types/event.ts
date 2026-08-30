/** Mirrors bluebell-backend event.model.ts */

export interface Event {
  _id: string;
  title: string;
  category: string;
  type: string;
  desc: string;
  day: string;
  month: string;
  time: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
