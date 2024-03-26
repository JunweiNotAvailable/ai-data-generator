'use client'

import { Content } from "@google/generative-ai";
import React, { ReactNode, createContext, useContext, useState } from "react";

// Define the types for context values
interface HomeContextProps {
  promptInput: string
  setPromptInput: React.Dispatch<React.SetStateAction<string>>
  history: Content[]
  setHistory: React.Dispatch<React.SetStateAction<Content[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

// Create a context
const HomeContext = createContext<HomeContextProps | undefined>(undefined);

// Create a provider component
interface HomeStateProviderProps {
  children: ReactNode;
}

export const HomeStateProvider: React.FC<HomeStateProviderProps> = ({ children }) => {

  const [promptInput, setPromptInput] = useState('');
  const [history, setHistory] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  const props = { promptInput, setPromptInput, history, setHistory, loading, setLoading };

  return (
    <HomeContext.Provider value={props}>
      {children}
    </HomeContext.Provider>
  )
}


// Custom hook to access the context values
export const useHomeState = (): HomeContextProps => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeState must be used within an AppStateProvider');
  }

  return context;
};

