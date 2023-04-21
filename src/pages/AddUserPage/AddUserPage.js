import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './AddUsersPage.styled';
import { useState } from 'react';
import { AddUser } from 'redux/users/usersOperations';

const initialState = {
  name: '',
  avatar: '',
  email: '',
  tel: '',
  address: '',
};

const AddUserPage = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = await dispatch(AddUser(data)).unwrap();
    console.log(newUser);
    setData(initialState);
    navigate(`/users/${newUser.id}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          value={data.name}
          name="name"
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Avatar
        <StyledInput
          type="url"
          value={data.avatar}
          name="avatar"
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Telephone
        <StyledInput
          type="tel"
          value={data.tel}
          name="tel"
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Address
        <StyledInput
          type="address"
          value={data.address}
          name="address"
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default AddUserPage;
