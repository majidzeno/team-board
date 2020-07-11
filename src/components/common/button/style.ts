/** @format */

import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	/* justify-content: space-around; */
	width: 100%;
	background-color: ${({ theme }) => theme.background};
	height: 100vh;
`;
const BUTTON_MODIFIERS = {
	success: ({ theme }: { theme: any }) => `
        background-color: ${theme.status.successColor};
        &:hover {
            background-color: ${theme.status.successHoverColor};
            font-size: ${theme.buttonTextSizeOnHover};
        }
        &:focus {
            outline: 1px solid ${theme.status.successHoverColor};
            outline-offset: 3px;
        }
        &:active {
            background-color: ${theme.status.successActiveColor};
            box-shadow: -8px -8px 16px ${theme.status.successActiveColor},
                8px 8px 16px ${theme.status.successColor};
        }
    `,
	error: ({ theme }: { theme: any }) => `
        background-color: ${theme.status.errorColor};
        &:hover {
            background-color: ${theme.status.errorHoverColor};
            font-size: ${theme.buttonTextSizeOnHover};
        }
        &:focus {
            outline: 1px solid ${theme.status.errorHoverColor};
            outline-offset: 3px;
        }
        &:active {
            background-color: ${theme.status.errorActiveColor};
            box-shadow: -8px -8px 16px ${theme.status.errorActiveColor},
                8px 8px 16px ${theme.status.errorColor};
        }
    `,
	warning: ({ theme }: { theme: any }) => `
    background-color: ${theme.status.warningColor};
    &:hover {
        background-color: ${theme.status.warningHoverColor};
        font-size: ${theme.buttonTextSizeOnHover};
    }
    &:focus {
        outline: 1px solid ${theme.status.warningHoverColor};
        outline-offset: 3px;
    }
    &:active {
        background-color: ${theme.status.warningActiveColor};
        box-shadow: -8px -8px 16px ${theme.status.warningActiveColor},
            8px 8px 16px ${theme.status.warningColor};
    }
`,
};

export const BaseButton = styled.button`
	border: none;
	color: ${({ theme }) => theme.textColorPrimary};
	width: 185px;
	text-align: center;
	padding: 12px 24px;
	font-size: ${({ theme }) => theme.buttonTextSize};
	font-family: ${({ theme }) => theme.primaryFontRegular};
	cursor: pointer;
`;

export const PrimaryButtonWrapper = styled(BaseButton)<{ [x: string]: any }>`
	background-color: ${({ theme }) => theme.primaryColor};
	box-shadow: -8px -8px 16px #e0e0e0, 8px 8px 16px rgba(0, 83, 128, 0.4);
	border-radius: 10px;
	transition: ${({ theme }) => theme.componentTransition}
	&:hover {
		background-color: ${({ theme }) => theme.primaryHoverColor};
		font-size: ${({ theme }) => theme.buttonTextSizeOnHover};
	}
	&:focus {
		outline: 1px solid ${({ theme }) => theme.primaryColor};
		box-shadow: -8px -8px 16px #e0e0e0, 8px 8px 16px rgba(0, 83, 128, 0.4);
		outline-offset: 3px;
	}
	&:active {
		background-color: ${({ theme }) => theme.primaryActiveColor};
		font-size: ${({ theme }) => theme.buttonTextSizeOnHover};
		box-shadow: -8px -8px 16px rgba(0, 207, 248, 0.22),
			8px 8px 16px rgba(0, 153, 184, 0.38);
	}
	&:disabled {
		background-color: ${({ theme }) => theme.primaryDisabledColor};
		box-shadow: -4px -4px 12px rgba(222, 218, 218, 0.3),
			4px 4px 12px rgba(85, 93, 99, 0.3);
		cursor: not-allowed;
		color: ${({ theme }) => theme.textColorDisabled};
		font-size: ${({ theme }) => theme.buttonTextSize};
	}
	${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
