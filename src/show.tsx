import React from "react";
import type { ReactNode } from "react";

import { iConditionClause } from "./switch";

interface iShowProps {
	when: iConditionClause;
	children: ReactNode | string | null;
	fallBack: ReactNode | string | null;
}
export const Show = ({
	when,
	children,
	fallBack = null
}: iShowProps): ReactNode | null => {
	return <>{when ? children : fallBack}</>;
};
