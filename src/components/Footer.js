import React from 'react'
import {
  Typography,
  Box,
  TextField,
  Button,
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
    background: "#25201D",
  },
  mainContainer: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2.3rem",
    fontWeight: 600,
    paddingTop: "2rem",
    color: "#ffffff",
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
    },
    [theme.breakpoints.up('md')]: {
      width: "25rem",
      textAlign: "left",
    },
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
    [theme.breakpoints.up('sm')]: {
      textAlign: "center",
      paddingRight: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: "25rem",
      textAlign: "left",
    },
  },
  container: {
    paddingLeft: "1.5rem",
    paddingBottom: "10rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      paddingRight: "1.5rem",
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: "5rem",
      paddingLeft: "5rem",
    },
    [theme.breakpoints.up('lg')]: {
      padding: "0 7rem 10rem 7rem"
    },
  },
  BannerFormContainer: {
    [theme.breakpoints.up('md')]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row-reverse",
    }
  },
  form: {
    '& > *': {
      marginBottom: "3rem",
      width: "20rem",
      borderRadius: "8px",
      [theme.breakpoints.up('sm')]: {
        marginLeft: "10rem",
        width: "25rem",
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
      },
    },
  },
  textInput: {
    '& > *': {
      color: "#ffffff",
      borderRadius: "8px",
      fontSize: "0.8rem",
    },
  },
  button: {
    position: "absolute",
    right: "10%",
    marginTop: "0.3rem",
    width: "7rem",
    height: "2.5rem",
    color: "#242120",
    [theme.breakpoints.up('sm')]: {
      marginRight: "7.2rem",
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 0,
      right: "8.5%",
    }
  },
  banner: {
    width: "22rem",
    marginBottom: "2rem",
    [theme.breakpoints.up('sm')]: {
      marginLeft: "12rem",
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
    }
  },
  footerLinks: {
    fontSize: "0.9rem",
    marginBottom: "0.8rem",
    color: "#ffffff"
  },
  linkContainer: {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "center",
    [theme.breakpoints.up('sm')]: {
      justifyContent: "space-between",
      marginRight: "1.5rem",
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 0,
    },
  },
  linkBox1: {
    marginRight: "7rem",
    width: "7rem",
    [theme.breakpoints.up('sm')]: {
      marginRight: "3rem",
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 0,
    }
  }
}));

const AboutSection12 = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box className={classes.BannerFormContainer}>
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
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField
                    className={classes.textInput}
                    id="outlined-secondary"
                    label="Enter your email address"
                    variant="filled"
                    color="secondary"
                  />
                  <Button className={classes.button} variant="contained">SUBSCRIBE</Button>
                </form>
              </Box>
              <Box>
                <img
                  className={classes.banner}
                  src="images/subscribe-banner.svg"
                  alt="banner"
                />
              </Box>
            </Box>
            <Box className={classes.linkContainer}>
              <Box className={classes.linkBox1}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}
                  variant="h6"
                >
                  Company
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  About us
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Term of Use
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Privacy Policy
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Press & Media
          </Typography>
              </Box>
              <Box style={{ width: "7rem" }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}
                  variant="h6"
                >
                  Products
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Marketplace
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Magazine
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Seller
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Wholesale
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Services
          </Typography>
              </Box>
              <Box style={{ marginRight: "2rem", width: "11rem", }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}
                  variant="h6"
                >
                  Careers
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Become a Campus Rep
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Become a Vasiti Influencer
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Become a Campus writer
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Become an Affiliate
          </Typography>
              </Box>
              <Box style={{ width: "12rem" }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}
                  variant="h6"
                >
                  Get in touch
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Contact us
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Partner with us
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Advertise with us
          </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  Help/FAQs
          </Typography>
              </Box>
              <Box style={{ width: "15rem" }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "1.1rem", marginBottom: "1.3rem" }}
                  variant="h6"
                >
                  Join our community
          </Typography>
                <Box style={{ marginBottom: "3rem" }}>
                  <img style={{ marginRight: "0.5rem" }} src="images/fb.svg" alt="facebook" />
                  <img style={{ marginRight: "0.5rem" }} src="images/ig.svg" alt="instagram" />
                  <img style={{ marginRight: "0.5rem" }} src="images/tw.svg" alt="twitter" />
                  <img style={{ marginRight: "0.5rem" }} src="images/in.svg" alt="linkedIn" />
                </Box>
                <Typography className={classes.footerLinks} variant="h6">
                  Email Newsletter
          </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AboutSection12
