import React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

// CSS Styles
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1240,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
  backgroundContainer: {
    background: "#ffffff",
  },
  mainContainer: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2rem",
    fontWeight: 600,
    paddingLeft: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
    },
  },
  details: {
    fontSize: "1rem",
    padding: "1rem 4rem 0 2rem",
    marginBottom: "4rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
      paddingRight: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
    },
  },
  container: {
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
  },
  eventImageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      justifyContent: "space-around",
    }
  },
  eventImage: {
    width: "23.5rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.up('sm')]: {
    width: "22rem",
  },
  [theme.breakpoints.up('md')]: {
    width: "39rem",
  },
}));

const AboutSection7 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography className={classes.header} variant="h1">
                Our Events
          </Typography>
              <Typography className={classes.details} variant="h6">
                We empower students and youths
                through innovative programmes and
                events.
          </Typography>
            </Box>
            <Box className={classes.eventImageContainer}>
              <img
                className={classes.eventImage}
                src="images/event1.png"
                alt="event1"
              />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className={classes.eventImage}
                  style={{ marginBottom: "1rem" }}
                  src="images/event2.png"
                  alt="event2"
                /><img
                  className={classes.eventImage}
                  src="images/event3.png"
                  alt="event3"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection7
