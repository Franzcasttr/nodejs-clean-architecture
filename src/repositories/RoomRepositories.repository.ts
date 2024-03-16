import { PrismaClient } from '@prisma/client';
import { Room } from '../entities/Room';
import { IRoomRepository } from '../interfaces/IRoomRepository';
import { injectable } from 'inversify';

@injectable()
export class RoomRepositories implements IRoomRepository {
  private client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
  async create({
    amenities,
    bathrooms,
    bedtype,
    bedrooms,
    beds,
    imageUrl,
    description,
    name,
    number_of_guests,
    price,
  }: Room): Promise<Room> {
    const result = await this.client.rooms.create({
      data: {
        name,
        imageUrl,
        price,
        bedtype,
        number_of_guests,
        bedrooms,
        beds,
        bathrooms,
        amenities,
        description,
      },
    });

    return result;
  }

  async udpate(
    id: string,
    {
      name,
      imageUrl,
      price,
      bedtype,
      number_of_guests,
      bedrooms,
      beds,
      bathrooms,
      amenities,
      description,
    }: Room
  ): Promise<Room> {
    const result = await this.client.rooms.update({
      where: {
        id,
      },
      data: {
        name,
        imageUrl,
        price,
        bedtype,
        number_of_guests,
        bedrooms,
        beds,
        bathrooms,
        amenities,
        description,
      },
    });
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.client.rooms.delete({
      where: { id },
    });
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  async findOne(id: string): Promise<Room | null> {
    const result = await this.client.rooms.findUnique({
      where: {
        id,
      },
    });
    return result;
  }

  async search(searchQuery: string, skip: number): Promise<Room[]> {
    const result = await this.client.rooms.findMany({
      skip,
      take: 10,
      where: {
        name: {
          contains: searchQuery,
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return result;
  }

  async find(): Promise<Room[]> {
    const result = await this.client.rooms.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return result;
  }
}
