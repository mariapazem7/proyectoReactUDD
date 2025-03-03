import {  useEffect, useState, } from 'react';
import { getRandomAdvice } from '../services/fetchAdvice';

export const useAdvice = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        setLoading(true);
        const adviceData = await getRandomAdvice(); 
        setAdvice(adviceData);
      } catch (error) {
        setError('No se pudo cargar el consejo');
      } finally {
        setLoading(false);
      }
    };

    getAdvice();
  }, []); 

  return [advice, loading, error];
};