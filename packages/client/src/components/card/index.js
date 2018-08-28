import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      {/* <CardMedia
        component="img"
        className={classes.media}
        height="140"
        image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        title="Contemplative Reptile"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Talnet UI Dev Server
        </Typography>
        <Typography component="p">
            抹去繁琐的Nginx配置过程,内置TalentUI 2.0 / Cloud扩展文件转发规则,支持自定义转发规则,
            一键配置Https环境,无需手动生成证书,支持多站点多端口同时调试。
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