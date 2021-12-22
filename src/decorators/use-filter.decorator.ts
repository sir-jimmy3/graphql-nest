import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { assocPath, mergeRight, pathOr, mapObjIndexed } from 'ramda';

export const UseFilter = createParamDecorator(
  (data, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs()[data];
    let output = {};
    if (args && args.pagination) {
      output = assocPath(
        [],
        mergeRight(
          pathOr({}, [''], args.pagination),
          mapObjIndexed((value) => {
            return value;
          }, args.pagination),
        ),
        output,
      );
    }
    if (args && args.filter) {
      output = assocPath(
        ['where'],
        mergeRight(
          pathOr({}, ['where'], args.filter),
          mapObjIndexed((value) => {
            return value;
          }, args.filter),
        ),
        output,
      );
    }
    if (args && args.order) {
      output = assocPath(
        ['order'],
        mergeRight(
          pathOr({}, ['order'], args.order),
          mapObjIndexed((value) => {
            return value;
          }, args.order),
        ),
        output,
      );
    }
    return output;
  },
);
