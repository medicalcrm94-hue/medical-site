"use client"

import { useState } from 'react';
import PatientProfile from './PatientProfile';
import DoctorProfile from './DoctorProfile';
import MedicalRecords from './MedicalRecords';
import { User, Stethoscope, FileText, Settings } from 'lucide-react';

const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState('patient');

  const tabs = [
    { id: 'patient', label: 'Patient Profile', icon: User },
    { id: 'doctor', label: 'Doctor Profile', icon: Stethoscope },
    { id: 'records', label: 'Medical Records', icon: FileText },
  ];

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === 'patient' && <PatientProfile />}
          {activeTab === 'doctor' && <DoctorProfile />}
          {activeTab === 'records' && <MedicalRecords />}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;