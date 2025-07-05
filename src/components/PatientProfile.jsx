import { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Heart, 
  Activity, 
  AlertCircle,
  Edit3,
  Save,
  X
} from 'lucide-react';

const PatientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientData, setPatientData] = useState({
    personalInfo: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      dateOfBirth: '1985-03-15',
      gender: 'Female',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@email.com',
      address: '123 Oak Street, Springfield, IL 62701',
      emergencyContact: 'John Johnson - +1 (555) 987-6543'
    },
    medicalInfo: {
      bloodType: 'O+',
      height: '5\'6"',
      weight: '140 lbs',
      allergies: ['Penicillin', 'Shellfish'],
      chronicConditions: ['Hypertension', 'Type 2 Diabetes'],
      currentMedications: ['Metformin 500mg', 'Lisinopril 10mg']
    },
    insurance: {
      provider: 'Blue Cross Blue Shield',
      policyNumber: 'BC123456789',
      groupNumber: 'GRP001'
    }
  });

  const vitalSigns = [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', icon: Heart },
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', icon: Activity },
    { label: 'Temperature', value: '98.6', unit: '°F', status: 'normal', icon: Activity },
    { label: 'Oxygen Saturation', value: '98', unit: '%', status: 'normal', icon: Activity }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-blue-600" />
              </div>
              <div className="text-white">
                <h2 className="text-3xl font-bold">
                  {patientData.personalInfo.firstName} {patientData.personalInfo.lastName}
                </h2>
                <p className="text-blue-100 text-lg">Patient ID: PAT-2024-001</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Age: {new Date().getFullYear() - new Date(patientData.personalInfo.dateOfBirth).getFullYear()}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {patientData.personalInfo.gender}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Blood Type: {patientData.medicalInfo.bloodType}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
            >
              {isEditing ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Personal Information</h3>
              {isEditing && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={patientData.personalInfo.firstName}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-slate-800 font-medium">{patientData.personalInfo.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Date of Birth</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={patientData.personalInfo.dateOfBirth}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-slate-800 font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                      {new Date(patientData.personalInfo.dateOfBirth).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={patientData.personalInfo.phone}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-slate-800 font-medium flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-slate-500" />
                      {patientData.personalInfo.phone}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={patientData.personalInfo.lastName}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-slate-800 font-medium">{patientData.personalInfo.lastName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Gender</label>
                  {isEditing ? (
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  ) : (
                    <p className="text-slate-800 font-medium">{patientData.personalInfo.gender}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={patientData.personalInfo.email}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-slate-800 font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-slate-500" />
                      {patientData.personalInfo.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-600 mb-2">Address</label>
              {isEditing ? (
                <textarea
                  value={patientData.personalInfo.address}
                  rows="3"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-slate-800 font-medium flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-slate-500 mt-1" />
                  {patientData.personalInfo.address}
                </p>
              )}
            </div>
          </div>

          {/* Medical Information */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Medical Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Height</label>
                <p className="text-slate-800 font-medium">{patientData.medicalInfo.height}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Weight</label>
                <p className="text-slate-800 font-medium">{patientData.medicalInfo.weight}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-3">Allergies</label>
                <div className="flex flex-wrap gap-2">
                  {patientData.medicalInfo.allergies.map((allergy, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-3">Chronic Conditions</label>
                <div className="flex flex-wrap gap-2">
                  {patientData.medicalInfo.chronicConditions.map((condition, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-3">Current Medications</label>
                <div className="space-y-2">
                  {patientData.medicalInfo.currentMedications.map((medication, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-800 font-medium">{medication}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vital Signs & Quick Info */}
        <div className="space-y-8">
          {/* Vital Signs */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Latest Vital Signs</h3>
            <div className="space-y-4">
              {vitalSigns.map((vital, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getStatusColor(vital.status)}`}>
                      <vital.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{vital.label}</p>
                      <p className="text-sm text-slate-600">Last updated: Today</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-slate-800">
                      {vital.value}
                      <span className="text-sm font-normal text-slate-600 ml-1">{vital.unit}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Information */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Insurance Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Provider</label>
                <p className="text-slate-800 font-medium">{patientData.insurance.provider}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Policy Number</label>
                <p className="text-slate-800 font-medium">{patientData.insurance.policyNumber}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Group Number</label>
                <p className="text-slate-800 font-medium">{patientData.insurance.groupNumber}</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="font-medium">{patientData.personalInfo.emergencyContact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;