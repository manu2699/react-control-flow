import React from "react";
import type { ReactNode } from "react";

interface iForProps {
	each: any[] | undefined | null;
	children: (item: any, index: number, sourceArray: any[]) => any;
	emptyState?: ReactNode | string | null;
}
export const For = ({
	each,
	children,
	emptyState = null
}: iForProps): ReactNode | null => {
	return (
		<>
			{each && Array.isArray(each) && each.length > 0
				? each.map((item: any, index: number, each: any[]) => children(item, index, each))
				: emptyState}
		</>
	);
};
