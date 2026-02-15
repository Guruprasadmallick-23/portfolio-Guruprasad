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
          px: { xs: 3, md: 4 }, // Added horizontal padding for mobile
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
              // Fluid font size to prevent overflow on phone screens
              fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            Building scalable systems with{" "}
            <span style={{ color: "#1976d2" }}>purpose</span> and{" "}
            <span style={{ color: "#1976d2" }}>precision</span>.
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
            I am a Senior Software Engineer with 4 years of experience
            specializing in the design and maintenance of high-performance web
            applications.
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
            My career is focused on translating complex business needs into
            clean, maintainable code. Currently at Infojini Consulting, I lead
            frontend development and mentor teams to ensure quality through
            rigorous unit testing with Jest and Cypress.
          </Typography>
        </Box>

        {/* Section 2: Education & Languages */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 }, // Reduced padding on mobile
            bgcolor: "action.hover",
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }} // Stack vertically on mobile
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
                Bachelor of Computer Application
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: "0.85rem" }}
              >
                Techno India University, 2016-2019
              </Typography>
            </Box>

            {/* Responsive Dividers */}
            {/* Vertical Divider for Tablet/Desktop */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", sm: "block" } }}
            />
            {/* Horizontal Dashed Divider for Mobile */}
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
                  Communication
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                gap={1}
              >
                {["Bengali", "English", "Hindi"].map((lang) => (
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
            Outside of engineering, I am an avid coin collector and stay active
            playing badminton. These hobbies help me maintain the discipline and
            focus I bring to my technical work.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap" // Ensures chips wrap on very small screens
            useFlexGap
            gap={2}
          >
            <Chip
              label="Numismatics"
              variant="filled"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Badminton"
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
