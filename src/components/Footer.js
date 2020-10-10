import React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

// CSS Styles
const useStyles = makeStyles({
  header: {
    fontSize: "2.3rem",
    fontWeight: 600,
    paddingTop: "4rem",
    color: "#ffffff",
  },
  details: {
    fontSize: "1rem",
    paddingRight: "4rem",
    paddingTop: "1rem",
    marginBottom: "3rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
    color: "#ffffff",
  },
  container: {
    paddingLeft: "1.5rem",
    marginBottom: "4rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    background: "#25201D",
  },
  banner: {
    width: "22rem",
  }
})

const AboutSection12 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            Be a  member
            of our community <span role="img" aria-label="celebration"> 🎉 </span>
          </Typography>
          <Typography className={classes.details} variant="h6">
            We’d make sure you’re always first to
            know what’s happening on Vasiti—thus,
            the world.
          </Typography>
        </Box>
        <Box>
          <img
            className={classes.banner}
            src="images/subscribe-banner.svg"
            alt="banner"
          />
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection12
