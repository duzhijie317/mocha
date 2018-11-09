import React from 'react'

const personalFooter = props => (
    <div className="personalFooter">
        {props.content}
        <style jsx>{`
            .personalFooter{
                color: white;
                text-align: center;
                font-weight: 500;
            }
        `}</style>
    </div>
)

export default personalFooter