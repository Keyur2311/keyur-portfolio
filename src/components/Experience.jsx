import { Typography, Box, Stack, Divider } from '@mui/material';
import { FaBriefcase } from 'react-icons/fa';
import osmosLogo from '../assets/osmos_logo.jpeg';
import hexarLogo from '../assets/hexar_logo.jpeg';
import { TEXT_PRI, TEXT_SEC, TEXT_MUTE, BORDER } from '../theme';

const experiences = [
  {
    title: "Software Engineer",
    company: "osmos.ai",
    location: "Pune, India",
    date: "Jul 2025 - Present",
    description: [
      "Reduced campaign budget and status update latency from 2–3 hours to seconds by building Temporal-based asynchronous workflows for Meta and TikTok campaigns.",
      "Integrated TikTok Ads as a new vendor, expanding the platform beyond existing Meta and Google integrations within a short timeline.",
      "Scaled a food-commerce client from ₹0 to ₹1 Cr+ monthly revenue through Offsite Ads platform and campaign infrastructure.",
      "Built an internal tool for food-commerce clients with Temporal workflows to automate restaurant onboarding, package creation/updates, and image approval.",
      "Helped scale the newly formed Offsite team from 0 to 5 clients, supporting advertising integrations across Meta, Google, and TikTok.",
      "Handled production on-call, bug fixes, and root-cause fixes across Offsite Ads workflows and vendor integrations.",
    ],
    logo: osmosLogo,
  },
  {
    title: "Software Development Intern",
    company: "osmos.ai",
    location: "Pune, India",
    date: "Jan 2025 - Jul 2025",
    description: [
      "Automated Facebook Ads workflows with Python, Ruby, and MongoDB/MySQL, streamlining campaign creation and targeting.",
      "Optimized ad template and audience reach systems, scaling backend for thousands of concurrent ad operations.",
    ],
    logo: osmosLogo,
  },
  {
    title: "Software Development Intern",
    company: "Hexar Games",
    location: "Ahmedabad, India",
    date: "May 2024 - July 2024",
    description: [
      "Worked with frontend team on a video game store, managing 400+ games with a dynamic, real-time interface.",
      "Added sorting and filtering with database techniques to enhance data retrieval speed.",
      "Created secure APIs for authentication, data access, and user management.",
    ],
    logo: hexarLogo,
  },
];

const Experience = () => {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      {experiences.map((experience, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          {index > 0 && (
            <Divider
              sx={{
                my: 3,
                borderColor: BORDER,
                opacity: 0.5,
                width: '100%',
              }}
            />
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              width: '100%',
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: { xs: 2, sm: 0 },
                flex: '1 1 auto',
              }}
            >
              <Box
                sx={{
                  background: experience.logo ? '#fff' : 'linear-gradient(135deg, #FF4B2B 0%, #FF416C 100%)',
                  p: experience.logo ? 0.5 : 1.5,
                  borderRadius: '50%',
                  border: `2px solid ${BORDER}`,
                  boxShadow: '0 4px 20px rgba(255, 75, 43, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: experience.logo ? '40px' : 'auto',
                  height: experience.logo ? '40px' : 'auto',
                  flexShrink: 0,
                }}
              >
                {experience.logo ? (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <FaBriefcase size={20} color="#ffffff" />
                )}
              </Box>
              <Box sx={{ flex: '1 1 auto' }}>
                <Typography variant="h6" sx={{ color: TEXT_PRI, mb: 0.5 }}>
                  {experience.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: TEXT_SEC }}>
                  {experience.company}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: TEXT_MUTE }}>
                  {experience.location}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: TEXT_PRI,
                minWidth: { xs: 'auto', sm: '140px' },
                textAlign: { xs: 'left', sm: 'right' },
                fontSize: '1rem',
                opacity: 0.8,
                flexShrink: 0,
              }}
            >
              {experience.date}
            </Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: '20px',
                margin: '0',
                color: TEXT_SEC,
                width: '100%',
              }}
            >
              {experience.description.map((item, idx) => (
                <li key={idx} style={{ width: '100%' }}>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{
                      color: TEXT_SEC,
                      width: '100%',
                      pr: { xs: 0, sm: '140px' }, // align with the date column on desktop
                    }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Experience;
