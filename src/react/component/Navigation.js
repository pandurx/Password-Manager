import * as React from 'react';
import * as MuiMaterial from '@mui/material';
import * as MuiIcon from '@mui/icons-material';
import { 
  styled, 
  useTheme 
} from '@mui/material/styles';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

// #region script
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiMaterial.AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiMaterial.Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

//#endregion script


export default function Navigation(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    
 <React.Fragment>

      <AppBar elevation={0} position="fixed" open={open}>

        <MuiMaterial.Toolbar style={{backgroundColor: "gray"}}>
          <MuiMaterial.IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MuiIcon.Menu />
          </MuiMaterial.IconButton>
          <MuiMaterial.Typography variant="h6" noWrap component="div">{props.title}</MuiMaterial.Typography>
        </MuiMaterial.Toolbar>

      </AppBar>

      <Drawer variant="permanent" open={open} PaperProps={{sx: {backgroundColor:"gray", color: "white"}}}>
      
        <DrawerHeader>
          <MuiMaterial.Button onClick={handleDrawerClose} endIcon={<MuiIcon.ChevronLeft />}> Collapse </MuiMaterial.Button>
          <MuiMaterial.IconButton onClick={handleDrawerClose}> 
            {theme.direction === 'rtl' ? <MuiIcon.ChevronRight /> : <MuiIcon.ChevronLeft />}
          </MuiMaterial.IconButton>
        </DrawerHeader>
 
        <MuiMaterial.List>
          <BrowserRouter>
            {
              props.menus.map(item => (
                <MuiMaterial.ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                  <Link to={item.link}>
                  <MuiMaterial.ListItemButton onClick={event => props.handleContextChange(item.text)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>
                      
                      <MuiMaterial.ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}>
                          
                        <MuiIcon.MoveToInbox /> 
                      </MuiMaterial.ListItemIcon>
                    <MuiMaterial.ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  </MuiMaterial.ListItemButton>
                  </Link>
                </MuiMaterial.ListItem>
              ))
            }
          </BrowserRouter>
        </MuiMaterial.List>
        
      </Drawer>
     
</React.Fragment>
  );
}
