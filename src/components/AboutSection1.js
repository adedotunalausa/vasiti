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
    color: "#FF5C01",
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
    background: "#FFF8F6",
    marginBottom: "3rem",
  }
})

const Section1 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            Empowering Nigerian
            Student Entrepreneurs
            & Businesses
        </Typography>
          <Typography className={classes.details} variant="h6">
            Vasiti is a fast-growing brand that
            builds technology platforms that
            help student entrepreneurs scale
            their small businesses into
            sustainable businesses through
            selling students products or services
            easily and gaining all-round support
            that is needed to scale.
        </Typography>
        </Box>
        <img style={{ width: "23rem" }} src="images/ejiro-winner.png" alt="winner-babcock" />
      </Box>
    </div>
  )
}

export default Section1
