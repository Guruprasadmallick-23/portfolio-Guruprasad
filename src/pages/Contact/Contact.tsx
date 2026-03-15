import {
  Typography,
  Box,
  Stack,
  Link,
  Paper,
  IconButton,
  Container,
} from "@mui/material";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SendIcon from "@mui/icons-material/Send";

const contactMethods = [
  {
    icon: <EmailIcon color="primary" fontSize="large" />,
    label: "Email",
    value: "sanchitabarik20@gmail.com",
    href: "mailto:sanchitabarik20@gmail.com",
  },
  {
    icon: <LinkedInIcon color="primary" fontSize="large" />,
    label: "LinkedIn",
    value: "linkedin.com/in/sanchita-barik-367760195",
    href: "https://www.linkedin.com/in/sanchita-barik-367760195",
  },
  {
    icon: <PhoneIphoneIcon color="primary" fontSize="large" />,
    label: "Phone",
    value: "+91 9647660377",
    href: "tel:+919647660377",
  },
];

export default function Contact() {
  return (
    <PageWrapper>
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 12 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
              display: "block",
            }}
          >
            LET'S CONNECT
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 2,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            Ready to build the{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
                display: { xs: "block", sm: "inline" },
              }}
            >
              next great product?
            </Box>
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              px: 2,
            }}
          >
            I am currently open to new opportunities and collaborations in
            frontend development. If you have a role, project, or idea you’d
            like to discuss, feel free to reach out.
          </Typography>
        </Box>

        {/* Contact Cards */}
        <Stack spacing={2}>
          {contactMethods.map((method) => (
            <Paper
              key={method.label}
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                gap: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  borderColor: "primary.main",
                },
              }}
            >
              <Stack
                direction="row"
                spacing={{ xs: 2, sm: 3 }}
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <Box
                  sx={{
                    bgcolor: "action.hover",
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {method.icon}
                </Box>

                <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {method.label}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                      wordBreak: "break-all",
                      lineHeight: 1.2,
                    }}
                  >
                    {method.value}
                  </Typography>
                </Box>

                {/* Desktop Button */}
                <IconButton
                  component={Link}
                  href={method.href}
                  target="_blank"
                  sx={{
                    display: { xs: "none", sm: "inline-flex" },
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": { bgcolor: "primary.dark" },
                  }}
                >
                  <SendIcon fontSize="small" />
                </IconButton>
              </Stack>

              {/* Mobile Button */}
              <IconButton
                component={Link}
                href={method.href}
                target="_blank"
                sx={{
                  display: { xs: "flex", sm: "none" },
                  width: "100%",
                  borderRadius: 2,
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                <SendIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="button">Contact Now</Typography>
              </IconButton>
            </Paper>
          ))}
        </Stack>

        {/* Footer */}
        <Box sx={{ mt: { xs: 6, md: 10 }, textAlign: "center", px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Based in Hyderabad, Telangana, India. Open to remote or relocation
            opportunities in frontend and full-stack development.
          </Typography>
        </Box>
      </Container>
    </PageWrapper>
  );
}