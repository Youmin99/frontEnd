export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  _id: Scalars['String'];
  boardAddress?: Maybe<IBoardAddress>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  images?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  user?: Maybe<IUser>;
  writer: Scalars['String'];
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type IBoardAddress = {
  __typename?: 'BoardAddress';
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type IBoardAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IBoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['String'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  rating: Scalars['Float'];
  writer: Scalars['String'];
};

export type ICreateBoardCommentInput = {
  contents: Scalars['String'];
  password: Scalars['String'];
  rating: Scalars['Float'];
  writer: Scalars['String'];
};

export type ICreateBoardInput = {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  password: Scalars['String'];
  title: Scalars['String'];
  writer: Scalars['String'];
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['Int'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createBoardComment: IBoardComment;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteBoardComment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  loginUser: IToken;
  logoutUser: Scalars['Boolean'];
  restoreAccessToken: IToken;
  updateBoard: IBoard;
  updateBoardComment: IBoardComment;
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateBoardCommentArgs = {
  boardId: Scalars['String'];
  createBoardCommentInput: ICreateBoardCommentInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  password: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars['String'];
  password: Scalars['String'];
  updateBoardCommentInput: IUpdateBoardCommentInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoardComments: Array<IBoardComment>;
  fetchBoards: Array<IBoard>;
  fetchBoardsCount: Scalars['Int'];
  fetchUserLoggedIn: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardCommentsArgs = {
  boardId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsCountArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type IToken = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
};

export type IUpdateBoardCommentInput = {
  contents: Scalars['String'];
  rating: Scalars['Float'];
};

export type IUpdateBoardInput = {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Int']>;
};

export type IUser = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['Int'];
};
