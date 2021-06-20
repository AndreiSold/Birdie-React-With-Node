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
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

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
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
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
      [theme.breakpoints.up('sm')]: {
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
        backgroundColor: theme.palette.secondary.main,
      },
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
      { text: 'Homepage', icon: <HomeIcon />, route: '/', isAnchor: false },
      {
        text: 'Care Recipients',
        icon: <PeopleIcon />,
        route: '/care-recipients',
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
        route: 'https://github.com/AndreiSold/birdie-test',
        isAnchor: true,
      },
      {
        text: 'Contact info',
        icon: <ContactMailIcon />,
        route: '/contact',
        isAnchor: false,
      },
    ],
  },
];

export default function SideNavigationBar() {
  const classes = useStyles();
  const theme = useTheme();
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
                className={classes.item}
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
        <Hidden smUp implementation='css'>
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
        <Hidden xsDown implementation='css'>
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
