import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cn from 'classnames';

import { GET_USERS } from '../../utils/apollo/queries';
import Input from '../../components/antd/Input';

import styles from './IndexPage.module.less';

const IndexPage = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    const infoBoxClassName = cn(styles.infoBox, { [styles.loading]: loading }, { [styles.error]: error });
    return (
        <div className={styles.wrapper}>
            <div>{data && JSON.stringify(data.getUsers, null, 2)}</div>
            <div className={infoBoxClassName}>
                {loading && <span>Loading...</span>}
                {error && <span>Error occurred</span>}
            </div>
            <div className={styles.inputWrapper}>
                <span>Antd Input</span>
                <Input className={styles.input} />
            </div>
        </div>
    );
};

export default IndexPage;
