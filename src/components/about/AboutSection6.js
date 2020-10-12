import React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

// CSS Styles
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1240,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
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
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
    },
  },
  details: {
    fontSize: "1rem",
    paddingRight: "4rem",
    paddingTop: "1rem",
    marginBottom: "4rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
      paddingRight: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.125rem",
    },
  },
  container: {
    paddingLeft: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      paddingRight: "5rem",
      paddingLeft: "5rem",
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: "7rem",
      paddingLeft: "7rem",
    },
  },
  productContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "2rem",
      flexDirection: "row",
    }
  },
  productImage: {
    width: "16rem",
    height: "15rem",
    borderRadius: "8px",
    marginBottom: "2rem",
    marginRight: "2rem",
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
}));

const AboutSection6 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
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
            <Box className={classes.productContainer}>
              <Box>
                <Typography className={classes.productName} variant="h6">
                  Vasiti
                  Marketplace
          </Typography>
                <Box className={classes.mask} />
                <img
                  className={classes.productImage}
                  src="images/product1.svg"
                  alt="market-place"
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
                  alt="service-hub"
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
                  alt="seller-centre"
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
                  alt="wholesale-centre"
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
                  src="images/product5.png"
                  alt="magazine"
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
                  src="images/product6.png"
                  alt="events"
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
                  src="images/product7.svg"
                  alt="internship-programme"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection6
