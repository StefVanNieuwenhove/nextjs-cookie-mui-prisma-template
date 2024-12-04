'use client';

import { signInSchema } from '@/lib/validation';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Link from 'next/link';
import { login } from '@/data-acces/auth';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    handleReset,
    touched,
  } = useFormik<yup.InferType<typeof signInSchema>>({
    validationSchema: signInSchema,
    initialValues: {
      email: 'stef@gmail.com',
      password: 'Stef1234!',
    },
    onSubmit: async (values) => {
      const { email, password } = values;
      const response = await login({ email, password });

      if (response.type === 'success') {
        router.push('/');
      } else {
        handleReset({
          email: '',
          password: '',
        });
      }
    },
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth='md'>
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            border: '1px solid',
            borderRadius: '5px',
            py: 2,
            px: 4,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}>
          <Box sx={{ borderBottom: '1px solid' }}>
            <Typography variant='h2' sx={{ textAlign: 'center' }}>
              Login
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              id='email'
              label='Email'
              variant='standard'
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              id='password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              variant='standard'
              required
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label={
                          showPassword
                            ? 'hide the password'
                            : 'display the password'
                        }
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge='end'>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <FormHelperText
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
                px: 4,
                py: 0,
              }}>
              <Link href='/forgot-password'>Forgot password?</Link>
            </FormHelperText>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant='outlined'
              sx={{ width: '100%' }}
              onClick={handleReset}>
              Reset
            </Button>
            <Button type='submit' variant='contained' sx={{ width: '100%' }}>
              Submit
            </Button>
          </Box>
          <Typography variant='body1'>
            Don&apos;t have an account? <Link href='/sign-up'>sign up</Link>
          </Typography>
        </FormControl>
      </form>
    </Container>
  );
};

export default SignInPage;
