import React from "react";

export interface WithModalProps {
  visible?: boolean;
  onClickOutside?: () => void;
}

export type WithModal = <T extends WithModalProps>(
  Component: React.FC<T>
) => React.FC<WithModalProps>;

export const withModal: WithModal = <T extends WithModalProps>(
  WrapperComponent
) => {
  return ({ visible, onClickOutside, children, ...rest }) => {
    const handleDocumentClick = () => {
      onClickOutside && onClickOutside();
    };
    window.addEventListener("click", handleDocumentClick);

    const handleOnClick = e => {
      e.stopPropagation();
    };
    return (
      <WrapperComponent {...rest} onClick={handleOnClick}>
        {visible && children}
      </WrapperComponent>
    );
  };
};
