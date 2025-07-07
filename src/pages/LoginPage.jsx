import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Divider, 
  IconButton,
  InputAdornment,
  Link,
  useTheme,
  useMediaQuery,
  Grid,
  Paper
} from '@mui/material';
import { Lock, Email, Visibility, VisibilityOff, Facebook, Google } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    console.log({ email, password });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        background: theme.palette.mode === 'dark' 
          ? theme.palette.background.default 
          : `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: '1000px' }}
      >
        <Paper
          elevation={6}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}
        >
          {/* Sección de imagen */}
          <Box
            sx={{
              width: isMobile ? '100%' : '45%',
              height: isMobile ? '200px' : 'auto',
              backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to bottom, ${theme.palette.primary.main}20, ${theme.palette.primary.dark}90)`
              }
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                p: 4,
                color: '#fff',
                zIndex: 2
              }}
            >
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Barbería Urbana
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Donde el estilo urbano se encuentra con la tradición barbera
              </Typography>
            </Box>
          </Box>

          {/* Sección del formulario */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: isMobile ? '100%' : '55%',
              p: 4,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography 
              variant="h5" 
              fontWeight={600} 
              gutterBottom
              sx={{ color: theme.palette.text.primary }}
            >
              Iniciar Sesión
            </Typography>
            
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              Ingresa tus credenciales para acceder a tu cuenta
            </Typography>

            <TextField
              fullWidth
              label="Correo electrónico"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? '#444' : '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.text.secondary,
                  '&.Mui-focused': {
                    color: theme.palette.primary.main,
                  },
                },
                mb: 2
              }}
            />

            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? '#444' : '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.text.secondary,
                  '&.Mui-focused': {
                    color: theme.palette.primary.main,
                  },
                },
                mt: 2
              }}
            />

            <Box sx={{ textAlign: 'right', mt: 1 }}>
              <Link 
                href="#" 
                variant="body2" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main
                  }
                }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: `0 5px 15px ${theme.palette.primary.main}40`,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Iniciar sesión
            </Button>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ 
                color: theme.palette.text.secondary,
                px: 2
              }}>
                o continúa con
              </Typography>
            </Divider>

            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              mb: 3
            }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Google />}
                sx={{
                  py: 1.5,
                  borderRadius: '12px',
                  textTransform: 'none',
                  borderColor: theme.palette.mode === 'dark' ? '#444' : '#ddd',
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Facebook />}
                sx={{
                  py: 1.5,
                  borderRadius: '12px',
                  textTransform: 'none',
                  borderColor: theme.palette.mode === 'dark' ? '#444' : '#ddd',
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                Facebook
              </Button>
            </Box>

            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.secondary,
                textAlign: 'center',
                mt: 2
              }}
            >
              ¿No tienes una cuenta?{' '}
              <Link 
                href="#" 
                sx={{ 
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Regístrate
              </Link>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginPage;