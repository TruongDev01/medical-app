import React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>I am Back only pages Layout</h2>
            {children}
        </div>
    );
}