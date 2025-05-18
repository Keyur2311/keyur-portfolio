import { Box, Card, CardContent, Typography, Avatar, Stack, IconButton, Chip, Tooltip } from '@mui/material';
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
          mb: 4,
          background: '#000000',
          boxShadow: '10px 8px 32px rgba(0, 0, 0, 0.3)',
          borderRadius: 3,
          border: '1px solid #333333',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Avatar
                sx={{ 
                  width: 150, 
                  height: 150,
                  border: '4px solid #333333',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                }}
                alt="Keyur"
                src={profilePic}
              />
            </motion.div>

            {/* Right side - Info */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ 
                fontWeight: 'bold',
                color: '#ffffff',
              }}>
                Keyur Patel
              </Typography>
              
              <Typography variant="h6" sx={{ color: '#bdbdbd' }} gutterBottom>
                Software Engineer
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Chip 
                  icon={<FaMapMarkerAlt />} 
                  label="Pune, India" 
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: '#333333',
                    color: '#bdbdbd',
                    background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(255, 87, 34, 0.05) 100%)',
                    '& .MuiChip-icon': {
                      color: '#FF5722',
                    },
                  }}
                />
                <Chip 
                  icon={<FaEnvelope />} 
                  label="patelkk2311@gmail.com" 
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: '#333333',
                    color: '#bdbdbd',
                    background: 'linear-gradient(135deg, rgba(66, 165, 245, 0.1) 0%, rgba(66, 165, 245, 0.05) 100%)',
                    '& .MuiChip-icon': {
                      color: '#42A5F5',
                    },
                  }}
                />
              </Stack>

              <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 2 }}>
                Passionate software engineer with expertise in full-stack development,
                cloud technologies, and building scalable applications.
              </Typography>

              <Stack direction="row" spacing={2}>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block' }}
                >
                  <Tooltip title="GitHub" placement="top">
                    <IconButton 
                      aria-label="GitHub" 
                      component="a" 
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        width: 36,
                        height: 36,
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(5px)',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <FaGithub size={18} />
                    </IconButton>
                  </Tooltip>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block' }}
                >
                  <Tooltip title="Twitter" placement="top">
                    <IconButton 
                      aria-label="Twitter" 
                      component="a" 
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        width: 36,
                        height: 36,
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(5px)',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <FaTwitter size={18} />
                    </IconButton>
                  </Tooltip>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block' }}
                >
                  <Tooltip title="LinkedIn" placement="top">
                    <IconButton 
                      aria-label="LinkedIn" 
                      component="a" 
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        width: 36,
                        height: 36,
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(5px)',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <FaLinkedin size={18} />
                    </IconButton>
                  </Tooltip>
                </motion.div>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard; 