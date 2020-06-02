import { PostalAddress } from './postal-address';
import { UserSettings } from './user-settings';
export class User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  plan: '0';
  settings: UserSettings;
}
