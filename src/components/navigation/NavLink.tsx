import { Button, ButtonProps } from '@mui/material';

type NavLinkProps = {
  name: string;
  href: string;
  color?: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  fullWidth?: ButtonProps['fullWidth'];
  startIcon?: ButtonProps['startIcon'];
  endIcon?: ButtonProps['endIcon'];
  sx?: ButtonProps['sx'];
  disabled?: ButtonProps['disabled'];
  disableElevation?: ButtonProps['disableElevation'];
  disableFocusRipple?: ButtonProps['disableFocusRipple'];
};

const NavLink = ({ name, href, ...props }: NavLinkProps) => {
  return (
    <Button href={href} {...props}>
      {name}
    </Button>
  );
};

export default NavLink;
