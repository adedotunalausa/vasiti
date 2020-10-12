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
    paddingTop: "2rem",
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "left",
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
      textAlign: "center",
      paddingRight: 0,
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "left",
      paddingRight: 0,
      width: "18rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
      width: "22rem",
    },
  },
  container: {
    paddingLeft: "2rem",
    paddingBottom: "4rem",
    paddingTop: "4rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      paddingRight: "2rem",
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      alignItems: "center",
      padding: "4rem 5rem 8rem 5rem"
    },
    [theme.breakpoints.up('lg')]: {
      padding: "4rem 7rem 9rem 7rem"
    },
  },
  mapBoxContainer: {
    [theme.breakpoints.up('sm')]: {
      margin: "0 auto",
    }
  },
  mapBox: {
    width: "310px",
    height: "350px",
    border: "1px solid #EAEAEA",
    borderRadius: "16px",
    marginTop: "3rem",
    [theme.breakpoints.up('lg')]: {
      width: "446px",
      height: "425px",
    },
  },
  map: {
    width: "310px",
    marginBottom: "1.5rem",
    [theme.breakpoints.up('lg')]: {
      width: "446px",
      height: "292px",
    },
  },
  contact: {
    marginBottom: "1rem",
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "left",
    }
  },
  address: {
    fontWeight: 600,
    fontSize: "1.2rem",
    marginLeft: "1rem",
  }
}));

const AboutSection11 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography className={classes.header} variant="h1">
                Contact Us
          </Typography>
              <Typography className={classes.details} variant="h6">
                We want to hear from you and we
                would definitely respond to you.
          </Typography>
              <Typography className={classes.contact} variant="h5">
                +234 814 643 9559
          </Typography>
              <Typography className={classes.contact} variant="h5">
                contact@vasiti.com
          </Typography>
            </Box>
            <Box className={classes.mapBoxContainer}>
              <Box className={classes.mapBox}>
                <Box>
                  <img
                    className={classes.map}
                    src="images/map.svg"
                    alt="map"
                  />
                </Box>
                <Typography style={{ marginLeft: "1rem" }}>
                  Office Address
            </Typography>
                <Typography className={classes.address}>
                  No. 3 Adenugba Street, Oregun,
                  Lagos
            </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection11
