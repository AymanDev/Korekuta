import React from 'react';

import styles from './Page.module.scss';

const Page: React.FC = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
export default Page;
