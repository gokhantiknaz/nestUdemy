import { AuditModel } from './audit.model';

export class UserModel {
  id: string; // mongoDb String verdiği için
  name: string;
  surname: string;
  image: string;
  password: string;
  audit: AuditModel;
}
