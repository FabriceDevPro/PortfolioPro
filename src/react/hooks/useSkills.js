import { useContext } from 'react';
import { SkillsContext } from '@/react/context/SkillsContext'; // Assurez-vous que le chemin d'import est correct

export const useSkills = () => useContext(SkillsContext);
