

import { IconNameTypes } from "@/app/types";
import DocumentIcon from "./DocumentIcon"
import React, { FC } from "react";
import Facebook from "./Facebook";
import LogoIcon from "./Logo";
import BlackStar from "./BlackStar";
import WhiteStar from "./WhiteStar";
import MenuIcon from "./Menu";
import TwitterIcon from "./Twitter";


const Icon: FC<{ name?: IconNameTypes }> = ({ name }) => {
    switch (name) {
        case 'document':
            return <DocumentIcon />
        case 'facebook':
            return <Facebook />
        case 'logoIcon':
            return <LogoIcon />
        case 'blackStar':
            return <BlackStar />
        case 'whiteStar':
            return <WhiteStar />
            case 'menu':
                return <MenuIcon/>
                case 'twitterIcon':
                    return <TwitterIcon/>
        default:
            return null;
    }
}

export default Icon