import {PiBookOpenTextLight} from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({book, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
    onClick={onClose}
    >
      <div
      onClick={(event) => event.stopPropagation()}
      className='w-[600px]'  
      >


      </div>
    </div>
  )
}

export default BookModal