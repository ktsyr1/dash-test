import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, Gift, DollarSign, Building2, 
  Heart, Award, Quote, Bell, Shield, 
  BarChart3, CreditCard, Landmark
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/home', icon: Home },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Gift Challenges', href: '/gift-challenges', icon: Gift },
  { name: 'Donations', href: '/donations', icon: DollarSign },
  { name: 'Companies', href: '/companies', icon: Building2 },
  { name: 'Give for Cause', href: '/give-for-cause', icon: Heart },
  { name: 'Rewards', href: '/rewards', icon: Award },
  { name: 'Quotes', href: '/quotes', icon: Quote },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Privacy', href: '/privacy', icon: Shield },
  { name: 'Impact Categories', href: '/impact-categories', icon: BarChart3 },
  { name: 'Cashout', href: '/cashout', icon: CreditCard },
  { name: 'NGO', href: '/ngo', icon: Landmark },
];

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-600">
          <h1 className="text-xl font-bold text-white">Donaleb Admin</h1>
        </div>
        <div className="flex-grow flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-gray-100 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon
                  className="mr-3 h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}