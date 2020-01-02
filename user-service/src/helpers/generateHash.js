import bcrypt from "bcryptjs";

const generateHash = password => {
  var salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};
export default generateHash;
