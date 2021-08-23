import React from 'react'
import { Grid, Icon, makeStyles, Typography } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code'

const useStyles = makeStyles({
  stack: {
    flexWrap: 'wrap'
  }
})

const iconStyle = { fontSize: 50, magin: '.5em' }

export default function Tech() {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      component="section"
      className="stack-section"
      id="stack-section"
    >
      <Grid item container justify="center" alignItems="center">
        <CodeIcon />
        <Typography variant="h4" className="projects-heading text-white">
          <span className='font-rampart-one'>&nbsp;Hard Skills&nbsp;</span>
        </Typography>
        <CodeIcon />
      </Grid>
      <Grid
        item
        container
        justify="space-around"
        alignItems="center"
        className={classes.stack}
      >
        <Icon className="devicon-javascript-plain" style={iconStyle} />
        <Icon className="devicon-html5-plain" style={iconStyle} />
        <Icon className="devicon-css3-plain" style={iconStyle} />
        <Icon className="devicon-nodejs-plain" style={iconStyle} />
        <Icon className="devicon-react-original" style={iconStyle} />
        <Icon className="devicon-express-original" style={iconStyle} />
        <Icon className="devicon-mongodb-plain" style={iconStyle} />
        <Icon className="devicon-ruby-plain" style={iconStyle} />
        <Icon className="devicon-postgresql-plain" style={iconStyle} />
        <Icon className="devicon-rails-plain" style={iconStyle} />
        <Icon className="devicon-git-plain" style={iconStyle} />
        <Icon className="devicon-github-original" style={iconStyle} />
      </Grid>
    </Grid>
  );
}
