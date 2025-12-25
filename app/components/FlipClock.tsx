"use client";
import React from 'react';
import FlipDigit from './FlipDigit';
import styles from './FlipClock.module.css'; // This will be created/updated next

interface FlipClockProps {
    value: number;
}

const FlipClock: React.FC<FlipClockProps> = ({ value }) => {
    const digit1 = Math.floor(value / 10);
    const digit2 = value % 10;

    return (
        <div className={styles.flipClockUnit}>
            <FlipDigit value={digit1} />
            <FlipDigit value={digit2} />
        </div>
    );
};

export default FlipClock;
