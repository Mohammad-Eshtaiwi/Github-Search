function WithContextProvider(
  Component,
  ContextProvider,
  contextProps,
  options = {
    passComponentPropsToProviders: false,
  }
) {
  const { passComponentPropsToProviders } = options;
  return function WithContextProviderComponent(props) {
    const { children, ...componentPropsWithoutChildren } = props;
    return (
      <ContextProvider
        {...{
          ...contextProps,
          ...(passComponentPropsToProviders
            ? componentPropsWithoutChildren
            : {}),
        }}
      >
        <Component {...props} />
      </ContextProvider>
    );
  };
}

export default WithContextProvider;
