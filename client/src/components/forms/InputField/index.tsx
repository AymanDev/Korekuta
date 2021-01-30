import { FieldConfig, useField } from 'formik';
import React from 'react';

import FieldView, { InputProps } from '../../Input/Input';

export type Props = { className?: string } & InputProps & FieldConfig;
const InputField: React.FC<Props> = ({ className, ...props }) => {
    const [field] = useField(props);
    return <FieldView className={className} {...props} {...field} />;
};

export default InputField;
