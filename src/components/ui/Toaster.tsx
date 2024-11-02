import React from 'react';

export function Toaster() {
  return (
    <div className="fixed bottom-4 right-4 z-50" aria-live="assertive">
      {/* Toast messages will be rendered here */}
    </div>
  );
}