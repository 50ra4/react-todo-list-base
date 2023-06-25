import React from 'react';
import { Link } from 'react-router-dom';

function TopPage() {
  return (
    <main>
      <h2>TopPage</h2>
      <div>TopPage component</div>
      <ul>
        <li>
          <Link to="/tasks/new">add new task</Link>
        </li>
      </ul>
    </main>
  );
}

export default TopPage;
