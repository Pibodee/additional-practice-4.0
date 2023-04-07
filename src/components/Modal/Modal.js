import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteUserById } from "redux/users/usersOperations";

export const Modal = ({ setIsModalOpen, id }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleYes = () => {
        setIsModalOpen(false);
        dispatch(deleteUserById(id));
        navigate('/users')
     }
    
    const handleNo = () => {
        setIsModalOpen(false)
    }
    return (
      <div>
        <p>Are you sure?</p>
        <button type="button" onClick={handleYes}>Yes!</button>
        <button type="button" onClick={handleNo}>No!</button>
      </div>
    );
}