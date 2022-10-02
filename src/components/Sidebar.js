import { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

const containerStyle = {
  left: 10,
  position: 'relative',
  top: 10,
  width: 150,
  zIndex: 1000,
};

const drawerClass = {
  width: 300,
};

function Sidebar() {
  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => setIsToggled(!isToggled);

  return (
    <div style={containerStyle}>
      <Button onClick={onClick} variant="contained">
        Open Drawer
      </Button>
      <Drawer anchor="left" open={isToggled} onClose={onClick} sx={drawerClass}>
        <div>hello world</div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
