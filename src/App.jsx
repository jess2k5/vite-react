import React from 'react';
import UserCard from './components/usercard';
import './css/App.css';

const users = [
  {
    name: 'Jessica',
    email: 'jessica5.7.2k5@gmail.com',
    profilePic: 'https://api.dicebear.com/7.x/bottts/svg?seed=robotkid',
  },
  {
    name: 'Damon',
    email: 'damon@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'anu',
    email: 'anu@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=5',
  },
];

const App = () => {
  return (
    <div className="app-container multiple">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          profilePic={user.profilePic}
        />
      ))}
    </div>
  );
};

export default App;