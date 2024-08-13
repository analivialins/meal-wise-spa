import React from 'react';
import * as S from './style';

interface ProgressBarProps {
    minWeight: number;
    maxWeight: number;
    currentWeight: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ minWeight, maxWeight, currentWeight }) => {
    const progress = ((currentWeight - minWeight) / (maxWeight - minWeight)) * 100;

    return (
        <S.ProgressBarContainer>
            <S.Label>{minWeight}Kg</S.Label>
            <S.ProgressBarTrack>
                <S.ProgressBarFill progress={progress} />
            </S.ProgressBarTrack>
            <S.Label>{maxWeight}Kg</S.Label>
        </S.ProgressBarContainer>
    );
};

export default ProgressBar;