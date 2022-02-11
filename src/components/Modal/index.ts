import { FC } from 'react'
import Modal, { FRCModalProps } from './modal';
import { Confirm, Info, Warning, Error, Success } from './methods';
import { Modal as AntdModal, ModalFuncProps } from 'antd'
import { FRCMethodProps } from './methods/confirm'


export type FRCModalComponent = FC<FRCModalProps> & {
    confirm: FC<FRCMethodProps>;
    info: FC<FRCMethodProps>;
    warning: FC<FRCMethodProps>;
    success: FC<FRCMethodProps>;
    error: FC<FRCMethodProps>;
    destroyAll: () => void;
    // useModal: () => void;
}


const TransModal = Modal as FRCModalComponent
TransModal.confirm = Confirm
TransModal.info = Info
TransModal.warning = Warning
TransModal.success = Success
TransModal.error = Error
TransModal.destroyAll = AntdModal.destroyAll
// TransModal.useModal = useModalTest


export default TransModal
