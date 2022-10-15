import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { containerStyle, paperStyle, selectStyle } from '../styles';

function Sidebar() {
  const [selection, setSelection] = useState('population');

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <Paper elevation={3} sx={paperStyle}>
        <Select onChange={handleChange} sx={selectStyle} value={selection}>
          <MenuItem value="population">Population</MenuItem>
          <MenuItem value="averageIncome">Average Income</MenuItem>
        </Select>
      </Paper>
    </div>
  );
}

export default Sidebar;
