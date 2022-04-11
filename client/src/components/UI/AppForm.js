import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AppForm = (props) => {
  const [groupId, setGroupId] = useState();
  const [description, setDescription] = useState();
  const [room, setRoom] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const handleChange = (event) => {
    setGroupId(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefult();
    const meeting = {
      groupId: groupId,
      meetingStart: `${startDate} ${startTime}`,
      meetingEnd: `${endDate} ${endTime}`,
      meetingRoom: room,
      meetingDescription: description,
    };
    console.log(groupId);
    // props.addMeeting();
  };

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Group</Form.Label>
        <Form.Select
          onChange={handleChange}
          aria-label='Default select example'
        >
          <option>Select group</option>
          {props.groups.map((group) => {
            return (
              <option key={`group-${group.id}-key`} value={group.id}>
                {group.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Start:</Form.Label>
        <Form.Control
          type='date'
          placeholder='Meeting start'
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
        <Form.Control
          type='time'
          placeholder='Meeting start'
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>End:</Form.Label>
        <Form.Control
          type='date'
          placeholder='Meeting end'
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
        <Form.Control
          type='time'
          placeholder='Meeting end'
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Room:</Form.Label>
        <Form.Control
          type='text'
          placeholder='Room'
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Group>

      <Button onSubmit={submitHandler} variant='primary'>
        Submit
      </Button>
    </Form>
  );
};

export default AppForm;
