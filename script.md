# 🟢 Begin

```jsx
type ButtonProps = {
  children: ReactNode,
  onClick?: () => void,
};

export default function ButtonB({ children, onClick }: ButtonProps) {
  return (
    <button className="relative" onClick={onClick}>
      <span>{children}</span>
      <span className="absolute inset-y-0 right-0"></span>
    </button>
  );
}
```

# 🟢 Step

Add our UI button:

```jsx
import { PlusIcon } from "@heroicons/react/20/solid";

<Popover.Trigger>
  <Button leading={<PlusIcon />}>New invoice</Button>
</Popover.Trigger>;
```

error, hydration. asChild.

# 🟢 Step

Try. First step always look at console. See forwardRef error. Scale out HTML to see dropdown actually rendering.

Open docs: https://beta.reactjs.org/reference/react/forwardRef.

Add with explanation. React pulls ref off so can't pass it through as a normal prop. Issue with backwards compat but React team hopes to remove forwardRef one day and just let us expose a normal ref prop.

Add it. Works.

Now type error. forwardRef is a generic.

```jsx
import { forwardRef, ReactNode } from "react";

type ButtonProps = {
  leading?: ReactNode;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { leading, className, onClick, children },
  ref
) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded bg-purple-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-500 active:bg-purple-500/90 ${className}`}
      ref={ref}
    >
      {leading && <span className="mr-0.5 -ml-0.5 h-5 w-5">{leading}</span>}
      <span>{children}</span>
    </button>
  );
});

```

# 🟢 Step

Our custom class isnt working. Take a look at DOM – none of those attrs.

Problem is we're not forwarding props. There's other props we're missing.

```tsx
type ButtonProps = {
  leading?: ReactNode;
};

export default forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & ButtonProps
>(function Button({ leading, onClick, className, children, ...rest }, ref) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded bg-purple-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-500 active:bg-purple-500/90 ${className}`}
      ref={ref}
      {...rest}
    >
      {leading && <span className="mr-0.5 -ml-0.5 h-5 w-5">{leading}</span>}
      <span>{children}</span>
    </button>
  );
});
```
