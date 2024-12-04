'use client';

import { forgotPasswordSchema } from '@/lib/validation';
import {
  Box,
  Button,
  Container,
  FormControl,
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
import { forgotPassword } from '@/data-acces/auth';
import { useRouter } from 'next/navigation';

const ForgotPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    handleReset,
    touched,
  } = useFormik<yup.InferType<typeof forgotPasswordSchema>>({
    validationSchema: forgotPasswordSchema,
    initialValues: {
      email: 'stef@gmail.com',
      password: 'Stef1234!',
      confirmPassword: 'Stef1234!',
    },
    onSubmit: async (values) => {
      const { password, email } = values;
      const response = await forgotPassword({
        email,
        password,
      });

      if (response.type === 'success') {
        router.push('/');
      } else {
        handleReset({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
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
              Sign Up
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
            <TextField
              id='confirmPassword'
              type={showConfirmPassword ? 'text' : 'password'}
              label='Confirm Password'
              variant='standard'
              required
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label={
                          showConfirmPassword
                            ? 'hide the password'
                            : 'display the password'
                        }
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge='end'>
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
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
            Do you already have an account? <Link href='/sign-in'>login</Link>
          </Typography>
        </FormControl>
      </form>
    </Container>
  );
};

export default ForgotPasswordPage;
