import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import NavLink from './NavLink';
import { getSession } from '@/lib/auth';
import LogoutButton from './LogoutButton';

const Navbar = async () => {
  const { isAuth } = await getSession();
  return (
    <>
      <AppBar position='sticky' sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Nextjs - template
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <NavLink name='Home' href='/' variant='outlined' color='inherit' />
            {isAuth ? (
              <LogoutButton />
            ) : (
              <NavLink
                name='Login'
                href='/sign-in'
                variant='outlined'
                color='inherit'
              />
            )}
            <NavLink
              name='Sing up'
              href='/sign-up'
              variant='outlined'
              color='inherit'
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
