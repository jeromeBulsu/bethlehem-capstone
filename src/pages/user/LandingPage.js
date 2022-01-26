import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  useMediaQuery,
  TextField
} from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import { Carousel } from "react-bootstrap";

import landpage2 from "../../assets/image/landpage2.png";

import hands from "../../assets/image/hands.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCarousel } from "../../redux/actions/userAction";

const classes = {
  root: {
    background: (theme) => theme.palette.background.defaultLinear
  },
  carousel: {
    display: "flex"
  },
  image: {
    width: "100vw",
    height: "530px",
    position: "relative"
  },
  underline: {
    height: "3px",
    width: { laptop: "100px", mobile: "80px" },
    background: (theme) => theme.palette.primary.main
  },

  secondSection: {
    padding: {
      laptop: "45px 80px",
      mobile: "20px 40px"
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    width: "166px",
    alignItems: "center"
  },
  secondSectionText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  content: {
    marginTop: "28px",
    fontSize: {
      laptop: "15px",
      mobile: "10px"
    },
    letterSpacing: "0.1em",

    width: {
      laptop: "600px"
    }
  },

  secondSectionSVG: {
    height: {
      laptop: "200px",
      mobile: "70px"
    },

    width: {
      laptop: "290px",
      mobile: "120px"
    }
  },
  thirdSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: (theme) => theme.palette.background.about,
    padding: "45px"
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold"
  },
  forthSection: {
    paddingTop: "25px",
    paddingBottom: "47px",
    display: "flex",
    flexDirection: {
      laptop: "row",
      mobile: "column-reverse"
    },
    paddingRight: {
      laptop: "100px"
    },
    paddingLeft: {
      laptop: "80px"
    },
    justifyContent: {
      laptop: "space-between",
      mobile: "center"
    },
    alignItems: {
      laptop: "flex-start",
      mobile: "center"
    }
  },
  calendar: {
    display: "flex",
    marginTop: { laptop: "30px", mobile: "10px" }
  },
  dateBox: {
    padding: { laptop: "13px", mobile: "8px" },
    background: "blue",
    width: {
      laptop: "80px",
      mobile: "50px"
    },
    height: {
      laptop: "80px",
      mobile: "50px"
    },
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  day: {
    fontSize: {
      laptop: "50px",
      mobile: "30px"
    },
    position: "absolute",
    fontWeight: "bold"
  },
  month: {
    fontSize: {
      laptop: "15px",
      mobile: "10px"
    }
  },
  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: {
      laptop: "150px",
      mobile: "90px"
    },
    padding: 0
  },
  event: {
    fontSize: {
      laptop: "15px",
      mobile: "10px"
    },
    fontWeight: "bold"
  },
  lastSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: { laptop: "170px", tablet: "170px", mobile: "" },
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      background: `url(${landpage2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.4,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    background: "rgba(255, 255, 255, 0.8)",
    padding: { laptop: "40px 90px", tablet: "40px 90px", mobile: "30px 0px" },
    width: { laptop: "600px", tablet: "600px", mobile: "100%" },
    borderRadius: { laptop: "20px", tablet: "20px", mobile: "0" },
    borderTop: "17px solid #E8E097"
  },
  contactlogo: {
    height: "125px",
    width: "125px",
    color: (theme) => theme.palette.tertiary.main
  },
  contactFirstSection: {
    width: "200px",
    display: { laptop: "flex", tablet: "flex", mobile: "none" },
    flexDirection: "column",
    alignItems: "center"
  },
  contactForm: {
    width: { laptop: "460px", tablet: "460px", mobile: "100%" },
    display: "flex",
    marginTop: "20px",
    justifyContent: {
      laptop: "space-between",
      tablet: "space-between",
      mobile: "center"
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "230px"
  },
  textField: {
    marginBottom: "10px",
    width: "100%"
  }
};

export default function LandingPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const history = useHistory("");
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  const [day] = useState(["01", "14", "20", "22"]);
  const [month] = useState(["Jan", "Feb", "Feb", "Oct"]);
  const [event] = useState([
    "New Year's Day",
    "Valentine's Day",
    "Outreach Program",
    "Outreach Program"
  ]);

  const carouselRef = collection(db, "user", "carousel", "data");
  useEffect(() => onSnapshot(carouselRef, (item)=>{
    let carousel = [];

    item.forEach((doc) => {
      carousel.push(doc.data());

    });
    console.log(carousel)
    dispatch(setCarousel(carousel));

  }))

  return (
    <Box sx={classes.root}>
      <Helmet>
        <title>Bethlehem House of Bread</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {matches ? <HeaderMobile /> : <Header />}

      <Carousel interval={10000}>
        {user.carousel.map((item, index) => (
          <Carousel.Item>
            <Box
              variant="square"
              sx={{
                ...classes.image,
                background: `linear-gradient(
                  rgba(0,0,0,0.27),
                  rgba(0,0,0,0.27) ) ,
                  url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              alt="First slide"
            ></Box>
            <Carousel.Caption>
              <Box sx={classes.titleText}>
                <Typography
                  sx={{
                    position: "relative",
                    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
                    fontWeight: "bold"
                  }}
                  variant="h2"
                >
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </Box>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Box sx={classes.secondSection}>
        <Box sx={classes.secondSectionText}>
          <Box sx={classes.title}>
            <Typography
              variant={matches ? "h5" : "h4"}
              color="secondary"
              fontWeight="bold"
            >
              our mission
            </Typography>
            <Box sx={classes.underline}></Box>
          </Box>
          <Typography
            sx={classes.content}
            color="text.content"
            fontWeight="normal"
          >
            Pellentesque vitae viverra lacus. Fusce vestibulum justo nec lorem
            mollis, ac porta elit lacinia. Suspendisse potenti. Suspendisse
            potenti. Integer auctor mattis maximus. Etiam magna sapien, suscipit
            et felis vitae, faucibus finibus urna. Vivamus dapibus nulla nec
            hendrerit venenatis.
          </Typography>
        </Box>
        <Box>
          <Avatar
            sx={classes.secondSectionSVG}
            variant="square"
            src={hands}
          ></Avatar>
        </Box>
      </Box>
      <Box sx={classes.thirdSection}>
        <Box sx={classes.title}>
          <Typography
            variant={matches ? "h5" : "h4"}
            color="secondary"
            fontWeight="bold"
          >
            about us
          </Typography>
          <Box
            sx={{ ...classes.underline, width: matches ? "60px" : "80px" }}
          ></Box>
        </Box>
        <Typography
          sx={{ ...classes.content, textAlign: "center" }}
          color="text.content"
          fontWeight="normal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          libero libero. Phasellus dapibus nulla quis risus faucibus, et
          accumsan erat finibus. Quisque tincidunt felis nisl, vitae posuere
          diam suscipit non. Suspendisse dignissim commodo velit. Phasellus sed
          velit nibh. Duis tempor odio quis justo pulvinar, vel dapibus velit
          elementum.
        </Typography>
        <Button
          variant="contained"
          sx={classes.button}
          onClick={() => history.push("/aboutus")}
        >
          know more
        </Button>
      </Box>

      <Box sx={classes.forthSection}>
        <Grid
          container
          sx={classes.calendar}
          mobile="2"
          laptop="4"
          spacing={{ laptop: 2, mobile: 1 }}
          columns={{ mobile: 1, laptop: 6 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {day.map((item, index) => (
            <Grid item>
              <Box sx={classes.date}>
                <Box sx={classes.dateBox}>
                  <Typography color="text.calendar" sx={classes.month}>
                    {month[index]}
                  </Typography>
                  <Typography color="text.calendar" sx={classes.day}>
                    {item}
                  </Typography>
                </Box>
                <Typography sx={classes.event}>{event[index]}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={classes.title}>
          <Typography
            variant={matches ? "h5" : "h4"}
            color="secondary"
            fontWeight="bold"
          >
            events
          </Typography>
          <Box
            sx={{ ...classes.underline, width: matches ? "40px" : "60px" }}
          ></Box>
        </Box>
      </Box>
      <Box sx={classes.lastSection}>
        <Box sx={classes.contact}>
          <Typography variant="h5" fontWeight="bold" color="tertiary.main">
            HAVE SOME QUESTIONS?
          </Typography>
          <Box sx={classes.contactForm}>
            <Box sx={classes.contactFirstSection}>
              <Box sx={classes.contactlogo}>
                <TelegramIcon
                  style={{
                    height: "inherit",
                    width: "inherit",
                    color: "inherit"
                  }}
                />
              </Box>
              <Typography
                color="tertiary.main"
                fontSize="13px"
                textAlign="center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id nibh gravida, dignissim nisl vitae, semper arcu.
              </Typography>
            </Box>
            <Box sx={classes.form}>
              <TextField
                color="action"
                size="small"
                label="Enter First Name"
                InputLabelProps={{
                  style: { color: "gray", fontSize: "15px" }
                }}
                sx={classes.textField}
              />
              <TextField
                size="small"
                label="Enter Last Name"
                InputLabelProps={{
                  style: { color: "gray", fontSize: "15px" }
                }}
                color="action"
                sx={classes.textField}
              />
              <TextField
                size="small"
                label="Enter Email Address"
                InputLabelProps={{
                  style: { color: "gray", fontSize: "15px" }
                }}
                color="action"
                sx={classes.textField}
              />
              <TextField
                size="small"
                label="Enter Question or Concen..."
                multiline
                rows={4}
                InputLabelProps={{
                  style: { color: "gray", fontSize: "15px" }
                }}
                color="action"
                sx={classes.textField}
              />
              <Button
                sx={{ ...classes.button, width: "125px" }}
                variant="contained"
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
