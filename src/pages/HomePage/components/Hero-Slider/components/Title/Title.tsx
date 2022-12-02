import React from 'react';
import classes from './index.module.scss';

const title = (props: React.PropsWithChildren) => {
  return <h1 className={classes.Container}>{props.children}</h1>;
};

export default title;