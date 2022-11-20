import React from "react";

import {FileList} from "@components/scss";

const Faculties: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <div className="wrapper title_wrap">
                <div className="title">
                    УСТАНОВЧІ ДОКУМЕНТИ
                </div>

            </div>
            <FileList />
            <div className="wrapper title_wrap">
                <div className="title">
                    ПОЛОЖЕННЯ УНІВЕРСИТЕТУ
                </div>

            </div>
            <FileList />
            <div className="wrapper title_wrap">
                <div className="title">
                    НАКАЗИ ЩОДО ОРГАНІЗАЦІЇ ОСВІТНЬОГО ПРОЦЕСУ
                </div>

            </div>
            <FileList />
            <div className="wrapper title_wrap">
                <div className="title">
                    ІНКЛЮЗИВНА ОСВІТА
                </div>

            </div>
            <FileList />
            <div className="wrapper title_wrap">
                <div className="title">
                    ОСВІТНІ ПРОГРАМИ
                </div>

            </div>
            <FileList />
        </div>
    );
};

export default Faculties;
