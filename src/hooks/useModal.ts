import {useAppDispatch} from '../hooks/useRedux';
import store from '../store';
import {
  openModal,
  closeModal,
  closeConfirmModal,
  openConfirm,
  SubModalPayload,
  ModalType,
} from '../store/modal.reducer';

export const useModal = (
  setValue?: React.Dispatch<React.SetStateAction<any>>,
  cleanUp?: Function,
) => {
  const dispatch = useAppDispatch();

  const openAnyModal = (modalType: ModalType, data: any) => {
    dispatch(
      openModal({
        type: modalType,
        data,
      }),
    );
  };

  const handleCloseModal = () => {
    if (setValue) {
      setValue('0');
    }
    if (cleanUp) {
      cleanUp();
    }
    dispatch(closeModal());
  };

  const handleOpenConfirmModal = ({type, data}: SubModalPayload) => {
    dispatch(openConfirm({type, data}));
  };
  const handleCloseConfirmModal = () => {
    dispatch(closeConfirmModal());
  };
  const handleCheckConfirm = () => {
    dispatch(closeConfirmModal());
  };
  const isConfirmed = () => {
    return store.getState().modal.sub.isChecked;
  };
  return {
    openAnyModal,
    handleCloseModal,
    handleOpenConfirmModal,
    handleCloseConfirmModal,
    handleCheckConfirm,
    isConfirmed,
  };
};
