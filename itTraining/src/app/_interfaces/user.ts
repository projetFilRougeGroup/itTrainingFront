export class IUser {
  idUser?:number;
  nomUser?:string;
  prenomUser?:string;
  email?:string;
  password?:string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: null | string;
}


export class ISingleUser{
  data?: IUser
}

export class IDataUser{
  data?: IUser[]
}

export class ITokenUser{
  idUser?: number;
  nomUser?: string;
  prenomUser?: string;
  email?: string;
  password?:string;
  iap?: number;
  exp?: number
}
