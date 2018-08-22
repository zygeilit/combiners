import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProjectIcon from '@material-ui/icons/PersonalVideoTwoTone';
import InfoIcon from '@material-ui/icons/InfoTwoTone';
import CustomIcon from '@material-ui/icons/PaletteTwoTone';
import GeneralIcon from '@material-ui/icons/WbSunnyTwoTone';
import WhiteListIcon from '@material-ui/icons/SecurityTwoTone';
import LogIcon from '@material-ui/icons/WebAssetTwoTone';
import DomainIcon from '@material-ui/icons/PublicTwoTone';
const mainList = [
  {
    id: 0,
    primary: '所有项目',
    icon: ProjectIcon
  },
  {
    id: 1,
    primary: '通用规则',
    icon: GeneralIcon
  },
  {
    id: 2,
    primary: '白名单',
    icon: WhiteListIcon
  },
  {
    id: 3,
    primary: '自定义',
    icon: CustomIcon
  },
  {
    id: 4,
    primary: '域名设置',
    icon: DomainIcon
  },
]
const otherList = [
  {
    id: 5,
    primary: '日志',
    icon: LogIcon
  },
  {
    id: 6,
    primary: '关于',
    icon: InfoIcon
  }]

export class ListRender extends PureComponent {
  handleClick = (id) => () => this.props.handleClick(id)
  render() {
    return <div>
      {
        this.props.list.map(key => {
          return <ListItem onClick={this.handleClick(key.id)} key={key.id} button>
            <ListItemIcon>
              <key.icon />
            </ListItemIcon>
            <ListItemText primary={key.primary} />
          </ListItem>
        })
      }
    </div>
  }
}
export class MainListItems extends PureComponent {
  render() {
    const { handleChangeIndex } = this.props
    return <ListRender handleClick={handleChangeIndex} list={mainList} />
  }
}
export class OtherListItems extends PureComponent {
  render() {
    const { handleChangeIndex } = this.props
    return <ListRender handleClick={handleChangeIndex} list={otherList} />
  }
}

