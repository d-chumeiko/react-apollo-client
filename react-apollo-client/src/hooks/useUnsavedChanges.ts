import { useEffect } from 'react';

export const useUnsavedChanges = (
  hasUnsavedChanges: boolean,
  onConfirm: () => void
) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
      }
    };

    const handlePageClose = () => {
      if (hasUnsavedChanges) {
        onConfirm();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handlePageClose);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handlePageClose);
    };
  }, [hasUnsavedChanges, onConfirm]);
};
