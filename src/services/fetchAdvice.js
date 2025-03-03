export const getRandomAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) throw new Error('Error al obtener el consejo');
      
      const data = await response.json();

      return data.slip.advice; // Retornamos solo el consejo

    } catch (error) {
      
      console.error('Error al obtener el consejo:', error);
      throw error; // Propagamos el error
    }
  };