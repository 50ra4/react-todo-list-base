import React from 'react';
import { Link } from 'react-router-dom';

function TopPage() {
  return (
    <main>
      <h2>TopPage</h2>
      <div>TopPage component</div>
      <ul>
        <li>
          <Link to="/contact">Go to Contact Page!</Link>
        </li>
        <li>
          <Link to="/tasks/new">Go to TaskInput Page!</Link>
        </li>
      </ul>
    </main>
  );
}

export default TopPage;
