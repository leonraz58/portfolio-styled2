import {Icon} from "../../../components/Icon/Icon";
import styled from "styled-components";
import {useEffect, useState} from "react";

export const ToggleTheme = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const tablet = 768;
    const mobile = 576;

    const handleWindowResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    const calcSize = () => {
        return width > mobile ? (width > tablet ? '37' : '37') : '18';
    }

    return (
        <IconButton>
            {/*<Icon iconId={"moon"} width={"36"} height={"37"} viewBox={"0 0 25 25"} fill={"#323232"}/>*/}
            <Icon iconId={"moon"} width={calcSize()} height={calcSize()} viewBox={"0 0 25 25"} fill={"#323232"}/>
        </IconButton>
    );
}

const IconButton = styled.button`
    margin-top: 5px;

    &:hover {
        transform: scale(1.1) rotate(10deg);
        transition: .2s;
    }
`