import * as React from 'react';

import { BackendProvider, InsightView, idRef, WorkspaceProvider } from "@gooddata/sdk-ui-all";
import tigerFactory, { ContextDeferredAuthProvider, redirectToTigerAuthentication } from "@gooddata/sdk-backend-tiger";

export default function GDDataIntegration({ workspace, dashboard, visual}) {

    const backend = tigerFactory({ hostname: "https://"+HOST }).withAuthentication(new ContextDeferredAuthProvider(redirectToTigerAuthentication));
    const visualization = idRef(visual);
    console.log(`Load React component: ${workspace}\n Dashboard: ${dashboard}\n Visual: ${visual}`);

    return (
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <div style={{height: "400px", width: "600px"}}>
                    <InsightView insight={visualization}/>
                </div>
                <p>And here goes some dashboard...</p>
            </WorkspaceProvider>
        </BackendProvider>
    );
}
