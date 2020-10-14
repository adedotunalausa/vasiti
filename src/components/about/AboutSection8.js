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
    fontSize: "1.5rem",
    fontWeight: 600,
    paddingTop: "2rem",
    [theme.breakpoints.up('lg')]: {
      fontSize: "2rem",
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
    [theme.breakpoints.up('sm')]: {
      paddingRight: 0,
      width: "22rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
    }
  },
  container: {
    paddingLeft: "2rem",
    paddingTop: "2rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: "5rem",
      paddingLeft: "5rem",
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: "12rem",
      paddingLeft: "12rem",
    },
  },
}));

const AboutSection8 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography className={classes.header} variant="h1">
                Vasiti Virtual Series
          </Typography>
              <Typography className={classes.details} variant="h6">
                VVS consists of a series of webinars,
                virtual masterclasses and virtual
                internship. It was launched in June
                2020 as a means of empowering and
                educating students during the Covid-19
                pandemic and even afterwards. So far,
                we have had a couple of highly
                successful programmes under this
                initiative.
          </Typography>
            </Box>
            <Box>
              <Typography className={classes.header} variant="h1">
                Vasiti Career Fest
          </Typography>
              <Typography className={classes.details} variant="h6">
                VCF is a highly interactive career-empowerment
                programme for students to learn from the real-life
                experiences of professionals and get up-to-date
                insights from industry experts to provide students
                with the knowledge, guidance and support to propel
                them to the apex of their future career.
          </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection8
