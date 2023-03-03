# Control Flow React

Minimal control flow components for React inspired by
[Solid.js](https://www.solidjs.com/tutorial/flow_show) <br> 
Has essential controls flows like 
- [For](#for)
- [Show](#show)
- [Switch](#switch)


## Installation
```sh
npm install control-flow-react
```
## Iterative control components
### For
Iterates the array provided in `each` prop and renders the `children` function.
If the array is found to be empty or falsy then `fallBack` is rendered.
> Note: 'children' will be a function what receives in each iteration item and index <br>
> eg: `(item, index) => <div> {index} - {item </div>`
```jsx
import { For } from "control-flow-react";
let stats = [
	{ name: "Argentina", trophies: 3 },
	{ name: "France", trophies: 2 },
	{ name: "Brazil", trophies: 5 }
];
return (
	<For each={stats}>
		{(country, index) => (
			<div>
				{index + 1} - {country.name} - {country.trophies}
			</div>
		)}
	</For>
);
```
```tsx
interface iForProps {
    each: any[] | undefined | null;
    children: (item: any, index: number) => any;
    emptyState?: ReactNode | string | null;
}
export declare const For: ({ each, children, emptyState }: iForProps) => ReactNode | null;
```

## Conditional control components
### Show
Conditionally render `children` or `fallBack` based on condition provided to `when`.
```jsx
import { Show } from "control-flow-react";

let loggedIn = true;
return (
	<Show when={loggedIn} fallBack={<Button>LogIn</Button>}>
		<Button>Logout</Button>
	</Show>
);
```
```tsx
interface iShowProps {
    when: boolean | number | string | any | undefined;;
    children: ReactNode | string | null;
    fallBack: ReactNode | string | null;
}
export declare const Show: ({ when, children, fallBack }: iShowProps) => ReactNode | null;
```
### Switch
Renders first matching `<Case>` if its props _**value**_ or _**values**_ matches with condition provided in _**when**_ prop to `<Switch>` and if none of them matches `fallBack` will be rendered.
> Note: Pass an array to _***values***_ props in `<Case>` to match any one among them. <br>
> `<Case>` should be direct child for `<Switch>`

```jsx
import { Switch, Case } from "control-flow-react";

let { status, err } = await fetch(url).catch()
return (
	<Switch when={status} fallBack={<div>Default Component</div>}>
		<Case value={"LoggedIn"}>
			<DashboardComponent />
		</Case>
		<Case value={"LoggedOut"}>
			<LoginComponent />
		</Case>
		{/* use values props for multiple match scenarios */}
		<Case values={["UserNotFound", "LoginError", "WrongPass"]}>
			<ErrorComponent err={err} />
		</Case>
	</Switch>
);
```
```tsx
type ConditionClause = boolean | number | string | any | undefined;
interface iSwitchProps {
    when?: ConditionClause;
    children: ReactNode;
    fallBack: string | ReactNode | null;
}
export declare const Switch: (props: iSwitchProps) => ReactNode | null;
interface iCaseProps {
    children: ReactNode;
    value?: ConditionClause;
    values?: ConditionClause[];
}
export declare const Case: ({ children }: iCaseProps) => ReactNode | null;
```