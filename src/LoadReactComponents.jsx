import * as React from 'react';

export default function GDDataIntegration() {
    React.useEffect(() => {
        const loadGoodDataComponents = async () => {
            const [
              { BackendProvider, LoadingComponent, InsightView, idRef },
              { Dashboard },
            ] = await Promise.all([
              import("@gooddata/sdk-ui-all"),
              import("@gooddata/sdk-ui-dashboard"),
            ]);
      
            setComponents({
              BackendProvider,
              LoadingComponent,
              InsightView,
              idRef,
              Dashboard,
            });
          };
      
          loadGoodDataComponents();
    }, []);

    return null;
}
