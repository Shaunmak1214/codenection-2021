import { useRef, useEffect } from 'react';

const useCountDown = (date: string) => {
    const daysRef = useRef<HTMLParagraphElement | number | any>(null);
    const hoursRef = useRef<HTMLParagraphElement | number | any>(null);
    const minutesRef = useRef<HTMLParagraphElement | number | any>(null);
    const secondsRef = useRef<HTMLParagraphElement | number | any>(null);

    let interval: null | ReturnType<typeof setInterval | any> = useRef();

    const CountDownTimer = () => {
        const countDownDate: number = new Date(date).getTime();

        interval = setInterval(() => {
            const now: number = new Date().getTime();

            const distance: number = countDownDate - now;

            const calDays: number = Math.floor(
                distance / (1000 * 60 * 60 * 24),
            );
            const calHours: number = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const calMinutes: number = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const calSeconds: number = Math.floor(
                (distance % (1000 * 60)) / 1000,
            );

            if (distance < 0) {
                clearInterval(interval!.current);
            } else {
                daysRef!.current!.innerText = calDays;
                hoursRef!.current!.innterText = calHours;
                minutesRef!.current!.innerText = calMinutes;
                secondsRef!.current!.innerText = calSeconds;
            }
        }, 1000);
    };

    useEffect(() => {
        CountDownTimer();

        return () => {
            clearInterval(interval!.current);
        };
    });

    return { daysRef, hoursRef, minutesRef, secondsRef };
};

export default useCountDown;
