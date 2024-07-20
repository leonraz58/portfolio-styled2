import styled from "styled-components";
import circle from "./../assets/images/sectiontitlecircle.svg"

export const SectionTitle = styled.h2`
    color: black;
    font-size: 32px;
    text-align: center;
    position: relative;

    &::before {
        content: url(${circle});
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -35px;
    }
`