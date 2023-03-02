import React from "react";
import type { ReactNode } from "react";

import { iConditionClause } from "./switch";

interface iIfProps {
	when: iConditionClause;
	children: ReactNode | string | null;
	fallBack: ReactNode | string | null;
}
export const If = ({ when, children, fallBack = null }: iIfProps) => {
	return <>{when ? children : fallBack}</>;
};
