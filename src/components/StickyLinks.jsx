import { Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa';

const links = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Keyur2311',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/keyur2311/',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://x.com/KeyurPatel2311',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'patelkk2311@gmail.com',
  },

];

const StickyLinks = () => {
  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
      }}
    >
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          bgcolor: 'rgba(18, 18, 18, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          py: 1.5,
          px: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              variants={linkVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip 
                title={link.name} 
                placement="top"
                enterDelay={200}
                leaveDelay={0}
              >
                <IconButton
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
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
                  <link.icon size={18} />
                </IconButton>
              </Tooltip>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StickyLinks; 