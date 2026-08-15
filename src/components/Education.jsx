import { Typography, Box, Stack, Divider } from '@mui/material';
import { FaGraduationCap } from 'react-icons/fa';
import nirmaLogo from '../assets/nirma_logo.jpeg';
import { TEXT_PRI, TEXT_SEC, TEXT_MUTE, BORDER } from '../theme';

const education = [
  {
    degree: "Computer Science and Engineering",
    institution: "Nirma University",
    location: "Ahmedabad, India",
    date: "2021 - 2025",
    logo: nirmaLogo,
  },
];

const Education = () => {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      {education.map((edu, index) => (
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
                  background: edu.logo ? '#fff' : 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
                  p: edu.logo ? 0.5 : 1.5,
                  borderRadius: '50%',
                  border: `2px solid ${BORDER}`,
                  boxShadow: '0 4px 20px rgba(71, 118, 230, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: edu.logo ? '40px' : 'auto',
                  height: edu.logo ? '40px' : 'auto',
                  flexShrink: 0,
                }}
              >
                {edu.logo ? (
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <FaGraduationCap size={20} color="#ffffff" />
                )}
              </Box>
              <Box sx={{ flex: '1 1 auto' }}>
                <Typography variant="h6" sx={{ color: TEXT_PRI, mb: 0.5 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: TEXT_SEC }}>
                  {edu.institution}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: TEXT_MUTE }}>
                  {edu.location}
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
              {edu.date}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Education;
