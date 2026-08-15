import { useEffect, useState, useRef, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { NAV_HEIGHT, accentGradient, BORDER } from '../theme';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

// Stable reference so the observer effect runs once, not on every render.
const NAV_IDS = NAV_ITEMS.map((i) => i.id);

// easing
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Scroll-spy + smooth navigation.
// Returns [activeId, navigate(id)]. `navigate` animates the scroll with rAF
// (reliable across browsers, unlike native CSS smooth scroll) and locks the
// spy while in flight so the active tab doesn't flicker through intermediates.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const lockedRef = useRef(false); // suppress spy during programmatic scroll
  const animToken = useRef(0); // cancel/supersede in-flight animations

  useEffect(() => {
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return; // don't fight the animated scroll
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }
        let bestId = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) setActive(bestId);
      },
      {
        rootMargin: `-${NAV_HEIGHT}px 0px -50% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 1],
      }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    els.forEach((el) => {
      ratios.set(el.id, 0);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  const navigate = useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return;

    setActive(id); // instant highlight

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const offset = NAV_HEIGHT + 8;
    const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

    if (prefersReduced) {
      window.scrollTo({ top: targetY });
      return;
    }

    const myToken = ++animToken.current;
    const startY = window.scrollY;
    const distance = targetY - startY;
    // scale duration with distance, clamped to a comfortable range
    const duration = Math.min(900, Math.max(450, Math.abs(distance) / 2));

    lockedRef.current = true;
    const step = (now) => {
      if (animToken.current !== myToken) return; // superseded by a newer click
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        lockedRef.current = false;
      }
    };
    let startTime = null;
    requestAnimationFrame(step);
  }, []);

  return [active, navigate];
}

const Navbar = () => {
  const [active, navigate] = useActiveSection(NAV_IDS);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1100,
        display: { xs: 'none', sm: 'block' }, // mobile keeps the bottom social bar
      }}
    >
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '6px 10px',
          background: 'rgba(18, 18, 18, 0.72)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${BORDER}`,
          borderRadius: 999,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <Button
              key={item.id}
              onClick={() => navigate(item.id)}
              disableRipple
              sx={{
                minWidth: 'auto',
                px: 1.75,
                py: 0.75,
                borderRadius: 999,
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#fff' : '#bdbdbd',
                background: isActive ? accentGradient() : 'transparent',
                transition: 'color 0.25s ease, background 0.25s ease',
                '&:hover': {
                  color: '#fff',
                  background: isActive
                    ? accentGradient()
                    : 'rgba(255, 255, 255, 0.06)',
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </motion.nav>
    </Box>
  );
};

export default Navbar;
