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
    background: "#FFF8F6",
  },
  mainContainer: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2rem",
    color: "#FF5C01",
    fontWeight: 600,
    paddingTop: "4rem",
    padding: "1.6rem",
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "3rem",
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
      paddingLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
      width: "33rem",
    }
  },
  container: {
    paddingBottom: "3rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      paddingRight: "2rem",
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: "5rem",
      paddingLeft: "5rem",
      paddingTop: "1rem",
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: "7rem",
      paddingLeft: "7rem",
      paddingTop: "2rem",
      justifyContent: "space-between",
    }
  },
  sectionImage: {
    marginTop: "0.6rem",
    width: "23rem",
    [theme.breakpoints.up('lg')]: {
      width: "30rem",
    }
  },
}));

const Section1 = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography className={classes.header} variant="h1">
                We Provide The Best
                E-Commerce Experience
                & Also Empower Students

        </Typography>
              <Typography className={classes.details} variant="h6">
                Vasiti is a fast-growing brand that builds
                technology platforms and optimises the e-commerce
                supply chain to help student entrepreneurs scale
                their small businesses through selling their
                products or services easily to a larger market,
                gaining all-round support needed to scale and
                delivering optimum value to customers.
        </Typography>
            </Box>
            <img className={classes.sectionImage} src="/images/ejiro-winner.png" alt="winner-babcock" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Section1
