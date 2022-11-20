import React from "react";

import {FacultiesList} from "@components/scss";

const Faculties: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <FacultiesList />
        </div>
    );
};

export default Faculties;
