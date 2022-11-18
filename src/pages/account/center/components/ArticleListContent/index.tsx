import { Avatar } from 'antd';
import React from 'react';
import moment from 'moment';
import styles from './index.less';

export type ApplicationsProps = {
  data: {
    content?: string;
    updatedAt?: any;
    avatar?: string;
    owner?: string;
    href?: string;
  };
};
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: { updatedAt, avatar, owner, href },
}) => (
  <div className={styles.listContent}>
    <div className={styles.description}>优加实习，给您一个五星级的简历</div>
    <div className={styles.extra}>
      <Avatar src={avatar} size="small" />
      <a href={href}>{owner}</a> 发布在 <a href={href}>greenet.js.cn/</a>
      <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;