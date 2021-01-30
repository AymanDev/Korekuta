import cn from 'classnames';
import React from 'react';

import Paragraph from '../../elements/Paragraph';

import styles from './Input.module.scss';

export interface InputProps {
    title?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, title, value, onChange, ...props }) => {
    const classNames = cn(className, styles.wrapper);
    return (
        <div className={classNames}>
            <Paragraph fontSize="16">{title}</Paragraph>
            <input className={styles.input} value={value} onChange={onChange} {...props} />
        </div>
    );
};

export default Input;
