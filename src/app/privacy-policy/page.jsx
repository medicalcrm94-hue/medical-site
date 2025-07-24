import React from "react";
import {
  Shield,
  FileText,
  AlertCircle,
  Clock,
  Users,
  Lock,
} from "lucide-react";

export default function PrivacyPolicy() {
  const conditions = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Reporting Confidentiality",
      content:
        "The reported results and interpretation of the investigation are for the notification of the referring doctor only.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Patient Identification",
      content:
        "It is presumed that the test performed on the specimen/sample belongs to the patient named or identified. Such verification has been carried out at the collection level of samples and the reported results are restricted to the given specimen only.",
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Test Result Variability",
      content:
        "Test results depend upon quality of sample and testing method, and they may vary from lab-to-lab and/or from time-to-time for the same parameters for the same patient.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Sample Quality Requirements",
      content:
        "The result might be 'Unsatisfactory' for various technical reasons. It is expected that a fresh sample will be collected for re-examination of reporting of the same parameter.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Report Integrity",
      content: "Partial repetition of the report is not permitted/valid.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Confidentiality Protection",
      content:
        "Any disclosure, distribution or taking any action based on the content of this report by any person is prohibited.",
    },
  ];

  const additionalTerms = [
    {
      title: "Complaint Resolution",
      content:
        "Any complaints or queries regarding the authenticity of the test results should be verified within 3 / 7 days from the date of sample collection on request by the same referring clinician.",
    },
    {
      title: "Legal Limitations",
      content: "This report is not subject to use as any medico-legal purpose.",
    },
    {
      title: "Liability Disclaimer",
      content:
        "Neither LARA HEALTH CARE nor its Directors, Doctors, Officers, Employees and/or representatives are not liable for claims or damages incurred by any person or persons including the patient, as a result of interpretation/result for use of this report.",
    },
    {
      title: "Diagnostic Guidance",
      content:
        "The reported result of the investigation may not confirm the final disease. It helps/guide in reaching at a diagnosis in correlations with the clinical condition and other related investigations.",
    },
  ];
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-3 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900">
                Privacy Policy
              </h1>
              <p className="text-blue-600 mt-1">LARA HEALTH CARE</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Conditions of Reporting
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This privacy policy outlines the terms and conditions governing the
            use and interpretation of medical test results provided by LARA
            HEALTH CARE. Please review these conditions carefully.
          </p>
        </div>

        {/* Main Conditions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <div className="text-blue-600">{condition.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {condition.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Terms */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
            Additional Terms & Conditions
          </h2>

          <div className="space-y-8">
            {additionalTerms.map((term, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6 py-2">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  {term.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{term.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Important Notice
              </h3>
              <p className="text-blue-800">
                By accessing or using the services provided by LARA HEALTH CARE,
                you acknowledge that you have read, understood, and agree to be
                bound by these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-200">
            © 2024 LARA HEALTH CARE. All rights reserved.
          </p>
          <p className="text-blue-300 mt-2 text-sm">
            For any questions regarding this privacy policy, please contact your
            referring physician.
          </p>
        </div>
      </footer>
    </div>
  );
}
