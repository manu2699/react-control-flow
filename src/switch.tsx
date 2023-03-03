import React from "react";
import type { ReactNode } from "react";

export type iConditionClause = boolean | number | string | any | undefined;

interface iSwitchProps {
	when?: iConditionClause;
	children: ReactNode;
	fallBack: string | ReactNode | null;
}

export const Switch = (props: iSwitchProps): ReactNode | null => {
	const { when, children, fallBack = null } = props;
	const cases = React.Children.toArray(children).filter(
		(child) => React.isValidElement(child) && child.type === Case
	);
	const successCase = cases.find((child) => {
		if (!React.isValidElement(child)) return false;
		if (child.props.values) return child.props.values.includes(when);
		return child.props.value === when;
	});
	return <>{successCase ? successCase : fallBack}</>;
};

interface iCaseProps {
	children: ReactNode;
	value?: iConditionClause;
	values?: iConditionClause[];
}

export const Case = ({ children }: iCaseProps): ReactNode | null => (
	<>{children}</>
);
