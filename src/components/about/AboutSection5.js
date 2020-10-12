import React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// CSS Styles
const useStyles = makeStyles((theme) => ({
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
    paddingTop: "4rem",
    padding: "1.6rem",
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
    }
  },
  container: {
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  sectionImage: {
    marginTop: "2rem",
    width: "5rem",
  },
  infoBoxContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "1rem",
    justifyContent: "center",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      paddingRight: "2rem",
    }
  },
  infoBox: {
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    marginLeft: "2rem",
    marginBottom: "4rem",
    paddingLeft: "1.5rem",
    paddingTop: "1.5rem",
    border: "1px solid #EAEAEA",
    borderRadius: "16px",
    width: "310px",
    height: "425px",
  },
  infoHeading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    paddingTop: "4rem",
  },
  info: {
    color: "#4A4A4A",
    fontSize: "1.1rem",
    paddingTop: "1rem",
    paddingRight: "1.5rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
  }
}));

const AboutSection5 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Typography className={classes.header} variant="h1">
              Our Core Values
          </Typography>
            <Box className={classes.infoBoxContainer}>
              <Box className={classes.infoBox}>
                <img
                  className={classes.sectionImage}
                  src="images/vector-bag.svg"
                  alt="winner-babcock"
                />
                <Typography className={classes.infoHeading} variant="h4">
                  Professionalism
          </Typography>
                <Typography className={classes.info} variant="h6">
                  We are professionals, some short three
                  lines or more about our brand value,
                  which are professionalism, excellence
                  and friendliness
          </Typography>
              </Box>
              <Box className={classes.infoBox}>
                <img
                  className={classes.sectionImage}
                  src="images/vector-thumb.svg"
                  alt="thumbs-up"
                />
                <Typography className={classes.infoHeading} variant="h4">
                  Excellence
          </Typography>
                <Typography className={classes.info} variant="h6">
                  We are professionals, some short three
                  lines or more about our brand value,
                  which are professionalism, excellence
                  and friendliness
          </Typography>
              </Box>
              <Box className={classes.infoBox} style={{ marginBottom: 0 }}>
                <img
                  className={classes.sectionImage}
                  src="images/vector-message.svg"
                  alt="message"
                />
                <Typography className={classes.infoHeading} variant="h4">
                  Friendliness
          </Typography>
                <Typography className={classes.info} variant="h6">
                  We are professionals, some short three
                  lines or more about our brand value,
                  which are professionalism, excellence
                  and friendliness
          </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection5
