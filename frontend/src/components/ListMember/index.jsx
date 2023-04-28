/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

export default function ListMember({ name }) {
  return (
    <li>
      <Link to="/">
        <IoIosArrowForward />
        {' '}
        {name}
      </Link>
    </li>
  );
}
