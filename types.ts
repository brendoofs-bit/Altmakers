import React from 'react';

export interface InsightResult {
  title: string;
  description: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  delay: string;
}