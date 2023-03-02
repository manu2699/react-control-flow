# React Control Flow

Minimal control flow components for React inspired by [Solid.js](https://www.solidjs.com/tutorial/flow_show) <br>
Has essential controls flows like If, Switch Cases for conditions and For as an iterator component


## Installation

```sh
npm install control-flow-react
```

## Iterative control components

### For
```jsx
import { For } from "control-flow-react";
let worldCups = [
	{ name: "Argentina", trophies: 3 },
	{ name: "France", trophies: 2 },
	{ name: "Brazil", trophies: 5 }
];
return (
	<For each={worldCups}>
		{(country, index) => (
			<div>
				{index + 1} - {country.name} has won {country.trophies} trophies
			</div>
		)}
	</For>
);
```

## Conditional control components

### If

```jsx
import { If } from "control-flow-react";

<If when={loggedIn} fallBack={<Button>LogIn</Button>}>
    <Button>Logout</Button>
</If>
```

### Switch
```jsx
import { Switch, Case } from "control-flow-react";

return (
	<Switch when={status} fallBack={<div>Default Component</div>}>
		<Case value={"LoggedIn"}>
			<div>Welcome</div>
		</Case>
		<Case value={"UserNotFound"}>
			<div>Please register with us.</div>
		</Case>
		<Case value={"LoggedOut"}>
			<div>Log out</div>
		</Case>
		{/* use values props for multiple match scenarios */}
		<Case values={["Loading", "loading"]}>
			<div>Loading...</div>
		</Case>
	</Switch>
);
```
