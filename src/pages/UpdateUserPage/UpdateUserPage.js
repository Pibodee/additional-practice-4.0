import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './UpdateUserPage.styled';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersOperations';

const UpdateUserPage = () => {
  const location = useLocation();

  const [name, setName] = useState(location.state.name);
  const [avatar, setAvatar] = useState(location.state.avatatr);
  const [email, setEmail] = useState(location.state.email);
  const [tel, setTel] = useState(location.state.tel);
  const [address, setAddress] = useState(location.state.address);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'avatar':
        setAvatar(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'tel':
        setTel(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      avatar,
      email,
      tel,
      address,
      id: location.state.id,
    };
    console.log(data);
    dispatch(updateUser(data));
    navigate(`/users/${location.state.id}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Avatar
        <StyledInput
          type="url"
          value={avatar}
          onChange={handleChange}
          name="avatar"
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Telephone
        <StyledInput
          type="tel"
          value={tel}
          onChange={handleChange}
          name="tel"
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        Address
        <StyledInput
          type="address"
          value={address}
          onChange={handleChange}
          name="address"
        ></StyledInput>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default UpdateUserPage;
