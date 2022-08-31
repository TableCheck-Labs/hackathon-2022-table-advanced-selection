import * as React from 'react';

export const createCustomContext = <ContextType, ContextName extends string>(
  contextName: ContextName
): {
  [key in `${ContextName}Context`]: React.Context<ContextType | null>;
} & {
  [key in `use${ContextName}Context`]: () => ContextType;
} => {
  const context = React.createContext<ContextType | null>(null);
  return {
    [`${contextName}Context` as const]: context,
    [`use${contextName}Context` as const]: () => {
      const contextValue = React.useContext(context);
      if (!contextValue) {
        throw new Error(`Trying to access ${contextName} outside provider!`);
      }

      return contextValue;
    }
  } as {
    [key in `${ContextName}Context`]: React.Context<ContextType | null>;
  } & {
    [key in `use${ContextName}Context`]: () => ContextType;
  };
};
