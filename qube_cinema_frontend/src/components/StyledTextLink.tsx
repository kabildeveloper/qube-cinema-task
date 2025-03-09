import { LinkProps } from "react-router-dom";
import { ImgHTMLAttributes } from "react";
import {StyledIcon, StyledTextLink} from "../styled/StyledTextIconLink.ts";

type Props = LinkProps & ImgHTMLAttributes<HTMLImageElement>;

const TextIconLink = ({ to, src, alt = "icon", state, children, ...linkProps }: Props) => {
    return (
        <StyledTextLink to={to} state={state} {...linkProps}>
            {src && <StyledIcon src={src} alt={alt} />}
            <span>{children}</span>
        </StyledTextLink>
    );
};

export default TextIconLink;
