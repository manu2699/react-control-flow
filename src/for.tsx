import React from "react";
import type { ReactNode } from "react";

interface iForProps<T> {
	each: T[] | undefined | null;
	children: (item: T, index: number) => any;
	emptyState?: ReactNode | string | null;
}
export const For = <T,> ({
	each,
	children,
	emptyState = null
}: iForProps<T>): ReactNode | null => {
	return (
		<>
			{each && Array.isArray(each) && each.length > 0
				? each.map((item: T, index: number) => children(item, index))
				: emptyState}
		</>
	);
};
