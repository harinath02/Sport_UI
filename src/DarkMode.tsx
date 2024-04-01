import React from 'react';

interface DarkModeToggleProps {
  isDarkModeEnabled: boolean;
  onToggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDarkModeEnabled,
  onToggleDarkMode,
}) => {
  return (
    <button onClick={onToggleDarkMode}>
      {isDarkModeEnabled ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;