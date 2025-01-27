

import { IconNameTypes } from "@/app/types";
import DocumentIcon from "./DocumentIcon"
import React, { FC } from "react";
import Facebook from "./Facebook";
import LogoIcon from "./Logo";
import BlackStar from "./BlackStar";
import WhiteStar from "./WhiteStar";
import MenuIcon from "./Menu";
import TwitterIcon from "./Twitter";
import InstagramIcon from "./Instagram";
import SidebarIcon from "./Side";
import CirclesIcon from "./Circles";
import ThumbIcon from "./Thumb";


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
            return <MenuIcon />
        case 'twitterIcon':
            return <TwitterIcon />
        case 'instagramIcon':
            return <InstagramIcon />
        case 'sidebarIcon':
            return <SidebarIcon />
            case 'circlesIcon':
            return <CirclesIcon />
            case 'thumbIcon':
                return <ThumbIcon />
        default:
            return null;
    }
}

export default Icon