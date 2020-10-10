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
    paddingTop: "5rem",
    marginBottom: "4rem",
    marginRight: "2rem",
  },
  details: {
    fontSize: "1.2rem",
    paddingRight: "3rem",
    paddingTop: "4rem",
    marginBottom: "1rem",
    fontWeight: 400,
    lineHeight: "1.8rem",
  },
  container: {
    paddingLeft: "2rem",
    marginBottom: "2rem",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#FFF8F3",
  },
  testimonialImage: {
    width: "6rem",
  },
})

const AboutSection10 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Typography className={classes.header} variant="h1">
          What people
          are saying about us
          </Typography>
        <img
          className={classes.testimonialImage}
          style={{ marginRight: "2rem" }}
          src="images/testimonial-image.png"
          alt="testimonial"
        />
        <Typography className={classes.details} variant="h6">
          “Shopping on Vasiti.com
          was very easy and seamless.
          The most amazing thing is
          the delivery, it’sbasically
          takes about 24hours”
          </Typography>
        <Typography className={classes.details} style={{ paddingTop: "1rem" }} variant="h6">
          UGONNA GINIGEME
          </Typography>

      </Box>
    </div>
  )
}

export default AboutSection10
