import { ReactNode } from "react";

export interface BtnProps {
    text: string | ReactNode;
    onClick?: (e?: any) => void;
    className?: string;
    prefix?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
} 

export type IconNameTypes = 
| 'document'
| 'facebook'
| 'logoIcon'
| 'blackStar'
| 'whiteStar'
| 'menu'
| 'twitterIcon'