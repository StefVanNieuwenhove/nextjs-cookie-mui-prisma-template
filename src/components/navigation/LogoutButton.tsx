'use client';
import { logout } from '@/data-acces/auth';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    const response = await logout();

    if (response.type === 'success') router.push('/');
  };

  return (
    <Button variant='outlined' color='inherit' onClick={handleClick}>
      Logout
    </Button>
  );
};

export default LogoutButton;
