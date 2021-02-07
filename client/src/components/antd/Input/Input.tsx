import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import cn from 'classnames';

import styles from './Input.module.less';

export type Props = AntdInputProps;
const Input: React.FC<Props> = ({ className, ...rest }) => {
    const inputClassName = cn(styles.input, className);
    return <AntdInput className={inputClassName} {...rest} />;
};

export default Input;
