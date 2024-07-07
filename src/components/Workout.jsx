// import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout({workout}) {
    // const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['Your', 'Exercise', 'Zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}