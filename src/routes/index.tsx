import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Users } from '../pages/Users';
import { GiftChallenges } from '../pages/GiftChallenges';
import { Donations } from '../pages/Donations';
import { Companies } from '../pages/Companies';
import { GiveForCause } from '../pages/GiveForCause';
import { Rewards } from '../pages/Rewards';
import { Quotes } from '../pages/Quotes';
import { Notifications } from '../pages/Notifications';
import { Privacy } from '../pages/Privacy';
import { ImpactCategories } from '../pages/ImpactCategories';
import { Cashout } from '../pages/Cashout';
import { Ngo } from '../pages/Ngo';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/gift-challenges" element={<GiftChallenges />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/give-for-cause" element={<GiveForCause />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/impact-categories" element={<ImpactCategories />} />
      <Route path="/cashout" element={<Cashout />} />
      <Route path="/ngo" element={<Ngo />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}