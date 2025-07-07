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
  Avatar,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, Phone, Email, AccessTime, Star, ContentCut, Face, Check } from '@mui/icons-material';
import { useParallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import barberPoleAnimation from '../assets/lottie/pole.json';

const HomePage = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const containerRef = useRef(null);

  const bgParallax = useParallax({
    speed: -20,
    targetElement: containerRef.current || undefined,
  });
  
  const poleParallax = useParallax({
    speed: 10,
    rotate: [0, 5],
    targetElement: containerRef.current || undefined,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Datos de servicios
  const services = [
    {
      title: "Corte Clásico",
      description: "Corte tradicional con tijeras y máquina, terminado con navaja.",
      icon: <ContentCut fontSize="large" color="primary" />,
      price: "$25"
    },
    {
      title: "Barba Premium",
      description: "Afeitado con toalla caliente, aceites esenciales y terminado con navaja.",
      icon: <ContentCut fontSize="large" color="primary" />,
      price: "$20"
    },
    {
      title: "Combo Completo",
      description: "Corte de cabello + arreglo de barba + mascarilla revitalizante.",
      icon: <Face fontSize="large" color="primary" />,
      price: "$40"
    }
  ];

  // Membresías
  const memberships = [
    {
      name: "Básica",
      price: "$50/mes",
      features: ["2 cortes mensuales", "10% descuento en productos", "Reservas prioritarias"],
      popular: false
    },
    {
      name: "Premium",
      price: "$80/mes",
      features: ["4 cortes mensuales", "15% descuento en productos", "Servicio a domicilio", "Masaje capilar"],
      popular: true
    },
    {
      name: "VIP",
      price: "$120/mes",
      features: ["Cortes ilimitados", "20% descuento en productos", "Barbero personal", "Tratamientos exclusivos"],
      popular: false
    }
  ];

  // Testimonios
  const testimonials = [
    {
      name: "Juan Pérez",
      role: "Cliente frecuente",
      text: "La mejor barbería de la ciudad. Siempre salgo con un corte impecable y el trato es excelente.",
      avatar: "/static/images/avatar/1.jpg"
    },
    {
      name: "Carlos Gómez",
      role: "Cliente desde 2018",
      text: "El servicio de barba es increíble. Me siento como nuevo cada vez que voy.",
      avatar: "/static/images/avatar/2.jpg"
    },
    {
      name: "Miguel Torres",
      role: "Nuevo cliente",
      text: "Probé el combo completo y valió cada centavo. ¡Volveré seguro!",
      avatar: "/static/images/avatar/3.jpg"
    }
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        ref={containerRef}
        sx={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}dd, ${theme.palette.primary.main}aa)`,
            zIndex: 1
          }
        }}
      >
        {/* Fondo urbano con parallax */}
        <Box
          ref={bgParallax.ref}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    color: '#fff',
                    mb: 3,
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: isSmUp ? '4rem' : '2.5rem',
                    lineHeight: 1,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  Barbería <Box component="span" sx={{ color: theme.palette.secondary.main }}>Urbana</Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: 500,
                    mb: 4,
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: isSmUp ? '1.25rem' : '1rem',
                    fontWeight: 400,
                    fontFamily: "'Roboto', sans-serif",
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Donde el arte urbano se encuentra con la tradición barbera. Cortes que expresan tu estilo único en el corazón de la ciudad.
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText,
                      px: 6,
                      py: 2,
                      fontWeight: 700,
                      borderRadius: '50px',
                      boxShadow: `0 8px 20px ${theme.palette.secondary.main}88`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                        boxShadow: `0 12px 30px ${theme.palette.secondary.dark}aa`,
                        transform: 'translateY(-3px)'
                      },
                    }}
                  >
                    Reservar Ahora
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      border: '2px solid #fff',
                      color: '#fff',
                      px: 6,
                      py: 2,
                      fontWeight: 700,
                      borderRadius: '50px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '2px solid #fff',
                        transform: 'translateY(-3px)'
                      },
                    }}
                  >
                    Ver Galería
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box
                  ref={poleParallax.ref}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: isSmUp ? '500px' : '350px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >

                  <Box
                    sx={{
                      position: 'relative',
                    }}
                  >
                   <Lottie animationData={barberPoleAnimation} loop={true} />
                  </Box>
                  
                  {/* Efecto de luz */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '200%',
                      height: '200%',
                      background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                      zIndex: -1
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
        
        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) translateX(-50%)' },
              '40%': { transform: 'translateY(-20px) translateX(-50%)' },
              '60%': { transform: 'translateY(-10px) translateX(-50%)' }
            }
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#fff',
              mb: 1,
              textAlign: 'center',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            Desplázate
          </Typography>
          <Box
            sx={{
              width: '30px',
              height: '50px',
              border: '2px solid #fff',
              borderRadius: '15px',
              margin: '0 auto',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '10px',
                backgroundColor: '#fff',
                borderRadius: '2px',
                animation: 'scrollDown 2s infinite'
              },
              '@keyframes scrollDown': {
                '0%': { opacity: 1, top: '8px' },
                '100%': { opacity: 0, top: '24px' }
              }
            }}
          />
        </Box>
      </Box>

      {/* Servicios */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
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
              Nuestros Servicios
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center', 
                maxWidth: 700, 
                mx: 'auto', 
                mb: 6,
                color: theme.palette.text.secondary
              }}
            >
              Ofrecemos una experiencia premium en cuidado masculino con técnicas tradicionales y modernas.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: `0 10px 30px ${theme.palette.primary.main}33`
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Box sx={{ 
                        display: 'inline-flex', 
                        p: 3, 
                        mb: 3,
                        borderRadius: '50%',
                        bgcolor: theme.palette.primary.light,
                        color: theme.palette.primary.main
                      }}>
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
                      <Chip 
                        label={service.price} 
                        sx={{ 
                          bgcolor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          fontWeight: 700
                        }} 
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sobre Nosotros */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 3,
                    color: theme.palette.text.primary,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      display: 'block',
                      width: '80px',
                      height: '4px',
                      background: theme.palette.secondary.main,
                      margin: '20px 0 0',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Sobre <Box component="span" sx={{ color: theme.palette.secondary.main }}>Nosotros</Box>
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem'
                  }}
                >
                  Fundada en 2010, Barbería Elegante se ha convertido en un referente de estilo y tradición en la ciudad. Nuestro equipo de barberos certificados combina técnicas clásicas con las últimas tendencias.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem'
                  }}
                >
                  Nos enorgullecemos de ofrecer un ambiente acogedor donde cada cliente recibe atención personalizada y servicios de la más alta calidad.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText,
                      px: 4,
                      py: 1.5,
                      fontWeight: 700,
                      borderRadius: 3,
                      boxShadow: `0 8px 20px ${theme.palette.secondary.main}88`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                        boxShadow: `0 12px 30px ${theme.palette.secondary.dark}aa`,
                        transform: 'translateY(-2px)'
                      },
                    }}
                  >
                    Conoce al Equipo
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Star color="secondary" />
                    <Typography variant="body1" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      4.9/5 (250+ reseñas)
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: `0 25px 50px -12px ${theme.palette.primary.main}40`,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
                      zIndex: 1
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Barbería interior"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 0
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Membresías */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
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
              Membresías <Box component="span" sx={{ color: theme.palette.secondary.main }}>Exclusivas</Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center', 
                maxWidth: 700, 
                mx: 'auto', 
                mb: 6,
                color: theme.palette.text.secondary
              }}
            >
              Únete a nuestro programa de membresías y disfruta de beneficios exclusivos y descuentos especiales.
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {memberships.map((membership, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 4, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      border: membership.popular ? `2px solid ${theme.palette.secondary.main}` : 'none',
                      transform: membership.popular ? 'scale(1.05)' : 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: membership.popular ? 'scale(1.08)' : 'scale(1.03)',
                        boxShadow: `0 10px 30px ${theme.palette.primary.main}33`
                      }
                    }}
                  >
                    {membership.popular && (
                      <Chip 
                        label="POPULAR" 
                        sx={{ 
                          position: 'absolute',
                          top: -16,
                          right: 20,
                          bgcolor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          fontWeight: 700,
                          fontSize: '0.75rem'
                        }} 
                      />
                    )}
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        textAlign: 'center',
                        mb: 2,
                        color: membership.popular ? theme.palette.secondary.main : theme.palette.text.primary,
                        fontWeight: 700
                      }}
                    >
                      {membership.name}
                    </Typography>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        textAlign: 'center',
                        mb: 3,
                        color: theme.palette.secondary.main,
                        fontWeight: 800
                      }}
                    >
                      {membership.price}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List>
                      {membership.features.map((feature, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Check color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            sx={{ 
                              color: theme.palette.text.secondary,
                              '& .MuiListItemText-primary': {
                                fontSize: '0.95rem'
                              }
                            }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ mt: 'auto', pt: 3 }}>
                      <Button
                        fullWidth
                        variant={membership.popular ? "contained" : "outlined"}
                        size="large"
                        sx={{
                          backgroundColor: membership.popular ? theme.palette.secondary.main : theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          borderColor: theme.palette.primary.main,
                          py: 1.5,
                          fontWeight: 700,
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: membership.popular ? theme.palette.secondary.dark : theme.palette.primary.main,
                            color: membership.popular ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
                            borderColor: membership.popular ? theme.palette.secondary.dark : theme.palette.primary.main,
                            transform: 'translateY(-2px)'
                          },
                        }}
                      >
                        Unirse Ahora
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonios */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
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
              Lo Que Dicen <Box component="span" sx={{ color: theme.palette.secondary.main }}>Nuestros Clientes</Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center', 
                maxWidth: 700, 
                mx: 'auto', 
                mb: 6,
                color: theme.palette.text.secondary
              }}
            >
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      p: 3,
                      bgcolor: theme.palette.background.paper,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: `0 10px 30px ${theme.palette.primary.main}33`
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        sx={{ 
                          width: 60, 
                          height: 60,
                          mr: 2,
                          border: `2px solid ${theme.palette.primary.main}`
                        }} 
                      />
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: theme.palette.text.primary,
                            fontWeight: 600
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 3 }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} color="secondary" />
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Ubicación y Contacto */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 3,
                    color: theme.palette.text.primary,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      display: 'block',
                      width: '80px',
                      height: '4px',
                      background: theme.palette.secondary.main,
                      margin: '20px 0 0',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Visítanos
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem'
                  }}
                >
                  Estamos ubicados en el corazón de la ciudad, con fácil acceso y estacionamiento disponible.
                </Typography>
                
                <List sx={{ mb: 4 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LocationOn color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Calle Principal #123, Ciudad" 
                      secondary="Edificio Elegante, Segundo Piso" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        '& .MuiListItemText-secondary': {
                          color: theme.palette.text.secondary
                        }
                      }} 
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Phone color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="+1 234 567 8900" 
                      sx={{ color: theme.palette.text.primary }} 
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Email color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="contacto@barberiaelegante.com" 
                      sx={{ color: theme.palette.text.primary }} 
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <AccessTime color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Lunes a Sábado" 
                      secondary="9:00 AM - 8:00 PM" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        '& .MuiListItemText-secondary': {
                          color: theme.palette.text.secondary
                        }
                      }} 
                    />
                  </ListItem>
                </List>
                
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    px: 6,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: 3,
                    boxShadow: `0 8px 20px ${theme.palette.primary.main}88`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      boxShadow: `0 12px 30px ${theme.palette.primary.dark}aa`,
                      transform: 'translateY(-2px)'
                    },
                  }}
                >
                  Reservar Cita
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    height: '100%',
                    minHeight: 400,
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: `0 25px 50px -12px ${theme.palette.primary.main}40`,
                    position: 'relative'
                  }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449241641!3d40.74844047138985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623861240941!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Ubicación Barbería Elegante"
                  ></iframe>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;