import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as crypto from 'crypto';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const data = process.env.DATA_TO_VERIFY;
    const publicKey = process.env.PUBLIC_KEY;
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().loginUserInput;
    if (!request.body.signature) throw new Error('Please, provide signature!');
    const isVerified = crypto.verify(
      'sha256',
      Buffer.from(data),
      {
        key: `${publicKey}`,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      },
      Buffer.from(request.body.signature, 'base64'),
    );
    if (isVerified) return request;
    throw new Error('Please, sign with correct signature!');
  }
}
