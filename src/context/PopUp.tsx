import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import PopUp from '../components/PopUp/PopUp';

interface ChangePopUp {
  title?: string;
  description?: string;
  hasButtons?: boolean;
  handleClickPopUp?: () => Promise<void>;
  handleClosePopUp?: () => void;
}

interface PopUpContext {
  openModal: () => void;
  closeModal: () => void;
  changePopUp: ({}: ChangePopUp) => void;
}

interface PopUpProvider {
  children: ReactNode;
}

export const PopUpContext = createContext({} as PopUpContext);

export const PopUpProvider = ({ children, ...rest }: PopUpProvider) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hasButtons, setHasButtons] = useState(false);
  const [handleClickPopUp, setHandleClickPopUp] = useState({fn: async () => {}});
  const [handleClosePopUp, setHandleClosePopUp] = useState({fn: () => {}});

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    handleClosePopUp.fn();
  }, [handleClosePopUp]);

  const changePopUp = useCallback(({
    title = 'Titulo',
    description = 'Descrição',
    hasButtons = false,
    handleClickPopUp = () => {},
    handleClosePopUp = () => {}
  }) => {
      setTitle(title);
      setDescription(description);
      setHasButtons(hasButtons);
      setHandleClickPopUp({fn: handleClickPopUp})
      setHandleClosePopUp({fn: handleClosePopUp})
  }, [])

  return (
    <PopUpContext.Provider value={{
      openModal,
      closeModal,
      changePopUp,
    }}>
      {children}
      {modalOpen && <PopUp
      title={title}
      description={description}
      hasButtons={hasButtons}
      handleClickPopUp={handleClickPopUp.fn} />}
    </PopUpContext.Provider>
  )
}

function usePopUp(): PopUpContext {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error('usePopUp must be used within an PopUpContext');
  }

  return context;
}

export { usePopUp };
