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
  productImage: {
    width: "16rem",
    height: "15rem",
    borderRadius: "8px",
    marginBottom: "2rem",
  },
  mask: {
    width: "16rem",
    height: "15rem",
    position: "absolute",
    background: "#000000 60%",
    borderRadius: "8px",
    opacity: 0.6,
  },
  productName: {
    color: "#FFFFFF",
    position: "absolute",
    fontWeight: 600,
    width: "7rem",
    marginLeft: "3rem",
    marginTop: "5.5rem",
    zIndex: 5,
  }
})

const AboutSection6 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.header} variant="h1">
            Our Products
          </Typography>
          <Typography className={classes.details} variant="h6">
            We’ve built world-class technology products with an amazing user
            experience
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.productName} variant="h6">
            Vasiti
            Marketplace
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product1.svg"
            alt="winner-babcock"
          />
        </Box>
        <Box>
          <Typography className={classes.productName} variant="h6">
            Vasiti
            Service Hub
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product2.svg"
            alt="winner-babcock"
          />
        </Box>
        <Box>
          <Typography className={classes.productName} variant="h6">
            Vasiti
            Seller Centre
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product3.svg"
            alt="winner-babcock"
          />
        </Box>
        <Box>
          <Typography className={classes.productName} variant="h6">
            Vasiti
            Wholesale Centre
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product4.svg"
            alt="winner-babcock"
          />
        </Box>
        <Box>
          <Typography className={classes.productName} variant="h6">
            Vasiti
            Magazine
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product5.svg"
            alt="winner-babcock"
          />
        </Box>
        <Box>
          <Typography className={classes.productName} variant="h6">
            Vasiti
            Events
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product6.svg"
            alt="winner-babcock"
          />
        </Box>
        <Box>
          <Typography className={classes.productName} style={{ marginTop: "2rem" }} variant="h6">
            Vasiti Virtual
            Internship
            Programme (VVIP)
          </Typography>
          <Box className={classes.mask} />
          <img
            className={classes.productImage}
            src="images/product7.png"
            alt="winner-babcock"
          />
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection6
