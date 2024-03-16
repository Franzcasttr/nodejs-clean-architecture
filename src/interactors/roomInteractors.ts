import { inject, injectable } from 'inversify';
import { Room } from '../entities/Room';
import { IRoomInteractor } from '../interfaces/IRoomInteractor';
import { IRoomRepository } from '../interfaces/IRoomRepository';
import { INTERFACE_TYPE } from '../utils/appConst';

@injectable()
export class RoomIteractors implements IRoomInteractor<Room> {
  private repository: IRoomRepository;
  constructor(
    @inject(INTERFACE_TYPE.RoomRepository) repository: IRoomRepository
  ) {
    this.repository = repository;
  }
  createRoom(room: Room): Promise<Room> {
    const data = this.repository.create(room);
    return data;
  }
  udpateRoom(id: string, room: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }
  deleteRoom(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOneRoom(): Promise<Room> {
    throw new Error('Method not implemented.');
  }
  findRoom(): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }
  searchRoom(): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }
}
