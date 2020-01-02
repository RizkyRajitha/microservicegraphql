import UserService from "#root/adapters/UserService";

const createUserResolver = async (obj, { email, password, name }) => {
  return await UserService.createUser({ email, password, name });
};

export default createUserResolver;
