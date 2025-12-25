"use client";
import React, { useEffect, useState } from 'react';
import styles from './FlipDigit.module.css';

interface FlipDigitProps {
    value: number;
}

const FlipDigit: React.FC<FlipDigitProps> = ({ value }) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [previousValue, setPreviousValue] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (value !== currentValue) {
            setPreviousValue(currentValue);
            setCurrentValue(value);
            setIsFlipping(true);
            const timer = setTimeout(() => {
                setIsFlipping(false);
            }, 600); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [value, currentValue]);
    
    return (
        <div className={styles.flipDigit}>
            <div className={styles.card}>
                <div className={styles.cardFace}>
                    <div className={styles.top}>{currentValue}</div>
                    <div className={styles.bottom}>{currentValue}</div>
                </div>
                <div className={`${styles.cardFace} ${styles.cardFaceFlip}`}>
                    <div className={`${styles.topFlip} ${isFlipping ? styles.flipping : ''}`}>{previousValue}</div>
                    <div className={`${styles.bottomFlip} ${isFlipping ? styles.flipping : ''}`}>{currentValue}</div>
                </div>
            </div>
        </div>
    );
};

export default FlipDigit;
