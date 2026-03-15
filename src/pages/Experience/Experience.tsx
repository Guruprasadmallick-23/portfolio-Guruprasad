import {
  Typography,
  Box,
  Paper,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";

const experiences = [
  {
    company: "Keylent Inc",
    role: "Software Developer",
    period: "Oct 2022 – Present",
    highlights: [
      "Led frontend development for US-based healthcare and eCommerce platforms using Vue.js and modern frontend architecture.",
      "Built scalable applications from scratch including UI implementation, API integrations, and production deployments.",
      "Developed complex healthcare workflows including medical intake forms, lab report processing, and personalized recommendation systems.",
      "Integrated AI-driven backend APIs for lab analysis and medication or meal recommendations.",
      "Improved application maintainability by refactoring legacy codebases and optimizing state management.",
      "Mentored junior developers, conducted code reviews, and collaborated with cross-functional teams for stable releases."
    ],
    tech: [
      "Vue.js",
      "Vuex",
      "Pinia",
      "PrimeVue",
      "Tailwind",
      "Bootstrap",
      "Nuxt.js",
      "JavaScript",
      "TypeScript",
      "REST API"
    ],
  },
  {
    company: "Lemonpeak Consulting Pvt Ltd",
    role: "Software Developer",
    period: "Aug 2021 – Sep 2022",
    highlights: [
      "Contributed to the development of a payment gateway platform focused on secure transaction processing.",
      "Implemented frontend UI and integrated APIs to support payment processor workflows.",
      "Worked closely with senior developers to build responsive and user-friendly interfaces.",
      "Helped resolve integration issues and ensured stable production deployments.",
      "Collaborated within agile teams to deliver secure and scalable financial applications."
    ],
    tech: [
      "Vue.js",
      "Vuex",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
      "REST API"
    ],
  },
];

export default function Experience() {
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
            marginTop: "10px"
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
                      Mentoring 2 Junior Developers
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