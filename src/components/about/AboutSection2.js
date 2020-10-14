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
    paddingTop: "4rem",
    padding: "1.6rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.6rem",
      paddingRight: "7rem",
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: "12rem",
      paddingLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "2rem",
      width: "33rem",
    }
  },
  details: {
    color: "#636363",
    fontSize: "1rem",
    paddingTop: 0,
    padding: "2rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
    [theme.breakpoints.up('md')]: {
      paddingRight: "9rem",
      paddingLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
      width: "35rem",
    },
  },
  container: {
    paddingBottom: "2rem",
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
      padding: "3rem 7rem 2rem 7rem",
      justifyContent: "space-between",
    }
  },
  sectionImage: {
    marginTop: "2rem",
    width: "19rem",
    borderRadius: "8px",
    [theme.breakpoints.up('lg')]: {
      width: "25rem",
    }
  },
}));

const AboutSection2 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography className={classes.header} variant="h1">
                We are keen on an
                amazing experience
        </Typography>
              <Typography className={classes.details} variant="h6">
                We ensure all our customers get a
                fulfilling experience that they
                can’t get anywhere else. We do
                this by building world-class
                technology platforms, offering
                unbeatable deals and providing
                excellent customer service. By
                shopping on Vasiti, you also help
                to grow a student’s business leading
                to positive economic impact. For
                unsatisfactory products or services,
                returns and refunds are fast and as
                easy as ABC.
        </Typography>
            </Box>
            <img className={classes.sectionImage} src="/images/lady-man-laughing.png" alt="winner-babcock" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection2
