// import { WorkshopUseEffect } from "./use-effect";
// import { WorkshopUseRef } from "./use-ref";
// import { WorkshopUseState } from "./use-state";
// import { WorkshopUseReducer } from "./use-reducer";
// import { WorkshopUseCallback } from "./use-callback";

import { WorkshopUseLayoutEffect } from "./use-layouteffect";

// import { Greeting } from "./components/greeting";
// import { Message } from "./components/message";
// import ThemeContextProvider from "./contexts/theme-context";

export function App() {
  return (
    <>
      {/* <WorkshopUseState /> */}
      {/* <WorkshopUseEffect /> */}
      {/* <WorkshopUseRef /> */}
      {/* <WorkshopUseReducer /> */}

      {/* 
      <ThemeContextProvider>
        <Message />
        <Greeting />
      </ThemeContextProvider> */}

      {/* <WorkshopUseMemo /> */}
      {/* <WorkshopUseCallback /> */}
      <WorkshopUseLayoutEffect />
    </>
  );
}
