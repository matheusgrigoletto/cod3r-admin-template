export default interface User {
  uid: string;
  email: string | null;
  name: string | null;
  token: string;
  avatarUrl: string | null;
  provider?: string;
}
