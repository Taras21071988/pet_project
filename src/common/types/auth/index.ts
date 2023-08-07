export interface IAuthState {
  user: IPablicUser;
  Islogged: boolean;
}

interface IPablicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updateAt: string;
  watchList: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
