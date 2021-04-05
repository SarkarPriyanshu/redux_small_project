//Action Creator
// Register Action creator
export function Register(email, password) {
  // (Action)
  return {
    type: "REGISTER",
    payload: {
      email,
      password
    }
  };
}

// Login Action creator
export function Login_(email, password) {
  // (Action)
  return {
    type: "LOGIN",
    payload: {
      email,
      password
    }
  };
}
