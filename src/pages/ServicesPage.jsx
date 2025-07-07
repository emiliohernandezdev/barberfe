import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart,  Spa } from '@mui/icons-material';

const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tabValue, setTabValue] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      id: 1,
      title: "Corte Clásico",
      description: "Corte tradicional con tijeras y máquina, terminado con navaja y productos premium.",
      duration: "45 min",
      price: 25,
      icon: <Spa fontSize="large" color="primary" />
    },
    {
      id: 2,
      title: "Arreglo de Barba",
      description: "Afeitado con toalla caliente, aceites esenciales y terminado con navaja.",
      duration: "30 min",
      price: 20,
      icon: <Spa fontSize="large" color="primary" />
    },
    {
      id: 3,
      title: "Tratamiento Capilar",
      description: "Hidratación profunda para el cabello con productos profesionales.",
      duration: "30 min",
      price: 30,
      icon: <Spa fontSize="large" color="primary" />
    },
    {
      id: 4,
      title: "Completo VIP",
      description: "Corte + Barba + Mascarilla revitalizante + Masaje capilar.",
      duration: "90 min",
      price: 60,
      icon: <Spa fontSize="large" color="primary" />
    }
  ];

  const products = [
    {
      id: 1,
      name: "Cera Modeladora Premium",
      description: "Fijación fuerte con acabado mate. Ideal para estilos modernos.",
      price: 15.99,
      category: "Estilización",
      image: "/productos/cera.jpg"
    },
    {
      id: 2,
      name: "Aceite para Barba",
      description: "Hidrata y suaviza la barba con aceites naturales de argán y jojoba.",
      price: 18.50,
      category: "Barba",
      image: "/productos/aceite-barba.jpg"
    },
    {
      id: 3,
      name: "Minoxidil Forte",
      description: "Tratamiento para crecimiento y fortalecimiento del vello facial.",
      price: 24.99,
      category: "Crecimiento",
      image: "/productos/minoxidil.jpg"
    },
    {
      id: 4,
      name: "Shampoo Anticaspa",
      description: "Limpia profundamente sin resecar el cuero cabelludo.",
      price: 12.99,
      category: "Cuidado",
      image: "/productos/shampoo.jpg"
    },
    {
      id: 5,
      name: "Pasta Modeladora",
      description: "Textura flexible con acabado natural. Control medio.",
      price: 14.99,
      category: "Estilización",
      image: "/productos/pasta.jpg"
    },
    {
      id: 6,
      name: "Bálsamo para Barba",
      description: "Nutre e hidrata la barba con manteca de karité y vitamina E.",
      price: 16.99,
      category: "Barba",
      image: "/productos/balsamo.jpg"
    }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 6, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: theme.palette.text.primary,
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                background: theme.palette.secondary.main,
                margin: '20px auto 0',
                borderRadius: '2px'
              }
            }}
          >
            Nuestros Servicios y Productos
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              mb: 4,
              color: theme.palette.text.secondary
            }}
          >
            Descubre todo lo que ofrecemos para tu cuidado personal y lleva la experiencia de la barbería a tu hogar.
          </Typography>
        </motion.div>

        {/* Pestañas */}
        <Paper sx={{ mb: 4, borderRadius: '12px', overflow: 'hidden' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.secondary.main,
                height: '3px'
              }
            }}
          >
            <Tab 
              label="Servicios" 
              sx={{ 
                fontWeight: 600,
                '&.Mui-selected': { color: theme.palette.text.primary }
              }} 
            />
            <Tab 
              label="Productos" 
              sx={{ 
                fontWeight: 600,
                '&.Mui-selected': { color: theme.palette.text.primary }
              }} 
            />
          </Tabs>
        </Paper>

        {/* Contenido de pestañas */}
        {tabValue === 0 && (
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 10px 25px ${theme.palette.primary.main}20`
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 3,
                          mb: 3,
                          borderRadius: '50%',
                          bgcolor: theme.palette.primary.light,
                          color: theme.palette.primary.main
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          color: theme.palette.text.primary,
                          fontWeight: 600
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: theme.palette.text.secondary
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Chip
                          label={service.duration}
                          sx={{ bgcolor: theme.palette.action.selected, fontWeight: 500 }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          ${service.price}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          px: 4,
                          fontWeight: 600,
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: theme.palette.secondary.dark
                          }
                        }}
                      >
                        Reservar
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 10px 25px ${theme.palette.primary.main}20`
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip
                        label={product.category}
                        size="small"
                        sx={{ 
                          mb: 2,
                          bgcolor: theme.palette.primary.light,
                          color: theme.palette.primary.main
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 1,
                          color: theme.palette.text.primary,
                          fontWeight: 600
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 3,
                          color: theme.palette.text.secondary
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main
                        }}
                      >
                        ${product.price.toFixed(2)}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<ShoppingCart />}
                        sx={{
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            borderColor: theme.palette.primary.dark
                          }
                        }}
                      >
                        Añadir al carrito
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Sección destacada */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <Paper
            sx={{
              mt: 6,
              p: 4,
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: '#fff',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              ¿Necesitas asesoramiento profesional?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: '700px', mx: 'auto' }}>
              Nuestros barberos pueden recomendarte los mejores productos según tu tipo de cabello y barba.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                px: 6,
                py: 1.5,
                fontWeight: 700,
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark
                }
              }}
            >
              Consultar con un barbero
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesPage;