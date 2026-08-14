import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { accentGradient, NAV_HEIGHT } from '../theme';

// Shared scroll-into-view reveal. Applied once here so every section
// animates consistently (previously some revealed on load, others on scroll).
const reveal = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Section = ({ id, title, children, ...paperProps }) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        // keep the floating nav from overlapping the section top on jump
        scrollMarginTop: `${NAV_HEIGHT + 16}px`,
      }}
    >
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            position: 'relative',
          }}
          {...paperProps}
        >
          {title && (
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 700,
                color: '#fff',
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 48,
                  height: 4,
                  borderRadius: '2px',
                  background: accentGradient(),
                },
              }}
            >
              {title}
            </Typography>
          )}
          {children}
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Section;
