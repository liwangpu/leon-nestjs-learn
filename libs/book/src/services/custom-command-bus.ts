import { Inject, Injectable, Scope } from '@nestjs/common';
import { ContextIdFactory, REQUEST } from '@nestjs/core';
import { CommandBus, ICommand, ICommandBus } from '@nestjs/cqrs';
// import { Inject } from '@nestjs/cqrs/node_modules/@nestjs/common';
// import { Injectable, Scope } from '@nestjs/cqrs/node_modules/@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomCommandBus implements ICommandBus {

  constructor(
    // @Inject(REQUEST) private request: any,
    private commandBus: CommandBus,
  ) { }

  execute<T extends ICommand>(command: T): Promise<any> {
    return this.commandBus.execute(command);
  }
}