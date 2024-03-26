import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const UserProfile = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-28">
          <AccountCircleIcon className="size-auto w-full text-tertiary" />
        </div>
        <h4 className="text-center text-secondary opacity-90 pt-2 pb-1">
          User Name
        </h4>
        <h6 className="text-center text-secondary opacity-70">
          email@email.com
        </h6>
      </div>
    </div>
  );
};

export default UserProfile;
