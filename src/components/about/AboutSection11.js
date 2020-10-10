import React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

// CSS Styles
const useStyles = makeStyles({
  header: {
    fontSize: "2rem",
    fontWeight: 600,
    paddingTop: "2rem",
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
    marginBottom: "4rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column"
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
  },
  address: {
    fontWeight: 600,
    fontSize: "1.2rem",
    marginLeft: "1rem",
  }
})

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
        <Box>
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
