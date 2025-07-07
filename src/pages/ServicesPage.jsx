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
  Tabs,
  Tab,
  Paper,
  Avatar,
  Badge,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ShoppingCart,
  Favorite,
  Star,
  CalendarToday,
  AccessTime
} from '@mui/icons-material';

const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState('services');
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // Datos mejorados
  const servicesData = [
    {
      id: 1,
      title: "Master Cut",
      description: "Corte de precisión con acabado premium incluyendo tratamiento térmico y acabado con navaja.",
      duration: 60,
      price: 45,
      rating: 4.9,
      icon: <Star />,
      category: "Corte"
    },
    // ... más servicios
  ];

  const productsData = [
    {
      id: 101,
      name: "Elixir Beard Serum",
      description: "Suero regenerador con aceite de argán y vitamina E para barbas más fuertes y sedosas.",
      price: 28.99,
      category: "Barba",
      rating: 4.7,
      image: "/products/beard-serum.jpg",
      isNew: true
    },
    // ... más productos
  ];

  return (
    <Box sx={{
      bgcolor: theme.palette.background.default,
      minHeight: '100vh',
      py: 8,
      px: { xs: 2, sm: 4 }
    }}>
      <Container maxWidth="xl">
        {/* Hero Header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          position: 'relative'
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 800,
            mb: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Experiencia Barbería Premium
          </Typography>
          <Typography variant="h6" sx={{
            color: theme.palette.text.secondary,
            maxWidth: 700,
            mx: 'auto',
            mb: 4
          }}>
            Descubre nuestros servicios exclusivos y la mejor selección de productos profesionales
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Button
              variant={activeTab === 'services' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('services')}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                ...(activeTab === 'services' ? {
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    bgcolor: theme.palette.primary.dark
                  }
                } : {
                  borderColor: theme.palette.mode === 'dark' ? '#555' : '#ddd',
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main
                  }
                })
              }}
            >
              Servicios
            </Button>
            <Button
              variant={activeTab === 'products' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('products')}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                ...(activeTab === 'products' ? {
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    bgcolor: theme.palette.primary.dark
                  }
                } : {
                  borderColor: theme.palette.mode === 'dark' ? '#555' : '#ddd',
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main
                  }
                })
              }}
            >
              Productos
            </Button>
          </Box>
        </Box>

        {/* Contenido principal */}
        {activeTab === 'services' && (
          <Grid container spacing={4}>
            {servicesData.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: theme.palette.background.paper,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#eee'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: theme.shadows[6]
                    }
                  }}>
                    <Box sx={{
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.main,
                      p: 3,
                      textAlign: 'center'
                    }}>
                      <Avatar sx={{
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        width: 60,
                        height: 60,
                        mx: 'auto',
                        mb: 2
                      }}>
                        {service.icon}
                      </Avatar>
                      <Typography variant="h5" sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.contrastText
                      }}>
                        {service.title}
                      </Typography>
                      <Chip
                        label={service.category}
                        size="small"
                        sx={{
                          mt: 1,
                          bgcolor: theme.palette.mode === 'dark' ? '#333' : theme.palette.grey[200],
                          color: theme.palette.text.primary
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="body1" sx={{
                        color: theme.palette.text.secondary,
                        mb: 3
                      }}>
                        {service.description}
                      </Typography>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                      }}>
                        <Star sx={{
                          color: theme.palette.warning.main,
                          mr: 1
                        }} />
                        <Typography variant="body2" sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500
                        }}>
                          {service.rating} ({Math.floor(service.rating * 20)} reseñas)
                        </Typography>
                      </Box>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 3
                      }}>
                        <AccessTime sx={{
                          color: theme.palette.text.secondary,
                          fontSize: '1rem'
                        }} />
                        <Typography variant="body2" sx={{
                          color: theme.palette.text.secondary
                        }}>
                          {service.duration} min
                        </Typography>
                      </Box>
                    </CardContent>
                    <Box sx={{
                      p: 3,
                      borderTop: `1px solid ${theme.palette.divider}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Typography variant="h5" sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary
                      }}>
                        ${service.price}
                      </Typography>
                      <Button
                        variant="contained"
                        startIcon={<CalendarToday />}
                        sx={{
                          borderRadius: '12px',
                          bgcolor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: theme.palette.secondary.dark
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

        {activeTab === 'products' && (
          <Grid container spacing={4}>
            {productsData.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: theme.palette.background.paper,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#eee'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: theme.shadows[6]
                    }
                  }}>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={product.image}
                        alt={product.name}
                        sx={{
                          objectFit: 'cover',
                          filter: theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none'
                        }}
                      />
                      <Box sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 2
                      }}>
                        <IconButton
                          onClick={() => toggleWishlist(product.id)}
                          sx={{
                            bgcolor: theme.palette.background.paper,
                            color: wishlist.includes(product.id) 
                              ? theme.palette.error.main 
                              : theme.palette.text.secondary,
                            '&:hover': {
                              bgcolor: theme.palette.background.paper
                            }
                          }}
                        >
                          <Favorite />
                        </IconButton>
                      </Box>
                      {product.isNew && (
                        <Box sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          bgcolor: theme.palette.success.main,
                          color: theme.palette.success.contrastText,
                          px: 2,
                          py: 0.5,
                          borderRadius: '12px',
                          zIndex: 2
                        }}>
                          <Typography variant="caption" sx={{
                            fontWeight: 700,
                            textTransform: 'uppercase'
                          }}>
                            Nuevo
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Chip
                          label={product.category}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.mode === 'dark' 
                              ? theme.palette.primary.dark 
                              : theme.palette.primary.light,
                            color: theme.palette.primary.contrastText,
                            fontWeight: 500
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Star sx={{
                            color: theme.palette.warning.main,
                            fontSize: '1rem',
                            mr: 0.5
                          }} />
                          <Typography variant="body2" sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500
                          }}>
                            {product.rating}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 1
                      }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" sx={{
                        color: theme.palette.text.secondary,
                        mb: 2
                      }}>
                        {product.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{
                      p: 3,
                      borderTop: `1px solid ${theme.palette.divider}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Typography variant="h5" sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary
                      }}>
                        ${product.price.toFixed(2)}
                      </Typography>
                      <Button
                        variant="contained"
                        startIcon={<ShoppingCart />}
                        sx={{
                          borderRadius: '12px',
                          bgcolor: theme.palette.mode === 'dark' 
                            ? theme.palette.secondary.dark 
                            : theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: theme.palette.secondary.dark,
                            boxShadow: `0 4px 12px ${theme.palette.secondary.main}30`
                          }
                        }}
                      >
                        Añadir
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Call to Action */}
        <Box sx={{
          mt: 10,
          textAlign: 'center',
          bgcolor: theme.palette.primary.main,
          p: 6,
          borderRadius: '16px',
          border: `1px solid ${theme.palette.divider}`
        }}>
          <Typography variant="h4" sx={{
            fontWeight: 800,
            mb: 2,
            color: theme.palette.primary.contrastText
          }}>
            ¿Necesitas asesoramiento personalizado?
          </Typography>
          <Typography variant="body1" sx={{
            color: theme.palette.primary.contrastText,
            maxWidth: 700,
            mx: 'auto',
            mb: 4
          }}>
            Nuestros expertos están listos para recomendarte los mejores servicios y productos según tus necesidades.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: '50px',
              px: 6,
              py: 1.5,
              fontWeight: 700,
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.secondary.dark
              }
            }}
          >
            Contactar a un barbero
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;