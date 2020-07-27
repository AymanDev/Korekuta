import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export interface WithLinkProps {
    to: string;
}
export const withLink = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLinkProps> => {
    return ({ to, children, ...rest }: PropsWithChildren<WithLinkProps>) => {
        return (
            <Link to={to}>
                <Component {...(rest as P)}>{children}</Component>
            </Link>
        );
    };
};
