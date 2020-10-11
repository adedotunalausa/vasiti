import React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// CSS Styles
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "2rem",
    fontWeight: 600,
    paddingTop: "2rem",
    [theme.breakpoints.up('sm')]: {
      paddingTop: "1rem"
    }
  },
  details: {
    fontSize: "1rem",
    paddingRight: "4rem",
    paddingTop: "1rem",
    marginBottom: "3rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
  },
  container: {
    paddingLeft: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  },
  logo: {
    marginBottom: "3rem",
    width: "5rem",
    marginRight: "2rem",
  },
  logoWrapper: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up('sm')]: {
      marginLeft: "2rem",
    }
  }
}));

const AboutSection9 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            Media Features
          </Typography>
          <Typography className={classes.details} variant="h6">
            Our work has been recognized and featured
            by leading media organizations
          </Typography>
        </Box>
        <Box className={classes.logoWrapper}>
          <img
            className={classes.logo}
            src="images/forbes.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/vanguard.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/sme-speaks.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/bella-naija.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/fidelity.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/tech-next.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/sme-digest.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/tech-cabal.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/ynaija.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/net.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/tribune.svg"
            alt="event1"
          />
          <img
            className={classes.logo}
            src="images/techmoran.svg"
            alt="event1"
          />
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection9
