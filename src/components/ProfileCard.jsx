import { Box, Card, CardContent, Typography, Avatar, Stack, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import profilePic from '../assets/KEYUR_PROFILE_PIC2.png';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          mb: 2,
          background: '#000000',
          boxShadow: '10px 8px 32px rgba(0, 0, 0, 0.3)',
          borderRadius: 3,
          border: '1px solid #333333',
          position: 'relative',
        }}
      >
        <CardContent sx={{ p: 2 }}>
          {/* Social Icons in top right */}
          <Box sx={{ 
            position: 'absolute', 
            top: 12, 
            right: 12, 
            display: 'flex', 
            gap: 1 
          }}>
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
              <Tooltip title="GitHub" placement="top">
                <IconButton 
                  component="a" 
                  href="https://github.com/Keyur2311"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    width: 32,
                    height: 32,
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#fff',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  <FaGithub size={16} />
                </IconButton>
              </Tooltip>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
              <Tooltip title="Twitter" placement="top">
                <IconButton 
                  component="a" 
                  href="https://twitter.com/KeyurPatel2311"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    width: 32,
                    height: 32,
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#fff',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  <FaTwitter size={16} />
                </IconButton>
              </Tooltip>
            </motion.div>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Avatar
                sx={{ 
                  width: 120, 
                  height: 120,
                  border: '2px solid #333333',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                }}
                alt="Keyur"
                src={profilePic}
              />
            </motion.div>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ 
                fontWeight: 'bold',
                color: '#ffffff',
                mb: 0.5,
              }}>
                Keyur Patel
              </Typography>
              
              <Typography variant="h6" sx={{ color: '#bdbdbd', mb: 1.5 }}>
                Software Engineer
              </Typography>

              <Stack spacing={0.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaMapMarkerAlt color="#bdbdbd" size={16} />
                  <Typography sx={{ color: '#bdbdbd', fontSize: '0.9rem' }}>
                    Pune, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaEnvelope color="#bdbdbd" size={16} />
                  <Typography 
                    component="a"
                    href="mailto:patelkk2311@gmail.com"
                    sx={{ 
                      color: '#bdbdbd', 
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#ffffff',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    patelkk2311@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaLinkedin color="#bdbdbd" size={16} />
                  <Typography 
                    component="a"
                    href="https://www.linkedin.com/in/keyur2311/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#bdbdbd', 
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#ffffff',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    keyur2311
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mt: 1,
                  flexWrap: 'wrap'
                }}>
                  <Typography sx={{ color: '#bdbdbd', fontSize: '0.9rem' }}>
                    Problem Solver
                  </Typography>
                  <Typography sx={{ color: '#bdbdbd', fontSize: '0.9rem' }}>
                    Tech Enthusiast
                  </Typography>
                  <Typography sx={{ color: '#bdbdbd', fontSize: '0.9rem' }}>
                    Team Player
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard; 