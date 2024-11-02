import React from 'react';
import { Shield, FileText, AlertCircle } from 'lucide-react';

export function Privacy() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Privacy Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage privacy and data protection settings</p>
      </div>

      <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-indigo-600" />
            <div className="ml-3 flex-1">
              <h3 className="text-lg font-medium text-gray-900">Data Protection</h3>
              <p className="mt-2 text-sm text-gray-500">
                Configure how user data is collected, stored, and processed
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="data-collection"
                      name="data-collection"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="data-collection" className="font-medium text-gray-700">
                      Enable Data Collection
                    </label>
                    <p className="text-gray-500">Allow collection of user activity data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start">
            <FileText className="h-6 w-6 text-indigo-600" />
            <div className="ml-3 flex-1">
              <h3 className="text-lg font-medium text-gray-900">Privacy Policy</h3>
              <p className="mt-2 text-sm text-gray-500">
                Update and manage the privacy policy document
              </p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Edit Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-indigo-600" />
            <div className="ml-3 flex-1">
              <h3 className="text-lg font-medium text-gray-900">Data Retention</h3>
              <p className="mt-2 text-sm text-gray-500">
                Configure data retention policies
              </p>
              <div className="mt-4">
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                  <option>180 days</option>
                  <option>1 year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}