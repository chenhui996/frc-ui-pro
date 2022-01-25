import { FC } from 'react';
import { FRCInputProps } from './input';
import { FRCSearchProps } from './search';
export declare type FrcInputComponent = FC<FRCInputProps> & {
    Search: FC<FRCSearchProps>;
};
declare const TransInput: FrcInputComponent;
export default TransInput;
