import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { isMobile } from "react-device-detect";

import headshot from "../assets/headshot.jpg";
const width = window.innerWidth;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    marginRight: isMobile ? width * 0.05 : width * 0.15,
    marginLeft: isMobile ? width * 0.05 : width * 0.15
  },
  image: {
    width: isMobile ? width * 0.4 : width * 0.14,
    height: isMobile ? width * 0.4 : width * 0.14,
    borderRadius: 200
  },
  textBlock: {
    marginBottom: isMobile ? "8%" : "2%"
  },
  projectBlock: {
    marginBottom: "2%"
  },
  title: {
    fontSize: 24,
    fontWeight: 600
  },
  header: {
    fontSize: 42,
    fontWeight: 600,
    marginTop: "1%",
    marginBottom: "3%"
  }
}));

const SocialData = [
  { icon: <TwitterIcon />, url: "https://twitter.com/AdamKang18" },
  { icon: <EmailIcon />, url: "mailto:adamkang95@gmail.com" },
  { icon: <GitHubIcon />, url: "https://github.com/akang1995" },
  { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/adamkang/" }
];

const TextData = [
  {
    text:
      "👋🏼 hey there, my name is Adam and I'm the co-founder of biteschool - a mobile app that lets you learn valuable skills and concepts on the go, from your phone."
  },
  {
    text:
      "👨🏻‍💻 previously, I was an early employee at Darkstore (software dev + strategy & finance) and spent 3 years prior to that in investment banking at J.P. Morgan advising software and internet companies on M&A and capital raising."
  },
  {
    text:
      "🔥 self taught programmer. I'm passionate about continuous education and don't believe there will be a day where we won't need to learn anything new."
  },
  {
    text:
      "💯 outside of biteschool, I love shipping micro saas ideas, dabbling in e-commerce, reading about tech, managing my equities portfolio, improving my short game and watching soccer."
  },
  {
    text: (
      <p>
        🗯 let's connect! I'd love to chat
        <text style={{ color: "red" }}> micro saas</text>,
        <text style={{ color: "red" }}> startup strategy</text>,
        <text style={{ color: "red" }}> edtech</text>,
        <text style={{ color: "red" }}> react/react native</text> or sports.
      </p>
    )
  },
  {
    text: "🇨🇦 ubc grad, spending time between vancouver & sf."
  }
];

const ProjectData = [
  {
    name: "biteschool",
    url:
      "https://apps.apple.com/app/id1526501493?fbclid=IwAR2LxUdyAoroZ_tJVejTcEpDCz62mShfZMnM1GKYlpvfQ4_xYQy9eKO_uNg",
    description:
      " a mobile learning app that teaches relevant skills through bite-sized lessons"
  }
];

// const headshot = require("../assets/headshot.jpg");

export const About = () => {
  const classes = useStyles();
  const TextBlock = ({ text }) => (
    <div className={classes.textBlock}>{text}</div>
  );

  const ProjectBlock = ({ name, url, description }) => (
    <div className={classes.projectBlock}>
      <a
        href={url}
        style={{
          cursor: "pointer",
          color: "red",
          fontWeight: 600,
          textDecoration: "none"
        }}
      >
        {name}
      </a>
      :{description}
    </div>
  );

  const HeaderText = ({ text }) => (
    <Grid item xs={12}>
      <div className={classes.header}>{text}</div>
    </Grid>
  );

  const Title = ({ text }) => (
    <Grid item xs={12}>
      <div className={classes.title}>{text}</div>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <HeaderText text="adam kang" />
        <Grid container>
          <img src={headshot} alt="Italian Trulli" className={classes.image} />
        </Grid>
        <Grid
          container
          xs={7}
          lg={2}
          style={{
            padding: isMobile ? "5%" : "1%",
            marginTop: isMobile ? "4%" : "2%",
            marginBottom: isMobile ? "4%" : "0%"
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {SocialData.map(({ icon, url }) => (
            <a href={url} style={{ cursor: "pointer", color: "#4a4a4a" }}>
              {icon}
            </a>
          ))}
        </Grid>
        <Title text="about" />
        <Grid item xs={12}>
          {TextData.map(({ text }) => (
            <TextBlock text={text} />
          ))}
        </Grid>
        <Title text="projects" />
        <Grid item xs={12}>
          {ProjectData.map(({ name, url, description }) => (
            <ProjectBlock name={name} url={url} description={description} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
