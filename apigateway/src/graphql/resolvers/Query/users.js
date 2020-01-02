import UsersService from "#root/adapters/UserService";

const UsersResolver = async () => {
  return UsersService.fetchAllusers();
};

export default UsersResolver;
