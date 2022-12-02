import React from 'react';
import classes from './index.module.scss';



const subtitle = (props: React.PropsWithChildren) => {
  return <h2 className={classes.Container}>{props.children}</h2>;
};

export default subtitle;