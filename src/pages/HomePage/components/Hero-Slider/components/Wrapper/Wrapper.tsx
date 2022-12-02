import React from 'react';
import classes from './index.module.scss';

const wrapper = (props: React.PropsWithChildren) => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default wrapper;