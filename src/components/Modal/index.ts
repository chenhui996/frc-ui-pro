import { FC } from 'react'
import FRCModal, { FRCModalProps } from './modal';
import { Confirm, Info, Warning, Error } from './methods';
import { Modal, ModalFuncProps } from 'antd'

export type FRCModalComponent = FC<FRCModalProps> & {
    confirm: (e: ModalFuncProps) => void;
    info: (e: ModalFuncProps) => void;
    warning: (e: ModalFuncProps) => void;
    error: (e: ModalFuncProps) => void;
    destroyAll: () => void;
    useModal: () => void;
}

const TransModal = FRCModal as FRCModalComponent
TransModal.confirm = Confirm
TransModal.info = Info
TransModal.warning = Warning
TransModal.error = Error
TransModal.destroyAll = Modal.destroyAll
TransModal.useModal = Modal.useModal


export default TransModal
