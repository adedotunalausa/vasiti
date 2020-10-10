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
    padding: "1.6rem",
  },
  details: {
    fontSize: "1rem",
    paddingTop: 0,
    padding: "2rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
  },
  container: {
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  sectionImage: {
    marginTop: "2rem",
    width: "19rem",
  }
})

const AboutSections3 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            We are keen on an
            amazing experience
        </Typography>
          <Typography className={classes.details} variant="h6">
            As a brand, we have carefully
            designed our processes to ensure
            all our customers get a fulfilling
            experience that they can’t get
            anywhere else. This is because by
            shopping or hiring services on Vasiti,
            you get unbeatable deals, excellent
            customer service that guarantees
            maximum satisfaction and you also
            help to grow a student’s business
            leading to positive economic impact.
            In the unlikely event that you do not
            like what you order on Vasiti.com,
            returns and refunds are very fast and
            as easy as ABC.
        </Typography>
        </Box>
        <img className={classes.sectionImage} src="images/lady-man-laughing.png" alt="winner-babcock" />
      </Box>
    </div>
  )
}

export default AboutSections3
