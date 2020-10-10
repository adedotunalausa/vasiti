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
    paddingTop: "4rem",
  },
  details: {
    fontSize: "1rem",
    paddingRight: "4rem",
    paddingTop: "1rem",
    marginBottom: "4rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
  },
  container: {
    paddingLeft: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column"
  },
  eventImage: {
    width: "19rem",
    marginBottom: "2rem",
  },
})

const AboutSection7 = () => {
  const classes = useStyles()

  return (
    <div>
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
        <Box>
          <img
            className={classes.eventImage}
            src="images/event1.png"
            alt="event1"
          />
          <Box>
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
    </div>
  )
}

export default AboutSection7
