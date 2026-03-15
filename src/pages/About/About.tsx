import { Typography, Box, Divider, Chip, Stack, Paper } from "@mui/material";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import InterestsIcon from "@mui/icons-material/Interests";

export default function About() {
  return (
    <PageWrapper>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 4 },
        }}
      >
        {/* Section 1: Professional Identity */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
              display: "block",
              mb: 1,
            }}
          >
            MY STORY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 4,
              lineHeight: 1.2,
              fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            Building scalable web applications with{" "}
            <span style={{ color: "#1976d2" }}>clarity</span> and{" "}
            <span style={{ color: "#1976d2" }}>performance</span>.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 3,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            I am a Software Developer with 4.5+ years of experience specializing
            in building scalable, responsive, and high-performance web
            applications using modern frontend technologies.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Currently working at Keylent Inc, I lead frontend development for
            multiple US-based healthcare and eCommerce platforms. My work
            involves designing scalable frontend architectures, integrating
            APIs, and delivering production-ready features. I also mentor junior
            developers, perform code reviews, and collaborate closely with
            cross-functional teams to ensure high-quality releases.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            My technical expertise includes Vue.js, Vuex, Pinia, PrimeVue,
            Tailwind, Nuxt.js, and modern JavaScript/TypeScript ecosystems,
            allowing me to create efficient and user-centric digital products.
          </Typography>
        </Box>

        {/* Section 2: Education & Languages */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: "action.hover",
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 4 }}
          >
            {/* Education Block */}
            <Box flex={1}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <HistoryEduIcon color="primary" fontSize="small" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Education
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ fontWeight: 600, fontSize: "1rem" }}
              >
                B.Tech in Computer Science & Engineering
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: "0.85rem" }}
              >
                Calcutta Institute of Engineering and Management, 2016 - 2020
              </Typography>
            </Box>

            {/* Divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", sm: "block" } }}
            />

            <Divider
              sx={{
                display: { xs: "block", sm: "none" },
                borderStyle: "dashed",
              }}
            />

            {/* Language Block */}
            <Box flex={1}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <MilitaryTechIcon color="primary" fontSize="small" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Languages
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap gap={1}>
                {["English", "Hindi", "Bengali"].map((lang) => (
                  <Chip
                    key={lang}
                    label={lang}
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: "background.paper" }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Paper>

        {/* Section 3: Personal Interests */}
        <Box>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
            <InterestsIcon color="primary" />
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Beyond the Code
            </Typography>
          </Stack>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Outside of software development, I enjoy creative activities like
            dancing and painting. These hobbies help me stay balanced,
            creative, and energized, which reflects in my problem-solving
            approach and engineering work.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap gap={2}>
            <Chip
              label="Dancing"
              variant="filled"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Painting"
              variant="filled"
              color="secondary"
              sx={{ fontWeight: 600 }}
            />
          </Stack>
        </Box>
      </Box>
    </PageWrapper>
  );
}