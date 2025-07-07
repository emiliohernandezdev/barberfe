import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box, Button, List, ListItem, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  const footerBackgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.grey[200];
  const footerTextColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

  return (
    <Box sx={{
      py: 6,
      bgcolor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 700,
                letterSpacing: 1
              }}
            >
              Barbería <Box component="span" sx={{ color: theme.palette.secondary.main }}>Elegante</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                opacity: 0.9
              }}
            >
              Especialistas en cortes clásicos y modernos para hombres que valoran el estilo y la tradición.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <Button
                  key={social}
                  variant="outlined"
                  size="small"
                  sx={{
                    minWidth: 40,
                    height: 40,
                    borderRadius: '50%',
                    borderColor: theme.palette.primary.contrastText,
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.main
                    }
                  }}
                >
                  <Box component="span" className={`fab fa-${social}`} />
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              Enlaces Rápidos
            </Typography>
            <List dense sx={{ py: 0 }}>
              {['Inicio', 'Servicios', 'Membresías', 'Galería', 'Equipo', 'Contacto'].map((item) => (
                <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                  <Button
                    sx={{
                      color: theme.palette.primary.contrastText,
                      opacity: 0.8,
                      '&:hover': {
                        opacity: 1,
                        color: theme.palette.secondary.main
                      }
                    }}
                  >
                    {item}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              Horario
            </Typography>
            <List dense sx={{ py: 0 }}>
              {[
                'Lunes: 9:00 AM - 8:00 PM',
                'Martes: 9:00 AM - 8:00 PM',
                'Miércoles: 9:00 AM - 8:00 PM',
                'Jueves: 9:00 AM - 8:00 PM',
                'Viernes: 9:00 AM - 8:00 PM',
                'Sábado: 9:00 AM - 6:00 PM',
                'Domingo: Cerrado'
              ].map((item) => (
                <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: theme.palette.primary.contrastText, opacity: 0.2 }} />
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            opacity: 0.7
          }}
        >
          © {new Date().getFullYear()} Barbería Elegante. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;