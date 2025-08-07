'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../api/axios';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ address: '', phoneNumber: '' });

  const fetchProfile = async () => {
    try {
      const res = await api.get('/api/web-user/profile');
      setProfile(res.data);
      setForm({
        address: res.data.address || '',
        phoneNumber: res.data.phoneNumber || '',
      });
    } catch (err) {
      console.error('Error fetching profile:', err.response?.data || err);
    }
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      await api.post(
        '/api/web-user/update-profile',
        { ...form },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditMode(false);
      fetchProfile();
    } catch (err) {
      console.error('Update failed:', err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="text-blue-800 font-medium">Loading your medical profile...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header with medical theme */}
          <div className="bg-blue-700 p-6 text-white">
            <h1 className="text-2xl font-bold">Medical Profile</h1>
            <p className="text-blue-100">Manage your personal and contact information</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={profile.picture || '/default-medical-profile.png'}
                    alt={profile.name}
                    className="w-32 h-32 rounded-full border-4 border-blue-100 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
                  <p className="text-blue-600">{profile.email}</p>
                  <div className="mt-2 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {profile.points} Health Points
                  </div>
                </div>
              </div>

              {/* Profile Information */}
              <div className="flex-1">
                {!editMode ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Contact Information
                      </h3>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium text-gray-700">Address:</span> {profile.address || 'Not provided'}
                        </p>
                        <p>
                          <span className="font-medium text-gray-700">Phone:</span> {profile.phoneNumber || 'Not provided'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                        Medical Information
                      </h3>
                      <p className="text-gray-600">Your medical records and history will appear here.</p>
                    </div>

                    <button
                      onClick={() => setEditMode(true)}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit Profile
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-blue-800">Edit Profile Information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your full address"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phoneNumber}
                          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        onClick={() => setEditMode(false)}
                        className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={updateProfile}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional medical-related sections */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-medium text-blue-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Upcoming Appointments
            </h3>
            <p className="text-gray-600">You have no upcoming appointments scheduled.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-medium text-blue-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Prescription Refills
            </h3>
            <p className="text-gray-600">No prescriptions need refilling at this time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}