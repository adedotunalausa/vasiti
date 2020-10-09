import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Box
} from '@material-ui/core'
import {
  ArrowForward,
  Menu,
} from '@material-ui/icons'

// CSS Styles
const useStyles = makeStyles({
  menuSliderContainer: {
    width: "80vw",
    background: "#eeeeee",
    height: "100vh",
  },
  vasitiLogo: {
    marginRight: "8rem",
  },
  signUp: {
    background: "#FF5C01"
  }
})

const menuItems1 = [
  "MARKETPLACE",
  "WHOLESALE CENTER",
  "SELLER CENTER",
  "SERVICES",
  "INTERNSHIPS",
  "EVENTS",
]
const menuItems2 = [
  "ABOUT US",
  "STORIES",
  "CONTACT",
  "LOGIN",
]

const cta = [
  "SIGN UP",
]

const Navbar = () => {
  const classes = useStyles()
  const [navlinks, setNavlinks] = useState({
    right: false
  })

  const toggleSlider = (slider, open) => () => {
    setNavlinks({ ...navlinks, [slider]: open })
  }

  const sideList = slider => (
    <Box
      className={classes.menuSliderContainer}
      component="nav"
      onClick={toggleSlider("right", false)}
    >
      <IconButton>
        <ArrowForward style={{ color: "#FF5C01" }} />
      </IconButton>
      <List>
        {menuItems1.map((item, key) => (
          <ListItem button key={key}>
            <ListItemText className={classes.listItem} primary={item} />
          </ListItem>
        ))}
        <Divider />
        {menuItems2.map((item, key) => (
          <ListItem button key={key}>
            <ListItemText className={classes.listItem} primary={item} />
          </ListItem>
        ))}
        {cta.map((item, key) => (
          <ListItem button key={key}>
            <ListItemText className={classes.signUp} primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" style={{ background: "#ffffff" }}>
        <Toolbar>
          <img className={classes.vasitiLogo} src="images/vasiti-logo.svg" alt="vasiti-logo" />
          <IconButton onClick={toggleSlider("right", true)}>
            <Menu style={{ color: "#FF5C01" }} />
          </IconButton>
          <MobileRightMenuSlider
            anchor="right"
            open={navlinks.right}
            onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
