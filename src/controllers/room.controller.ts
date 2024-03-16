import { inject, injectable } from 'inversify';
import { RoomIteractors } from '../interactors/roomInteractors';
import { INTERFACE_TYPE } from '../utils/appConst';
import { Room } from '../entities/Room';
import { NextFunction, Request, Response } from 'express';
import { IRoomInteractor } from '../interfaces/IRoomInteractor';

@injectable()
export class RoomController {
  private interactor: IRoomInteractor<Room>;

  constructor(
    @inject(INTERFACE_TYPE.RoomInteractor) interactor: IRoomInteractor<Room>
  ) {
    this.interactor = interactor;
  }

  async onCreateRoom(
    req: Request<object, object, Room>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;

      const result = await this.interactor.createRoom(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
    // console.log(req.body);
    // res.send('success');
  }
}
