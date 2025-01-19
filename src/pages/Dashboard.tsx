import { useState } from 'react';

import userIcon from '../assets/basil-user-solid.svg';
const user = {
  name: 'John Doe',
  icon: userIcon,
  contactInfo: 'john.doe@example.com',
};

function Dashboard() {
  const [views, setViews] = useState(1000); // Initial view count

  const handleIncrementViews = () => {
    setViews(views + 1);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={user.icon} alt={user.name} className="h-12 w-12 rounded-full mr-2" />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.contactInfo}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-2">Page Views: {views}</p>
          <button onClick={handleIncrementViews} className="bg-blue-500 text-white px-3 py-1 rounded">
            +1 View
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Statistics</h3>
        <p>Total Users: 1000</p>
        <p>Revenue: $1000</p>
        {/* Add more statistics */}
      </div>
      <a href="/">Card</a>
    </div>
  );
}

export default Dashboard;