import { getSession } from '@/lib/auth';
import { Button } from '@mui/material';

const homePage = async () => {
  const { user, isAuth } = await getSession();
  return (
    <main>
      <Button variant='contained'>Hello World</Button>
      {isAuth && user && (
        <div>
          <p>id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      )}
      {!isAuth && <div>You are not logged in</div>}
    </main>
  );
};

export default homePage;
