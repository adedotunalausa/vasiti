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
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      paddingRight: "2rem",
    }
  },
  sectionImage: {
    marginTop: "2rem",
    width: "19rem",
  }
}));

function AboutSection4() {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            We are for student
            focused businesses
          </Typography>
          <Typography className={classes.details} variant="h6">
            For businesses interested in the
            tudent community, Vasiti puts them
            front of thousands of students so
            y can engage better with students
            increase awareness for their
            products or services.
          </Typography>
        </Box>
        <img
          className={classes.sectionImage}
          src="images/men-sitting.png"
          alt="winner-babcock" />
      </Box>
    </div>
  )
}

export default AboutSection4
