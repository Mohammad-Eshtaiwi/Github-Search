// ModalProvider.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from "react";

interface ModalState {
  isOpen: boolean;
}

interface OpenAction {
  type: "OPEN";
}

interface CloseAction {
  type: "CLOSE";
}

type ModalAction = OpenAction | CloseAction;

interface ModalContextType {
  modalState: ModalState;
  modalActions: {
    openModal: () => void;
    closeModal: () => void;
  };
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const initialModalState: ModalState = {
  isOpen: false,
};

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalState, dispatch] = useReducer<
    React.Reducer<ModalState, ModalAction>
  >(modalReducer, initialModalState);

  const modalActions = useMemo(
    () => ({
      openModal: () => {
        dispatch({ type: "OPEN" });
      },
      closeModal: () => {
        dispatch({ type: "CLOSE" });
      },
    }),
    []
  );

  const value = useMemo(
    () => ({
      modalState,
      modalActions,
    }),
    [modalState, modalActions]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModal };
