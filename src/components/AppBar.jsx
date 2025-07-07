import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import { Link, useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "./CustomComponents";
import { useTheme } from "@mui/material/styles";
import { useAuthStore } from "../stores/AuthStore";
import { useCartStore } from "../stores/CartStore";

function Appbar({ darkMode, handleThemeChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const logout = useAuthStore(state => state.logout);
  const cart = useCartStore(state => state.cart);
  const theme = useTheme();
  const [localDarkMode, setLocalDarkMode] = useState(darkMode || false);

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);
  const handleSwitchChange = () => {
    setLocalDarkMode(prev => !prev);
    handleThemeChange();
  };
  const handleMenuOpen = event => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLoginClick = () => navigate("/login");
  const handleLogoutClick = () => {
    logout();
    navigate("/");
    handleMenuClose();
  };
  const handleCartClick = () => navigate("/cart");

  const navItems = [
    { label: "Inicio", path: "/", icon: <HomeIcon /> },
    { label: "Servicios", path: "/servicios", icon: <ContentCutIcon /> },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton onClick={handleCartClick}>
            <ListItemIcon>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Carrito" />
          </ListItemButton>
        </ListItem>

        {isAuthenticated ? (
          <>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/profile")}> 
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary="Mi perfil" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/order-history")}> 
                <ListItemIcon><HistoryIcon /></ListItemIcon>
                <ListItemText primary="Historial" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleLogoutClick}> 
                <ListItemIcon><LogoutIcon /></ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLoginClick}> 
              <ListItemIcon><LoginIcon /></ListItemIcon>
              <ListItemText primary="Iniciar sesión" />
            </ListItemButton>
          </ListItem>
        )}

        <ListItem disablePadding>
          <ListItemButton onClick={handleDialogOpen}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              letterSpacing: 1,
              color: theme.palette.info.main,
            }}
            onClick={() => navigate("/")}
          >
            Flowber
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map(item => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            ))}

            <IconButton color="inherit" onClick={handleCartClick}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isAuthenticated ? (
              <>
                <Button color="inherit" onClick={handleMenuOpen} startIcon={<AccountCircleIcon />}>
                  Mi cuenta
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={() => { navigate("/profile"); handleMenuClose(); }}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText>Mi perfil</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => { navigate("/order-history"); handleMenuClose(); }}>
                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                    <ListItemText>Historial</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon><LogoutIcon /></ListItemIcon>
                    <ListItemText>Cerrar sesión</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" onClick={handleLoginClick} startIcon={<LoginIcon />}>
                Iniciar sesión
              </Button>
            )}

            <IconButton color="inherit" onClick={handleDialogOpen}>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Configuración</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">Modo oscuro</Typography>
            <MaterialUISwitch checked={localDarkMode} onChange={handleSwitchChange} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Appbar;