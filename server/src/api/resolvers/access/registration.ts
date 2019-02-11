import { IAuthInfo } from 'interface';
import { AuthService } from '../../../main/service';

/**
 * Login function
 * @param email - user email
 * @param password - user password
 */
export async function registration(ctx, params): Promise<IAuthInfo> {
  return await AuthService.getRegistration(params);
}