import {CircularProgress} from "@mui/material";
import React from "react";

export function FullScreenLoading() {
    return (
        <div style={{ display: 'grid', width: "100%", placeItems: "center" , margin: 20}}>
            <CircularProgress />
        </div>
    );
}