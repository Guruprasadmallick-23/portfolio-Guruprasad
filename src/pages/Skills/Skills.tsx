import {
  Typography,
  Box,
  Paper,
  Stack,
  Chip,
  Divider,
  Container,
} from "@mui/material";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: <CodeIcon color="primary" />,
    skills: [
      "React JS",
      "Next JS",
      "Vue JS",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Material UI",
      "React Query",
    ],
  },
  {
    title: "Backend & Systems",
    icon: <StorageIcon color="secondary" />,
    skills: [
      "Node JS",
      "Express JS",
      "Python (Flask)",
      "GraphQL",
      "REST API",
      "Sequelize",
      "SQL Alchemy",
    ],
  },
  {
    title: "Quality & Testing",
    icon: <SpeedIcon sx={{ color: "#4caf50" }} />,
    skills: [
      "Cypress (E2E)",
      "Jest (Unit Testing)",
      "SonarQube",
      "Code Reviews",
      "Technical Guidance",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <BuildIcon sx={{ color: "#ff9800" }} />,
    skills: ["VS Code", "GitHub", "Bitbucket", "Postman", "CI/CD Concepts"],
  },
];

export default function Skills() {
  return (
    <PageWrapper>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Header Section */}
        <Box
          sx={{
            mb: { xs: 6, md: 8 },
            textAlign: "center",
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
              display: "block",
            }}
          >
            TECHNICAL ARMORY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 2,
              fontSize: { xs: "2.4rem", sm: "3rem", md: "3.75rem" },
              lineHeight: 1.2,
            }}
          >
            Expertise built on{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              4 years
            </Box>{" "}
            of code.
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              opacity: 0.9,
            }}
          >
            From leading junior teams to architecting scalable frontend
            solutions, my toolkit is designed for enterprise-grade stability and
            performance.
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {skillCategories.map((cat) => (
            <Paper
              key={cat.title}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <Box
                  sx={{
                    bgcolor: "action.hover",
                    p: 1.5,
                    borderRadius: 2,
                    display: "flex",
                  }}
                >
                  {cat.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {cat.title}
                </Typography>
              </Stack>

              <Divider sx={{ mb: 3, opacity: 0.6 }} />

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {cat.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                      borderRadius: "8px",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Responsive Language Section */}
        <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: 4,
              display: "inline-flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
              alignItems: "center",
              gap: 2,
              border: "1px solid",
              borderColor: "divider",
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
              maxWidth: "500px",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <LanguageIcon color="action" />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Languages:
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
              useFlexGap
              gap={1}
            >
              {["Bengali", "English", "Hindi"].map((l) => (
                <Chip
                  key={l}
                  label={l}
                  size="small"
                  variant="filled"
                  color="primary"
                  sx={{ opacity: 0.9, fontWeight: 600 }}
                />
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>
    </PageWrapper>
  );
}
