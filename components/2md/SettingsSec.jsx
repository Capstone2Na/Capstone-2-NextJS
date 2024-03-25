import PropTypes from "prop-types";

const SettingsSec = ({ title, children }) => {
  return (
    <div className="w-full justify-center flex-col">
      <div className="px-3 py-2">
        <h6
          variant="body1"
          className="text-secondary bg-transparent opacity-70"
        >
          {title}
        </h6>
      </div>
      <div className="section bg-secondary w-full flex flex-col py-4">
        {children}
      </div>
    </div>
  );
};

SettingsSec.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequireds,
};

export default SettingsSec;
