import express from 'express';
import { Container } from 'inversify';
import { IRoomRepository } from '../interfaces/IRoomRepository';
import { INTERFACE_TYPE } from '../utils/appConst';
import { RoomRepositories } from '../repositories/RoomRepositories.repository';
import { IRoomInteractor } from '../interfaces/IRoomInteractor';
import { Room } from '../entities/Room';
import { RoomIteractors } from '../interactors/roomInteractors';
import { RoomController } from '../controllers/room.controller';

const container = new Container();
container
  .bind<IRoomRepository>(INTERFACE_TYPE.RoomRepository)
  .to(RoomRepositories);

container
  .bind<IRoomInteractor<Room>>(INTERFACE_TYPE.RoomInteractor)
  .to(RoomIteractors);
container.bind(INTERFACE_TYPE.RoomController).to(RoomController);

const router = express.Router();

const controller = container.get<RoomController>(INTERFACE_TYPE.RoomController);

router.post('/create', controller.onCreateRoom.bind(controller));
// router.get('/getsingleroom/:id', GetSingleRoom);
export default router;
