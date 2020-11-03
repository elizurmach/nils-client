export interface User {
  userName: string;
  role: 'lab-tecnition' | 'system-admin' | 'lab-manager';
  displayName?: string;
  lastLogin?: Date;
}
