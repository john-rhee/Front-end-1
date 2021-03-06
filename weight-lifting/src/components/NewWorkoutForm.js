import React, {useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import {data} from '../data';
import {postExercise} from '../Actions';

const WorkoutWrapper = styled.div`

`;
const Form = styled.form`
width: 50%;
display: flex;
flex-direction: column;
margin: 0 auto;
`;
const Label = styled.label`
margin: 1% auto;
`;
const Input = styled.input`
margin: 1% auto;
`;
const SelectInput = styled.select`
display: block;
width: 30%;
margin: 1% auto;
`;
const Option = styled.option``;
const Button = styled.button`
width: 20%;
margin: 2% auto;
`;

const WorkOutForm = props => {
    console.log('workoutform props',props)
    const regions = Object.keys(data);
    const [exercise, setExercise] = useState({
        name: '',
        region: '',
        sets: '',
        reps: '',
        time: '',
        user_id: props.userId,
        completed: false
    });
    console.log({workout: exercise});


    const workoutChange = e => {
        console.log(e)
        setExercise({
            ...exercise, [e.target.name]: e.target.value
        });
    };


    const addWorkout = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(exercise);
        props.postExercise(exercise)
        props.history.push('/dashboard')
    };

    return (
        <WorkoutWrapper>
            <Form onSubmit={addWorkout}>
                <Label>Exercise Name:
                    <Input required type='text' name='name' value={exercise.name} onChange={workoutChange}/>
                </Label>
                <SelectInput required onChange={workoutChange} name='region'>
                    <Option>Region</Option>
                    {regions.map(region => <Option key={region} value={region}>{region.toUpperCase()}</Option>)}
                </SelectInput>
                {/* <SelectInput required onChange={workoutChange} name='exercise'>
                    <Option value=''>Exercise</Option> */}
                     {/* {regions.map(region => {
                        return Object.keys(data[region].exercises).map(exercise => {
                            return exercise.region === region ? <Option
                                value={exercise}>{data[region].exercises[exercise].exercisename}</Option> : <></>;
                        });
                    })} */}
                     {/* {exercise.region && Object.keys(data[exercise.region].exercises).map(exercise => {
                        return <Option value={exercise}>{exercise.toLowerCase().replace(/_/g, ' ')}</Option>
                    })}

                </SelectInput> */}
                <Label>Sets:
                    <Input name="sets" required type='number' min='1' max='50' onChange={workoutChange}/>
                </Label>
                 <Label>Reps:
                    <Input name="reps" required type='number' min='1'max="70" onChange={workoutChange}/>
                </Label>
                <Label>Time:
                    <Input name="time" required type='number' placeholder='In minutes' min='1' max="60" onChange={workoutChange}/>
                </Label>
                <Button type='submit'>Add</Button>
            </Form>
        </WorkoutWrapper>
    );
};

const mapStateToProps = state => {
    return {...state};
}

export default connect(mapStateToProps,{postExercise})(WorkOutForm);