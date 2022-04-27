interface User {
  user: UserDetail;
}

type UserDetail = {
  name: string;
  token: string;
};

export type { User, UserDetail };
