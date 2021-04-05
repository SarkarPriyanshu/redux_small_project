//Reducers

export const Register = (DB = [], action) => {
  //check action is register
  if (action.type === "REGISTER") {
    return DB.push(action.payload);
  }
  // else do nothing
  return null;
};

export const Login_ = (DB, action) => {
  if (DB === undefined) {
    DB = [];
  }
  //check action is register
  if (action.type === "LOGIN") {
    const Auth = DB.some(
      (item) =>
        item.email === action.payload.email &&
        item.password === action.payload.password
    );

    return Auth;
  }
  // else do nothing
  return null;
};
