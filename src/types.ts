import React from 'react';

export interface LocalizedString {
  es: string;
  pt: string;
}

export interface Lecture {
  id: number;
  title: LocalizedString;
  content?: {
    es: React.ComponentType<any>;
    pt: React.ComponentType<any>;
  };
}

export interface Module {
  module: number;
  title: LocalizedString;
  lectures: Lecture[];
}
