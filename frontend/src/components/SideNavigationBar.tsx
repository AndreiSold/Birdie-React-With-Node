import { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import PeopleIcon from '@material-ui/icons/People';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router-dom';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import routes from '../routes';

interface NavigationItem {
  text: string;
  icon: JSX.Element;
  route: string;
  isAnchor: boolean;
}

interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

const drawerWidth = 250;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      'zIndex': 100,
      'position': 'absolute',
      'left': '35px',
      'top': '10px',
      '& span svg': {
        height: '2em',
        width: '2em',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    list: {
      padding: 0,
    },
    groupTitle: {
      color: theme.palette.primary.main,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '24px',
      padding: '10px 25px',
    },
    item: {
      'paddingLeft': '25px',
      'paddingRight': '25px',
      '&:hover': {
        backgroundColor: `${theme.palette.secondary.main} !important`,
      },
    },
    selectedItem: {
      backgroundColor: theme.palette.secondary.light,
    },
    itemIcon: {
      color: theme.palette.primary.main,
    },
    itemText: {
      'color': theme.palette.primary.main,
      '& > span': {
        fontFamily: 'Roboto',
      },
    },
    logoWrapper: {
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      justifyContent: 'center',
      padding: '10px 10px',
    },
    logo: {
      width: '220px',
      height: 'auto',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const navigationGroups: NavigationGroup[] = [
  {
    title: 'Pages',
    items: [
      {
        text: 'Homepage',
        icon: <HomeIcon />,
        route: routes.homepage,
        isAnchor: false,
      },
      {
        text: 'Care Recipients',
        icon: <PeopleIcon />,
        route: routes.careRecipients.base,
        isAnchor: false,
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        text: 'Source Code',
        icon: <GitHubIcon />,
        route: 'https://github.com/AndreiSold/Birdie-React-With-Node',
        isAnchor: true,
      },
      {
        text: 'LinkedIn',
        icon: <LinkedInIcon />,
        route:
          'https://www.linkedin.com/in/andrei-alexandru-%C8%99old-25072593/',
        isAnchor: true,
      },
    ],
  },
];

export default function SideNavigationBar() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Box className={classes.logoWrapper}>
        <img src='/images/logo.png' alt='logo' className={classes.logo} />
      </Box>
      {navigationGroups.map((navigationGroup) => (
        <Box key={navigationGroup.title}>
          <Divider />
          <Typography className={classes.groupTitle}>
            {navigationGroup.title}
          </Typography>
          <List className={classes.list}>
            {navigationGroup.items.map((navigationItem) => (
              <ListItem
                button
                key={navigationItem.text}
                className={`${classes.item} ${
                  (navigationItem.route === routes.homepage &&
                    location.pathname === '/') ||
                  (navigationItem.route !== routes.homepage &&
                    location.pathname.includes(navigationItem.route))
                    ? classes.selectedItem
                    : ''
                }`}
                onClick={() => {
                  if (navigationItem.isAnchor) {
                    window.open(navigationItem.route);
                  } else {
                    dispatch(push(navigationItem.route));
                    if (mobileOpen) {
                      setMobileOpen(false);
                    }
                  }
                }}
              >
                <ListItemIcon className={classes.itemIcon}>
                  {navigationItem.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.itemText}
                  primary={navigationItem.text}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box className={classes.root}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden mdUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Box>
  );
}
