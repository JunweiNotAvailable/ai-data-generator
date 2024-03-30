'use client'

import React, { ReactNode, createContext, useContext, useState } from "react";
import { instruction, sampleResponse } from "../utils/constants";
import { Content } from "@google/generative-ai";

// Define the types for context values
interface DataContextProps {
  generatingStep: number
  setGeneratingStep: React.Dispatch<React.SetStateAction<number>>
  dataContent: string
  setDataContent: React.Dispatch<React.SetStateAction<string>>
}

// Create a context
const DataContext = createContext<DataContextProps | undefined>(undefined);

// Create a provider component
interface DataStateProviderProps {
  children: ReactNode;
}

export const DataStateProvider: React.FC<DataStateProviderProps> = ({ children }) => {

  const [generatingStep, setGeneratingStep] = useState(0);
  const [dataContent, setDataContent] = useState('');

  const props = { generatingStep, setGeneratingStep, dataContent, setDataContent };

  return (
    <DataContext.Provider value={props}>
      {children}
    </DataContext.Provider>
  )
}


// Custom hook to access the context values
export const useDataState = (): DataContextProps => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataState must be used within an AppStateProvider');
  }

  return context;
};

