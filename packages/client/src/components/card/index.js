import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
 wrap:{
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width:'100%',
    padding:'20px 0',
 },
  card: {

    maxWidth: 345,
    marginRight:15,
  },
  media: {
    width: 'auto',
	height: 'auto',
    maxHeight: 90,
    maxWidth: '100%',
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes,src,backgroundColor,title,content } = props;
  return (
    <Card 
    className={classes.card}>
      <div style = {{backgroundColor:backgroundColor,...styles.wrap}}>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={src}
          title=""
        />
      </div>

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Star
        </Button>
        <Button size="small" color="primary">
          Issue
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);