import React from 'react';

function ProjectCard() {
    const projectData = [
        {
            title: "Server Migration",
            status: "20%",
            color: "#e74a3b",
            value: "20"
        },
        {
            title: "Sales Tracking",
            status: "40%",
            color: "#f6c23e",
            value: "40"
        },
        {
            title: "Customer Database",
            status: "60%",
            color: "#4e73df",
            value: "60"
        },
        {
            title: "Payout Details",
            status: "80%",
            color: "#36b9cc",
            value: "80"
        },
        {
            title: "Account Setup",
            status: "Complete!",
            color: "#1cc88a",
            value: "100"
        }
    ];

    const Colors = [
        {
            name: "Primary",
            color: "#4e73df"
        },
        {
            name: "Success",
            color: "#1cc88a"
        },
        {
            name: "Info",
            color: "#36b9cc"
        },
        {
            name: "Warning",
            color: "#f6c23e"
        },
        {
            name: "Danger",
            color: "#e74a3b"
        },
        {
            name: "Secondary",
            color: "#858796"
        },
        {
            name: "Light",
            color: "#f8f9fc"
        },
        {
            name: "Dark",
            color: "#5a5c69"
        }
    ]
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div className="card-body">
                    {projectData.map((obj, index) => {
                        return <Project key={index} data={obj} />
                    })}

                </div>
            </div>

            <div className="row">
                {Colors.map((obj, index) => {
                    return <ColorBox key={index} data={obj} />
                })}
            </div>

        </>
    )
}

export default ProjectCard


function Project({ data }) {
    return (
        <>
            <h4 className="small font-weight-bold">{data.title}<span
                className="right-float">{data.status}</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{ width: `${data.value}%`, backgroundColor: data.color }}
                    aria-valuenow={data.value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}


function ColorBox({ data }) {
    return (<>
        <div className="col-lg-6 mb-4">
            <div className={`card shadow ${data.name === "Light" ? 'text-black' : "text-white"}`} style={{ backgroundColor: data.color }}>
                <div className="card-body">
                    {data.name}
                    <div className={`${data.name === "Light" ? 'text-black-50' : 'text-white-50'} small`}>{data.color}</div>
                </div>
            </div>
        </div>
    </>)
}