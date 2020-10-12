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
    paddingTop: "4rem",
    padding: "1.6rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.6rem",
      paddingRight: "7rem",
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: "14rem",
      paddingLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "2rem",
      width: "20rem",
      paddingRight: 0,
    }
  },
  details: {
    fontSize: "1rem",
    paddingTop: 0,
    padding: "2rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
    [theme.breakpoints.up('md')]: {
      paddingRight: "7rem",
      paddingLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
      width: "34rem",
    },
  },
  container: {
    paddingBottom: "4rem",
    paddingTop: "2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      paddingRight: "2rem",
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: "5rem",
      paddingLeft: "5rem",
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: "7rem",
      paddingLeft: "7rem",
      justifyContent: "space-between",
    },
  },
  sectionImage: {
    marginTop: "2rem",
    width: "19rem",
    borderRadius: "8px",
    [theme.breakpoints.up('lg')]: {
      width: "25rem",
    }
  }
}));

function AboutSection4() {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography className={classes.header} variant="h1">
                We are for student
                focused businesses
          </Typography>
              <Typography className={classes.details} variant="h6">
                For businesses interested in the
                student community, Vasiti puts them
                in front of thousands of students so
                they can engage better with students
                and increase awareness for their
                or products or services.
          </Typography>
            </Box>
            <img
              className={classes.sectionImage}
              src="images/men-sitting.png"
              alt="winner-babcock" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection4
