import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download"; // Icon for the resume button
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface Props {
  mode: "light" | "dark";
  toggle: () => void;
}

// Added "Home" to the beginning of the list
const navItems = ["Home", "About", "Experience", "Skills", "Contact"];

export default function Navbar({ mode, toggle }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to handle Resume Download
  const handleDownloadResume = () => {
    // Replace this URL with the actual path to your PDF file in the public folder
    const pdfUrl = "/Guruprasad_Mallick_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Guruprasad_Mallick_Resume.pdf"; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navStyles = (isActive: boolean) => ({
    px: 2,
    textTransform: "none",
    fontWeight: isActive ? 700 : 500,
    color: isActive ? "primary.main" : "text.secondary",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "transparent",
    },
  });

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: trigger
            ? mode === "dark"
              ? "rgba(18, 18, 18, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
          backdropFilter: trigger ? "blur(12px)" : "none",
          borderBottom: trigger ? "1px solid" : "none",
          borderColor:
            mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", px: { xs: 0 } }}>
            {/* Logo */}
            <Button
              component={Link}
              to="/"
              sx={{
                fontWeight: 800,
                fontSize: "1.2rem",
                textTransform: "none",
                color: mode === "dark" ? "#fff" : "#000",
                minWidth: "auto", // Prevents extra spacing
              }}
            >
              GM<span style={{ color: "#1976d2" }}>.</span>
            </Button>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {navItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Button
                    key={item}
                    component={Link}
                    to={path}
                    sx={navStyles(location.pathname === path)}
                  >
                    {item}
                  </Button>
                );
              })}

              {/* Resume Button (Desktop) */}
              <Button
                variant="outlined"
                color="primary"
                onClick={handleDownloadResume}
                startIcon={<DownloadIcon />}
                sx={{
                  ml: 2,
                  mr: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "20px",
                  borderWidth: "2px",
                  "&:hover": {
                    borderWidth: "2px",
                  },
                }}
              >
                Resume
              </Button>

              <Box sx={{ ml: 0 }}>
                <ThemeToggle mode={mode} toggle={toggle} />
              </Box>
            </Box>

            {/* Mobile Actions */}
            <Box
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
            >
              <ThemeToggle mode={mode} toggle={toggle} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, color: mode === "dark" ? "#fff" : "#000" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: "280px",
            backgroundColor: mode === "dark" ? "#121212" : "#fff",
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: "primary.main", ml: 1 }}
          >
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 2, mt: 2 }}>
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  component={Link}
                  to={path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: "8px",
                    mb: 1,
                    backgroundColor:
                      location.pathname === path
                        ? "rgba(25, 118, 210, 0.08)"
                        : "transparent",
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === path ? 700 : 500,
                      color:
                        location.pathname === path
                          ? "primary.main"
                          : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}

          {/* Resume Button (Mobile) */}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={handleDownloadResume}
              startIcon={<DownloadIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
                py: 1.5,
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px",
                },
              }}
            >
              Download Resume
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
