# This is an almost working example
## It sometimes redirects infinitely, sometimes not.
## But what it does 100% of the time is to throw this error

```
Console Error

Cannot update a component (`Router`) while rendering a different component (`NotFound`). To locate the bad setState() call inside `NotFound`, follow the stack trace as described in https://react.dev/link/setstate-in-render
app/[locale]/not-found.tsx (12:22) @ NotFound

  10 |         <h1>404</h1>
  11 |         <Suspense fallback="loading">
> 12 |             {translate(locale as string, 'notFound').then((data) => <h1>{data}</h1>)}
     |                      ^
  13 |         </Suspense>
  14 |     </>
  15 | }
Call Stack
17
Hide 14 ignore-listed frame(s)
createConsoleError
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/components/errors/console-error.ts (18:39)
handleConsoleError
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/components/errors/use-error-handler.ts (30:31)
error
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/components/globals/intercept-console-error.ts (32:27)
scheduleUpdateOnFiber
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js (14486:30)
dispatchOptimisticSetState
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js (8163:13)
startTransition
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js (7840:7)
dispatch
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/components/use-action-queue.ts (45:7)
dispatchAppRouterAction
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/components/use-action-queue.ts (22:3)
<unknown>
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/app-call-server.ts (8:30)
<unknown>
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/cjs/react.development.js (1127:27)
<unknown>
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/app-call-server.ts (7:20)
Promise
[native code] (0:0)
<unknown>
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/app-call-server.ts (6:14)
callServer
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/src/client/app-call-server.ts (5:34)
action
node_modules/.pnpm/next@15.3.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-client.browser.development.js (2715:16)
NotFound
app/[locale]/not-found.tsx (12:22)
NotFound
unknown (0:0)
```

- http://localhost:3000/en/not-found 
- http://localhost:3000/en/hello