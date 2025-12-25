"use client";
import React, { useState, useEffect } from 'react';
import styles from './CursorFollower.module.css';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={styles.cursorFollower}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        />
    );
};

export default CursorFollower;
