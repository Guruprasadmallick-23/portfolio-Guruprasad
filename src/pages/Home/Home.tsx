import { Typography, Box, Button, Container, Chip, Stack } from "@mui/material";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <Box
          className="hero-container"
          sx={{
            py: { xs: 4, sm: 8, md: 15 },
            textAlign: { xs: "center", md: "left" }, // Centers text on mobile
            alignItems: { xs: "center", md: "flex-start" }, // Centers items on mobile
          }}
        >
          {/* Tagline / Lead Status */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb: 2,
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Chip
              label="Available for New Opportunities"
              color="success"
              variant="outlined"
              size="small"
              sx={{ fontWeight: "bold" }}
            />
            <Typography
              variant="caption"
              sx={{
                opacity: 0.7,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                display: { xs: "none", sm: "block" }, // Hides on very small screens to save space
              }}
            >
              Senior Software Engineer
            </Typography>
          </Stack>

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" }, // Fluid font sizes
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            I build scalable{" "}
            <span className="text-gradient">web architectures</span>.
          </Typography>

          {/* Profile Summary */}
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mb: 5,
              lineHeight: 1.6,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
            }}
          >
            Hi, I'm Guruprasad Mallick. With 4 years of experience, I specialize
            in translating complex business requirements into high-performance
            applications using React, TypeScript, and Node.js.
          </Typography>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<RocketLaunchIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1.1rem",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Explore My Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<CodeIcon />}
              onClick={() => navigate("/skills")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1.1rem",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              View Technical Skills
            </Button>
          </Stack>

          {/* Tech Stack Preview */}
          <Box sx={{ mt: { xs: 6, md: 8 }, width: "100%" }}>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 2,
                opacity: 0.6,
                letterSpacing: 2,
              }}
            >
              Core Technologies
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                flexWrap: "wrap",
                gap: { xs: 2, md: 3 },
                opacity: 0.8,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                "React JS",
                "Node JS",
                "TypeScript",
                "Next JS",
                "GraphQL",
                "Python",
              ].map((tech) => (
                <Typography
                  key={tech}
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </PageWrapper>
  );
}
