import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectUser } from 'redux/users/usersSelectors';
import { fetchUserById } from 'redux/users/usersOperations';
import { useParams } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { Link } from 'react-router-dom';

const UserDetailsPage = () => {
  const [isModalOpen, toggleModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  const handleClick = () => {
    toggleModal(true);
  };

  return (
    <>
      {' '}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <img src={`${user.avatar}`} alt="User avatar" />
          <p>Email:{user.email}</p>
          <p>Tel.: {user.tel}</p>
          <p>Address: {user.address}</p>
        </div>
      )}
      <button type="button" onClick={handleClick}>
        Delete
      </button>
      <Link to="update" state={user}>
        Update
      </Link>
      {isModalOpen && <Modal setIsModalOpen={toggleModal} id={id} />}
    </>
  );
};

export default UserDetailsPage;
