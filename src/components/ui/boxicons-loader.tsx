"use client";

import React from "react";

export function BoxiconsLoader() {
    return (
        <>
            <link rel="preconnect" href="https://unpkg.com" />
            <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
                media="print"
                onLoad={(e) => {
                    e.currentTarget.media = "all";
                }}
            />
            <noscript>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
            </noscript>
        </>
    );
}
