"use client";

import { useState } from "react";
import {
  Stethoscope,
  GraduationCap,
  Award,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  BookOpen,
  Activity,
} from "lucide-react";

const DoctorProfile = () => {
  const [doctorData] = useState({
    personalInfo: {
      name: "Dr. Michael Chen",
      title: "MD, FACC",
      specialization: "Cardiologist",
      department: "Cardiology",
      licenseNumber: "MD123456",
      phone: "+1 (555) 234-5678",
      email: "dr.chen@medicare.com",
      office: "Room 302, Cardiology Wing",
    },
    education: [
      {
        degree: "Doctor of Medicine (MD)",
        institution: "Harvard Medical School",
        year: "2008",
        location: "Boston, MA",
      },
      {
        degree: "Bachelor of Science in Biology",
        institution: "Stanford University",
        year: "2004",
        location: "Stanford, CA",
      },
    ],
    certifications: [
      "Board Certified in Cardiology",
      "Fellow of American College of Cardiology (FACC)",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)",
    ],
    experience: {
      totalYears: 15,
      currentPosition: "Senior Cardiologist",
      previousPositions: [
        "Cardiology Fellow - Mayo Clinic (2008-2011)",
        "Resident - Johns Hopkins Hospital (2011-2014)",
        "Junior Cardiologist - Medicare Hospital (2014-2018)",
      ],
    },
    statistics: {
      patientsServed: "2,500+",
      surgeries: "450+",
      rating: 4.9,
      reviews: 234,
    },
    schedule: [
      { day: "Monday", time: "8:00 AM - 5:00 PM", status: "available" },
      { day: "Tuesday", time: "8:00 AM - 5:00 PM", status: "available" },
      { day: "Wednesday", time: "8:00 AM - 2:00 PM", status: "limited" },
      { day: "Thursday", time: "8:00 AM - 5:00 PM", status: "available" },
      { day: "Friday", time: "8:00 AM - 4:00 PM", status: "available" },
      { day: "Saturday", time: "Emergency Only", status: "emergency" },
      { day: "Sunday", time: "Off", status: "off" },
    ],
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "limited":
        return "bg-yellow-100 text-yellow-800";
      case "emergency":
        return "bg-orange-100 text-orange-800";
      case "off":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Doctor Header */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12">
          <div className="flex items-center space-x-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                alt="Dr. Michael Chen"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="text-white flex-1">
              <h2 className="text-4xl font-bold mb-2">
                {doctorData.personalInfo.name}
              </h2>
              <p className="text-emerald-100 text-xl mb-3">
                {doctorData.personalInfo.title}
              </p>
              <div className="flex items-center space-x-6 mb-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {doctorData.personalInfo.specialization}
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {doctorData.experience.totalYears} Years Experience
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <span className="font-medium">
                    {doctorData.statistics.rating}
                  </span>
                  <span className="text-emerald-100">
                    ({doctorData.statistics.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-emerald-100">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{doctorData.personalInfo.office}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{doctorData.personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Professional Information */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Stethoscope className="w-6 h-6 mr-3 text-emerald-600" />
              Professional Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Department
                  </label>
                  <p className="text-slate-800 font-medium">
                    {doctorData.personalInfo.department}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    License Number
                  </label>
                  <p className="text-slate-800 font-medium">
                    {doctorData.personalInfo.licenseNumber}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Current Position
                  </label>
                  <p className="text-slate-800 font-medium">
                    {doctorData.experience.currentPosition}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Email
                  </label>
                  <p className="text-slate-800 font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-slate-500" />
                    {doctorData.personalInfo.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Office Location
                  </label>
                  <p className="text-slate-800 font-medium flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-slate-500" />
                    {doctorData.personalInfo.office}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Education
            </h3>

            <div className="space-y-6">
              {doctorData.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-xl"
                >
                  <h4 className="text-lg font-bold text-slate-800">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <div className="flex items-center space-x-4 mt-2 text-slate-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.year}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-yellow-600" />
              Certifications & Licenses
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctorData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 p-4 rounded-xl border border-yellow-200"
                >
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <p className="text-slate-800 font-medium">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-purple-600" />
              Professional Experience
            </h3>

            <div className="space-y-4">
              {doctorData.experience.previousPositions.map(
                (position, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 rounded-r-xl"
                  >
                    <p className="text-slate-800 font-medium">{position}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Statistics */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-emerald-600" />
              Statistics
            </h3>

            <div className="space-y-6">
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  {doctorData.statistics.patientsServed}
                </div>
                <p className="text-slate-600 font-medium">Patients Served</p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {doctorData.statistics.surgeries}
                </div>
                <p className="text-slate-600 font-medium">
                  Procedures Performed
                </p>
              </div>

              <div className="text-center p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-3xl font-bold text-yellow-600">
                    {doctorData.statistics.rating}
                  </span>
                </div>
                <p className="text-slate-600 font-medium">Patient Rating</p>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-blue-600" />
              Weekly Schedule
            </h3>

            <div className="space-y-3">
              {doctorData.schedule.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-xl"
                >
                  <div>
                    <p className="font-medium text-slate-800">{schedule.day}</p>
                    <p className="text-sm text-slate-600">{schedule.time}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      schedule.status
                    )}`}
                  >
                    {schedule.status.charAt(0).toUpperCase() +
                      schedule.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>

            <div className="space-y-3">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>View Patients</span>
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
