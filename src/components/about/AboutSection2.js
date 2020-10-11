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
    color: "#636363",
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

const AboutSection2 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            We focus on making
            students lives easier
        </Typography>
          <Typography className={classes.details} variant="h6">
            In addition to helping student
            entrepreneurs build businesses,
            Vasiti helps to make students’
            lives easier on campus by building
            platforms that provide on-demand
            access to their needs and also
            empowering them through innovative
            programmes.
        </Typography>
        </Box>
        <img className={classes.sectionImage} src="images/lady-writing.png" alt="winner-babcock" />
      </Box>
    </div>
  )
}

export default AboutSection2
