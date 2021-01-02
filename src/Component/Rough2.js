import React from 'react'

const stateCapital = [
    {
        state : 'mp',
        capital :'bhopal'
    },
    {
        state : 'cg',
        capital : 'raipur'
    }
]
// const stateCapital = ['sc','cs']
const stateCapitalMap = stateCapital.map((sc)=> 
    <>
        <p> {sc.state} == {sc.capital}</p>
    </>
)
function Rough2() {
    return (
        <div>
            {stateCapitalMap}
        </div>
    )
}

export default Rough2
