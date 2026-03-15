import {
  Typography,
  Box,
  Paper,
  Stack,
  Chip,
  Divider,
  // useTheme,
  // useMediaQuery,
} from "@mui/material";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";

const experiences = [
  {
    company: "Infojini Consulting Pvt Ltd",
    role: "Senior Software Engineer",
    period: "08/2024 – Present",
    highlights: [
      "Orchestrating high-performance frontend architectures using React, TypeScript, and modern state management patterns.",
      "Serving as a technical lead for a 3-member junior development team, fostering a culture of excellence through code reviews.",
      "Ensuring enterprise-grade stability by implementing automated unit testing with Jest and E2E testing with Cypress.",
      "Taking full ownership of the development lifecycle, from initial UI conceptualization to production deployment.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Sequelize",
      "SonarQube",
      "Cypress",
    ],
  },
  {
    company: "KPi-Tech Services",
    role: "Software Programmer",
    period: "04/2023 – 07/2024",
    highlights: [
      "Engineered scalable frontend solutions and robust backend services using a polyglot approach with Node.js and Python.",
      "Optimized end-to-end data flow by designing and integrating complex RESTful APIs.",
      "Collaborated in cross-functional environments to deliver high-impact features within tight agile sprints.",
      "Reduced technical debt by proactively debugging and refactoring legacy modules for better performance.",
    ],
    tech: ["React", "Node.js", "Python", "Flask", "SQLAlchemy", "REST API"],
  },
  {
    company: "WebMobi (Mendios Technologies)",
    role: "Front End Developer",
    period: "03/2022 – 04/2023",
    highlights: [
      "Developed modern, responsive user interfaces utilizing both React and Vue.js frameworks.",
      "Managed complex application states using Redux and React Query to ensure a seamless user experience.",
      "Translated high-fidelity design specifications into pixel-perfect components using Material UI (MUI).",
      "Streamlined frontend-backend communication through efficient RESTful service integrations.",
    ],
    tech: ["React", "Vue.js", "Redux", "React Query", "Material UI", "Cypress"],
  },
];

export default function Experience() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageWrapper>
      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 5, md: 8 },

        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 2,
            display: "block",
            marginTop:"10px"
          }}
        >
          CAREER PATH
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2.25rem", sm: "3rem" },
          }}
        >
          Professional <span style={{ color: "#1976d2" }}>Journey</span>
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Central Timeline Line - Adjusted for mobile position */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "15px", md: "20px" },
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "divider",
              zIndex: 0,
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                mb: { xs: 4, md: 6 },
                pl: { xs: 5, md: 8 },
              }}
            >
              {/* Timeline Dot - Scaled down for mobile */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "2px",
                  width: { xs: "32px", md: "42px" },
                  height: { xs: "32px", md: "42px" },
                  borderRadius: "50%",
                  bgcolor: "background.paper",
                  border: "2px solid #1976d2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                {index === 0 ? (
                  <VerifiedIcon
                    color="primary"
                    sx={{ fontSize: { xs: 18, md: 24 } }}
                  />
                ) : (
                  <WorkIcon
                    color="primary"
                    sx={{ fontSize: { xs: 16, md: 20 } }}
                  />
                )}
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    borderColor: "primary.light",
                  },
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                  alignItems={{ sm: "flex-start", md: "center" }}
                  spacing={1}
                  sx={{ mb: 2 }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        lineHeight: 1.2,
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      bgcolor: "action.selected",
                      px: 2,
                      py: 0.5,
                      borderRadius: 10,
                      alignSelf: { xs: "flex-start", sm: "center" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </Typography>
                </Stack>

                {index === 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mb: 2, alignItems: "center", opacity: 0.8 }}
                  >
                    <GroupsIcon sx={{ fontSize: 18 }} />
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                    >
                      Mentoring 3 Junior Developers
                    </Typography>
                  </Stack>
                )}

                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {exp.highlights.map((point, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.85rem", md: "0.875rem" },
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>

                <Divider sx={{ mb: 2, borderStyle: "dashed" }} />

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  gap={1}
                >
                  {exp.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        height: "24px",
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </PageWrapper>
  );
}
