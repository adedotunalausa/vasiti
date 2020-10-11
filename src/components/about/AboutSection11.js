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
      textAlign: "center",
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
    }
  },
  container: {
    paddingLeft: "2rem",
    marginBottom: "4rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      paddingRight: "2rem",
    }
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
  },
  map: {
    width: "310px",
    marginBottom: "1.5rem",
  },
  contact: {
    marginBottom: "1rem",
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
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
    </div>
  )
}

export default AboutSection11
