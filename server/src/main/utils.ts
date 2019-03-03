import _ from 'lodash';
import { JWThelper } from '../helpers/jwt.helper';
import { AuthenticationError } from 'apollo-server-core';

/**
 * Handler for get user id from context
 * @param ctx - context
 */
export function getUserIdFromCtx(ctx) {
  const token = _.get(ctx, 'authInfo.token', '');
  if (token) {
    const { id } = JWThelper.decodeToken(token);
    return id;
  } else {
    throw new AuthenticationError('Token not found');
  }
}
