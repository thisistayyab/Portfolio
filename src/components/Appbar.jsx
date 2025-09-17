import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  MenuItem,
  Divider
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../assets/favicon.png';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 12px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: '#232323ff',
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: 5,
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Services', href: '#service' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters >
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="Tayyab's Logo"
              sx={{
                width: 30,
                height: 30,
                borderRadius: 2,
                // p: 0.5,
                boxShadow: 1,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: 17,
                display: 'block',
              }}
            >
              ayyab's Portfolio
            </Typography>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none',sm:'flex', md: 'flex' }, ml: 4, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  variant="text"
                  color="white"
                  size="large"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Mobile Nav */}
          <Box sx={{ display: { xs: 'flex',sm:'none', md: 'none' } }}>
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { top: 'var(--template-frame-height, 0px)' } }}
            >
              <Box sx={{ p: 2, backgroundColor: '#0b0c10', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)} sx={{ color: '#fff' }}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {navItems.map((item) => (
                  <MenuItem key={item.label} component="a" href={item.href} sx={{ color: '#fff' }}>
                    {item.label}
                  </MenuItem>
                ))}
                <Divider sx={{ my: 3, borderColor: '#333' }} />
                <MenuItem>
                  <Button href="#contact" color="primary" variant="contained" fullWidth>
                    Contact
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
