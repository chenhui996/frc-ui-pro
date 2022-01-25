import { FC } from 'react';
import { SearchProps } from 'antd/es/input';
declare type InputType = 'default' | 'icon-only';
interface BaseInputProps {
    type?: InputType;
}
export declare type FRCSearchProps = SearchProps & BaseInputProps;
export declare const FRCSearch: FC<FRCSearchProps>;
export default FRCSearch;
