import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

const ToggleShowHide = (props) => {
  const { hidePassword, setHidePassword } = props;
  const { t } = useTranslation();
  const title = hidePassword ? t('labels.showPassword') : t('labels.hidePassword');

  return (
    <InputAdornment position="end">
      <Tooltip title={title}>
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setHidePassword(!hidePassword)}
          edge="end"
        >
          {hidePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Tooltip>
    </InputAdornment>
  );
};

ToggleShowHide.propTypes = {
  hidePassword: PropTypes.bool,
  setHidePassword: PropTypes.func,
};

const PasswordField = forwardRef(function PasswordField(props, ref) {
  const {
    color = 'primary',
    InputProps,
    error = false,
    fullWidth = true,
    noLabel = false,
    ...rest
  } = props;
  let { variant } = props;
  const [hidePassword, setHidePassword] = useState(true);
  // force variant to use 'standard'
  variant = 'standard';

  const labelProps = {
    color,
    shrink: true,
    variant,
    error,
    sx: (theme) => ({
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: 1,
      fontSize: theme.typography.body2.fontSize,
      transform: 'none',
    }),
  };

  const inputProps = {
    disableUnderline: true,
    type: hidePassword ? 'password' : 'text',
    sx: (theme) => ({
      borderRadius: 1,
      background: 'white',
      fontSize: theme.typography.body1.fontSize,
      border: `1px solid ${error ? theme.palette.error.main : theme.palette.grey[400]}`,
      '&:active, &:focus, &:hover': {
        border: `1px solid ${theme.palette[color].main}`,
      },
      py: 0.75,
      px: 1,
      minHeight: '42px',
      mt: noLabel ? '0px' : `${theme.spacing(3)} !important`,
      pr: 2,
    }),
    endAdornment: <ToggleShowHide hidePassword={hidePassword} setHidePassword={setHidePassword} />,
  };

  return (
    <TextField
      InputLabelProps={labelProps}
      InputProps={{ ...inputProps, ...InputProps }}
      variant={variant}
      ref={ref}
      error={error}
      color={color}
      fullWidth={fullWidth}
      {...rest}
    />
  );
});

PasswordField.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  error: PropTypes.bool,
  InputProps: PropTypes.any,
  fullWidth: PropTypes.bool,
  noLabel: PropTypes.bool,
};

export default PasswordField;
