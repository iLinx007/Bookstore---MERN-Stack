import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook