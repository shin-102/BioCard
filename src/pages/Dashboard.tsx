import React, { useState, useEffect } from 'react';

import Center from '../assets/basil-house.svg'
import Customize from '../assets/basil-user-phone.svg'
import Metric from '../assets/basil-chart-pie.svg';
import Cog from '../assets/basil-cog-setting.svg'
import Return from '../assets/basil-arrow-right-outline.svg';

import userIcon from '../assets/basil-user-solid.svg';

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    title: '',
    number: '',
    address: '',
  });
 
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);
  // ? review this
  const handleChange = (field: any, value: any) => {
    setUserData({
      ...userData,
      [field]: value,
    });

    localStorage.setItem('userData', JSON.stringify({ ...userData, [field]: value }));
  };

  return (
    <main className="bg-zinc-400 min-h-screen p-4">
      <article className="flex items-center justify-between mb-4">
        <div className='flex items-center gap-11'>
          <img src={Center} alt="Center Tab" className='bg-white p-5 rounded-2xl'/>
          <img src={Customize} alt="Customisation Tab" className='bg-white p-5 rounded-2xl'/>
          <img src={Metric} alt="Tracking Tab" className='bg-white p-5 rounded-2xl'/>
          <img src={Cog} alt="Settings Tab" className='bg-white p-5 rounded-2xl'/>
        </div>
        {/*//* NAV - RIGHT SIDE - RETURN  */}
        <a href="/" className='bg-white p-5 rounded-2xl justify-self-end'><img src={Return} alt="Return Tab" className='rotate-180 w-12 menu-icon' /></a>
      </article>

      <article className="bg-white p-5 rounded-2xl shadow-md flex gap-5">
        <section className='bg-[#F99] flex items-center justify-center p-5 rounded-2xl'>
          <img src={userIcon} alt="User" />
        </section>

        <section className='bg-[#F99] grid grid-cols-2 items-center gap-3 p-5 rounded-2xl'>

          {/* //* FULL NAME FIELD CHANGE */}
          <label>Full Name</label>
          <input type="text" title='Full Name' placeholder='Your name'
          value={userData.fullName} 
          onChange={(e) => handleChange('fullName', e.target.value)}
          className='w-full border-[#757575] border-1 rounded p-3'
          />

          {/* //* FULL NAME FIELD CHANGE */}
          <label>Title / Role</label>
          <input type="text" title='Title' placeholder='Your current role'
          value={userData.title} 
          onChange={(e) => handleChange('title', e.target.value)}
          className='w-full border-[#757575] border-1 rounded p-3'
          />

          {/* //* FULL NAME FIELD CHANGE */}
          <label>Phone Number</label>
          <input type="text" title='Number' placeholder='Your number'
          value={userData.number} 
          onChange={(e) => handleChange('number', e.target.value)}
          className='w-full border-[#757575] border-1 rounded p-3'
          />

          {/* //* FULL NAME FIELD CHANGE */}
          <label>Email</label>
          <input type="text" title='Email' placeholder='Your email'
          value={userData.email} 
          onChange={(e) => handleChange('email', e.target.value)}
          className='w-full border-[#757575] border-1 rounded p-3'
          />

          {/* //* FULL NAME FIELD CHANGE */}
          <label>Address</label>
          <input type="text" title='Location' placeholder='Your location'
          value={userData.address} 
          onChange={(e) => handleChange('address', e.target.value)}
          className='w-full border-[#757575] border-1 rounded p-3'
          />
        </section>
      </article>
    </main>
  );
}

export default Dashboard;