import { FC } from 'react';
import { FRCModalProps } from './modal';
import { ModalFuncProps } from 'antd';
export declare type FRCModalComponent = FC<FRCModalProps> & {
    confirm: (e: ModalFuncProps) => void;
    info: (e: ModalFuncProps) => void;
    warning: (e: ModalFuncProps) => void;
    error: (e: ModalFuncProps) => void;
    destroyAll: () => void;
    useModal: () => void;
};
declare const TransModal: FRCModalComponent;
export default TransModal;
