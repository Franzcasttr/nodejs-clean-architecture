export interface IRoomInteractor<T> {
  createRoom(room: T): Promise<T>;
  udpateRoom(id: string, room: T): Promise<T>;
  deleteRoom(id: string): Promise<void>;
  findOneRoom(): Promise<T>;
  findRoom(): Promise<T[]>;
  searchRoom(): Promise<T[]>;
}
