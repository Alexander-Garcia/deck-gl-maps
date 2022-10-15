import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';

const containerStyles = {
  display: 'flex',
  position: 'relative',
  zIndex: 100,
  width: 250,
  height: '100vh',
};

const paperRoot = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '250px',
};

const selectStyle = {
  height: '50px',
  margin: '20px',
  width: '200px',
};

function Sidebar() {
  const [selection, setSelection] = useState('population');

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div style={containerStyles}>
      <Paper elevation={3} sx={paperRoot}>
        <Select onChange={handleChange} sx={selectStyle} value={selection}>
          <MenuItem value="population">Population</MenuItem>
          <MenuItem value="averageIncome">Average Income</MenuItem>
        </Select>
      </Paper>
    </div>
  );
}

export default Sidebar;
