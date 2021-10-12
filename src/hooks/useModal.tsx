import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  initialState: boolean;
}

const useCNModal = ({ initialState }: Props) => {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleModalOpen, handleModalClose };
};

useCNModal.propTypes = {
  initialState: PropTypes.bool,
};

export default useCNModal;
