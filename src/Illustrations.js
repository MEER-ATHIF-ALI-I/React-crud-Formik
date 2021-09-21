import React from 'react';

const illustrationsdata = [
    {
        title: "Illustrations",
        imgsrc: "illustration01.svg"
    },
    {
        title: "More Illustrations",
        imgsrc: "illustration02.svg"
    }
]
function Illustrations() {
    return (
        <>
            {
                illustrationsdata.map((obj, index) => {
                    return <FinalIllustrations key={index + 1} data={obj} />
                })
            }

        </>
    )
}

export default Illustrations;

function FinalIllustrations({ data }) {
    return (<>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{data.title}</h6>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }}
                        src={data.imgsrc} alt="illustration" />
                </div>
            </div>
        </div>
    </>)
}