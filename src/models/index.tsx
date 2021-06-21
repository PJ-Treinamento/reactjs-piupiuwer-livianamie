export interface IPius {
	pius: IPiu[];
}
export interface IPiu {
  id: string;
	user: IUser;
	likes: IPiuLike[];
	text: string;
	created_at: Date;
	updated_at: Date;
}

export interface IPiuLike {
	id: string;
	user: IUser;
	piu: IPiu;
}

export interface IUser {
  id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: IPiu[];
	likes: IPiuLike[];
	following: IUser[];
	followers: IUser[];
	favorites: IPiu[];
}