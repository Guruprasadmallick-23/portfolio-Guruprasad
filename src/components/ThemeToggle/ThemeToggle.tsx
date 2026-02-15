import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface Props {
  mode: "light" | "dark";
  toggle: () => void;
}

export default function ThemeToggle({ mode, toggle }: Props) {
  return (
    <IconButton onClick={toggle} color="inherit">
      {mode === "dark" ? (
        <LightModeIcon />
      ) : (
        <DarkModeIcon sx={{ color: "#000" }} />
      )}
    </IconButton>
  );
}
