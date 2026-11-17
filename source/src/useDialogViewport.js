import { useEffect } from 'react';

// Keep modal geometry inside the visible area when a mobile keyboard opens.
export function useDialogViewport() {
  useEffect(() => {
    const viewport = window.visualViewport;
    const root = document.documentElement;
    const update = () => {
      root.style.setProperty('--dialog-viewport-height', `${viewport?.height ?? window.innerHeight}px`);
      root.style.setProperty('--dialog-viewport-top', `${viewport?.offsetTop ?? 0}px`);
    };
    update();
    viewport?.addEventListener('resize', update);
    viewport?.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      viewport?.removeEventListener('resize', update);
      viewport?.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      root.style.removeProperty('--dialog-viewport-height');
      root.style.removeProperty('--dialog-viewport-top');
    };
  }, []);
}
