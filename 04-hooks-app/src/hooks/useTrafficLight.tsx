import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setlight] = useState<TrafficLightColor>('red');
    const [counterdown, setCounterdown] = useState(5)

    //efecto para el countdown
    useEffect(() => {
        if (counterdown === 0) return;

        const intervalId = setInterval(() => {
            setCounterdown((prev) => prev -1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    },[counterdown]);

    //change ligt color effect
    useEffect(() => {
        if (counterdown === 0) {
            setCounterdown(5);
            if (light === 'red') {
                setlight('green');
                return;
            }
            if (light === 'yellow') {
                setlight('red');
            }
            if (light === 'green') {
                setlight('yellow');
            }
            return;
        }
    }, [counterdown, light]);
  
    return {
        //propiedades
        light,
        counterdown,
        colors,
        
        //calculos
        percentage: (counterdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        //metodos
        
    }
}
