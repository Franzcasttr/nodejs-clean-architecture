import { Room } from '../entities/Room';

export interface IRoomRepository {
  create({
    amenities,
    bathrooms,
    bedrooms,
    beds,
    bedtype,
    createdAt,
    description,
    imageUrl,
    name,
    number_of_guests,
    price,
  }: Room): Promise<Room>;
  udpate(id: string, room: Room): Promise<Room>;
  delete(id: string): Promise<void>;
  findOne(searchQuery: string, skip: number): Promise<Room | null>;
  search(searchQuery: string, skip: number): Promise<Room[]>;
  find(): Promise<Room[]>;
}
