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
      paddingRight: "2rem",
    }
  },
  container: {
    paddingLeft: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  },
}));

const AboutSection8 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            Vasiti Virtual Series
          </Typography>
          <Typography className={classes.details} variant="h6">
            VVS consists of a series of webinars,
            virtual masterclasses and virtual
            internship. It was launched in June
            2020 as a means of empowering and
            educating students during the Covid-19
            pandemic and even afterwards. So far,
            we have had a couple of highly
            successful programmes under this
            initiative.
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.header} variant="h1">
            Vasiti Career Fest
          </Typography>
          <Typography className={classes.details} variant="h6">
            This is a first-of-its-kind highly
            interactive career-empowerment
            programme for students to learn
            from the real-life experiences of
            professionals and get up-to-date
            insights from industry experts.
            The goal is to provide students
            with the knowledge, guidance and
            support needed to propel them to
            the apex of their future career. We
            have successfully hosted this event
            in a couple of Nigerian universities.
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection8
