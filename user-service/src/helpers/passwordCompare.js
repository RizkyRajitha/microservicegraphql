import bcrypt from "bcryptjs";

const compareHash = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export default compareHash;
