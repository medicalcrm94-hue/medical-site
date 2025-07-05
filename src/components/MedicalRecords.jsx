"use client"

import { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  User, 
  Activity, 
  Pill, 
  TestTube, 
  Heart,
  Download,
  Eye,
  Plus,
  Filter,
  Search,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const MedicalRecords = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const medicalRecords = [
    {
      id: 'REC-001',
      type: 'consultation',
      title: 'Cardiology Consultation',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-15',
      status: 'completed',
      summary: 'Routine cardiac checkup. Patient shows improvement in blood pressure control.',
      attachments: ['ECG_Report.pdf', 'Blood_Pressure_Log.pdf'],
      vitals: {
        bloodPressure: '120/80',
        heartRate: '72 bpm',
        temperature: '98.6°F'
      }
    },
    {
      id: 'REC-002',
      type: 'lab',
      title: 'Complete Blood Count',
      doctor: 'Dr. Sarah Wilson',
      date: '2024-01-10',
      status: 'completed',
      summary: 'All values within normal range. Hemoglobin levels stable.',
      attachments: ['CBC_Results.pdf'],
      results: {
        hemoglobin: '14.2 g/dL',
        whiteBloodCells: '7,200/μL',
        platelets: '250,000/μL'
      }
    },
    {
      id: 'REC-003',
      type: 'prescription',
      title: 'Medication Prescription',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-08',
      status: 'active',
      summary: 'Updated medication dosage for hypertension management.',
      medications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
        { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' }
      ]
    },
    {
      id: 'REC-004',
      type: 'imaging',
      title: 'Chest X-Ray',
      doctor: 'Dr. Robert Kim',
      date: '2024-01-05',
      status: 'completed',
      summary: 'Clear lung fields. No acute abnormalities detected.',
      attachments: ['Chest_XRay.jpg', 'Radiology_Report.pdf']
    },
    {
      id: 'REC-005',
      type: 'consultation',
      title: 'Follow-up Appointment',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-20',
      status: 'scheduled',
      summary: 'Scheduled follow-up for medication adjustment review.'
    }
  ];

  const recordTypes = [
    { id: 'all', label: 'All Records', icon: FileText },
    { id: 'consultation', label: 'Consultations', icon: User },
    { id: 'lab', label: 'Lab Results', icon: TestTube },
    { id: 'prescription', label: 'Prescriptions', icon: Pill },
    { id: 'imaging', label: 'Imaging', icon: Activity }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'active': return Activity;
      case 'scheduled': return Clock;
      case 'pending': return AlertCircle;
      default: return FileText;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'consultation': return User;
      case 'lab': return TestTube;
      case 'prescription': return Pill;
      case 'imaging': return Activity;
      default: return FileText;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'consultation': return 'bg-blue-500';
      case 'lab': return 'bg-green-500';
      case 'prescription': return 'bg-purple-500';
      case 'imaging': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredRecords = medicalRecords.filter(record => {
    const matchesFilter = activeFilter === 'all' || record.type === activeFilter;
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-blue-600" />
              Medical Records
            </h2>
            <p className="text-slate-600 mt-2">Complete medical history and documentation</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Record</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search records, doctors, or procedures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <div className="flex space-x-2">
              {recordTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeFilter === type.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Records List */}
      <div className="space-y-6">
        {filteredRecords.map((record) => {
          const TypeIcon = getTypeIcon(record.type);
          const StatusIcon = getStatusIcon(record.status);
          
          return (
            <div key={record.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${getTypeColor(record.type)}`}>
                      <TypeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{record.title}</h3>
                      <div className="flex items-center space-x-4 text-slate-600">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{record.doctor}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(record.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-slate-400">ID:</span>
                          <span className="font-mono text-sm">{record.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(record.status)}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span>{record.status.charAt(0).toUpperCase() + record.status.slice(1)}</span>
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <p className="text-slate-700 leading-relaxed">{record.summary}</p>
                </div>

                {/* Record-specific content */}
                {record.vitals && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-red-500" />
                      Vital Signs
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-600">Blood Pressure</p>
                        <p className="font-bold text-red-600">{record.vitals.bloodPressure}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-600">Heart Rate</p>
                        <p className="font-bold text-blue-600">{record.vitals.heartRate}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-600">Temperature</p>
                        <p className="font-bold text-green-600">{record.vitals.temperature}</p>
                      </div>
                    </div>
                  </div>
                )}

                {record.results && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <TestTube className="w-4 h-4 mr-2 text-green-500" />
                      Lab Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(record.results).map(([key, value]) => (
                        <div key={key} className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="font-bold text-green-600">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {record.medications && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Pill className="w-4 h-4 mr-2 text-purple-500" />
                      Medications
                    </h4>
                    <div className="space-y-3">
                      {record.medications.map((med, index) => (
                        <div key={index} className="bg-purple-50 p-4 rounded-lg flex items-center justify-between">
                          <div>
                            <p className="font-medium text-slate-800">{med.name}</p>
                            <p className="text-sm text-slate-600">{med.dosage} - {med.frequency}</p>
                          </div>
                          <Pill className="w-5 h-5 text-purple-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Attachments */}
                {record.attachments && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Attachments</h4>
                    <div className="flex flex-wrap gap-3">
                      {record.attachments.map((attachment, index) => (
                        <div key={index} className="bg-slate-100 p-3 rounded-lg flex items-center space-x-3 hover:bg-slate-200 transition-colors duration-200">
                          <FileText className="w-5 h-5 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700">{attachment}</span>
                          <div className="flex space-x-2">
                            <button className="p-1 hover:bg-slate-300 rounded">
                              <Eye className="w-4 h-4 text-slate-600" />
                            </button>
                            <button className="p-1 hover:bg-slate-300 rounded">
                              <Download className="w-4 h-4 text-slate-600" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="text-slate-600 hover:text-slate-700 font-medium flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                  <p className="text-sm text-slate-500">
                    Last updated: {new Date(record.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRecords.length === 0 && (
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600 mb-2">No Records Found</h3>
          <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default MedicalRecords;