import {Icon} from "../../../components/Icon/Icon";
import styled from "styled-components";

export const ToggleTheme = () => {

    return (
        <IconButton>
            <Icon iconId={"moon"} width={"36"} height={"37"} viewBox={"0 0 25 25"} fill={"#323232"}/>
        </IconButton>
    );
}

const IconButton = styled.button `
    &:hover {
        transform: scale(1.1) rotate(10deg);
        transition: .2s;
    }
`